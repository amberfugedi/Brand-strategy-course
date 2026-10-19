/**
 * Dump a module's beats, in reveal order, as JSON.
 *
 * `cues[k]` is the second at which beat k + 1 lands, so deriving cues
 * means knowing what each beat actually says. The order here mirrors
 * `stepsOf`: if the two ever disagree, beats land against the wrong
 * words, so the deriver checks the counts match before trusting this.
 *
 * Usage: tsx scripts/dump-beats.ts <module-number> > beats.json
 */

import { stepsOf } from "../lib/content/steps";

const n = process.argv[2];

async function main() {
  const mod = await import(`../lib/content/module${n}`);
  const slides = mod[`module${n}Slides`] as any[];

  const out = slides.map((s, i) => {
    // head is the beat's own name or label, which is what the
    // narration says when it turns to that beat; body is the rest.
    // Scored separately, because a short naming sentence otherwise
    // loses to the longer one that discusses the beat.
    const beats: { head: string; body: string }[] = [];
    const push = (head: string | undefined, ...rest: (string | undefined)[]) => {
      const body = rest.filter(Boolean).join(" ").trim();
      const h = (head ?? "").trim();
      if (h || body) beats.push({ head: h, body });
    };

    switch (s.kind) {
      case "framework":
        s.paragraphs.forEach((p: string) => push(undefined, p));
        if (s.callout) push(undefined, typeof s.callout === "string" ? s.callout : s.callout.text);
        break;
      case "cards":
        s.cards.forEach((c: any) => push(c.title, c.text));
        if (s.footnote) push(undefined, s.footnote);
        break;
      case "detail":
        s.cols.forEach((c: any) => push(c.label, c.text));
        break;
      case "table":
        s.rows.forEach((r: any) => push(r.name, r.lead, r.text));
        break;
      case "compare":
        push(s.weak?.title, s.weak?.text, s.weak?.line);
        push(s.strong?.title, s.strong?.text, s.strong?.line);
        break;
      case "prose":
        if (s.quote) push(undefined, s.quote);
        s.paragraphs.forEach((p: string) => push(undefined, p));
        break;
      case "patterns":
        s.patterns.forEach((p: any) => push(p.title, p.text));
        break;
      case "statements":
        s.statements.forEach((x: any) => push(undefined, typeof x === "string" ? x : x.text));
        break;
      case "rows":
        s.rows.forEach((r: any) => push(r.label, r.text));
        if (s.next) push(undefined, s.next);
        break;
      case "columns":
        s.columns.forEach((c: any) => push(c.title, c.text));
        break;
      case "examples":
        s.personas.forEach((p: any) => push(p.name, p.text));
        break;
      default:
        break;
    }

    return { slide: i + 1, kind: s.kind, steps: stepsOf(s), beats };
  });

  process.stdout.write(JSON.stringify(out, null, 1));
}

main();
