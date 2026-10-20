"use client";

import Link from "next/link";
import { BuyButton } from "@/components/course/BuyButton";

/**
 * Shown in place of gated module content for signed-out visitors.
 *
 * Signing in is the right answer only for someone who already bought
 * the course. A visitor who has not is the commonest case on this
 * screen, and a sign-in form helps them not at all, so the course is
 * offered here too whenever it is on sale.
 */
export function SignInGate({
  nextPath,
  buy,
}: {
  nextPath: string;
  buy?: { price?: string; checkoutUrl?: string };
}) {
  const onSale = Boolean(buy?.checkoutUrl);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-body surface-cream">
      <div className="w-full max-w-md rounded-3xl border border-subtle bg-cream-light shadow-lift px-9 py-10 text-center">
        <div className="mb-4 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
          Build Your Marketing Foundation
        </div>
        <h1 className="text-2xl font-bold tracking-tight">
          {onSale ? "The intro is open to everyone." : "Sign in to continue."}
        </h1>
        <p className="mt-3 text-[14px] leading-relaxed text-body-secondary">
          {onSale
            ? "From Module 1 on, the course comes with the course. If you have already bought it, sign in with the email you paid with."
            : "The course intro is open to everyone. From Module 1 on, your answers save to your account, so this part needs a sign-in first."}
        </p>
        {onSale ? (
          <div className="mt-6">
            <BuyButton checkoutUrl={buy?.checkoutUrl} price={buy?.price} />
          </div>
        ) : null}
        <Link
          href={`/login?next=${encodeURIComponent(nextPath)}`}
          className={`${onSale ? "mt-3" : "mt-6"} inline-block rounded-[14px] border border-aubergine px-6 py-3 text-[12px] font-bold uppercase tracking-chrome transition-colors ${
            onSale
              ? "text-aubergine hover:bg-aubergine hover:text-cream"
              : "bg-aubergine text-cream hover:bg-transparent hover:text-aubergine"
          }`}
        >
          {onSale ? "I already bought it" : "Sign in with your email"}
        </Link>
        <p className="mt-4 text-[13.5px] text-body-tertiary">
          No password. We send a sign-in link to your inbox.
        </p>
      </div>
    </div>
  );
}
