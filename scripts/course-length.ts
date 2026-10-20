/**
 * What each module takes, narration plus the time to do its exercises.
 *
 * The labels used to be teaching time only, which made three of them
 * shorter than their own audio: Module 6 was labelled 20 minutes
 * against 23.8 minutes of narration, before the learner had written
 * anything. A length a buyer cannot meet is the one kind of error
 * worth avoiding here, so the labels now assume the work gets done.
 *
 * Narration is measured from the word timings. Activity is counted
 * from what each interactive slide actually asks the learner to
 * produce, at the rates below. They are assumptions, not measurements,
 * and they are here rather than in a spreadsheet so they can be argued
 * with and re-run.
 *
 * Labels round up to the nearest five minutes: a label shorter than
 * the thing itself is a broken promise, a slightly longer one is not.
 *
 * Usage: npx tsx scripts/course-length.ts
 */

import { readFileSync, existsSync } from "fs";
import { DIAGNOSTIC_QUESTIONS, FOUNDATIONS } from "../lib/content/m2Logic";

const R = new URL("..", import.meta.url).pathname;
const MODULES: [string, string, string][] = [
  ["intro","intro","introSlides"],["m1","module1","module1Slides"],["m2","module2","module2Slides"],
  ["m3","module3","module3Slides"],["m4","module4","module4Slides"],["m5","module5","module5Slides"],
  ["m6","module6","module6Slides"],["m7","module7","module7Slides"],["m8","module8","module8Slides"],
];

// Minutes assumed per kind of thing the learner produces.
const WRITE = 2;    // a free-text answer about their own business
const PICK = 0.5;   // a considered choice from options
const ORDER = 2;    // ranking or ordering a short list
const ASSEMBLE = 3; // the positioning statement, the course's own figure

// What each interactive slide actually asks for.
const WORK: Record<string, number> = {
  "exercise/serve": 3 * WRITE,
  "exercise/work": 3 * WRITE,
  "exercise/different": WRITE + PICK,
  synthesis: ASSEMBLE,
  diagnostic: DIAGNOSTIC_QUESTIONS.length * PICK,
  // seven foundations, two dimensions each on average (three when a
  // foundation is high priority, one when it is low)
  audit: FOUNDATIONS.length * 2 * PICK,
  touchpoints: ORDER,
  proofInventory: 4 * PICK,
  referralMap: 2 * WRITE + 4 * PICK,
  presencePlan: 2 * WRITE + PICK,
  ownedAudience: 3 * WRITE,
  authorityKind: PICK,
  foundationPlan: 7 * PICK,
};

function narrationMinutes(key: string, n: number): number {
  const f = `${R}public/audio/${key}/${key}-${n}.words.json`;
  if (!existsSync(f)) return 0;
  const w = JSON.parse(readFileSync(f, "utf8")).words;
  return w.length ? w[w.length - 1][2] / 60 : 0;
}

async function main() {
  let totalRaw = 0, totalLabel = 0;
  console.log("module  narration  activity   total   label");
  for (const [key, file, exp] of MODULES) {
    const mod: any = await import(`${R}lib/content/${file}`);
    const slides = (mod[exp] ?? mod.default) as any[];
    let narr = 0, act = 0;
    slides.forEach((s, i) => {
      narr += narrationMinutes(key, i + 1);
      const k = s.exercise ? `${s.kind}/${s.exercise}` : s.kind;
      if (WORK[k]) act += WORK[k];
    });
    const total = narr + act;
    // Round up to the nearest five: a label shorter than the thing
    // itself is a broken promise, a slightly longer one is not.
    const label = Math.ceil(total / 5) * 5;
    totalRaw += total; totalLabel += label;
    console.log(
      `${key.padEnd(7)} ${narr.toFixed(1).padStart(8)}  ${act.toFixed(1).padStart(8)}  ` +
      `${total.toFixed(1).padStart(6)}  ${String(label).padStart(4)} min`
    );
  }
  const h = (m: number) => `${Math.floor(m/60)}h ${Math.round(m%60)}m`;
  console.log(`\nraw total   ${totalRaw.toFixed(0)} min = ${h(totalRaw)}`);
  console.log(`labels sum  ${totalLabel} min = ${h(totalLabel)}`);
}
main();
