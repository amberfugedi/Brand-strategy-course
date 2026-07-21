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
    audio: { src: null },
    surface: "plum",
    eyebrow: "Module 4",
    heading: "Earned *proof*.",
    sub: "The evidence of your work that comes from outside you. What it is, where it comes from, and which kind your business actually needs.",
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
    audio: { src: null },
    eyebrow: "Where most people start",
    heading: "Asking for proof feels like *begging*.",
    sub: "It doesn't have to. But the discomfort is real, and it's worth naming before we go anywhere else.",
  },

  // 03 · The concept
  {
    kind: "framework",
    id: "m4-concept",
    crumb: S1,
    tag: "FRAMEWORK",
    number: "03",
    audio: { src: null },
    eyebrow: "The concept",
    heading: "You can't *author* your own credibility.",
    paragraphs: [
      "A prospect hears your claims about yourself and quietly discounts them. Everyone does. You would too. It isn't distrust of you specifically. It's how people read anyone selling anything.",
      "What they can't discount as easily is evidence you didn't write. A stranger's review. A client's words. A visible result. Another professional's referral. A credential. That evidence is earned proof, and it does the work your own claims can't.",
    ],
  },

  // 04 · Proof comes from three places
  {
    kind: "frame",
    id: "m4-sources-open",
    crumb: S2,
    tag: "SOURCES",
    number: "04",
    audio: { src: null },
    eyebrow: "The map",
    heading: "Proof comes from *three places*.",
    sub: "Each one is a different voice vouching for you. Each one answers a different question in the prospect's head.",
  },

  // 05 · Three voices
  {
    kind: "cards",
    id: "m4-three-sources",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "05",
    audio: { src: null },
    eyebrow: "The three sources of earned proof",
    heading: "Three voices, three *questions* answered.",
    cards: [
      {
        label: "Source 01",
        title: "Client proof",
        text: "Your clients *vouch*. Reviews, testimonials, case studies, before-and-afters. Answers the prospect's question: did people like me get what they wanted?",
      },
      {
        label: "Source 02",
        title: "Peer proof",
        text: "Other professionals *vouch*. Referrals and endorsements from experts whose own judgment carries weight. Answers: do people who would know rate this person?",
      },
      {
        label: "Source 03",
        title: "Institutional proof",
        text: "An outside body *vouches*. Credentials, licenses, certifications, awards, press, association membership. Answers: has something with authority verified this person?",
      },
    ],
    footnote:
      "Most businesses lean on one source as primary. Which one depends on the business. The next three slides take each in turn.",
  },

  // 06 · Client proof detail
  {
    kind: "detail",
    id: "m4-client-proof",
    crumb: S2,
    tag: "SOURCE 01",
    number: "06",
    audio: { src: null },
    eyebrow: "Client proof",
    heading: "Your clients *vouch.*",
    cols: [
      {
        label: "What it is",
        text: "Reviews and ratings on platforms. Testimonials in a client's own words. Case studies. Before-and-afters. Any evidence that the people you've served got what they came for.",
      },
      {
        label: "When it matters most",
        text: "When the work is *comparable* and a prospect is weighing you against alternatives. When the buying decision is quick and a star rating settles it. When recency signals you're still good now.",
      },
      {
        label: "When it matters less",
        text: "When professional ethics restrict soliciting or displaying client testimony. When the work is so bespoke that no two clients are comparable. When a client's word carries less weight than an expert's.",
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
    audio: { src: null },
    eyebrow: "Peer proof",
    heading: "Other professionals *vouch.*",
    cols: [
      {
        label: "What it is",
        text: "Referrals from adjacent experts. Endorsements from people whose own professional judgment a prospect already trusts. The therapist a doctor sends patients to. The photographer a planner recommends.",
      },
      {
        label: "When it matters most",
        text: "When the work is high-stakes and a prospect wants a *vetted* name. When client proof is restricted and peers are the available voice. When the referring expert has a reputation they're staking on you.",
      },
      {
        label: "When it matters less",
        text: "When the purchase is low-stakes and quick. When your field has no natural network of adjacent professionals. When prospects don't think to ask an expert before choosing.",
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
    audio: { src: null },
    eyebrow: "Institutional proof",
    heading: "An outside body *vouches.*",
    cols: [
      {
        label: "What it is",
        text: "Credentials, licenses, certifications. Awards that mean something. Press in outlets your prospects respect. Membership in a professional body that vets its members.",
      },
      {
        label: "When it matters most",
        text: "When the field requires verification and a prospect expects it. When the work involves trust, risk, or regulation. When a *credential* is the entry ticket to being considered at all.",
      },
      {
        label: "When it matters less",
        text: "When the work has no formal credentialing and none is expected. When prospects judge by results they can see. When chasing a credential would be effort spent where it earns nothing.",
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
    audio: { src: null },
    sans: true,
    eyebrow: "The bright line",
    headline: "Earned proof reflects something real. Manufactured proof *simulates* it.",
    sub: "Fake reviews. Testimonials traded for discounts. Referral rings with no real judgment behind them. Awards you paid to receive. They all borrow the look of proof without the thing it is supposed to evidence. A prospect can usually tell, eventually. And the cost of being caught is *the credibility you were trying to build.*",
  },

  // 10 · On asking
  {
    kind: "principle",
    id: "m4-asking",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "10",
    audio: { src: null },
    sans: true,
    eyebrow: "On asking",
    headline: "Asking isn't taking. It's *offering* a way to say something.",
    sub: "A client who is genuinely glad they hired you often wants to say so and has no natural occasion to. Asking gives them the occasion. You're not extracting a favor. You're handing someone *a door they were already standing near.* And with peers, asking is plain professional reciprocity, the ordinary traffic of people who respect each other's work.",
  },

  // 11 · Which proof is yours
  {
    kind: "frame",
    id: "m4-yours-open",
    crumb: S3,
    tag: "CALIBRATION",
    number: "11",
    audio: { src: null },
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
    audio: { src: null },
    eyebrow: "Five businesses, five answers",
    heading: "Same framework. *Different* answers.",
    leftLabel: "The business",
    rightLabel: "Primary proof, why",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Peer + institutional.",
        text: "Ethics codes largely close client reviews to her. Referrals from doctors and other therapists, plus her license and credentials, carry the trust instead.",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Client proof.",
        text: "Google reviews are nearly the whole apparatus. Volume and recency decide it. Realtor and contractor referrals are a real *second*.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "All three.",
        text: "Client testimonials and portfolio, planner and venue referrals, features in wedding press. A considered, high-trust purchase pulls on every source.",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Client + peer + institutional.",
        text: "Reviews bring volume. GP and physiotherapist referrals bring vetted trust. Board certification clears the entry bar.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Client proof.",
        text: "Before-and-afters are the proof. Other stylists who don't do vivids send those clients to her, a real peer *second*.",
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
    audio: { src: null },
    sans: true,
    eyebrow: "On maintenance",
    headline: "Proof *ages.*",
    sub: "A testimonial from four years ago raises a question it doesn't answer: what about since? Client proof ages fastest, because recency is itself a signal. Peer proof ages more slowly, though a referral relationship gone quiet is a weakening one. Institutional proof ages slowest. Earned proof is not a thing you build once. *It's a thing you keep current.*",
  },

  // 14 · More proof is not better proof
  {
    kind: "principle",
    id: "m4-restraint",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "14",
    audio: { src: null },
    sans: true,
    eyebrow: "On restraint",
    headline: "More proof is not *better* proof.",
    sub: "Forty thin reviews do less than six specific ones. A wall of logos does less than one case study a prospect can see themselves in. The question is never how much proof you can pile up. It's whether the proof you show answers the doubt a prospect actually has. *Match the proof to the question.*",
  },

  // 15 · Weak vs strong testimonial
  {
    kind: "compare",
    id: "m4-compare",
    crumb: S4,
    tag: "CALIBRATION",
    number: "15",
    audio: { src: null },
    eyebrow: "Weak vs. strong, on a single testimonial",
    heading: "What does *strong* proof look like?",
    weak: {
      quote: "Amazing to work with. Highly recommend!",
      text: "Could be about anyone. Names no problem, no result, no specifics. A prospect reads it and learns nothing they can use. It fills a space without doing a job.",
    },
    strong: {
      quote: "We came in after a failed rebrand. She found the *positioning* we'd been circling for a year, in three sessions.",
      text: "Names the starting problem, the result, and the shape of the work. A prospect in the same situation sees themselves. That recognition is what proof is for.",
    },
  },

  // 16 · Proof in a folder
  {
    kind: "principle",
    id: "m4-placement",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "16",
    audio: { src: null },
    sans: true,
    eyebrow: "On placement",
    headline: "Proof in a folder does *nothing.*",
    sub: "Earned proof only works where a prospect meets it. It belongs on your primary touchpoint, the one you named in Module 3, at the moment a prospect is deciding. A testimonial saved but never shown is not proof. It's a note to yourself. *Build the proof, then put it where the doubt is.*",
  },

  // 17 · Thin proof
  {
    kind: "framework",
    id: "m4-thin-proof",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "17",
    audio: { src: null },
    eyebrow: "If you're starting with little",
    heading: "Thin proof is a *starting point*, not a failure.",
    paragraphs: [
      "If your audit shows you have very little earned proof, you're where most service businesses are early on, and where every business is after a pivot. Don't try to build all three sources at once.",
      "Find the one source most open to you right now. For most businesses that's client proof from recent work: the people you've served in the last year, asked well, while the work is still fresh for them. One source, done properly, beats three left thin.",
    ],
  },

  // 18 · The pattern
  {
    kind: "principle",
    id: "m4-verify",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "18",
    audio: { src: null },
    sans: true,
    eyebrow: "The pattern",
    headline: "A prospect believes what they can *verify* without you in the room.",
    sub: "Everything you say about yourself is heard with you present, and discounted accordingly. Earned proof is checked when you're not there: a review read at midnight, a referral given over coffee, a credential confirmed in a search. *That's exactly why it works. It survives your absence.*",
  },

  // 19 · The proof inventory
  {
    kind: "proofInventory",
    id: "m4-tool",
    crumb: "MODULE 4 · CLOSING",
    tag: "TOOL",
    number: "19",
    audio: { src: null },
    eyebrow: "Now: take your inventory",
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
    audio: { src: null },
    surface: "plum",
    eyebrow: "End of Module 4",
    heading: "You know what *vouches* for you.",
    paragraphs: [
      "Next: how to turn the referrals that prove your credibility into a system that produces them on purpose. Referral System, Module 5.",
    ],
  },
];
