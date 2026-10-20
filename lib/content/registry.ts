// The slide copy is the product. Importing this from a client component
// would bundle the whole course into the browser, so the build fails
// instead. Metadata safe for the browser lives in ./meta; the slides
// are served by /api/slides once entitlement checks out.
import "server-only";

import { ModuleDef } from "./types";
import { ModuleMeta } from "./meta";
import { introSlides } from "./intro";
import { module1Slides } from "./module1";
import { module2Slides } from "./module2";
import { module3Slides } from "./module3";
import { module4Slides } from "./module4";
import { module5Slides } from "./module5";
import { module6Slides } from "./module6";
import { module7Slides } from "./module7";
import { module8Slides } from "./module8";

/**
 * The course structure. All eight modules are built and released;
 * they unlock in sequence via `requires`. Navigation, progress, and
 * the save schema all key off this registry.
 */
export const courseModules: ModuleDef[] = [
  {
    id: "intro",
    label: "Course intro",
    title: "A working marketing foundation, in one place.",
    released: true,
    slides: introSlides,
  },
  {
    id: "m1",
    label: "Module 1 · Your positioning",
    title: "Your positioning.",
    released: true,
    slides: module1Slides,
  },
  {
    id: "m2",
    label: "Module 2 · The foundation audit",
    title: "The foundation audit.",
    released: true,
    requires: "m1",
    slides: module2Slides,
  },
  {
    id: "m3",
    label: "Module 3 · Get found",
    title: "Get found.",
    released: true,
    requires: "m2",
    slides: module3Slides,
  },
  {
    id: "m4",
    label: "Module 4 · Earned proof",
    title: "Earned proof.",
    released: true,
    requires: "m3",
    slides: module4Slides,
  },
  {
    id: "m5",
    label: "Module 5 · Referral system",
    title: "Referral system.",
    released: true,
    requires: "m4",
    slides: module5Slides,
  },
  {
    id: "m6",
    label: "Module 6 · Brand awareness",
    title: "Brand awareness.",
    released: true,
    requires: "m5",
    slides: module6Slides,
  },
  {
    id: "m7",
    label: "Module 7 · Owned audience",
    title: "Owned audience.",
    released: true,
    requires: "m6",
    slides: module7Slides,
  },
  {
    id: "m8",
    label: "Module 8 · Authority building",
    title: "Authority building.",
    released: true,
    requires: "m7",
    slides: module8Slides,
  },
];

export function getModule(id: string): ModuleDef | undefined {
  return courseModules.find((m) => m.id === id);
}

/** A module stripped to what the browser may see before it has paid. */
export function moduleMeta(m: ModuleDef): ModuleMeta {
  return {
    id: m.id,
    label: m.label,
    title: m.title,
    minutes: m.minutes,
    released: m.released,
    requires: m.requires,
    slideCount: m.slides.length,
  };
}
