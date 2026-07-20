"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { CourseDocument, emptyDocument } from "./types";
import { localStorageAdapter } from "./local";
import { supabaseAdapter } from "./remote";
import { useAuth } from "@/lib/auth/provider";

interface CourseStoreValue {
  doc: CourseDocument;
  ready: boolean;
  /** Apply a change to the document. Saves automatically (debounced),
   *  to localStorage always and to the account when signed in. */
  update: (fn: (doc: CourseDocument) => CourseDocument) => void;
}

const CourseStoreContext = createContext<CourseStoreValue | null>(null);

export function CourseStoreProvider({
  courseId,
  children,
}: {
  courseId: string;
  children: ReactNode;
}) {
  const { user, enabled } = useAuth();
  const [doc, setDoc] = useState<CourseDocument>(emptyDocument);
  const [ready, setReady] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const signedIn = enabled && user !== null;
  const signedInRef = useRef(signedIn);
  signedInRef.current = signedIn;

  // Load local first (instant), then reconcile with the account copy:
  // the newer document wins, and a fresh sign-in uploads local work so
  // nothing typed before signing in is lost.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const local = await localStorageAdapter.load(courseId);
      if (cancelled) return;
      if (local) setDoc(local);
      setReady(true);

      if (signedIn) {
        const remote = await supabaseAdapter.load(courseId);
        if (cancelled) return;
        if (remote && (!local || remote.updatedAt > local.updatedAt)) {
          setDoc(remote);
          await localStorageAdapter.save(courseId, remote);
        } else if (local && (!remote || local.updatedAt > remote.updatedAt)) {
          await supabaseAdapter.save(courseId, local);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [courseId, signedIn]);

  const update = useCallback(
    (fn: (d: CourseDocument) => CourseDocument) => {
      setDoc((prev) => {
        const next = { ...fn(prev), updatedAt: new Date().toISOString() };
        if (saveTimer.current) clearTimeout(saveTimer.current);
        saveTimer.current = setTimeout(() => {
          void localStorageAdapter.save(courseId, next);
          if (signedInRef.current) void supabaseAdapter.save(courseId, next);
        }, 400);
        return next;
      });
    },
    [courseId],
  );

  return (
    <CourseStoreContext.Provider value={{ doc, ready, update }}>
      {children}
    </CourseStoreContext.Provider>
  );
}

export function useCourseStore(): CourseStoreValue {
  const ctx = useContext(CourseStoreContext);
  if (!ctx) throw new Error("useCourseStore requires CourseStoreProvider");
  return ctx;
}

/** Convenience accessor for Module 2 diagnostic and audit input. */
export function useModule2() {
  const { doc, update } = useCourseStore();
  const m2 = doc.modules.m2 ?? {};

  const setDiagnostic = useCallback(
    (questionId: string, value: string) => {
      update((d) => ({
        ...d,
        modules: {
          ...d.modules,
          m2: {
            ...d.modules.m2,
            diagnostic: { ...d.modules.m2?.diagnostic, [questionId]: value },
          },
        },
      }));
    },
    [update],
  );

  const setAudit = useCallback(
    (foundationId: string, dimensionId: string, value: string) => {
      update((d) => ({
        ...d,
        modules: {
          ...d.modules,
          m2: {
            ...d.modules.m2,
            audit: {
              ...d.modules.m2?.audit,
              [foundationId]: {
                ...d.modules.m2?.audit?.[foundationId],
                [dimensionId]: value,
              },
            },
          },
        },
      }));
    },
    [update],
  );

  return {
    diagnostic: m2.diagnostic ?? {},
    audit: m2.audit ?? {},
    setDiagnostic,
    setAudit,
  };
}

/** Convenience accessor for Module 3 touchpoint priority. */
export function useModule3() {
  const { doc, update } = useCourseStore();
  const order = doc.modules.m3?.touchpoints?.order ?? [];

  const setOrder = useCallback(
    (next: string[]) => {
      update((d) => ({
        ...d,
        modules: {
          ...d.modules,
          m3: { ...d.modules.m3, touchpoints: { order: next } },
        },
      }));
    },
    [update],
  );

  return { order, setOrder };
}

/** Convenience accessor for Module 4 proof inventory. */
export function useModule4() {
  const { doc, update } = useCourseStore();
  const proof = doc.modules.m4?.proof ?? {};

  const setStatus = useCallback(
    (sourceId: string, value: string) => {
      update((d) => ({
        ...d,
        modules: {
          ...d.modules,
          m4: {
            ...d.modules.m4,
            proof: {
              ...d.modules.m4?.proof,
              statuses: { ...d.modules.m4?.proof?.statuses, [sourceId]: value },
            },
          },
        },
      }));
    },
    [update],
  );

  const setBuildFirst = useCallback(
    (sourceId: string) => {
      update((d) => ({
        ...d,
        modules: {
          ...d.modules,
          m4: {
            ...d.modules.m4,
            proof: { ...d.modules.m4?.proof, buildFirst: sourceId },
          },
        },
      }));
    },
    [update],
  );

  return { proof, setStatus, setBuildFirst };
}

/** Convenience accessor for Module 5 referral map. */
export function useModule5() {
  const { doc, update } = useCourseStore();
  const referral = doc.modules.m5?.referral ?? {};

  const setReferral = useCallback(
    (patch: { source?: string; weakStage?: string; change?: string }) => {
      update((d) => ({
        ...d,
        modules: {
          ...d.modules,
          m5: {
            ...d.modules.m5,
            referral: { ...d.modules.m5?.referral, ...patch },
          },
        },
      }));
    },
    [update],
  );

  const setStage = useCallback(
    (stageId: string, value: string) => {
      update((d) => ({
        ...d,
        modules: {
          ...d.modules,
          m5: {
            ...d.modules.m5,
            referral: {
              ...d.modules.m5?.referral,
              stages: { ...d.modules.m5?.referral?.stages, [stageId]: value },
            },
          },
        },
      }));
    },
    [update],
  );

  return { referral, setReferral, setStage };
}

/** Convenience accessor for Module 6 presence plan. */
export function useModule6() {
  const { doc, update } = useCourseStore();
  const presence = doc.modules.m6?.presence ?? {};

  const setPresence = useCallback(
    (patch: { weight?: string; place?: string; cadence?: string }) => {
      update((d) => ({
        ...d,
        modules: {
          ...d.modules,
          m6: {
            ...d.modules.m6,
            presence: { ...d.modules.m6?.presence, ...patch },
          },
        },
      }));
    },
    [update],
  );

  const toggleCondition = useCallback(
    (conditionId: string) => {
      update((d) => ({
        ...d,
        modules: {
          ...d.modules,
          m6: {
            ...d.modules.m6,
            presence: {
              ...d.modules.m6?.presence,
              conditions: {
                ...d.modules.m6?.presence?.conditions,
                [conditionId]: !d.modules.m6?.presence?.conditions?.[conditionId],
              },
            },
          },
        },
      }));
    },
    [update],
  );

  return { presence, setPresence, toggleCondition };
}

/** Convenience accessor for Module 7 owned audience plan. */
export function useModule7() {
  const { doc, update } = useCourseStore();
  const ownedAudience = doc.modules.m7?.ownedAudience ?? {};

  const setOwnedAudience = useCallback(
    (patch: { people?: string; channel?: string; cadence?: string }) => {
      update((d) => ({
        ...d,
        modules: {
          ...d.modules,
          m7: {
            ...d.modules.m7,
            ownedAudience: { ...d.modules.m7?.ownedAudience, ...patch },
          },
        },
      }));
    },
    [update],
  );

  return { ownedAudience, setOwnedAudience };
}

/** Convenience accessor for Module 8 authority kind and plan buckets. */
export function useModule8() {
  const { doc, update } = useCourseStore();
  const m8 = doc.modules.m8 ?? {};

  const setAuthorityKind = useCallback(
    (kind: string) => {
      update((d) => ({
        ...d,
        modules: {
          ...d.modules,
          m8: { ...d.modules.m8, authority: { kind } },
        },
      }));
    },
    [update],
  );

  const setBucket = useCallback(
    (foundationId: string, bucket: string) => {
      update((d) => ({
        ...d,
        modules: {
          ...d.modules,
          m8: {
            ...d.modules.m8,
            plan: {
              buckets: {
                ...d.modules.m8?.plan?.buckets,
                [foundationId]: bucket,
              },
            },
          },
        },
      }));
    },
    [update],
  );

  return {
    authorityKind: m8.authority?.kind,
    buckets: m8.plan?.buckets ?? {},
    setAuthorityKind,
    setBucket,
  };
}

/** Convenience accessor for Module 1 positioning input. */
export function usePositioning() {
  const { doc, update } = useCourseStore();
  const positioning = doc.modules.m1?.positioning ?? {};

  const setPositioning = useCallback(
    (patch: Partial<NonNullable<typeof positioning>>) => {
      update((d) => ({
        ...d,
        modules: {
          ...d.modules,
          m1: {
            ...d.modules.m1,
            positioning: { ...d.modules.m1?.positioning, ...patch },
          },
        },
      }));
    },
    [update],
  );

  return { positioning, setPositioning };
}
