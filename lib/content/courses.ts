import { ModuleDef } from "./types";
import { courseModules } from "./registry";

/**
 * The library. Courses are registered here; the first is Build Your
 * Marketing Foundation. Later courses (the deeper brand course, and a
 * third) are added as new entries with their own module registries.
 */
export interface CourseDef {
  id: string;
  ordinal: string;
  title: string;
  tagline: string;
  summary: string;
  released: boolean;
  /** Library section this course lists under. */
  audience: string;
  /** The single serif word on the generated cover art. */
  coverWord: string;
  /** Short chips shown on the library card. */
  chips: string[];
  meta: { label: string; value: string }[];
  modules: ModuleDef[];
}

export const courses: CourseDef[] = [
  {
    id: "foundation",
    ordinal: "Course 01",
    title: "Build Your Marketing Foundation",
    tagline: "A working marketing foundation, in one *place*.",
    summary:
      "Three layers. Seven foundations. One strategic plan that's *actually yours*.",
    released: true,
    audience: "For service business owners",
    coverWord: "Foundation.",
    chips: ["Interactive", "8 modules", "About 3 hours"],
    meta: [
      { label: "Length", value: "About 3 hours, self-paced" },
      { label: "Output", value: "Your Marketing Foundation Map" },
      { label: "Format", value: "Guided, interactive, saved as you go" },
    ],
    modules: courseModules,
  },
];

/** Library sections, in display order. Courses group by audience;
 *  sections listed here appear even before their courses exist. */
export const librarySections: { audience: string; note: string }[] = [
  {
    audience: "For service business owners",
    note: "Established businesses with paying clients and no marketing foundation yet.",
  },
  {
    audience: "For people getting into marketing",
    note: "Marketing majors and career changers building entry-level fundamentals.",
  },
];

export function getCourse(id: string): CourseDef | undefined {
  return courses.find((c) => c.id === id);
}
