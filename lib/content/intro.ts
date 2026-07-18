import { Slide } from "./types";

/**
 * Course intro, five slides. Copy is taken verbatim from the produced
 * deck (PDF pages i to v). The scripts' voiceover lands here in the
 * audio pass; each slide's audio.src is the insertion point.
 */
export const introSlides: Slide[] = [
  {
    kind: "hero",
    id: "welcome",
    crumb: "COURSE INTRO",
    tag: "01 OF 05",
    number: "i",
    audio: { src: null },
    surface: "cream",
    eyebrow: "Build your marketing foundation",
    heading: "A working marketing foundation, in one *place*.",
    sub: "Three layers. Seven foundations. One strategic plan that's *actually yours*.",
    meta: [
      { label: "Length", value: "About 4 hours, self-paced" },
      { label: "Output", value: "Your Marketing Foundation *Map*" },
      { label: "Modules", value: "7 modules + course intro" },
    ],
  },
  {
    kind: "system",
    id: "system",
    crumb: "COURSE INTRO",
    tag: "02 OF 05",
    number: "ii",
    audio: { src: null },
    eyebrow: "The system this course teaches",
    heading: "Three layers. Seven *foundations*.",
    layers: [
      {
        label: "Layer 01 · Get found",
        accent: "teal",
        sub: "So people who need you can *discover* you.",
        items: [
          { num: "01", text: "Local *Presence*" },
          { num: "02", text: "Online *Presence*" },
        ],
      },
      {
        label: "Layer 02 · Get chosen",
        accent: "rust",
        sub: "So they pick *you* over alternatives.",
        items: [
          { num: "03", text: "Reviews and Social *Proof*" },
          { num: "04", text: "Referral *System*" },
        ],
      },
      {
        label: "Layer 03 · Be remembered",
        accent: "olive",
        sub: "So you stay *present* until they're ready.",
        items: [
          { num: "05", text: "Brand *Awareness*" },
          { num: "06", text: "Owned *Audience*" },
          { num: "07", text: "Authority *Building*" },
        ],
      },
    ],
  },
  {
    kind: "cardList",
    id: "tool",
    crumb: "COURSE INTRO",
    tag: "03 OF 05",
    number: "iii",
    audio: { src: null },
    eyebrow: "Your working document",
    heading: "The Marketing Foundation *Map*.",
    intro:
      "A browser-based tool that holds your work across every module of this course. You'll start using it at the end of Module 1, when you have a positioning statement to save.",
    card: {
      title: "Marketing Foundation *Map*",
      subtitle: "Used throughout the course. Saves your work as you go.",
      items: [
        "*Module 1*: save your positioning statement",
        "*Module 2*: run your diagnostic and audit",
        "*Modules 3 to 7*: build your foundation strategies",
        "*The Plan tab*: compiles everything into one document you can save and reference",
      ],
    },
  },
  {
    kind: "rows",
    id: "arc",
    crumb: "COURSE INTRO",
    tag: "04 OF 05",
    number: "iv",
    audio: { src: null },
    eyebrow: "What you'll do across the course",
    heading: "The *arc*.",
    rows: [
      {
        label: "Module 01",
        text: "*Positioning*. Three questions, one working statement.",
      },
      {
        label: "Module 02",
        text: "*Diagnostic and audit*. Six questions, then an audit. Output: a priority order and a starting point for your build.",
      },
      {
        label: "Modules 03 to 07",
        text: "*The foundations*. The seven foundations every service business needs. Concepts to understand. You take all five.",
      },
      {
        label: "Module 08",
        text: "*Your foundation plan*. Returns to your audit with full understanding. What to build first, second, third.",
      },
    ],
  },
  {
    kind: "prose",
    id: "first-step",
    crumb: "COURSE INTRO",
    tag: "05 OF 05",
    number: "v",
    audio: { src: null },
    eyebrow: "Your first step",
    heading: "*Positioning*, first.",
    quote:
      "Everything that follows in this course depends on having a clear positioning statement.",
    paragraphs: [
      "The diagnostic uses it. The audit references it. The foundation modules are *built around* it.",
      "Don't skip ahead. Don't skim Module 1. Take the hour, do the work, and meet me there.",
    ],
  },
];
