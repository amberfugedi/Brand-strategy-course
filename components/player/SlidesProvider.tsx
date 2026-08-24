"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useParams } from "next/navigation";
import type { Slide } from "@/lib/content/types";
import { getSupabase, supabaseConfigured } from "@/lib/supabaseClient";
import { useAuth } from "@/lib/auth/provider";

/**
 * Fetches the current module's slides from /api/slides, which only
 * answers for people who own the course. The copy is no longer in the
 * bundle, so this is the only way the player gets it.
 *
 * `slides` is null until the answer arrives. `status` says why, so the
 * player can tell "still loading" apart from "you have not bought this",
 * which look identical if you only have the slides.
 */

export type SlidesStatus = "loading" | "ready" | "unauthenticated" | "denied" | "error";

interface SlidesValue {
  slides: Slide[] | null;
  status: SlidesStatus;
}

const SlidesContext = createContext<SlidesValue>({ slides: null, status: "loading" });

export function SlidesProvider({ children }: { children: ReactNode }) {
  const params = useParams<{ course?: string; module?: string }>();
  const courseId = params?.course;
  const moduleId = params?.module;
  const { user, loading } = useAuth();
  const [value, setValue] = useState<SlidesValue>({ slides: null, status: "loading" });

  useEffect(() => {
    if (!courseId || !moduleId) return;
    // Wait for auth to settle, or the first request goes out without a
    // token and a buyer gets told they have not bought it.
    if (supabaseConfigured && loading) return;

    let cancelled = false;
    setValue({ slides: null, status: "loading" });

    (async () => {
      const headers: Record<string, string> = {};
      const supabase = getSupabase();
      if (supabase) {
        const { data } = await supabase.auth.getSession();
        const token = data.session?.access_token;
        if (token) headers.Authorization = `Bearer ${token}`;
      }

      try {
        const res = await fetch(`/api/slides/${courseId}/${moduleId}`, {
          headers,
          cache: "no-store",
        });
        if (cancelled) return;
        if (res.status === 401) return setValue({ slides: null, status: "unauthenticated" });
        if (res.status === 403) return setValue({ slides: null, status: "denied" });
        if (!res.ok) return setValue({ slides: null, status: "error" });
        const body = (await res.json()) as { slides: Slide[] };
        if (!cancelled) setValue({ slides: body.slides, status: "ready" });
      } catch {
        if (!cancelled) setValue({ slides: null, status: "error" });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [courseId, moduleId, user, loading]);

  return <SlidesContext.Provider value={value}>{children}</SlidesContext.Provider>;
}

export function useSlides(): SlidesValue {
  return useContext(SlidesContext);
}
