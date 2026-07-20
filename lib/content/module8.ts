import { Slide } from "./types";

/**
 * Module 8: Authority building, and the close of the course. 20
 * slides, copy verbatim from module8slides.html (the deck is the
 * canonical source). Interactions: naming your kind of authority
 * (slide 11) and the Foundation Plan capstone (slide 18); tool
 * copy is adapted where the deck points at the external Map, since
 * the tool is embedded in the slide here.
 */

const S1 = "MODULE 8 · SECTION 1";
const S2 = "MODULE 8 · SECTION 2";
const S3 = "MODULE 8 · SECTION 3";
const S4 = "MODULE 8 · SECTION 4";
const S5 = "MODULE 8 · SECTION 5";

export const module8Slides: Slide[] = [
  // 01 · Module opener
  {
    kind: "hero",
    id: "m8-title",
    crumb: "BUILD YOUR MARKETING FOUNDATION",
    tag: "MODULE 8 · AUTHORITY BUILDING",
    number: "01",
    audio: { src: null },
    surface: "plum",
    eyebrow: "Module 8 · The final module",
    heading: "Authority *building*.",
    sub: "The work of being trusted as the genuine expert in your field. And the close of the course: assembling everything into one plan.",
    meta: [
      { label: "Length", value: "22 minutes" },
      { label: "Output", value: "Your Foundation Plan" },
      { label: "Module", value: "8 of 8" },
    ],
  },

  // 02 · The qualifying belief
  {
    kind: "frame",
    id: "m8-belief",
    crumb: S1,
    tag: "FRAME",
    number: "02",
    audio: { src: null },
    eyebrow: "Where most people start",
    heading: "You do not feel like an *authority*.",
    sub: "Calling yourself one feels like bragging. Thought leadership looks fake. And underneath: a sense that you have not earned the title yet. That last belief is the one to take apart.",
  },

  // 03 · The concept
  {
    kind: "framework",
    id: "m8-concept",
    crumb: S1,
    tag: "FRAMEWORK",
    number: "03",
    audio: { src: null },
    eyebrow: "The concept",
    heading: "Authority is trusted *judgment*.",
    paragraphs: [
      "It is not a title you award yourself, and not a level you reach. Authority is the weight your word carries in your field: whether, when you say something, people move on it or weigh it like anyone else's.",
      "Which means it was never something to qualify for. It is something other people grant you, based on whether your judgment has been sound. Your clients have been doing exactly that, quietly, for as long as you have had clients. This module is about seeing that clearly, and building on it.",
    ],
  },

  // 04 · The types
  {
    kind: "frame",
    id: "m8-types-open",
    crumb: S2,
    tag: "THE TYPES",
    number: "04",
    audio: { src: null },
    eyebrow: "Not one thing",
    heading: "Authority comes in *kinds*.",
    sub: "Trusted judgment is not earned the same way for everyone. There are three kinds of authority, and knowing which is yours tells you what to build.",
  },

  // 05 · The three kinds
  {
    kind: "cards",
    id: "m8-three-kinds",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "05",
    audio: { src: null },
    eyebrow: "The three kinds of authority",
    heading: "Craft, expertise, *judgment*.",
    cards: [
      {
        label: "Kind 01",
        title: "Craft",
        text: "Trust earned by the visible quality of the work itself. The work is good enough, and distinct enough, that it *speaks* before you do.",
      },
      {
        label: "Kind 02",
        title: "Expertise",
        text: "Trust earned by defined, demonstrable knowledge. People rely on your word because of what you reliably and provably *know*.",
      },
      {
        label: "Kind 03",
        title: "Judgment",
        text: "Trust earned by a track record of calls that proved right. People trust not just your skill but your *read* of a situation.",
      },
    ],
    footnote:
      "Most businesses lead with one of the three. It is not a ranking, and you do not need all three. The next slides take craft and expertise in turn, then judgment.",
  },

  // 06 · Craft
  {
    kind: "detail",
    id: "m8-craft",
    crumb: S2,
    tag: "KIND 01",
    number: "06",
    audio: { src: null },
    eyebrow: "Craft",
    heading: "When the work *speaks* first.",
    cols: [
      {
        label: "What it is",
        text: "Authority that comes from the work being visibly, distinctly good. Not vouched for by others: seen directly. The craft itself is the argument.",
      },
      {
        label: "How it is earned",
        text: "By making the quality legible. Doing excellent work is the start; letting it be *seen*, clearly and often, is what turns it into authority.",
      },
      {
        label: "Where it leads",
        text: "People arrive already trusting you, because they have seen the work. The judgment is granted before the first conversation.",
      },
    ],
  },

  // 07 · Expertise
  {
    kind: "detail",
    id: "m8-expertise",
    crumb: S2,
    tag: "KIND 02",
    number: "07",
    audio: { src: null },
    eyebrow: "Expertise",
    heading: "When what you *know* is the proof.",
    cols: [
      {
        label: "What it is",
        text: "Authority that comes from defined, demonstrable knowledge. A depth in a specific area that others can rely on and, importantly, can verify.",
      },
      {
        label: "How it is earned",
        text: "By making the knowledge *visible* in how you work and explain: the question you think to ask, the distinction you draw that no one else did.",
      },
      {
        label: "Where it leads",
        text: "People bring you the hard cases, the ones that need someone who genuinely knows. Your word settles questions others leave open.",
      },
    ],
  },

  // 08 · Granted, not announced
  {
    kind: "principle",
    id: "m8-granted",
    crumb: S2,
    tag: "PRINCIPLE",
    number: "08",
    audio: { src: null },
    sans: true,
    eyebrow: "The bright line",
    headline: "Authority is granted, never *announced*.",
    sub: "The loud version of authority is a performance: the thought-leader pose, the expert label applied to oneself, the confidence turned up until it reads as credibility. It can draw a crowd. It cannot draw trust, because trust is a verdict other people reach, and they reach it by watching whether your judgment holds. You do not get to award yourself the verdict. *Announced authority is the costume. Granted authority is the thing.*",
  },

  // 09 · Which is yours
  {
    kind: "frame",
    id: "m8-yours-open",
    crumb: S3,
    tag: "WHICH IS YOURS",
    number: "09",
    audio: { src: null },
    eyebrow: "The third kind, and your own",
    heading: "Then: which kind is *yours*?",
    sub: "One kind of authority is left to look at, the deepest one. Then the real question: which of the three is the one you already have, and should build.",
  },

  // 10 · Judgment
  {
    kind: "detail",
    id: "m8-judgment",
    crumb: S3,
    tag: "KIND 03",
    number: "10",
    audio: { src: null },
    eyebrow: "Judgment",
    heading: "When your *read* is what they trust.",
    cols: [
      {
        label: "What it is",
        text: "Authority that comes from a track record of calls that proved right. Not only skill, not only knowledge: a trusted read of which way a situation will go.",
      },
      {
        label: "How it is earned",
        text: "Slowly, and only by being right in view of others, over time. It is the hardest kind to build and the hardest to fake, because it needs *history.*",
      },
      {
        label: "Where it leads",
        text: "People consult you before deciding, not after. They want your call on the situation itself, ahead of the work.",
      },
    ],
  },

  // 11 · Name your kind (interactive)
  {
    kind: "authorityKind",
    id: "m8-name-kind",
    crumb: S3,
    tag: "FRAMEWORK",
    number: "11",
    audio: { src: null },
    eyebrow: "Finding your kind",
    heading: "You already have one. *Name* it.",
    intro:
      "You are not choosing a kind of authority to start from scratch. You are identifying the one you have already been earning. The clearest signal is in what your best clients say when they explain why they chose you.",
  },

  // 12 · Shown by doing
  {
    kind: "principle",
    id: "m8-shown",
    crumb: S3,
    tag: "PRINCIPLE",
    number: "12",
    audio: { src: null },
    sans: true,
    eyebrow: "On showing",
    headline: "Whichever kind is yours, it is shown by *doing*.",
    sub: "Craft is shown by letting the work be seen. Expertise is shown in the question you ask that no one else did. Judgment is shown by making a call where others can watch it land. None of the three is shown by describing yourself. Authority is demonstrated, in the ordinary course of the work, or it is not built at all. *The work is the argument. Your job is to make it visible.*",
  },

  // 13 · Calibration opener
  {
    kind: "frame",
    id: "m8-calibration-open",
    crumb: S3,
    tag: "CALIBRATION",
    number: "13",
    audio: { src: null },
    eyebrow: "Not the same for everyone",
    heading: "Five businesses, five *kinds*.",
    sub: "Each of the five leads with a different kind of authority, and for one of them it weighs very little. The honest answer is the calibration.",
  },

  // 14 · Five examples
  {
    kind: "table",
    id: "m8-five-businesses",
    crumb: S3,
    tag: "CALIBRATION",
    number: "14",
    audio: { src: null },
    eyebrow: "Five businesses, five honest answers",
    heading: "Which kind, and how much it *weighs*.",
    leftLabel: "The business",
    rightLabel: "The kind of authority it leads with",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Expertise.",
        text: "Trust rests on clinical depth and the regard of peers. Shown not by self-promotion but in the precision of how she works. Weighs *heavily.*",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Minor. Say so.",
        text: "A pressure washer is not building thought leadership. His honest ceiling is thin craft authority: reliably trusted to do the job well. That is enough.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "Craft.",
        text: "Her documentary style is distinct and visible. The work itself is the argument; her authority grows every time it is *seen.*",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Expertise.",
        text: "Clinical trust in a defined area. Patients and referring GPs rely on what he demonstrably knows about a specific kind of case.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Craft, into specialism.",
        text: "Her vivid work is unmistakable and recognized. Seen often enough, craft authority becomes a named specialism. Weighs *heavily.*",
      },
    ],
  },

  // 15 · Compounding
  {
    kind: "framework",
    id: "m8-compounding",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "15",
    audio: { src: null },
    eyebrow: "How authority compounds",
    heading: "Authority is the foundation the others *feed*.",
    paragraphs: [
      "Authority is its own foundation, the seventh. It is also the one the previous six quietly build. A clear position makes your judgment legible. Earned proof is others confirming it. Referrals carry it. Awareness gives it room to be seen. An owned audience lets it be shown again and again.",
      "You do not build authority by adding a separate activity on top. You build it by doing the other six well, in view, over time. That is why it is last: it is what the foundation *becomes.*",
    ],
  },

  // 16 · Slow and durable
  {
    kind: "principle",
    id: "m8-slow",
    crumb: S4,
    tag: "PRINCIPLE",
    number: "16",
    audio: { src: null },
    sans: true,
    eyebrow: "On time",
    headline: "Authority is the slowest foundation, and the most *durable*.",
    sub: "It cannot be rushed, because it is a verdict reached by other people watching your judgment hold up, and watching takes time. That same slowness is its strength. Authority built slowly, on real work, does not collapse when a platform changes or a trend passes. It is the part of your marketing that compounds quietly for years. *Slow to build is also slow to lose.*",
  },

  // 17 · The Foundation Plan opener
  {
    kind: "frame",
    id: "m8-plan-open",
    crumb: S5,
    tag: "THE FOUNDATION PLAN",
    number: "17",
    audio: { src: null },
    eyebrow: "Seven foundations, one plan",
    heading: "Now you build the *plan*.",
    sub: "Every module wrote to a tab. The course closes by pulling all seven together into one plan, sequenced to the time you actually have.",
  },

  // 18 · The Foundation Plan capstone (interactive)
  {
    kind: "foundationPlan",
    id: "m8-tool",
    crumb: S5,
    tag: "TOOL · CAPSTONE",
    number: "18",
    audio: { src: null },
    eyebrow: "Now: assemble your Foundation Plan",
    heading: "*Sequence* the seven.",
    paragraphs: [
      "The plan below has already gathered what you marked in all seven modules: positioning, the audit, get found, earned proof, referrals, awareness, owned audience, and the authority you just named.",
      "You will not act on all seven at once. With five to ten hours a week, that would stall. Instead, sequence them: first, next, later. First is the one or two that most need work and most repay it now.",
    ],
  },

  // 19 · How to sequence
  {
    kind: "framework",
    id: "m8-sequence",
    crumb: S5,
    tag: "FRAMEWORK",
    number: "19",
    audio: { src: null },
    eyebrow: "Reading your plan",
    heading: "One thing at a time, in the right *order*.",
    paragraphs: [
      "A good plan is not the longest one. It is the one you will actually follow. Put first the foundation that is both weakest and most load-bearing, the one whose absence is quietly costing you the most. Let the rest wait without guilt.",
      "The seven foundations do not expire. A plan sequenced to five hours a week, and kept, will outbuild an ambitious plan that stalls in a month. You are not behind. You have a foundation and an *order* to build it in.",
    ],
  },

  // 20 · The course close
  {
    kind: "prose",
    id: "m8-close",
    crumb: "MODULE 8 · END",
    tag: "END OF THE COURSE",
    number: "20",
    audio: { src: null },
    surface: "plum",
    eyebrow: "End of Build Your Marketing Foundation",
    heading: "A foundation, and a *plan*.",
    paragraphs: [
      "Seven foundations: get found, get chosen, be remembered. You did not need more marketing. You needed it to be clear, considered, and yours. It is. Now build it, in the order you set, at the pace your work allows.",
    ],
  },
];
