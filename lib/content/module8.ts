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
    strata: 7,
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
    heading: "Authority is earned *trust*.",
    paragraphs: [
      "Not a title you award yourself, and not a level you reach. Authority is the weight your word carries: whether people move on it, or weigh it like anyone else's.",
      "So it was never something to qualify for. Other people grant it, based on whether your judgment has been sound. Your clients have been doing that quietly for as long as you have had clients.",
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
    heading: "Authority comes in *kinds*.",
    sub: "Earned trust is not built the same way for everyone. There are three kinds of authority, and knowing which is yours tells you what to build.",
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
    heading: "Craft, expertise, *track record*.",
    cards: [
      {
        label: "Kind 01",
        title: "Craft",
        text: "Earned by the visible quality of the work. Good enough, and distinct enough, that it *speaks* before you do.",
      },
      {
        label: "Kind 02",
        title: "Expertise",
        text: "Earned by defined, demonstrable knowledge. People rely on your word for what you provably *know*.",
      },
      {
        label: "Kind 03",
        title: "Track record",
        text: "Earned by a history of calls that proved right. Not just your skill but your *read* of a situation.",
      },
    ],
    footnote:
      "Most businesses lead with one of the three. It is not a ranking, and you do not need all three.",
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
        text: "The work being visibly, distinctly good. Not vouched for by others, seen directly.",
      },
      {
        label: "How it is earned",
        text: "By making the quality legible. Doing the work is the start; letting it be *seen* is what turns it into authority.",
      },
      {
        label: "Where it leads",
        text: "People arrive already trusting you, because they have seen the work.",
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
        text: "Defined, demonstrable knowledge. Depth in a specific area others can rely on and verify.",
      },
      {
        label: "How it is earned",
        text: "By making the knowledge *visible* in how you work: the question you think to ask, the distinction no one else drew.",
      },
      {
        label: "Where it leads",
        text: "People bring you the hard cases. Your word settles questions others leave open.",
      },
    ],
  },

  // 08 · Granted, not announced
  {
    kind: "principle",
    id: "m8-granted",
    crumb: S2,
    tag: "THE TAKEAWAY",
    number: "08",
    audio: { src: null },
    sans: true,
    headline: "Authority is granted, never *announced*.",
    sub: "The loud version is a performance: the thought-leader pose, the expert label applied to oneself. It can draw a crowd. It cannot draw trust, because trust is a verdict other people reach by watching whether your judgment holds. *Announced authority is the costume. Granted authority is the thing.*",
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

  // 10 · Track record
  {
    kind: "detail",
    id: "m8-judgment",
    crumb: S3,
    tag: "KIND 03",
    number: "10",
    audio: { src: null },
    eyebrow: "Track record",
    heading: "When your *read* is what they trust.",
    cols: [
      {
        label: "What it is",
        text: "A track record of calls that proved right. Not only skill, but a trusted read of which way a situation will go.",
      },
      {
        label: "How it is earned",
        text: "Slowly, and only by being right in view of others. The hardest to build and the hardest to fake, because it needs *history.*",
      },
      {
        label: "Where it leads",
        text: "People consult you before deciding, not after. They want your call on the situation itself.",
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
    tag: "THE TAKEAWAY",
    number: "12",
    audio: { src: null },
    sans: true,
    headline: "Whichever kind is yours, it is shown by *doing*.",
    sub: "Craft is shown by letting the work be seen. Expertise, in the question no one else asked. A track record, by making a call where others watch it land. None of the three is shown by describing yourself. *The work is the argument. Your job is to make it visible.*",
  },

  // 13 · Calibration opener
  {
    kind: "frame",
    id: "m8-calibration-open",
    crumb: S3,
    tag: "CALIBRATION",
    number: "13",
    audio: { src: null },
    eyebrow: "Each leads with a different kind",
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
    heading: "Which kind, and how much it *weighs*.",
    leftLabel: "The business",
    rightLabel: "The kind of authority it leads with",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Expertise.",
        text: "Clinical depth and the regard of peers, shown in the precision of how she works. Weighs *heavily.*",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Minor. Say so.",
        text: "Not building thought leadership. His honest ceiling is thin craft authority: trusted to do the job well. Enough.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "Craft.",
        text: "Her documentary style is distinct and visible. Her authority grows every time the work is *seen.*",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Expertise.",
        text: "Clinical trust in a defined area. Patients and GPs rely on what he demonstrably knows.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Craft, into specialism.",
        text: "Her vivids work is unmistakable. Seen often enough, craft authority becomes a named specialism. Weighs *heavily.*",
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
      "Authority is the seventh foundation, and the one the previous six quietly build. Positioning makes your judgment legible. Earned proof confirms it. Referrals carry it. Awareness gives it room. An owned audience shows it again and again.",
      "You do not build it by adding an activity on top. You build it by doing the other six well, in view. That is why it is last: it is what the foundation *becomes.*",
    ],
  },

  // 16 · Slow and durable
  {
    kind: "principle",
    id: "m8-slow",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "16",
    audio: { src: null },
    sans: true,
    headline: "Authority is the slowest foundation, and the most *durable*.",
    sub: "It cannot be rushed, because it is a verdict other people reach by watching your judgment hold up. That slowness is its strength: authority built on real work does not collapse when a platform changes. *Slow to build is also slow to lose.*",
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
    eyebrow: "Your turn",
    heading: "Assemble your plan. *Sequence* the seven foundations.",
    paragraphs: [
      "The plan below has gathered what you marked across the course, from positioning through to the authority you just named.",
      "You will not act on all seven at once. Sequence them: first, next, later. First is the one or two that most need work and most repay it now.",
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
      "A good plan is the one you will actually follow. Put first the foundation that is both weakest and most load-bearing. Let the rest wait without guilt.",
      "The seven foundations do not expire. A modest plan you keep will outbuild an ambitious one that stalls in a month. You have a foundation and an *order* to build it in.",
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
    mapFilled: 7,
    eyebrow: "End of Build Your Marketing Foundation",
    heading: "A foundation, and a *plan*.",
    paragraphs: [
      "Seven foundations, across three layers: get found, get chosen, be remembered. You did not need more marketing. You needed it to be clear, considered, and yours. It is. Now build it, in the order you set, at the pace your work allows.",
    ],
  },
];
