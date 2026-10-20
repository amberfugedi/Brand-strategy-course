"use client";

import { useAuth } from "@/lib/auth/provider";

/**
 * The one way to buy the course.
 *
 * Checkout is a Stripe payment link rather than a session this app
 * creates, which is why there is no secret key anywhere in the
 * codebase: the link is configured in Stripe, carries `course_id` in
 * its metadata, and the webhook reads that back to decide what was
 * bought. A second course needs a second link, not a deploy.
 *
 * Renders nothing without `checkoutUrl`. Access is granted against the
 * email that paid, so a buy button that goes nowhere, or a price that
 * no longer matches the link, is worse than no button at all.
 */
export function BuyButton({
  checkoutUrl,
  price,
  label = "Get the course",
  variant = "solid",
}: {
  checkoutUrl?: string;
  price?: string;
  label?: string;
  variant?: "solid" | "outline";
}) {
  const { user } = useAuth();
  if (!checkoutUrl) return null;

  // Entitlements key on the email that paid, so someone who pays with
  // a different address than they sign in with gets nothing until it
  // is fixed by hand. Prefilling closes the commonest way into that.
  const href = user?.email
    ? `${checkoutUrl}${checkoutUrl.includes("?") ? "&" : "?"}prefilled_email=${encodeURIComponent(user.email)}`
    : checkoutUrl;

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
