/**
 * Check every mark and callout can actually fire.
 *
 * Both fail silently. A mark whose text is not on the slide underlines
 * nothing: Rich looks for the phrase, does not find it, and renders
 * the copy unchanged. A mark or callout timed past the end of its
 * track never opens, because the window closes after the audio stops.
 * Neither shows up as an error anywhere, which is why they are worth
 * a check rather than a careful read.
 *
 * What it verifies, per slide:
 *   - every mark's text appears in that slide's copy, folded the same
 *     way Rich folds it (case, curly quotes, emphasis asterisks)
 *   - every window is ordered, at < until
 *   - every window opens before the narration ends
 *   - no callout simply repeats a line the slide already carries,
 *     which would print the same words twice
 *
 * Usage: tsx scripts/check-marks.ts [module ...]   (default: all)
 */

import { readFileSync, existsSync } from "fs";

const ROOT = new URL("..", import.meta.url).pathname;

const MODULES: [string, string, string][] = [
  ["intro", "intro", "introSlides"],
  ["m1", "module1", "module1Slides"],
  ["m2", "module2", "module2Slides"],
  ["m3", "module3", "module3Slides"],
  ["m4", "module4", "module4Slides"],
  ["m5", "module5", "module5Slides"],
  ["m6", "module6", "module6Slides"],
  ["m7", "module7", "module7Slides"],
  ["m8", "module8", "module8Slides"],
];

/** Same folding Rich does, plus the emphasis markers. */
function fold(s: string) {
  return s
    .replace(/\*/g, "")
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

/** Every string anywhere in the slide, minus the audio block: that is
 *  where the mark text itself lives, so including it would let a mark
 *  match itself. */
function copyOf(slide: any): string[] {
  const out: string[] = [];
  const walk = (v: any, key?: string) => {
    if (key === "audio") return;
    if (typeof v === "string") out.push(v);
    else if (Array.isArray(v)) v.forEach((x) => walk(x));
    else if (v && typeof v === "object")
      for (const [k, x] of Object.entries(v)) walk(x, k);
  };
  walk(slide);
  return out;
}

function duration(key: string, n: number): number | null {
  const f = `${ROOT}public/audio/${key}/${key}-${n}.words.json`;
  if (!existsSync(f)) return null;
  const words = JSON.parse(readFileSync(f, "utf8")).words;
  return words.length ? words[words.length - 1][2] : null;
}

async function main() {
  const want = process.argv.slice(2);
  let problems = 0;
  let marks = 0;
  let callouts = 0;

  for (const [key, file, exp] of MODULES) {
    if (want.length && !want.includes(key)) continue;
    const mod: any = await import(`${ROOT}lib/content/${file}`);
    const slides = (mod[exp] ?? mod.default) as any[];

    slides.forEach((slide, i) => {
      const n = i + 1;
      const audio = slide.audio ?? {};
      const copy = copyOf(slide).map(fold);
      const ends = duration(key, n);
      const say = (msg: string) => {
        console.log(`  ${key}/${n}: ${msg}`);
        problems++;
      };

      for (const m of audio.marks ?? []) {
        marks++;
        if (!copy.some((c) => c.includes(fold(m.text))))
          say(`mark not found in the slide copy: "${m.text}"`);
        if (!(m.at < m.until)) say(`mark window not ordered: ${m.at}..${m.until}`);
        if (ends !== null && m.at >= ends)
          say(`mark opens at ${m.at}s, past the ${ends.toFixed(1)}s narration`);
      }

      for (const c of audio.callouts ?? []) {
        callouts++;
        if (!(c.at < c.until))
          say(`callout window not ordered: ${c.at}..${c.until}`);
        if (ends !== null && c.at >= ends)
          say(`callout opens at ${c.at}s, past the ${ends.toFixed(1)}s narration`);
        if (copy.some((x) => x.includes(fold(c.text))))
          say(`callout repeats slide copy, use a mark: "${c.text}"`);
      }
    });
  }

  console.log(
    `\n${marks} marks and ${callouts} callouts checked, ${problems} problem${problems === 1 ? "" : "s"}`,
  );
  if (problems) process.exit(1);
}

main();
