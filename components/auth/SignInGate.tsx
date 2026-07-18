"use client";

import Link from "next/link";

/** Shown in place of gated module content for signed-out visitors. */
export function SignInGate({ nextPath }: { nextPath: string }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-body surface-cream">
      <div className="w-full max-w-md border border-gold bg-cream-light px-9 py-10 text-center">
        <div className="mb-4 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
          Build Your Marketing Foundation
        </div>
        <h1 className="text-2xl font-bold tracking-tight">
          Sign in to continue.
        </h1>
        <p className="mt-3 text-[14px] leading-relaxed text-body-secondary">
          The course intro is open to everyone. From Module 1 on, your
          answers save to your account, so this part needs a sign-in first.
        </p>
        <Link
          href={`/login?next=${encodeURIComponent(nextPath)}`}
          className="mt-6 inline-block border border-aubergine bg-aubergine px-6 py-3 text-[12px] font-bold uppercase tracking-chrome text-cream transition-colors hover:bg-transparent hover:text-aubergine"
        >
          Sign in with your email
        </Link>
        <p className="mt-4 text-[12px] text-body-tertiary">
          No password. We send a sign-in link to your inbox.
        </p>
      </div>
    </div>
  );
}
