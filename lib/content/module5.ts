import { Slide } from "./types";

/**
 * Module 5: Referral system. 21 slides, copy verbatim from the
 * produced deck (module5slides.html); the script confirms every
 * on-slide line. The deck's tool moment (slide 20) is the in-app
 * referral map, so the "open the Map" instruction is adapted.
 */

const S1 = "MODULE 5 · SECTION 1";
const S2 = "MODULE 5 · SECTION 2";
const S3 = "MODULE 5 · SECTION 3";
const S4 = "MODULE 5 · SECTION 4";

export const module5Slides: Slide[] = [
  // 01 · Module opener
  {
    kind: "hero",
    id: "m5-title",
    crumb: "BUILD YOUR MARKETING FOUNDATION",
    tag: "MODULE 5 · REFERRAL SYSTEM",
    number: "01",
    audio: { src: null },
    surface: "plum",
    strata: 4,
    heading: "Referral *system*.",
    sub: "The work of turning referrals from something that happens to you into something your business produces on purpose.",
    meta: [
      { label: "Length", value: "20 minutes" },
      { label: "Output", value: "Your referral map" },
      { label: "Module", value: "5 of 8" },
    ],
  },

  // 02 · The luck belief
  {
    kind: "frame",
    id: "m5-luck",
    crumb: S1,
    tag: "FRAME",
    number: "02",
    audio: { src: null },
    heading: "Referrals feel like *luck.*",
    sub: "Something you hope for and can't influence. That belief is the thing this module is here to take apart.",
  },

  // 03 · The concept
  {
    kind: "framework",
    id: "m5-concept",
    crumb: S1,
    tag: "FRAMEWORK",
    number: "03",
    audio: { src: null },
    heading: "A referral is an *event* with causes.",
    paragraphs: [
      "Module 4 showed that a referral is credibility you didn't author. This module asks a different question. Not is this proof, but can I cause more of it.",
      "A referral feels like luck because its causes are quiet and spread out. They are still causes. Name them and it stops being weather: parts you can build, parts you can fix.",
    ],
  },

  // 04 · The loop
  {
    kind: "frame",
    id: "m5-loop-open",
    crumb: S2,
    tag: "THE LOOP",
    number: "04",
    audio: { src: null },
    heading: "A referral runs in *three stages.*",
    sub: "Each stage has a condition that has to hold. When a referral fails, it fails at one of them, and you can tell which.",
  },

  // 05 · The three stages
  {
    kind: "cards",
    id: "m5-three-stages",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "05",
    audio: { src: null },
    eyebrow: "The referral loop",
    heading: "Three stages, and the last one *feeds* the first.",
    cards: [
      {
        label: "Stage 01",
        title: "Earn",
        text: "Work *specific* enough to refer. Not a happy client, a client who can name what you did.",
      },
      {
        label: "Stage 02",
        title: "Ask",
        text: "You hand over the words and the fit. A good ask carries who you are *right* for.",
      },
      {
        label: "Stage 03",
        title: "Keep",
        text: "The referral gets acknowledged, so the channel stays alive. A silent one *closes*.",
      },
    ],
    footnote:
      "Keep feeds Earn: a referral handled well makes the next one likelier. That is why it is a loop and not a list.",
  },

  // 06 · Earn
  {
    kind: "detail",
    id: "m5-earn",
    crumb: S2,
    tag: "STAGE 01",
    number: "06",
    audio: { src: null },
    eyebrow: "Earn",
    heading: "Give them something *nameable.*",
    cols: [
      {
        label: "What the stage is",
        text: "A referral needs something to carry. Not satisfaction, which is a feeling, but a result they can put into words.",
      },
      {
        label: "For a client",
        text: "An outcome they lived through. “She fixed the thing I was stuck on” travels. “She's *great*” does not.",
      },
      {
        label: "For a peer",
        text: "A judgment they would stake their own name on. Peers refer once they have seen what you are the right call for.",
      },
    ],
  },

  // 07 · Ask
  {
    kind: "detail",
    id: "m5-ask",
    crumb: S2,
    tag: "STAGE 02",
    number: "07",
    audio: { src: null },
    eyebrow: "Ask",
    heading: "Make the referral *askable.*",
    cols: [
      {
        label: "What the stage is",
        text: "They know you welcome referrals, and who you are right for. Asking feels like begging when the ask has no shape.",
      },
      {
        label: "For a client",
        text: "A light mention that names who you help. “If you ever meet someone *circling* the same decision” is a signal to watch for, not a quota.",
      },
      {
        label: "For a peer",
        text: "A relationship where routing work to each other is mutual and plain. Reciprocity, not imposition.",
      },
    ],
  },

  // 08 · Keep
  {
    kind: "detail",
    id: "m5-tend",
    crumb: S2,
    tag: "STAGE 03",
    number: "08",
    audio: { src: null },
    eyebrow: "Keep",
    heading: "Keep the channel *alive.*",
    cols: [
      {
        label: "What the stage is",
        text: "The referrer learns it landed. One that vanishes into silence teaches them that referring you leads nowhere.",
      },
      {
        label: "For a client",
        text: "A specific thank-you. They took a small social risk for you. *Acknowledging* it plainly is what makes a second referral natural.",
      },
      {
        label: "For a peer",
        text: "Reciprocity and honest contact. A peer relationship is kept, not transacted.",
      },
    ],
    footnote: "Staying in contact → an owned channel (Module 7).",
  },

  // 09 · Incentive vs acknowledgement
  {
    kind: "principle",
    id: "m5-clean-judgment",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "09",
    audio: { src: null },
    sans: true,
    headline: "A referral is a judgment. Pay for it and you have *bought* something else.",
    sub: "An honest referral is one person telling another the truth as they see it. The moment a fee rides on it the judgment bends, and a prospect can feel the bend. A thank-you rewards the person without renting their opinion. *Keep the judgment clean and the referral keeps its worth.*",
  },

  // 10 · The loop compounds
  {
    kind: "principle",
    id: "m5-compounds",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "10",
    audio: { src: null },
    sans: true,
    headline: "A referral system pays you back *slowly*, then steadily.",
    sub: "One referral, kept well, does not just bring one client. It tells the referrer that referring you works, which makes the next one likelier. That is the loop closing. The reason referrals feel like luck is that the loop runs too slowly to watch. Build it on purpose and the same slowness becomes *reliability.*",
  },

  // 11 · Which stage is yours
  {
    kind: "frame",
    id: "m5-yours-open",
    crumb: S3,
    tag: "CALIBRATION",
    number: "11",
    audio: { src: null },
    eyebrow: "Every loop leaks somewhere",
    heading: "Which stage is *yours* to fix?",
    sub: "The loop has three stages. Most businesses are strong at one and leak at another. Your weak stage is the one to work.",
  },

  // 12 · Five examples
  {
    kind: "table",
    id: "m5-five-businesses",
    crumb: S3,
    tag: "CALIBRATION",
    number: "12",
    audio: { src: null },
    heading: "Same loop. *Different* engine.",
    leftLabel: "The business",
    rightLabel: "Where the referral engine runs, and its weak stage",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Peer engine.",
        text: "Doctors and therapists route clients to her. *Keep* is the weak stage: those relationships go quiet between referrals, and a quiet one cools.",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Client engine, plus partners.",
        text: "Happy homeowners and realtors. *Ask* is the weak stage: he never mentions referrals, and assumes good work travels alone.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "Peer engine.",
        text: "Planners and venues are her channel. *Earn* is the weak stage: they cannot name what makes her documentary style specific, so they refer her generically.",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Both engines.",
        text: "GP and physio referrals plus patient word of mouth. *Ask* is the weak stage: the GPs were never told which patients he is right for.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Client engine, plus stylist overflow.",
        text: "Other stylists send her vivids clients. *Keep* is the weak stage: she never circles back, so the overflow is sporadic.",
      },
    ],
  },

  // 13 · Earn cannot be skipped
  {
    kind: "principle",
    id: "m5-earn-first",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "13",
    audio: { src: null },
    sans: true,
    headline: "No ask repairs work that gave them *nothing* to say.",
    sub: "It is tempting to treat referrals as an asking problem, because asking is the visible part. But if a client cannot name what you did, a better-worded request only produces a vaguer compliment. Earn comes first for a reason. *The ask can only carry what the work already made nameable.*",
  },

  // 14 · A bad-fit referral has a cost
  {
    kind: "principle",
    id: "m5-fit",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "14",
    audio: { src: null },
    sans: true,
    headline: "A referral pointed at the *wrong* person costs more than no referral.",
    sub: "A referrer who cannot describe who you are right for sends people you cannot help. Each one costs a consultation and teaches them that referring you does not work. *A good referral is aimed, not just sent.*",
  },

  // 15 · Weak vs strong ask
  {
    kind: "compare",
    id: "m5-compare",
    crumb: S4,
    tag: "CALIBRATION",
    number: "15",
    audio: { src: null },
    eyebrow: "Weak vs. strong, on a single referral ask",
    heading: "What does a *strong* ask sound like?",
    weak: {
      quote: "If you know anyone who needs my services, send them my way!",
      text: "Names no person and no problem. The referrer has nothing to watch for, so they watch for nothing. It also sounds like a favor being asked, which is what makes it feel like begging.",
    },
    strong: {
      quote:
        "If a friend ever mentions they are *dreading* their family photos, that is exactly who I am for. Feel free to point them to me.",
      text: "Names the person and the moment. The referrer now has a signal to recognize. It gives them a way to help, rather than a job to do.",
    },
  },

  // 16 · The speed of relationships
  {
    kind: "principle",
    id: "m5-relationships",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "16",
    audio: { src: null },
    sans: true,
    headline: "A referral system is built in *relationships*, not campaigns.",
    sub: "There is no launch week for referrals. The loop runs at the speed of the relationships it is made of. One honest ask, one specific thank-you, one relationship kept warm. *A referral system is a habit wearing the costume of a strategy.*",
  },

  // 17 · Fix the weak stage
  {
    kind: "framework",
    id: "m5-weak-stage",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "17",
    audio: { src: null },
    eyebrow: "If the loop feels like a lot",
    heading: "Fix the *weak* stage, not all three.",
    paragraphs: [
      "You do not rebuild the whole loop at once. Each of the five had one weak stage, not three. If referrals reach you at all, the loop runs and leaks at one point.",
      "Pick one source you already have. Walk it through Earn, Ask and Keep and find where it leaks. One stage repaired restores the loop.",
    ],
  },

  // 18 · Starting with no system
  {
    kind: "framework",
    id: "m5-no-loop",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "18",
    audio: { src: null },
    eyebrow: "If you have no referral system yet",
    heading: "No loop yet? *Start* at Earn.",
    bullets: true,
    paragraphs: [
      "If referrals do not reach you yet, you have no weak stage to repair. You have a loop to begin, and it begins with Earn.",
      "A referral has nothing to travel on until your work is nameable. The first move is making one piece of it specific enough to describe in a plain sentence. Ask and Keep come next.",
    ],
  },

  // 19 · Referrals route by clarity
  {
    kind: "principle",
    id: "m5-clarity",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "19",
    audio: { src: null },
    sans: true,
    headline: "People refer the businesses they can *describe* in one sentence.",
    sub: "A referral happens in a conversation you are not in. All the referrer has is the sentence they can say about you. Clear, and it travels. Vague, and it never gets made. *The clearer you are to describe, the more often you get described.*",
  },

  // 20 · The referral map (interactive)
  {
    kind: "referralMap",
    id: "m5-tool",
    crumb: "MODULE 5 · CLOSING",
    tag: "TOOL",
    number: "20",
    audio: { src: null },
    eyebrow: "Your turn",
    heading: "Map your *loop.*",
    paragraphs: [
      "Pick one source you already have, a kind of client or a particular peer. If none reach you yet, name the one you are building toward.",
      "Mark Earn, Ask and Keep as solid or leaking. Then name the weak stage and one concrete change to it.",
    ],
  },

  // 21 · Closing bridge
  {
    kind: "prose",
    id: "m5-bridge",
    crumb: "MODULE 5 · END",
    tag: "NEXT: BRAND AWARENESS",
    number: "21",
    audio: { src: null },
    surface: "plum",
    mapFilled: 4,
    eyebrow: "End of Module 5",
    heading: "Referrals are a *system* now.",
    paragraphs: [
      "So far, your foundation works on people who already know you, or are sent by someone who does. Next: becoming known by the people you want, before they are looking. Brand Awareness, Module 6.",
    ],
  },
];
