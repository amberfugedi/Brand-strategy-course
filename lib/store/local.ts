import { CourseDocument, CourseStoreAdapter } from "./types";

const keyFor = (courseId: string) => `bymf.${courseId}.v1`;

/** The single-course key used before the library existed. */
const LEGACY_KEY = "bymf.course.v1";

/** localStorage adapter. Always active: it is the offline cache even
 *  when a signed-in buyer syncs to the database. */
export const localStorageAdapter: CourseStoreAdapter = {
  async load(courseId: string) {
    if (typeof window === "undefined") return null;
    try {
      // One-time migration of pre-library saves into the first course.
      if (courseId === "foundation") {
        const legacy = window.localStorage.getItem(LEGACY_KEY);
        if (legacy && !window.localStorage.getItem(keyFor(courseId))) {
          window.localStorage.setItem(keyFor(courseId), legacy);
          window.localStorage.removeItem(LEGACY_KEY);
        }
      }
      const raw = window.localStorage.getItem(keyFor(courseId));
      if (!raw) return null;
      const parsed = JSON.parse(raw) as CourseDocument;
      if (parsed.version !== 1) return null;
      return parsed;
    } catch {
      return null;
    }
  },

  async save(courseId: string, doc: CourseDocument) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(keyFor(courseId), JSON.stringify(doc));
  },
};
