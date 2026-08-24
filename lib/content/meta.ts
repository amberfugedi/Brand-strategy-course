/**
 * What the browser is allowed to know before it has paid: the shape of
 * the course, not its contents. Titles, lengths, how many slides and
 * what unlocks what, which is everything navigation and progress need.
 *
 * The slides themselves come from /api/slides, which checks the caller
 * owns the course first. Keep this file free of anything that imports
 * the slide data, or the copy lands back in the client bundle.
 */

export interface ModuleMeta {
  id: string;
  label: string;
  title: string;
  minutes: string;
  released: boolean;
  requires?: string;
  slideCount: number;
}

export interface CourseMeta {
  id: string;
  ordinal: string;
  title: string;
  tagline: string;
  summary: string;
  released: boolean;
  audience: string;
  coverWord: string;
  chips: string[];
  meta: { label: string; value: string }[];
  modules: ModuleMeta[];
}

/** The one module that stays open to everyone. */
export const FREE_MODULE = "intro";
