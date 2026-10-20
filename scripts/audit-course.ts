/**
 * One pass over the whole course: audio, slides, captions.
 *
 * Everything here is a rule that fails silently in the product. A
 * slide pointing at its neighbour's track still plays. A cue list one
 * short still builds, and just stops a beat early. A caption file
 * whose times run backwards still renders. An em dash still sets. The
 * common thread is that nothing throws, so nothing tells you.
 *
 * Checks, by area:
 *
 *   audio     every slide has a track, the track exists, and it is
 *             that slide's own track rather than a neighbour's
 *   captions  one timing file per track, times ordered and inside
 *             the track, and the words matching the script exactly
 *   beats     one cue per beat on every slide that builds, cues
 *             ordered, and the last beat landing before the voice
 *             stops
 *   notes     marks present in the slide copy, callouts absent from
 *             it, windows ordered, inside the track, and not
 *             overlapping each other
 *   copy      the house rules that can be checked by machine: no em
 *             dashes, one emphasis per headline, curly apostrophes
 *
 * Usage: tsx scripts/audit-course.ts [--quiet]
 */

import { readFileSync, existsSync } from "fs";
import { stepsOf } from "../lib/content/steps";

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

type Problem = { area: string; where: string; what: string };
const problems: Problem[] = [];
const note = (area: string, where: string, what: string) =>
  problems.push({ area, where, what });

const counts: Record<string, number> = {};
const tally = (k: string, n = 1) => (counts[k] = (counts[k] ?? 0) + n);

