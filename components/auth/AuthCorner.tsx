"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth/provider";

/** Small sign-in state shown on library and course pages. Renders
 *  nothing in local mode. */
export function AuthCorner() {
  const { enabled, user, signOut } = useAuth();
  if (!enabled) return null;

  return (
    <div className="flex items-center gap-3 text-[12px] text-body-tertiary">
      {user ? (
        <>
          <span>{user.email}</span>
          <button
            type="button"
            onClick={() => void signOut()}
            className="font-bold uppercase tracking-chrome text-body-secondary hover:text-aubergine"
          >
            Sign out
          </button>
        </>
      ) : (
        <Link
          href="/login"
          className="font-bold uppercase tracking-chrome text-body-secondary hover:text-aubergine"
        >
          Sign in
        </Link>
      )}
    </div>
  );
}
