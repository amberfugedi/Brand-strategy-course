"use client";

import { useEffect, useState } from "react";
import { getSupabase, supabaseConfigured } from "@/lib/supabaseClient";
import { useAuth } from "@/lib/auth/provider";

/**
 * Whether the signed-in learner has bought this course.
 *
 * Entitlements key on the email that paid, and row-level security only
 * shows a learner their own row, so this is a select with no filter to
 * get wrong. Writing them is the Stripe webhook's job; nothing in the
 * browser can grant access to itself.
 *
 * `undefined` means the answer is not in yet. Callers must not treat
 * that as "no" or a buyer sees a paywall for a moment on every load.
 */
export function useOwnedCourses(): Set<string> | undefined {
  const { user, enabled, loading } = useAuth();
  const [owned, setOwned] = useState<Set<string> | undefined>(undefined);

  useEffect(() => {
    // Local mode has no accounts and no payments, so nothing is gated.
    // ALL_COURSES stands for "everything", which useEntitlement reads.
    if (!supabaseConfigured) return setOwned(ALL_COURSES);
    if (loading) return setOwned(undefined);
    if (!enabled || !user) return setOwned(new Set());

    let cancelled = false;
    (async () => {
      const supabase = getSupabase();
      if (!supabase) return;
      // No filter on the row's email: row-level security already limits
      // this to the caller's own entitlements, and there is no way to
      // widen it from here.
      const { data, error } = await supabase
        .from("entitlements")
        .select("course_id")
        .eq("status", "active");
      if (cancelled) return;
      // On a network error leave it unknown rather than locking a
      // paying buyer out of something they own.
      if (error || !data) return setOwned(undefined);
      setOwned(new Set(data.map((r) => r.course_id as string)));
    })();
    return () => {
      cancelled = true;
    };
  }, [user, enabled, loading]);

  return owned;
}

/** Sentinel for local mode, where there is nothing to buy. */
const ALL_COURSES = new Set<string>(["*"]);

export function useEntitlement(courseId: string): boolean | undefined {
  const owned = useOwnedCourses();
  if (owned === undefined) return undefined;
  return owned.has("*") || owned.has(courseId);
}
