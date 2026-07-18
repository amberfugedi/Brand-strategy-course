/**
 * The course document: every buyer input across all eight modules saves
 * into this one versioned structure. The Marketing Foundation Map reads
 * the same document when it integrates (Module 2 diagnostic and audit,
 * Module 8 plan). Add module sections here as modules are built; never
 * store buyer input outside this document.
 */

export type DifferentiatorSource =
  | "approach"
  | "constraint"
  | "combination"
  | "position";

export interface PositioningInput {
  serve: {
    situation: string;
    context: string;
    problem: string;
  };
  work: {
    action: string;
    output: string;
    change: string;
  };
  different: {
    text: string;
    sources: DifferentiatorSource[];
  };
  /** The assembled working positioning statement. This is the value the
   *  Map's Positioning tab holds. */
  statement: string;
  completedAt: string | null;
}

export interface CourseProgress {
  lastLocation: { moduleId: string; slideIndex: number } | null;
  /** slide keys like "intro/3", marked when the buyer moves past a slide */
  seenSlides: Record<string, true>;
  completedModules: string[];
}

export interface CourseDocument {
  version: 1;
  updatedAt: string;
  progress: CourseProgress;
  modules: {
    m1?: { positioning?: Partial<PositioningInput> };
    // m2: diagnostic answers, audit picks, gap list (built with Module 2)
    // m3..m7: mini-strategy inputs
    // m8: plan
  };
}

export const emptyDocument = (): CourseDocument => ({
  version: 1,
  updatedAt: new Date().toISOString(),
  progress: { lastLocation: null, seenSlides: {}, completedModules: [] },
  modules: {},
});

/**
 * Persistence boundary, keyed by course so the library scales to more
 * courses. localStorage always writes (it doubles as the offline
 * cache); the Supabase adapter joins in when the buyer is signed in.
 * Slides never touch adapters directly, they go through the store
 * context, so persistence changes never touch slide code.
 */
export interface CourseStoreAdapter {
  load(courseId: string): Promise<CourseDocument | null>;
  save(courseId: string, doc: CourseDocument): Promise<void>;
}
