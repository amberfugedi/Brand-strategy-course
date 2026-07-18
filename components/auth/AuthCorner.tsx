"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth/provider";

/** Small sign-in state shown on library and course pages. Renders
 *  nothing in local mode. */
export function AuthCorner({ dark = false }: { dark?: boolean }) {
  const { enabled, user, signOut } = useAuth();
  if (!enabled) return null;

  const muted = dark ? "text-on-dark-muted" : "text-body-tertiary";
  const action = dark
    ? "text-gold hover:text-cream"
    : "text-body-secondary hover:text-aubergine";

  return (
    <div className={`flex items-center gap-3 text-[12px] ${muted}`}>
      {user ? (
        <>
          <span>{user.email}</span>
          <button
            type="button"
            onClick={() => void signOut()}
            className={`font-bold uppercase tracking-chrome ${action}`}
          >
            Sign out
          </button>
        </>
      ) : (
        <Link
          href="/login"
          className={`font-bold uppercase tracking-chrome ${action}`}
        >
          Sign in
        </Link>
      )}
    </div>
  );
}
