import { Slide } from "./types";

/**
 * Module 3: Get found. 25 slides, copy verbatim from the produced
 * deck; the script confirms every on-slide line. The deck's tool
 * moment (slide 24) is the in-app touchpoint priority builder, and
 * the deck's placeholder landscape graphic (slide 6) is realized as
 * the branded zone map its spec describes.
 */

const S1 = "MODULE 3 · SECTION 1";
const S2 = "MODULE 3 · SECTION 2";
const S3 = "MODULE 3 · SECTION 3";
const S4 = "MODULE 3 · SECTION 4";

export const module3Slides: Slide[] = [
  // 01 · Module opener
  {
    kind: "hero",
    id: "m3-title",
    crumb: "BUILD YOUR MARKETING FOUNDATION",
    tag: "MODULE 3 · GET FOUND",
    number: "01",
    audio: {
      src: "/audio/m3/m3-1.mp3",
      callouts: [
        { text: "A concept module, not a tactics module.", at: 4.4, until: 10.9 },
        { text: "By the end: your primary touchpoints, marked on your foundation map.", at: 20.2, until: 28.5 },
      ],
    },
    surface: "plum",
    strata: 2,
    heading: "Get *found*.",
    sub: "How prospects find you, and what they meet when they do. The places you exist online, and the local layer that matters when the search is geographic.",
    meta: [
      { label: "Length", value: "25 minutes" },
      { label: "Output", value: "Your touchpoint priority" },
      { label: "Module", value: "3 of 8" },
    ],
  },

  // 02 · Not a website. A system.
  {
    kind: "frame",
    id: "m3-system",
    crumb: S1,
    tag: "FRAME",
    number: "02",
    audio: { src: "/audio/m3/m3-2.mp3" },
    eyebrow: "What it is, what it isn't",
    heading: "Not a website. *A system.*",
    sub: "Getting found isn't one thing you build. It's the set of places a prospect meets you when they go looking, online and, for many businesses, locally.",
  },

  // 03 · The concept
  {
    kind: "framework",
    id: "m3-concept",
    crumb: S1,
    tag: "FRAMEWORK",
    number: "03",
    audio: { src: "/audio/m3/m3-3.mp3", cues: [0.5, 27.3] },
    heading: "Getting found is the sum of where you *show up* when someone looks.",
    paragraphs: [
      "A prospect has a need and goes looking. Your website is one place they might land. So is your Google listing. So is the Instagram post a friend sent them, the directory entry on a marketplace, the map result when they search nearby.",
      "The strategic question isn't “do I have a website.” It's: which of these places does your business actually need to do well, and which can stay minimal? That's what this module works out.",
    ],
  },

  // 04 · Five touchpoints. Five jobs.
  {
    kind: "frame",
    id: "m3-five-open",
    crumb: S2,
    tag: "TOUCHPOINTS",
    number: "04",
    audio: { src: "/audio/m3/m3-4.mp3" },
    heading: "Five touchpoints. *Five jobs.*",
    sub: "Each touchpoint answers a different question for the prospect. Knowing the questions is how you decide what each one needs to do.",
  },

  // 05 · Five places, five questions answered
  {
    kind: "cards",
    id: "m3-five-cards",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "05",
    audio: { src: "/audio/m3/m3-5.mp3", cues: [0.5, 6.5, 15.2, 21.5, 43.8] },
    eyebrow: "The five touchpoints",
    heading: "Five places, five *questions* answered.",
    cards: [
      {
        label: "Touchpoint 01",
        title: "Your website",
        text: "The place that holds *everything* about you. Positioning, proof, and the case for choosing you.",
      },
      {
        label: "Touchpoint 02",
        title: "Search & map listings",
        text: "The place a prospect *finds* you when they don't yet know your name. Google Business Profile, Apple Maps.",
      },
      {
        label: "Touchpoint 03",
        title: "Social platforms",
        text: "The place a prospect *sees* you before they're looking. Instagram, LinkedIn, TikTok, wherever your audience already is.",
      },
      {
        label: "Touchpoint 04",
        title: "Third-party listings",
        text: "The places someone else *vouches* for you. Yelp, OpenTable, Psychology Today, industry directories.",
      },
      {
        label: "Touchpoint 05",
        title: "Online communities",
        text: "The places your prospect *participates*. Facebook groups, Reddit, Discord, niche forums. You show up as a peer.",
      },
    ],
  },

  // 06 · The landscape map (realized from the deck's placeholder spec)
  {
    kind: "map",
    id: "m3-map",
    crumb: S2,
    tag: "MAP",
    number: "06",
    audio: {
      src: "/audio/m3/m3-6.mp3",
      callouts: [
        { text: "SEO lives inside your website. Your Google Business Profile is search & map.", at: 17.8, until: 26.5 },
        { text: "Ads amplify a touchpoint. They don't create a new one.", at: 33.0, until: 41.0 },
      ],
    },
    eyebrow: "Where the words you've heard live",
    heading: "A map of *where you can get found*.",
    intro:
      "SEO, AEO, Google Business Profile, Yelp, Instagram, ads. None of them is a separate touchpoint. They all live inside the five you just saw.",
  },

  // 07 · Website detail
  {
    kind: "detail",
    id: "m3-tp-website",
    crumb: S2,
    tag: "TOUCHPOINT 01",
    number: "07",
    audio: { src: "/audio/m3/m3-7.mp3", cues: [0.5, 30.4, 40.4] },
    eyebrow: "Your website",
    heading: "The *full* picture.",
    cols: [
      {
        label: "What it does",
        text: "Carries positioning, proof, pricing, process, and a way to take the next step. The place that holds everything a prospect might want to know once they've found you elsewhere. The depth touchpoint, when depth is needed. Email list lives downstream of this touchpoint, when the work calls for it.",
      },
      {
        label: "When it matters most",
        text: "When the buyer engages with your work over weeks or months before contact. When the work depends on visual or written proof. When the price tag warrants research.",
      },
      {
        label: "When it matters less",
        text: "When prospects find you through search and call within hours. When trust is established by social proof, not site content. When the work is quick, local, and price-comparable. For some businesses, a website is optional, or is just a booking page.",
      },
    ],
  },

  // 08 · Search & map detail
  {
    kind: "detail",
    id: "m3-tp-search",
    crumb: S2,
    tag: "TOUCHPOINT 02",
    number: "08",
    audio: { src: "/audio/m3/m3-8.mp3", cues: [0.5, 19.5, 30.2] },
    eyebrow: "Search & map listings",
    heading: "The *findable* you.",
    cols: [
      {
        label: "What it does",
        text: "Answers the question a prospect has before they know your name: who in my area does *this*. Carries hours, location, photos, reviews, and the basic facts.",
      },
      {
        label: "When it matters most",
        text: "When you're local-only or hybrid. When prospects search for the service before they search for the person. When category competition is dense and reviews are the differentiator.",
      },
      {
        label: "When it matters less",
        text: "When you're remote and clients find you through referral, content, or a specific marketplace. When category demand is satisfied by referral networks, not search.",
      },
    ],
  },

  // 09 · Social detail
  {
    kind: "detail",
    id: "m3-tp-social",
    crumb: S2,
    tag: "TOUCHPOINT 03",
    number: "09",
    audio: { src: "/audio/m3/m3-9.mp3", cues: [0.5, 25.9, 35.2] },
    eyebrow: "Social platforms",
    heading: "The *ambient* you.",
    cols: [
      {
        label: "What it does",
        text: "Answers the question a prospect didn't know they had: do I want to *follow* this person. Carries voice, taste, work-in-progress, and the texture of how you think.",
      },
      {
        label: "When it matters most",
        text: "When the work depends on visual proof. When discovery happens through shared interest, not search intent. When the buyer's audience overlaps with yours.",
      },
      {
        label: "When it matters less",
        text: "When prospects come from search, referral, or ethics-regulated channels. When the work isn't visual. When the platform's audience doesn't match your buyer's.",
      },
    ],
  },

  // 10 · Third-party detail
  {
    kind: "detail",
    id: "m3-tp-thirdparty",
    crumb: S2,
    tag: "TOUCHPOINT 04",
    number: "10",
    audio: { src: "/audio/m3/m3-10.mp3", cues: [0.5, 19.3, 33.8] },
    eyebrow: "Third-party listings",
    heading: "The *vouched-for* you.",
    cols: [
      {
        label: "What it does",
        text: "Answers the question a prospect asks in a marketplace context: is this person *legitimate*. Carries third-party validation, comparable to peers, framed by the platform.",
      },
      {
        label: "When it matters most",
        text: "When your industry has a dominant directory or marketplace (therapy, photography, home services). When prospects start their search inside a specific platform.",
      },
      {
        label: "When it matters less",
        text: "When your industry has no dominant marketplace. When prospects find you through Google or referral. When the platform's framing dilutes your positioning rather than amplifies it.",
      },
    ],
  },

  // 11 · Communities detail
  {
    kind: "detail",
    id: "m3-tp-communities",
    crumb: S2,
    tag: "TOUCHPOINT 05",
    number: "11",
    audio: { src: "/audio/m3/m3-11.mp3", cues: [0.5, 39.4, 49.2] },
    eyebrow: "Online communities",
    heading: "The *in-the-room* you.",
    cols: [
      {
        label: "What it does",
        text: "Answers the question a prospect asks once they're already participating in a space: who in this group is worth knowing. Trust accrues over time through peer-level *presence*, not pitch.",
      },
      {
        label: "When it matters most",
        text: "When your prospects participate in well-defined online communities (Facebook groups, Reddit, Discord, niche forums). When the buying decision involves long peer research. When word-of-mouth in those spaces drives inquiries.",
      },
      {
        label: "When it matters less",
        text: "When your prospects don't gather in online communities. When discovery happens through search, referral, or marketplace. When the time required to maintain genuine community presence exceeds your capacity.",
      },
    ],
  },

  // 12 · LLM principle
  {
    kind: "principle",
    id: "m3-llms",
    crumb: S2,
    tag: "THE TAKEAWAY",
    number: "12",
    audio: {
      src: "/audio/m3/m3-12.mp3",
      callouts: [
        { text: "Not a sixth touchpoint. They read the same five.", at: 21.6, until: 28.2 },
        { text: "Same name, same specialty, same location, wherever you show up.", at: 48.0, until: 54.8 },
      ],
    },
    sans: true,
    eyebrow: "Who else is reading",
    headline: "Your touchpoints aren't just being read by *people*.",
    sub: "Increasingly, LLMs synthesize answers about service businesses from the same five touchpoints. The way to be visible to LLMs is the same way to be visible to humans: be clear, be specific, be named consistently across *every* touchpoint where you appear.",
  },

  // 13 · Local section opener (skippable)
  {
    kind: "frame",
    id: "m3-local-open",
    crumb: S3,
    tag: "LOCAL",
    number: "13",
    audio: { src: "/audio/m3/m3-13.mp3" },
    eyebrow: "For local businesses · skip if this isn't you",
    heading: "If your buyers are *local*.",
    sub: "The next three slides are for businesses whose clients are nearby: a service area, a city, a neighborhood. If you work remotely or sell nationally, skip ahead to the calibration section.",
    skip: { label: "My buyers aren't local. Skip ahead", to: 17 },
  },

  // 14 · The four local jobs
  {
    kind: "cards",
    id: "m3-local-jobs",
    crumb: S3,
    tag: "FRAMEWORK",
    number: "14",
    audio: { src: "/audio/m3/m3-14.mp3", cues: [0.5, 28.8, 47.6, 56.8] },
    eyebrow: "The local layer",
    heading: "Local presence is a *job*, not a touchpoint.",
    intro:
      "For a local business, several of your touchpoints take on a local job. The work isn't a separate place to build. It's four things done well across the touchpoints you already have.",
    cards: [
      {
        label: "Local job 01",
        title: "A claimed, complete profile",
        text: "Your Google Business Profile, claimed and filled out properly. For most local businesses this is the *single* highest-leverage piece of online presence. It feeds the map and the local results.",
      },
      {
        label: "Local job 02",
        title: "Consistent details everywhere",
        text: "Name, address, phone, the same on every touchpoint. Search engines read inconsistency as *uncertainty*, and uncertainty costs you local ranking.",
      },
      {
        label: "Local job 03",
        title: "Location named, not implied",
        text: "The places you serve, stated in plain words on your website and listings. A prospect and a search engine should both know where you work without having to *guess*.",
      },
      {
        label: "Local job 04",
        title: "Reviews on the profile that ranks",
        text: "Reviews on your Google Business Profile do double duty: they persuade the prospect, and they lift the profile in the local results. Earned proof and local *visibility*, the same act.",
      },
    ],
  },

  // 15 · Weak vs strong local
  {
    kind: "compare",
    id: "m3-local-compare",
    crumb: S3,
    tag: "CALIBRATION",
    number: "15",
    audio: { src: "/audio/m3/m3-15.mp3", cues: [0.5, 26.4] },
    eyebrow: "Weak vs. strong, on a Google Business Profile",
    heading: "What does *strong* local presence look like?",
    weak: {
      quote: "The listing exists.",
      text: "Auto-generated, never claimed. Category vague or wrong. Hours blank or out of date. No photos. Three reviews from years ago. A prospect finds it and isn't sure the business is still open.",
    },
    strong: {
      quote: "It answers the question before they ask.",
      text: "Claimed, exact category, current hours, real photos, service area named. Recent reviews the owner has responded to. A prospect finds it and books, because every doubt was already *settled*.",
    },
  },

  // 16 · The local pattern
  {
    kind: "principle",
    id: "m3-local-pattern",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "16",
    audio: {
      src: "/audio/m3/m3-16.mp3",
      callouts: [
        { text: "Two businesses, the same distance from the person searching.", at: 12.4, until: 19.0 },
        { text: "They pick the one they can verify at a glance. Every time.", at: 22.8, until: 29.5 },
      ],
    },
    sans: true,
    eyebrow: "The local pattern",
    headline: "Being nearby gets you *listed*. Being verifiable gets you chosen.",
    sub: "Proximity puts you in the local results. It doesn't win the click. Between two businesses the same distance away, a prospect picks the one they can verify at a glance: real photos, current information, reviews that were answered. *Local presence is proximity plus proof, never proximity alone.*",
  },

  // 17 · Calibration opener
  {
    kind: "frame",
    id: "m3-yours-open",
    crumb: S3,
    tag: "CALIBRATION",
    number: "17",
    audio: { src: "/audio/m3/m3-17.mp3" },
    eyebrow: "Not the same for everyone",
    heading: "What does *yours* need?",
    sub: "The audit already told you. This section makes the connection explicit.",
  },

  // 18 · Audit signals
  {
    kind: "cards",
    id: "m3-audit-signals",
    crumb: S3,
    tag: "FRAMEWORK",
    number: "18",
    audio: { src: "/audio/m3/m3-18.mp3", cues: [0.5, 21.9, 31.3, 37.9] },
    eyebrow: "Audit signals",
    heading: "Your audit answers *already* told you which touchpoints matter.",
    cards: [
      {
        label: "Discovery channel · Q01",
        title: "Names the primary touchpoint",
        text: "Where current clients first hear about you is the touchpoint your business actually *uses*. Build there first.",
      },
      {
        label: "Visual proof · Q02",
        title: "Weights website + social",
        text: "If the work is visible, the website and social touchpoints carry more weight. If it isn't, they carry less.",
      },
      {
        label: "Geographic scope · Q05",
        title: "Weights search & map",
        text: "Local-only sharpens search & map's role. Remote diminishes it. Hybrid sits in between.",
      },
      {
        label: "Engagement length · Q06",
        title: "Weights website depth",
        text: "Long pre-contact engagement means the website has time to do real work. Short engagement means the website needs to be quick.",
      },
    ],
    footnote:
      "Q03 (ethics) and Q04 (audience age) work differently: they *constrain* which touchpoints are available, they don't prioritize among them.",
  },

  // 19 · Reading it together: Maya
  {
    kind: "cards",
    id: "m3-audit-signals-maya",
    crumb: S3,
    tag: "WORKED EXAMPLE",
    number: "19",
    audio: { src: "/audio/m3/m3-19.mp3", cues: [0.5, 7.7, 10.2, 12.2] },
    eyebrow: "Reading it together",
    heading: "Reading it together: *Maya*.",
    cards: [
      {
        label: "Discovery channel · Q01",
        title: "Insurance referral + Psychology Today",
        text: "Her clients arrive through a directory, either the insurer's or a private-pay listing. That names her primary.",
      },
      {
        label: "Visual proof · Q02",
        title: "No",
        text: "Therapy isn't visible work. Website and social carry less weight for discovery.",
      },
      {
        label: "Geographic scope · Q05",
        title: "Local hybrid",
        text: "In-person and telehealth. Search & map matters, but it isn't the lead.",
      },
      {
        label: "Engagement length · Q06",
        title: "Weeks of research",
        text: "Prospects read and compare before reaching out. Whatever confirms her needs depth.",
      },
    ],
    footnote:
      "Four answers, one read: *third-party directory primary, website confirming*.",
  },

  // 20 · Five businesses
  {
    kind: "table",
    id: "m3-five-businesses",
    crumb: S4,
    tag: "CALIBRATION",
    number: "20",
    audio: {
      src: "/audio/m3/m3-20.mp3",
      cues: [0.5, 37.1, 51.5, 65.8, 96.7],
      callouts: [
        { text: "Takes insurance? The carrier's directory. Private pay? Psychology Today.", at: 14.5, until: 22.5, card: true, who: "maya" },
        { text: "“Anyone know a good chiropractor?” His name comes up before they go to Google.", at: 86.5, until: 95.0, card: true, who: "james" },
      ],
    },
    heading: "Same framework. *Different* answers.",
    leftLabel: "The business",
    rightLabel: "Primary touchpoint, why",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Third-party directory.",
        text: "Whether that's an insurance provider directory or a private-pay directory like Psychology Today. The directory does discovery and first-round trust. The website confirms what she's already established there. Ethics rules limit social.",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Search & map.",
        text: "Prospects find him by Googling “pressure washing near me.” He needs a strong Google Business Profile with reviews. The website is the second touchpoint, not the first.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "Website.",
        text: "Visual proof drives the decision. Long engagement, considered purchase. And Instagram as a strong *second*. Discovery happens there. Decision happens on the site.",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Search & map.",
        text: "Prospects search before they know his name. But local Facebook groups and NextDoor matter too. “Anyone know a good chiropractor in [city]” gets asked and answered there constantly. Community presence as a strong *second*.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Instagram.",
        text: "Discovery, decision, and proof all happen on social. The website exists as a booking interface. The persuasion has already happened.",
      },
    ],
  },

  // 21 · The referral exception
  {
    kind: "framework",
    id: "m3-referral-exception",
    crumb: S4,
    tag: "CALIBRATION",
    number: "21",
    audio: { src: "/audio/m3/m3-21.mp3", cues: [0.5, 14.5, 30.5] },
    eyebrow: "One more case",
    heading: "The referral *exception*.",
    paragraphs: [
      "For some businesses, discovery doesn't happen at a touchpoint at all. The name arrives by word of mouth, and the prospect goes looking to verify it.",
      "The touchpoints still matter, but their job changes: *verification, not discovery*. The website and the reviews confirm a decision that's already forming.",
    ],
    callout:
      "Same framework. Five different answers. *Yours will be a sixth.*",
  },

  // 22 · Load-bearing principle
  {
    kind: "principle",
    id: "m3-load-bearing",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "22",
    audio: {
      src: "/audio/m3/m3-22.mp3",
      callouts: [
        { text: "Maya: directory. Marcus and James: search & map. Lena: website. Sasha: Instagram.", at: 6.8, until: 15.5 },
        { text: "Lena's Instagram carries discovery. Her website carries decision.", at: 30.3, until: 37.5, card: true, who: "lena" },
        { text: "Don't have most of these yet? That's fine. Build your primary first.", at: 57.2, until: 65.5 },
      ],
    },
    sans: true,
    headline: "Your primary touchpoint is *load-bearing*.",
    sub: "Whichever one it is, that's the touchpoint that carries the heaviest weight across the prospect's journey, even when secondaries assist. The other four can each do narrower jobs. Build the primary so it holds *everything* it has to. Let the others do less.",
  },

  // 23 · On restraint
  {
    kind: "principle",
    id: "m3-restraint",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "23",
    audio: {
      src: "/audio/m3/m3-23.mp3",
      callouts: [
        { text: "An Instagram with three posts from 2022 says something you didn't intend.", at: 11.7, until: 20.0 },
      ],
    },
    sans: true,
    headline: "More presence is not *better* presence.",
    sub: "Two touchpoints maintained well do more for your business than five touchpoints maintained badly. A neglected touchpoint signals worse than no touchpoint at all. *Match presence to capacity.*",
  },

  // 24 · Weak vs strong primary
  {
    kind: "compare",
    id: "m3-strong-compare",
    crumb: S4,
    tag: "CALIBRATION",
    number: "24",
    audio: { src: "/audio/m3/m3-24.mp3", cues: [0.5, 21.0] },
    eyebrow: "Weak vs. strong, on your primary touchpoint",
    heading: "What does *strong* look like?",
    weak: {
      quote: "It exists.",
      text: "A site is up. The positioning is generic. The proof is missing or thin. Pricing isn't stated. Next step isn't obvious. The visitor leaves to look elsewhere.",
    },
    strong: {
      quote: "It does the *job*.",
      text: "The positioning is specific enough that two competitors couldn't write the same about page. The proof is current. Pricing or process is named. The next step is one click. The visitor either books or self-selects out.",
    },
  },

  // 25 · Buyer behavior principle
  {
    kind: "principle",
    id: "m3-behavior",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "25",
    audio: {
      src: "/audio/m3/m3-25.mp3",
      callouts: [
        { text: "Every client arrives through Google. Search matters more, no matter what you prefer.", at: 15.9, until: 23.5 },
        { text: "Keep the channel you love as a secondary. The primary is buyer behavior.", at: 30.0, until: 37.5 },
      ],
    },
    sans: true,
    headline: "The buyer decides which touchpoint matters by *behavior*.",
    sub: "Not by your wish. Not by what you're best at producing. The audit's discovery channel question caught this. If clients find you through search, search matters more than the social channel you'd prefer to invest in. *Build where they are.*",
  },

  // 26 · The touchpoint priority builder
  {
    kind: "touchpoints",
    id: "m3-tool",
    crumb: "MODULE 3 · CLOSING",
    tag: "TOOL",
    number: "26",
    audio: { src: "/audio/m3/m3-26.mp3" },
    eyebrow: "Your turn",
    heading: "Name your *primary*.",
    paragraphs: [
      "Mark which of the five touchpoints applies to your business, then set the priority order. The first one is your primary.",
      "Use your audit answers as the guide. Don't pick your favorite. Pick what's already working.",
    ],
  },

  // 27 · Closing bridge
  {
    kind: "prose",
    id: "m3-bridge",
    crumb: "MODULE 3 · END",
    tag: "NEXT: EARNED PROOF",
    number: "27",
    audio: { src: "/audio/m3/m3-27.mp3", cues: [16.9] },
    surface: "plum",
    mapFilled: 2,
    eyebrow: "End of Module 3",
    heading: "You know where you get *found*.",
    paragraphs: [
      "Next: what a prospect meets once they've found you, and whether it earns their trust. Earned Proof. Module 4 begins when you're ready.",
    ],
  },
];
