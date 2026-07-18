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

interface CourseStoreValue {
  doc: CourseDocument;
  ready: boolean;
  /** Apply a change to the document. Saves automatically (debounced). */
  update: (fn: (doc: CourseDocument) => CourseDocument) => void;
}

const CourseStoreContext = createContext<CourseStoreValue | null>(null);

const adapter = localStorageAdapter;

export function CourseStoreProvider({ children }: { children: ReactNode }) {
  const [doc, setDoc] = useState<CourseDocument>(emptyDocument);
  const [ready, setReady] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;
    adapter.load().then((loaded) => {
      if (cancelled) return;
      if (loaded) setDoc(loaded);
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const update = useCallback((fn: (d: CourseDocument) => CourseDocument) => {
    setDoc((prev) => {
      const next = { ...fn(prev), updatedAt: new Date().toISOString() };
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => void adapter.save(next), 400);
      return next;
    });
  }, []);

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
