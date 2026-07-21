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
    eyebrow: "Module 5",
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
    eyebrow: "Where most people start",
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
    eyebrow: "The concept",
    heading: "A referral is an *event* with causes.",
    paragraphs: [
      "Module 4 showed that other people vouching for you is proof: a referral is credibility you didn't author. This module picks up the same fact and asks a different question. Not is this proof, but can I cause more of it.",
      "A referral feels like luck because its causes are quiet and spread out over time. They are still causes. Name them and a referral stops being weather. It becomes a system, something with parts you can build and parts you can fix.",
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
    eyebrow: "The map",
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
        text: "The work produces something *specific* enough to refer. Not just a happy client, a client who can name what you did and who it was for.",
      },
      {
        label: "Stage 02",
        title: "Ask",
        text: "You make the referral askable, and you do it by handing over the words and the fit. A good ask carries who you are *right* for.",
      },
      {
        label: "Stage 03",
        title: "Keep",
        text: "The referral gets acknowledged, so the relationship stays alive. A kept channel produces again. A silent one *closes*.",
      },
    ],
    footnote:
      "Keep feeds Earn: a referral handled well makes the next one likelier. That is why it is a loop and not a list. The next three slides take each stage in turn.",
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
        text: "A referral needs something to carry. Not satisfaction, which is a feeling, but a result a person can put into words: what you did, and who it was for.",
      },
      {
        label: "For a client",
        text: "A specific outcome they lived through. “She fixed the thing I was stuck on” travels. “She's *great*” does not. The work itself has to be legible to them.",
      },
      {
        label: "For a peer",
        text: "A professional judgment they would stake their own name on. A peer refers you when they have seen, clearly, the kind of work you are the right call for.",
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
        text: "The other person knows you welcome referrals and knows who you are right for. If asking feels like begging, it is usually because the ask has no shape. A specific ask is not a favor extracted.",
      },
      {
        label: "For a client",
        text: "A light, well-timed mention that names the person you help. “If you ever meet someone *circling* the same decision” gives them a signal to watch for, not a quota.",
      },
      {
        label: "For a peer",
        text: "An ongoing professional relationship where routing work to each other is mutual and plain. With peers, the ask is reciprocity, not imposition.",
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
        text: "The person who referred you learns it landed. A referral that vanishes into silence teaches the referrer that referring you leads nowhere, and they quietly stop.",
      },
      {
        label: "For a client",
        text: "A genuine, specific thank-you. They took a small social risk on your behalf. *Acknowledging* that, plainly, is what makes a second referral feel natural.",
      },
      {
        label: "For a peer",
        text: "Real reciprocity and staying in honest professional contact. A peer relationship is kept, not transacted: it stays warm because both people keep showing up.",
      },
    ],
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
    eyebrow: "The bright line",
    headline: "A referral is a judgment. Pay for it and you have *bought* something else.",
    sub: "An honest referral is one person telling another the truth as they see it. The moment a fee or a trade rides on it, the judgment bends, and a prospect can feel the bend. Some fields forbid paid referral outright, and for good reason. Acknowledgement is not payment: a genuine thank-you rewards the person without renting their opinion. *Keep the judgment clean and the referral keeps its worth.*",
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
    eyebrow: "On compounding",
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
    eyebrow: "Five businesses, five referral engines",
    heading: "Same loop. *Different* engine.",
    leftLabel: "The business",
    rightLabel: "Where the referral engine runs, and its weak stage",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Peer engine.",
        text: "Doctors and other therapists route clients to her. Earn is strong. *Keep* is the weak stage: those peer relationships go quiet between referrals, and a quiet one cools.",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Client engine, plus partners.",
        text: "Happy homeowners and realtor contacts. Earn and Keep are fine. *Ask* is the weak stage: he never actually mentions referrals, and assumes good work travels alone.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "Peer engine.",
        text: "Planners and venues are her core channel. Ask is handled. *Earn* is the weak stage: planners cannot name what makes her documentary style specific, so they refer her generically.",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Both engines.",
        text: "GP and physio referrals plus patient word of mouth. *Ask* is the weak stage: he has never told the GPs which patients he is the right call for, so the fit is hit and miss.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Client engine, plus stylist overflow.",
        text: "Other stylists send vivids clients to her. Earn is vivid. *Keep* is the weak stage: she never circles back to the stylists who sent work, so the overflow is sporadic.",
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
    eyebrow: "On the first stage",
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
    eyebrow: "On fit",
    headline: "A referral pointed at the *wrong* person costs more than no referral.",
    sub: "A willing referrer who cannot describe who you are right for will send people you cannot help. Each one costs a consultation, costs the prospect their time, and quietly teaches the referrer that referring you does not work. This is why the ask has to carry the fit, not just the name. *A good referral is aimed, not just sent.*",
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
    eyebrow: "On patience",
    headline: "A referral system is built in *relationships*, not campaigns.",
    sub: "There is no launch week for referrals. The loop runs at the speed of the relationships it is made of, which is slow, and that is correct. The work is small and recurring: one honest ask, one specific thank-you, one peer relationship kept warm. *A referral system is a habit wearing the costume of a strategy.*",
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
      "You do not rebuild the whole loop at once. The five businesses each had one weak stage, not three. If referrals already reach you, even occasionally, your loop is running and leaking at one point.",
      "Pick one referral source you already have, a kind of client or a particular peer. Walk it through Earn, Ask, and Keep, and find the stage where it leaks. One stage, repaired properly, restores the whole loop. The next slide is for the buyer with no loop yet.",
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
    paragraphs: [
      "If referrals do not really reach you yet, you do not have a weak stage to repair. You have a loop to begin, and it begins in one specific place. Not with asking. With Earn.",
      "A referral has nothing to travel on until your work is nameable. So the first move is not a better ask, it is making one piece of your work specific enough that a client or peer could describe it in a plain sentence. Ask and Keep are real, and they come next. Earn is where a loop that does not exist yet is built. This is the honest starting point, not a lesser one.",
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
    eyebrow: "The pattern",
    headline: "People refer the businesses they can *describe* in one sentence.",
    sub: "A referral happens in a conversation you are not in. All the referrer has is the sentence they can say about you. If that sentence is clear, the referral is accurate and it travels. If it is vague, it does not get made at all. *The clearer you are to describe, the more often you get described.* Referral and positioning are the same work, met again here.",
  },

  // 20 · The referral map (interactive)
  {
    kind: "referralMap",
    id: "m5-tool",
    crumb: "MODULE 5 · CLOSING",
    tag: "TOOL",
    number: "20",
    audio: { src: null },
    eyebrow: "Now: map your loop",
    heading: "Map your *loop.*",
    paragraphs: [
      "Pick one referral source you already have: a kind of client, or a particular peer. If referrals do not reach you yet, name the source you are building toward, and start at Earn.",
      "Walk that one source through all three stages. Mark Earn, Ask, and Keep as solid or leaking, then name the single weak stage and one concrete change you will make to it.",
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
    eyebrow: "End of Module 5",
    heading: "Referrals are a *system* now.",
    paragraphs: [
      "So far, your foundation works on people who already know you, or are sent by someone who does. Next: becoming known by the people you want, before they are looking. Brand Awareness, Module 6.",
    ],
  },
];
