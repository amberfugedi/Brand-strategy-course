// Grants course access when Stripe says someone paid.
//
// The buyer usually has no account yet at this point, so the grant is
// written against the email that paid; they can sign in before or after
// buying and the app matches on it. Keeps STRIPE_WEBHOOK_SECRET and the
// Supabase service role key server-side.

import { createHmac, timingSafeEqual } from "node:crypto";

// Which course a payment buys comes from Stripe, not from here: set
// course_id in the payment link's or checkout session's metadata and it
// arrives on the event. Course two then needs a payment link, not a
// deploy. DEFAULT_COURSE_ID covers links created before this existed.
const DEFAULT_COURSE_ID = "foundation";
// Stripe's own tolerance for replayed deliveries.
const TOLERANCE_SECONDS = 300;

export default async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
  if (!SUPABASE_URL || !SERVICE_KEY || !WEBHOOK_SECRET) {
    console.error("stripe-webhook: missing env configuration");
    return json({ error: "server not configured" }, 500);
  }

  // Must be the raw bytes. Parsing first breaks the signature.
  const raw = await request.text();
  const signature = request.headers.get("stripe-signature") || "";

  const verified = verify(raw, signature, WEBHOOK_SECRET);
  if (!verified.ok) {
    // 400 tells Stripe not to bother retrying: a bad signature will
    // never become a good one.
    console.warn(`stripe-webhook: rejected (${verified.reason})`);
    return json({ error: verified.reason }, 400);
  }

  let event;
  try {
    event = JSON.parse(raw);
  } catch {
    return json({ error: "malformed body" }, 400);
  }

  try {
    if (event.type === "checkout.session.completed" ||
        event.type === "checkout.session.async_payment_succeeded") {
      await grant(event.data.object, SUPABASE_URL, SERVICE_KEY);
    } else if (event.type === "charge.refunded" ||
               event.type === "charge.dispute.created") {
      await revoke(event.data.object, SUPABASE_URL, SERVICE_KEY);
    }
  } catch (err) {
    // A 500 makes Stripe retry, which is what we want for a transient
    // Supabase failure. The unique index keeps the retry from double
    // granting.
    console.error(`stripe-webhook: ${event.type} failed`, err);
    return json({ error: "grant failed" }, 500);
  }

  return json({ received: true }, 200);
};

/** Stripe's scheme: sha256 hmac over "<timestamp>.<raw body>". */
function verify(raw, header, secret) {
  const parts = Object.fromEntries(
    header.split(",").map((p) => {
      const i = p.indexOf("=");
      return [p.slice(0, i), p.slice(i + 1)];
    }),
  );
  const timestamp = parts.t;
  const sent = parts.v1;
  if (!timestamp || !sent) return { ok: false, reason: "malformed signature header" };

  // Without this an attacker could replay a genuine old payload forever.
  const age = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
  if (!Number.isFinite(age) || age > TOLERANCE_SECONDS) {
    return { ok: false, reason: "timestamp outside tolerance" };
  }

  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${raw}`, "utf8")
    .digest("hex");

  const a = Buffer.from(expected, "utf8");
  const b = Buffer.from(sent, "utf8");
  // timingSafeEqual throws on a length mismatch, so check that first.
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return { ok: false, reason: "signature mismatch" };
  }
  return { ok: true };
}

async function grant(session, url, key) {
  if (session.payment_status && session.payment_status !== "paid") return;

  const email = (
    session.customer_details?.email ||
    session.customer_email ||
    ""
  ).trim().toLowerCase();
  if (!email) throw new Error("no email on the checkout session");

  const courseId = (session.metadata?.course_id || "").trim() || DEFAULT_COURSE_ID;
  if (!session.metadata?.course_id) {
    console.warn(
      `stripe-webhook: ${session.id} carried no course_id metadata, ` +
      `falling back to ${DEFAULT_COURSE_ID}`,
    );
  }

  const row = {
    email,
    course_id: courseId,
    status: "active",
    stripe_customer_id: typeof session.customer === "string" ? session.customer : null,
    stripe_checkout_session_id: session.id,
    granted_at: new Date().toISOString(),
    revoked_at: null,
  };

  // Upsert on (email, course_id) so a repurchase after a refund turns
  // access back on rather than colliding.
  const res = await fetch(
    `${url}/rest/v1/entitlements?on_conflict=email,course_id`,
    {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify(row),
    },
  );

  // A replayed delivery hits the unique index on the session id. That is
  // the idempotency working, not a failure.
  if (res.status === 409) {
    console.log(`stripe-webhook: ${session.id} already granted`);
    return;
  }
  if (!res.ok) throw new Error(`supabase ${res.status}: ${await res.text()}`);
  console.log(`stripe-webhook: granted ${courseId} to ${email}`);
}

async function revoke(charge, url, key) {
  const email = (charge.billing_details?.email || charge.receipt_email || "")
    .trim()
    .toLowerCase();
  if (!email) return;

  // A charge does not carry the session's metadata, so fall back to the
  // default. With more than one course this wants the checkout session
  // looked up by payment_intent to find which one was refunded.
  const courseId = (charge.metadata?.course_id || "").trim() || DEFAULT_COURSE_ID;

  const res = await fetch(
    `${url}/rest/v1/entitlements?email=eq.${encodeURIComponent(email)}&course_id=eq.${courseId}`,
    {
      method: "PATCH",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ status: "refunded", revoked_at: new Date().toISOString() }),
    },
  );
  if (!res.ok) throw new Error(`supabase ${res.status}: ${await res.text()}`);
  console.log(`stripe-webhook: revoked ${courseId} for ${email}`);
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
