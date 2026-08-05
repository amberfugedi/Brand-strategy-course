import { Slide } from "./types";

/**
 * Course intro, five slides. Copy matches the final course structure
 * and the recorded intro narration, split per slide under
 * public/audio/intro/. Each slide's segment plays on arrival through
 * the narration player, so the voice tracks what's on screen.
 */
export const introSlides: Slide[] = [
  {
    kind: "hero",
    id: "welcome",
    crumb: "COURSE INTRO",
    tag: "01 OF 05",
    number: "i",
    audio: {
      src: "/audio/intro/intro-1.mp3",
      // "If you're here" · "Three layers" · "Let's get into it"
      cues: [2.0, 18.0, 22.8],
    },
    surface: "cream",
    eyebrow: "Build your marketing foundation",
    heading: "A working marketing foundation, in one *place*.",
    whoFor:
      "For service businesses with paying clients, tired of marketing advice that doesn't *fit*.",
    host: true,
    sub: "Three layers. Seven foundations. Eight modules. One plan that's *actually yours*.",
    meta: [
      { label: "Length", value: "About 3 hours, self-paced" },
      { label: "Output", value: "Your Marketing Foundation *Map*" },
      { label: "Modules", value: "8 modules + course intro" },
    ],
  },
  {
    kind: "system",
    id: "system",
    crumb: "COURSE INTRO",
    tag: "02 OF 05",
    number: "ii",
    audio: {
      src: "/audio/intro/intro-2.mp3",
      // Layer 1 · Layer 2 · Layer 3 · positioning · "all seven"
      cues: [7.9, 14.2, 19.4, 44.4],
    },
    eyebrow: "The system this course teaches",
    heading: "Three layers. Seven *foundations*.",
    layers: [
      {
        label: "Layer one · Get found",
        accent: "teal",
        sub: "So people who need you can *discover* you.",
        items: [{ num: "02", text: "Get *Found*" }],
      },
      {
        label: "Layer two · Get chosen",
        accent: "rust",
        sub: "So they pick *you* over alternatives.",
        items: [
          { num: "03", text: "Earned *Proof*" },
          { num: "04", text: "Referral *System*" },
        ],
      },
      {
        label: "Layer three · Be remembered",
        accent: "olive",
        sub: "So you stay *present* until they're ready.",
        items: [
          { num: "05", text: "Brand *Awareness*" },
          { num: "06", text: "Owned *Audience*" },
          { num: "07", text: "Authority *Building*" },
        ],
      },
    ],
    base: {
      label: "The base · Positioning",
      text: "Where the course starts. The working statement all three layers are *built around*.",
    },
    note: "Every business needs all *seven*. The order they get built is what the audit decides.",
  },
  {
    kind: "cardList",
    id: "tool",
    crumb: "COURSE INTRO",
    tag: "03 OF 05",
    number: "iii",
    audio: { src: "/audio/intro/intro-3.mp3" },
    eyebrow: "Your working document",
    heading: "The Marketing Foundation *Map*.",
    intro:
      "Your working document, built into the *course* itself.",
    card: {
      title: "Marketing Foundation *Map*",
      subtitle: "Saves automatically as you go.",
      items: [
        "*Module 1*: your positioning statement",
        "*Module 2*: your diagnostic and audit results",
        "*Modules 3 to 8*: the strategy you mark in each foundation module",
        "*Module 8*: the Foundation Plan gathers everything. First, next, later.",
      ],
    },
  },
  {
    kind: "rows",
    id: "arc",
    crumb: "COURSE INTRO",
    tag: "04 OF 05",
    number: "iv",
    audio: {
      src: "/audio/intro/intro-4.mp3",
      // Module 1 · Module 2 · Modules 3-8 · Module 8's double work
      cues: [4.6, 11.0, 20.6, 38.0],
    },
    eyebrow: "What you'll do across the eight modules",
    heading: "How the course *runs*.",
    rows: [
      {
        label: "Module 01",
        text: "*Positioning*. Three questions, one working statement. Twenty-five minutes.",
      },
      {
        label: "Module 02",
        text: "*The foundation audit*. Six questions, then the audit itself. Output: a priority order, a gap list, and a starting point for your build.",
      },
      {
        label: "Modules 03 to 08",
        text: "*The foundations*. Each module goes deep on one: getting found, earned proof, referrals, awareness, owned audience, authority. You take all six.",
      },
      {
        label: "Module 08",
        text: "*Double work*. After teaching the last foundation, Module 8 closes the course: your Foundation Plan, the seven foundations sequenced to the hours you actually have.",
      },
    ],
  },
  {
    kind: "prose",
    id: "first-step",
    crumb: "COURSE INTRO",
    tag: "05 OF 05",
    number: "v",
    audio: {
      src: "/audio/intro/intro-5.mp3",
      // The quote · "The diagnostic uses it" · "Don't skip ahead"
      cues: [0.3, 7.8, 13.2],
    },
    eyebrow: "Your first step",
    heading: "*Positioning*, first.",
    quote:
      "Everything that follows in this course depends on having a clear positioning statement.",
    paragraphs: [
      "The diagnostic, the audit, and every foundation module are *built around* it.",
      "Don't skim Module 1. Do the work, and *meet me there*.",
    ],
  },
];
