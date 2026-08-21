import { Slide } from "./types";

/**
 * Module 4: Earned proof. 20 slides, copy verbatim from the produced
 * deck; the script confirms every on-slide line. The deck's tool
 * moment (slide 19) is the in-app proof inventory.
 */

const S1 = "MODULE 4 · SECTION 1";
const S2 = "MODULE 4 · SECTION 2";
const S3 = "MODULE 4 · SECTION 3";
const S4 = "MODULE 4 · SECTION 4";

export const module4Slides: Slide[] = [
  // 01 · Module opener
  {
    kind: "hero",
    id: "m4-title",
    crumb: "BUILD YOUR MARKETING FOUNDATION",
    tag: "MODULE 4 · EARNED PROOF",
    number: "01",
    audio: {
      src: "/audio/m4/m4-1.mp3",
      callouts: [
        { text: "Not what you say there. What other people say there.", at: 13.0, until: 19.0 },
        { text: "By the end: your proof inventory, and where the gaps are.", at: 19.9, until: 27.5 },
      ],
    },
    surface: "plum",
    strata: 3,
    heading: "Earned *proof*.",
    sub: "The evidence of your work that comes from outside you, and which kind your business needs.",
    meta: [
      { label: "Length", value: "20 minutes" },
      { label: "Output", value: "Your proof inventory" },
      { label: "Module", value: "4 of 8" },
    ],
  },

  // 02 · Asking feels like begging
  {
    kind: "frame",
    id: "m4-begging",
    crumb: S1,
    tag: "FRAME",
    number: "02",
    audio: {
      src: "/audio/m4/m4-2.mp3",
      callouts: [
        { text: "So you don't ask. The work was good, the client was happy, and the proof never gets created.", at: 18.5, until: 26.5 },
        { text: "That feeling is normal. It's based on a misunderstanding we're about to clear up.", at: 32.0, until: 36.9 },
      ],
    },
    heading: "Asking for proof feels like *begging*.",
    sub: "It doesn't have to. But the discomfort is real, and worth naming first.",
  },

  // 03 · The concept
  {
    kind: "framework",
    id: "m4-concept",
    crumb: S1,
    tag: "FRAMEWORK",
    number: "03",
    audio: { src: "/audio/m4/m4-3.mp3", cues: [0.5, 16.0] },
    heading: "You can't *author* your own credibility.",
    paragraphs: [
      "A prospect hears your claims and quietly discounts them. It's how people read anyone selling anything.",
      "What they can't discount is evidence you didn't write. That is earned proof, and it does the work your claims can't.",
    ],
  },

  // 04 · Proof comes from three places
  {
    kind: "frame",
    id: "m4-sources-open",
    crumb: S2,
    tag: "SOURCES",
    number: "04",
    audio: { src: "/audio/m4/m4-4.mp3" },
    heading: "Proof comes from *three places*.",
    sub: "Three different voices, each answering a different question in the prospect's head.",
  },

  // 05 · Three voices
  {
    kind: "cards",
    id: "m4-three-sources",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "05",
    audio: { src: "/audio/m4/m4-5.mp3", cues: [0.5, 17.4, 29.9] },
    eyebrow: "The three sources of earned proof",
    heading: "Three voices, three *questions* answered.",
    cards: [
      {
        label: "Source 01",
        title: "Client proof",
        text: "Your clients *vouch*. Answers: did people like me get what they wanted?",
      },
      {
        label: "Source 02",
        title: "Peer proof",
        text: "Other professionals *vouch*. Answers: do people who would know rate them?",
      },
      {
        label: "Source 03",
        title: "Institutional proof",
        text: "An outside body *vouches*. Answers: has anything with authority verified this?",
      },
    ],
    footnote:
      "Most businesses lean on one as primary. Which one depends on the business.",
  },

  // 06 · Client proof detail
  {
    kind: "detail",
    id: "m4-client-proof",
    crumb: S2,
    tag: "SOURCE 01",
    number: "06",
    audio: {
      src: "/audio/m4/m4-6.mp3",
      cues: [0.5, 16.9, 52.3],
      callouts: [
        { text: "Recency matters here more than anywhere. A recent review says you're still good now.", at: 28.0, until: 35.3 },
        { text: "Handling a hard review well, publicly, builds more trust than the praise does.", at: 43.4, until: 51.0 },
      ],
    },
    eyebrow: "Client proof",
    heading: "Your clients *vouch.*",
    cols: [
      {
        label: "What it is",
        text: "Reviews, testimonials, case studies, before-and-afters. Evidence the people you served got what they came for.",
      },
      {
        label: "When it matters most",
        text: "*Comparable* work, weighed against alternatives. A quick decision a star rating settles.",
      },
      {
        label: "When it matters less",
        text: "Ethics that restrict client testimony. Work so bespoke no two clients compare.",
      },
    ],
  },

  // 07 · Peer proof detail
  {
    kind: "detail",
    id: "m4-peer-proof",
    crumb: S2,
    tag: "SOURCE 02",
    number: "07",
    audio: {
      src: "/audio/m4/m4-7.mp3",
      cues: [0.5, 43.0, 59.8],
      callouts: [
        { text: "A doctor referring patients. A wedding planner recommending the photographer.", at: 18.8, until: 25.8 },
        { text: "They're staking their own credibility on you being good.", at: 28.8, until: 36.5 },
        { text: "Referrals as proof here. The system that produces them is Module 5.", at: 70.0, until: 78.0 },
      ],
    },
    eyebrow: "Peer proof",
    heading: "Other professionals *vouch.*",
    cols: [
      {
        label: "What it is",
        text: "Referrals from experts a prospect already trusts. The therapist a doctor sends patients to.",
      },
      {
        label: "When it matters most",
        text: "High-stakes work where a prospect wants a *vetted* name. Client proof restricted, peers the available voice.",
      },
      {
        label: "When it matters less",
        text: "A low-stakes, quick purchase. No natural network of adjacent professionals.",
      },
    ],
  },

  // 08 · Institutional proof detail
  {
    kind: "detail",
    id: "m4-institutional-proof",
    crumb: S2,
    tag: "SOURCE 03",
    number: "08",
    audio: { src: "/audio/m4/m4-8.mp3", cues: [0.5, 17.5, 34.1] },
    eyebrow: "Institutional proof",
    heading: "An outside body *vouches.*",
    cols: [
      {
        label: "What it is",
        text: "Credentials, licenses, certifications. Awards that mean something. Press your prospects respect.",
      },
      {
        label: "When it matters most",
        text: "Work involving trust, risk or regulation, where a *credential* is the entry ticket.",
      },
      {
        label: "When it matters less",
        text: "No formal credentialing. Prospects judge by results they can see.",
      },
    ],
  },

  // 09 · The bright line
  {
    kind: "principle",
    id: "m4-bright-line",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "09",
    audio: {
      src: "/audio/m4/m4-9.mp3",
      marks: [
        { text: "A prospect can usually tell, eventually.", at: 34.5, until: 39.5 },
      ],
      callouts: [
        { text: "Fake reviews. Traded testimonials. Referral rings. Paid awards.", at: 9.9, until: 17.5 },
        { text: "A loan against your reputation, at a terrible rate.", at: 40.5, until: 44.9 },
      ],
    },
    sans: true,
    headline: "Earned proof reflects something real. Manufactured proof *simulates* it.",
    sub: "Fake reviews, traded testimonials, referral rings, paid awards. All borrow the look of proof without the thing it evidences. A prospect can usually tell, eventually. The cost is *the credibility you were trying to build.*",
  },

  // 10 · On asking
  {
    kind: "principle",
    id: "m4-asking",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "10",
    audio: {
      src: "/audio/m4/m4-10.mp3",
      callouts: [
        { text: "They're glad, and life moved on. Nobody writes an unprompted review three weeks later.", at: 13.0, until: 21.0 },
        { text: "If the work was good, asking is a small, ordinary thing.", at: 28.5, until: 35.0 },
        { text: "With peers it's ordinary reciprocity. A connection that helps their clients.", at: 43.0, until: 51.5 },
      ],
    },
    sans: true,
    headline: "Asking isn't taking. It's *offering* a way to say something.",
    sub: "A client who is glad they hired you has no natural occasion to say so. Asking gives them one. You're handing someone *a door they were already standing near.*",
  },

  // 11 · Which proof is yours
  {
    kind: "frame",
    id: "m4-yours-open",
    crumb: S3,
    tag: "CALIBRATION",
    number: "11",
    audio: { src: "/audio/m4/m4-11.mp3" },
    eyebrow: "Not the same for everyone",
    heading: "Which proof is *yours?*",
    sub: "Three sources. Most businesses lean on one. Your audit answers point to which.",
  },

  // 12 · Five businesses
  {
    kind: "table",
    id: "m4-five-businesses",
    crumb: S3,
    tag: "CALIBRATION",
    number: "12",
    audio: {
      src: "/audio/m4/m4-12.mp3",
      cues: [0.5, 36.6, 57.7, 73.7, 87.2],
      callouts: [
        { text: "Ethics closes client reviews. Her proof comes from the other two sources.", at: 13.5, until: 21.5, who: "maya" },
        { text: "The source most people build first is the one she mostly can't use.", at: 29.5, until: 36.0, who: "maya" },
      ],
    },
    heading: "Same framework. *Different* answers.",
    leftLabel: "The business",
    rightLabel: "Primary proof, why",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Peer + institutional.",
        text: "Ethics close client reviews to her. Doctor referrals and her credentials carry the trust.",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Client proof.",
        text: "Google reviews are nearly the whole apparatus. Realtor referrals a real *second*.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "All three.",
        text: "Testimonials, planner referrals, wedding press. A considered purchase pulls every source.",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Client + peer + institutional.",
        text: "Reviews bring volume. GP referrals bring vetted trust. Certification clears the bar.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Client proof.",
        text: "Before-and-afters are the proof. Other stylists send her those clients, a peer *second*.",
      },
    ],
  },

  // 13 · Proof ages
  {
    kind: "principle",
    id: "m4-ages",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "13",
    audio: {
      src: "/audio/m4/m4-13.mp3",
      callouts: [
        { text: "A review from last month is worth more than the same review from 2020.", at: 21.0, until: 28.0 },
        { text: "In the inventory: look for stale proof, not just missing proof.", at: 38.5, until: 46.2 },
      ],
    },
    sans: true,
    headline: "Proof *ages.*",
    sub: "A testimonial from four years ago raises a question it doesn't answer: what about since? Client proof ages fastest, institutional slowest. *Earned proof is a thing you keep current.*",
  },

  // 14 · More proof is not better proof
  {
    kind: "principle",
    id: "m4-restraint",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "14",
    audio: {
      src: "/audio/m4/m4-14.mp3",
      callouts: [
        { text: "Forty generic reviews do less than six specific ones.", at: 9.5, until: 16.0 },
        { text: "Does it answer the doubt actually in their head?", at: 22.5, until: 29.5 },
      ],
    },
    sans: true,
    headline: "More proof is not *better* proof.",
    sub: "Forty thin reviews do less than six specific ones. *Match the proof to the doubt they actually have.*",
  },

  // 15 · Weak vs strong testimonial
  {
    kind: "compare",
    id: "m4-compare",
    crumb: S4,
    tag: "CALIBRATION",
    number: "15",
    audio: {
      src: "/audio/m4/m4-15.mp3",
      cues: [0.5, 24.6],
      callouts: [
        { text: "The prospect in the same situation sees themselves. That's what proof is for.", at: 41.0, until: 47.5 },
        { text: "The strong one didn't cost more. It came from asking better.", at: 49.0, until: 56.5 },
      ],
    },
    eyebrow: "Weak vs. strong, on a single testimonial",
    heading: "What does *strong* proof look like?",
    weak: {
      quote: "Amazing to work with. Highly recommend!",
      text: "Could be about anyone. No problem, no result, no specifics.",
    },
    strong: {
      quote: "We came in after a failed rebrand. She found the *positioning* we'd been circling for a year, in three sessions.",
      text: "Names the problem, the result, the shape of the work. A prospect in the same situation sees themselves.",
    },
  },

  // 16 · Proof in a folder
  {
    kind: "principle",
    id: "m4-placement",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "16",
    audio: {
      src: "/audio/m4/m4-16.mp3",
      callouts: [
        { text: "A testimonial in a document on your desktop is a note to yourself.", at: 11.0, until: 18.0 },
        { text: "Module 3 told you where. This module tells you what goes there.", at: 29.0, until: 34.5 },
      ],
    },
    sans: true,
    headline: "Proof in a folder does *nothing.*",
    sub: "Proof only works where a prospect meets it: your primary touchpoint, at the moment they're deciding. A testimonial saved but never shown is a note to yourself. *Put it where the doubt is.*",
  },

  // 17 · Thin proof
  {
    kind: "framework",
    id: "m4-thin-proof",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "17",
    audio: {
      src: "/audio/m4/m4-17.mp3",
      cues: [0.5, 23.5],
      callouts: [
        { text: "No full apparatus by Friday. One good piece, then the next.", at: 38.8, until: 43.2 },
      ],
    },
    eyebrow: "If you're starting with little",
    heading: "Thin proof is a *starting point*, not a failure.",
    paragraphs: [
      "Very little proof is where most businesses start, and where every business lands after a pivot.",
      "Find the one source most open to you now. One done properly beats three left thin.",
    ],
  },

  // 18 · The pattern
  {
    kind: "principle",
    id: "m4-verify",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "18",
    audio: {
      src: "/audio/m4/m4-18.mp3",
      callouts: [
        { text: "A review read at midnight. A referral over coffee. A credential checked in a ten-second search.", at: 15.5, until: 23.5 },
        { text: "It survives your absence. It works in rooms you'll never be in.", at: 26.5, until: 33.5 },
      ],
    },
    sans: true,
    headline: "A prospect believes what they can *verify* without you in the room.",
    sub: "Everything you say about yourself is heard with you present, and discounted for it. Proof gets checked when you're not there. *That's why it works. It survives your absence.*",
  },

  // 19 · The proof inventory
  {
    kind: "proofInventory",
    id: "m4-tool",
    crumb: "MODULE 4 · CLOSING",
    tag: "TOOL",
    number: "19",
    audio: { src: "/audio/m4/m4-19.mp3" },
    eyebrow: "Your turn",
    heading: "Map your *proof*.",
    paragraphs: [
      "Across the three sources, mark what you already have, what's gone stale, and what's missing. Then name the one source to build first.",
      "Flag the proof that's gone stale, not just the proof that's missing. Old proof and no proof both need attention.",
    ],
  },

  // 20 · Closing bridge
  {
    kind: "prose",
    id: "m4-bridge",
    crumb: "MODULE 4 · END",
    tag: "NEXT: REFERRAL SYSTEM",
    number: "20",
    audio: { src: "/audio/m4/m4-20.mp3", cues: [24.9] },
    surface: "plum",
    mapFilled: 3,
    eyebrow: "End of Module 4",
    heading: "You know what *vouches* for you.",
    paragraphs: [
      "Next: turning the referrals that prove your credibility into a system. Module 5.",
    ],
  },
];
