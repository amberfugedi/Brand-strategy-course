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
      cues: [2.9, 17.3, 21.3],
    },
    surface: "cream",
    eyebrow: "Build your marketing foundation",
    heading: "A working marketing foundation, in one *place*.",
    whoFor:
      "If you're here, you have a service business with paying clients. You've been at it long enough to know that marketing advice comes at you constantly, and most of it *doesn't fit*. That's what this course is for.",
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
      cues: [5.0, 10.7, 15.4, 20.1, 38.9],
    },
    eyebrow: "The system this course teaches",
    heading: "Three layers. Seven *foundations*.",
    layers: [
      {
        label: "Layer 01 · Get found",
        accent: "teal",
        sub: "The infrastructure that makes you *discoverable* to the people who need what you do.",
        items: [{ num: "02", text: "Get *Found*" }],
      },
      {
        label: "Layer 02 · Get chosen",
        accent: "rust",
        sub: "The signals that make someone pick *you* over the alternatives.",
        items: [
          { num: "03", text: "Earned *Proof*" },
          { num: "04", text: "Referral *System*" },
        ],
      },
      {
        label: "Layer 03 · Be remembered",
        accent: "olive",
        sub: "The work that keeps you *present* with people who aren't ready to buy yet.",
        items: [
          { num: "05", text: "Brand *Awareness*" },
          { num: "06", text: "Owned *Audience*" },
          { num: "07", text: "Authority *Building*" },
        ],
      },
    ],
    base: {
      label: "Foundation 01 · Positioning",
      text: "Where the course starts. Not because it outranks the rest, but because it's the *upstream answer* the rest depend on.",
    },
    note: "Every service business needs all *seven*. Not every service business needs to build them in the same order. That's what the audit is for.",
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
      "Your working document, built into the course itself. When it's time to do the work, the tool is right there on the slide. Nothing to open, nothing to manage.",
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
      cues: [2.2, 6.6, 15.8, 32.1],
    },
    eyebrow: "What you'll do across the eight modules",
    heading: "The *arc*.",
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
      cues: [0.3, 5.4, 10.9],
    },
    eyebrow: "Your first step",
    heading: "*Positioning*, first.",
    quote:
      "Everything that follows in this course depends on having a clear positioning statement.",
    paragraphs: [
      "The diagnostic uses it. The audit references it. The foundation modules are *built around* it.",
      "Don't skip ahead. Don't skim Module 1. Take the time, do the work, and meet me there.",
    ],
  },
];
