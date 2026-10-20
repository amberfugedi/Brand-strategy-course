"use client";

import { useAuth } from "@/lib/auth/provider";

/**
 * Audit mode: every module open, for reviewing the course.
 *
 * Two ways in, because they answer different needs.
 *
 * The owner's email, set once in `NEXT_PUBLIC_OWNER_EMAIL`, unlocks
 * the course for whoever is signed in as that address. That is the
 * one that matters: it works on the live site, needs no redeploy to
 * turn on and off, and follows the person rather than the build.
 *
 * `NEXT_PUBLIC_AUDIT=1` unlocks it for everyone in that build. It is
 * for a local run or a preview deploy where no one is signed in. It
 * should never be set on production.
 *
 * Neither grants access to slide copy. That comes from a route that
 * checks entitlement on the server, so both flags being visible in
 * the bundle costs nothing: unlocking navigation is all they unlock,
 * and the email is useless to anyone who cannot receive its mail.
 */
export const AUDIT_BUILD = process.env.NEXT_PUBLIC_AUDIT === "1";

const OWNER = (process.env.NEXT_PUBLIC_OWNER_EMAIL ?? "").trim().toLowerCase();

export function useAudit(): boolean {
  const { user } = useAuth();
  if (AUDIT_BUILD) return true;
  const email = user?.email?.trim().toLowerCase();
  return Boolean(OWNER && email && email === OWNER);
}