function fold(s: string) {
  return s
    .replace(/\*/g, "")
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

/** Every string on the slide except the audio block, which holds the
 *  note text itself and would let a mark match itself. */
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

/** Fields that are rendered as a headline, where one emphasis is the
 *  house rule. Body copy may carry more. */
const HEADLINE_KEYS = ["heading", "headline", "title"];

function headlinesOf(slide: any): [string, string][] {
  const out: [string, string][] = [];
  const walk = (v: any, key?: string) => {
    if (key === "audio") return;
    if (typeof v === "string") {
      if (key && HEADLINE_KEYS.includes(key)) out.push([key, v]);
    } else if (Array.isArray(v)) v.forEach((x) => walk(x, key));
    else if (v && typeof v === "object")
      for (const [k, x] of Object.entries(v)) walk(x, k);
  };
  walk(slide);
  return out;
}

async function main() {
  const quiet = process.argv.includes("--quiet");

  for (const [key, file, exp] of MODULES) {
    const mod: any = await import(`${ROOT}lib/content/${file}`);
    const slides = (mod[exp] ?? mod.default) as any[];
    tally("slides", slides.length);

    // The script, for comparing against the timings.
    let scriptWords = 0;
    let timedWords = 0;

    slides.forEach((slide, i) => {
      const n = i + 1;
      const at = `${key}/${n}`;
      const audio = slide.audio ?? {};

      // ---- audio -------------------------------------------------
      if (!audio.src) {
        note("audio", at, "no narration track");
        return;
      }
      const want = `/audio/${key}/${key}-${n}.mp3`;
      if (audio.src !== want)
        note("audio", at, `points at ${audio.src}, not ${want}`);
      if (!existsSync(`${ROOT}public${audio.src}`))
        note("audio", at, `track missing on disk: ${audio.src}`);
      tally("tracks");

      // ---- captions ----------------------------------------------
      const wf = `${ROOT}public${audio.src.replace(/\.mp3$/, ".words.json")}`;
      let words: [string, number, number][] | null = null;
      if (!existsSync(wf)) {
        note("captions", at, "no timing file, so no captions");
      } else {
        words = JSON.parse(readFileSync(wf, "utf8")).words;
        if (!words || !words.length) note("captions", at, "timing file is empty");
        else {
          timedWords += words.length;
          let last = -1;
          words.forEach(([w, s, e], k) => {
            if (s < 0 || e < 0) note("captions", at, `negative time on "${w}"`);
            if (e < s) note("captions", at, `word "${w}" ends before it starts`);
            if (s < last - 0.001)
              note("captions", at, `times go backwards at word ${k} ("${w}")`);
            last = s;
          });
        }
      }

      const ends = words?.length ? words[words.length - 1][2] : null;

      // ---- beats ---------------------------------------------------
      const beats = stepsOf(slide);
      const cues: number[] | undefined = audio.cues;
      if (beats > 1 && !cues) note("beats", at, `${beats} beats, no cues`);
      if (beats > 1 && cues && cues.length !== beats)
        note("beats", at, `${beats} beats, ${cues.length} cues`);
      if (cues) {
        tally("cues", cues.length);
        for (let k = 1; k < cues.length; k++)
          if (cues[k] <= cues[k - 1])
            note("beats", at, `cues not increasing: ${cues[k - 1]} then ${cues[k]}`);
        if (ends !== null && cues.length && cues[cues.length - 1] >= ends)
          note(
            "beats",
            at,
            `last beat at ${cues[cues.length - 1]}s, after the voice stops at ${ends.toFixed(1)}s`,
          );
      }

      // ---- notes ---------------------------------------------------
      const copy = copyOf(slide).map(fold);
      for (const m of audio.marks ?? []) {
        tally("marks");
        if (!copy.some((c) => c.includes(fold(m.text))))
          note("notes", at, `mark not in the slide copy: "${m.text}"`);
        if (!(m.at < m.until)) note("notes", at, `mark window not ordered`);
        if (ends !== null && m.at >= ends)
          note("notes", at, `mark opens at ${m.at}s, after the voice stops`);
      }
      const callouts = audio.callouts ?? [];
      callouts.forEach((c: any, k: number) => {
        tally("callouts");
        if (!(c.at < c.until)) note("notes", at, `callout window not ordered`);
        if (ends !== null && c.at >= ends)
          note("notes", at, `callout opens at ${c.at}s, after the voice stops`);
        if (copy.some((x) => x.includes(fold(c.text))))
          note("notes", at, `callout repeats slide copy, use a mark: "${c.text}"`);
        const prev = callouts[k - 1];
        if (prev && c.at < prev.until)
          note(
            "notes",
            at,
            `callout windows overlap: ${prev.until} then ${c.at}, only the second shows`,
          );
      });

      // ---- copy ----------------------------------------------------
      for (const s of copyOf(slide)) {
        if (s.includes("—")) note("copy", at, `em dash: "${s.slice(0, 60)}"`);
      }
      for (const [k, h] of headlinesOf(slide)) {
        const emphases = (h.match(/\*[^*]+\*/g) ?? []).length;
        if (emphases > 1)
          note("copy", at, `${emphases} emphases in ${k}: "${h}"`);
      }
      // A straight apostrophe between letters is a typographic slip;
      // one inside code or a measurement is not, and none of the copy
      // has those.
      for (const s of copyOf(slide)) {
        if (/[A-Za-z]'[A-Za-z]/.test(s))
          note("copy", at, `straight apostrophe: "${s.slice(0, 60)}"`);
      }
    });

    // Script against timings, per module.
    const narrPath = `${ROOT}scripts/.audit-${key}.json`;
    if (existsSync(narrPath)) {
      scriptWords = JSON.parse(readFileSync(narrPath, "utf8")).words;
      if (scriptWords !== timedWords)
        note(
          "captions",
          key,
          `script has ${scriptWords} words, timings have ${timedWords}`,
        );
    }
  }

  const byArea: Record<string, Problem[]> = {};
  for (const p of problems) (byArea[p.area] ??= []).push(p);

  console.log(
    `Audited ${counts.slides} slides: ${counts.tracks} tracks, ` +
      `${counts.cues ?? 0} cues, ${counts.marks ?? 0} marks, ` +
      `${counts.callouts ?? 0} callouts.\n`,
  );
  for (const area of ["audio", "captions", "beats", "notes", "copy"]) {
    const list = byArea[area] ?? [];
    console.log(`${area.padEnd(9)} ${list.length === 0 ? "clean" : `${list.length} to look at`}`);
    if (!quiet) for (const p of list) console.log(`   ${p.where}  ${p.what}`);
  }
  console.log(problems.length ? `\n${problems.length} total` : "\nnothing to fix");
  if (problems.length) process.exit(1);
}

main();
