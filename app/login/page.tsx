"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth/provider";

export default function LoginPage() {
  const { enabled, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || sending) return;
    setSending(true);
    setError(null);
    const next =
      new URLSearchParams(window.location.search).get("next") ?? "/";
    const redirectTo = `${window.location.origin}${next}`;
    const message = await signIn(email.trim(), redirectTo);
    setSending(false);
    if (message) setError(message);
    else setSent(true);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-body surface-cream">
      <div className="w-full max-w-md border border-gold bg-cream-light px-9 py-10">
        <div className="mb-4 text-center text-[10px] font-bold uppercase tracking-eyebrow text-gold">
          Build Your Marketing Foundation
        </div>

        {!enabled ? (
          <>
            <h1 className="text-center text-2xl font-bold tracking-tight">
              Sign-in isn't set up yet.
            </h1>
            <p className="mt-3 text-center text-[14px] leading-relaxed text-body-secondary">
              This build is running in local mode. Your work still saves in
              this browser.
            </p>
          </>
        ) : sent ? (
          <>
            <h1 className="text-center text-2xl font-bold tracking-tight">
              Check your email.
            </h1>
            <p className="mt-3 text-center text-[14px] leading-relaxed text-body-secondary">
              The sign-in link is on its way to{" "}
              <em className="accent-serif">{email}</em>. Open it on this
              device and you'll land back where you left off.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-center text-2xl font-bold tracking-tight">
              Sign in with your email.
            </h1>
            <p className="mt-3 text-center text-[14px] leading-relaxed text-body-secondary">
              No password. We send a link to your inbox, and your work saves
              to your account from then on.
            </p>
            <form onSubmit={onSubmit} className="mt-6">
              <label className="block">
                <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-eyebrow text-body-secondary">
                  Email
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-ink/20 bg-cream px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-body-tertiary focus:border-gold"
                />
              </label>
              {error ? (
                <p className="mt-3 text-[13px] text-rust">{error}</p>
              ) : null}
              <button
                type="submit"
                disabled={sending}
                className="mt-4 w-full border border-aubergine bg-aubergine px-6 py-3 text-[12px] font-bold uppercase tracking-chrome text-cream transition-colors hover:bg-transparent hover:text-aubergine disabled:opacity-60"
              >
                {sending ? "Sending" : "Send the sign-in link"}
              </button>
            </form>
          </>
        )}
      </div>
      <Link
        href="/"
        className="mt-6 text-[12px] font-bold uppercase tracking-chrome text-body-tertiary hover:text-aubergine"
      >
        Back to the library
      </Link>
    </div>
  );
}
