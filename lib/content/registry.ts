import { ModuleDef } from "./types";
import { introSlides } from "./intro";
import { module1Slides } from "./module1";
import { module2Slides } from "./module2";
import { module3Slides } from "./module3";
import { module4Slides } from "./module4";

/**
 * The course structure. All eight modules exist here from day one;
 * unbuilt modules are registered but not released. Navigation, progress,
 * and the save schema all key off this registry.
 */
export const courseModules: ModuleDef[] = [
  {
    id: "intro",
    label: "Course intro",
    title: "A working marketing foundation, in one place.",
    minutes: "4 min",
    released: true,
    slides: introSlides,
  },
  {
    id: "m1",
    label: "Module 1 · Your positioning",
    title: "Your positioning.",
    minutes: "25 min",
    released: true,
    slides: module1Slides,
  },
  {
    id: "m2",
    label: "Module 2 · The foundation audit",
    title: "The foundation audit.",
    minutes: "28 min",
    released: true,
    requires: "m1",
    slides: module2Slides,
  },
  {
    id: "m3",
    label: "Module 3 · Get found",
    title: "Get found.",
    minutes: "25 min",
    released: true,
    requires: "m2",
    slides: module3Slides,
  },
  {
    id: "m4",
    label: "Module 4 · Earned proof",
    title: "Earned proof.",
    minutes: "20 min",
    released: true,
    requires: "m3",
    slides: module4Slides,
  },
  {
    id: "m5",
    label: "Module 5 · Referral system",
    title: "Referral system.",
    minutes: "35 min",
    released: false,
    slides: [],
  },
  {
    id: "m6",
    label: "Module 6 · Authority building",
    title: "Authority building.",
    minutes: "40 min",
    released: false,
    slides: [],
  },
  {
    id: "m7",
    label: "Module 7 · Owned audience and smart visibility",
    title: "Owned audience and smart visibility.",
    minutes: "40 min",
    released: false,
    slides: [],
  },
  {
    id: "m8",
    label: "Module 8 · Your marketing foundation plan",
    title: "Your marketing foundation plan.",
    minutes: "25 min",
    released: false,
    slides: [],
  },
];

export function getModule(id: string): ModuleDef | undefined {
  return courseModules.find((m) => m.id === id);
}
