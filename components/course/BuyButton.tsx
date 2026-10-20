"use client";

import { useAuth } from "@/lib/auth/provider";

/**
 * The way out of the academy to wherever the course is sold.
 *
 * `buyUrl` is normally the sales page on the marketing site, which is
 * the one place that holds the pitch and the price. It can equally be
 * a Stripe payment link, for a course sold without a page of its own.
 * Either way this app never creates a checkout session, which is why
 * there is no Stripe secret key anywhere in the codebase.
 *
 * Renders nothing without `buyUrl`. A button that goes nowhere, or a
 * price that no longer matches what is charged, is worse than no
 * button at all.
 */
export function BuyButton({
  buyUrl,
  price,
  label = "Get the course",
  variant = "solid",
}: {
  buyUrl?: string;
  price?: string;
  label?: string;
  variant?: "solid" | "outline";
}) {
  const { user } = useAuth();
  if (!buyUrl) return null;

  // Entitlements key on the email that paid, so paying with one
  // address and signing in with another locks a buyer out of what
  // they bought. Prefilling closes the commonest way into that, but
  // `prefilled_email` is a Stripe parameter: on a sales page it would
  // be a stray query string, and on some hosts a 404. So it is only
  // added when the destination is Stripe, and when it is not, the
  // "sign in with the email you paid with" line does that work
  // instead, on the paywall and again on /login after the purchase.
  const toStripe = /(^|\.)stripe\.com\//.test(buyUrl);
  const href =
    toStripe && user?.email
      ? `${buyUrl}${buyUrl.includes("?") ? "&" : "?"}prefilled_email=${encodeURIComponent(user.email)}`
      : buyUrl;

  const base =
    "inline-block rounded-[14px] px-6 py-3 text-center text-[13px] font-bold uppercase tracking-chrome transition-colors";
  const skin =
    variant === "solid"
      ? "border border-aubergine bg-aubergine text-cream hover:bg-transparent hover:text-aubergine"
      : "border border-aubergine text-aubergine hover:bg-aubergine hover:text-cream";

  return (
    <a href={href} className={`${base} ${skin}`}>
      {price ? `${label} · ${price}` : label}
    </a>
  );
}
