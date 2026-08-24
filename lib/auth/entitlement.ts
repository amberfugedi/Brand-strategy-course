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
export function useEntitlement(courseId: string): boolean | undefined {
  const { user, enabled, loading } = useAuth();
  const [entitled, setEntitled] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // Local mode has no accounts and no payments, so nothing is gated.
    if (!supabaseConfigured) return setEntitled(true);
    if (loading) return setEntitled(undefined);
    if (!enabled || !user) return setEntitled(false);

    let cancelled = false;
    (async () => {
      const supabase = getSupabase();
      if (!supabase) return;
      const { data, error } = await supabase
        .from("entitlements")
        .select("status")
        .eq("course_id", courseId)
        .eq("status", "active")
        .maybeSingle();
      if (cancelled) return;
      // On a network error, leave it unknown rather than locking a
      // paying buyer out of something they own.
      setEntitled(error ? undefined : Boolean(data));
    })();
    return () => {
      cancelled = true;
    };
  }, [courseId, user, enabled, loading]);

  return entitled;
}
