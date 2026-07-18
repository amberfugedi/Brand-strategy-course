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
    meta: [
      { label: "Length", value: "About 4 hours, self-paced" },
      { label: "Output", value: "Your Marketing Foundation Map" },
      { label: "Format", value: "Guided, interactive, saved as you go" },
    ],
    modules: courseModules,
  },
];

export function getCourse(id: string): CourseDef | undefined {
  return courses.find((c) => c.id === id);
}
