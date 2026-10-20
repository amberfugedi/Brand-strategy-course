/**
 * Exercise the Stripe webhook the way Stripe will: a signed raw body,
 * with the Supabase call intercepted so nothing is written anywhere.
 *
 * This is the money path, and every way it fails is quiet. A wrong
 * signature check grants nobody access and Stripe just keeps retrying;
 * a missing lowercase makes the entitlement unmatchable by the account
 * that paid for it. Neither shows up in a page you can look at.
 *
 * No dependencies and no network: run `npm run check:webhook` before
 * any deploy that touches the function.
 */
import { createHmac } from "node:crypto";
import handler from "../netlify/functions/stripe-webhook.mjs";

const SECRET = "whsec_test_secret";
process.env.SUPABASE_URL = "https://example.supabase.co";
process.env.SUPABASE_SERVICE_ROLE_KEY = "service-key";
process.env.STRIPE_WEBHOOK_SECRET = SECRET;

let captured = null;
globalThis.fetch = async (url, init) => {
  captured = { url, body: JSON.parse(init.body), method: init.method };
  return new Response("", { status: 201 });
};

const sign = (raw, secret = SECRET, t = Math.floor(Date.now() / 1000)) =>
  `t=${t},v1=${createHmac("sha256", secret).update(`${t}.${raw}`, "utf8").digest("hex")}`;

const post = (raw, sig) =>
  handler(new Request("https://x/api/stripe/webhook", {
    method: "POST", headers: { "stripe-signature": sig }, body: raw,
  }));

const event = (over = {}) => JSON.stringify({
  type: "checkout.session.completed",
  data: { object: {
    id: "cs_test_123", payment_status: "paid", customer: "cus_1",
    customer_details: { email: "Buyer@Example.COM" },
    metadata: { course_id: "foundation" }, ...over,
  } },
});

let fails = 0;
const check = (name, cond, extra = "") => {
  console.log(`${cond ? "ok  " : "FAIL"}  ${name}${cond ? "" : "  " + extra}`);
  if (!cond) fails++;
};

// 1. a genuine delivery grants
let raw = event();
let res = await post(raw, sign(raw));
check("valid signature accepted", res.status === 200, `got ${res.status}`);
check("email lowercased", captured?.body.email === "buyer@example.com", JSON.stringify(captured?.body.email));
check("course from metadata", captured?.body.course_id === "foundation");
check("session id recorded", captured?.body.stripe_checkout_session_id === "cs_test_123");
check("status active", captured?.body.status === "active");
check("upsert on conflict", String(captured?.url).includes("on_conflict=email,course_id"));

// 2. a forged signature is refused and not retried
captured = null;
res = await post(raw, sign(raw, "whsec_wrong"));
check("forged signature rejected 400", res.status === 400, `got ${res.status}`);
check("nothing written on forgery", captured === null);

// 3. a replayed old payload is refused
captured = null;
res = await post(raw, sign(raw, SECRET, Math.floor(Date.now() / 1000) - 3600));
check("stale timestamp rejected", res.status === 400, `got ${res.status}`);

// 4. an unpaid session grants nothing
captured = null;
raw = event({ payment_status: "unpaid" });
res = await post(raw, sign(raw));
check("unpaid session grants nothing", res.status === 200 && captured === null);

// 5. a refund revokes
captured = null;
raw = JSON.stringify({ type: "charge.refunded", data: { object: {
  billing_details: { email: "Buyer@Example.COM" }, metadata: { course_id: "foundation" } } } });
res = await post(raw, sign(raw));
check("refund marks revoked", captured?.body.status === "refunded", JSON.stringify(captured?.body));
check("refund targets the buyer", String(captured?.url).includes("buyer%40example.com"));

console.log(fails ? `\n${fails} FAILED` : "\nall webhook checks passed");
process.exit(fails ? 1 : 0);
