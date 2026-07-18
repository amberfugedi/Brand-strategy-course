import { CourseDocument, CourseStoreAdapter } from "./types";

const STORAGE_KEY = "bymf.course.v1";

/** localStorage adapter. Replaced by a hosted adapter later; the
 *  interface stays the same. */
export const localStorageAdapter: CourseStoreAdapter = {
  async load() {
    if (typeof window === "undefined") return null;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as CourseDocument;
      if (parsed.version !== 1) return null;
      return parsed;
    } catch {
      return null;
    }
  },

  async save(doc: CourseDocument) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(doc));
  },
};
