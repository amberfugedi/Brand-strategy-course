import { Slide } from "./types";

/**
 * Module 1: Your positioning. 36 slides. Copy is verbatim from the
 * produced deck (PDF slides 01 to 36). Interaction moments follow the
 * approved plan: calibration slides reveal their diagnosis on click,
 * persona examples reveal their annotation, exercises are guided
 * fields saving to the course document, section 5 assembles the
 * statement, and the closing tool slide renders the saved framework.
 */

const S1 = "MODULE 1 · SECTION 1";
const S2 = "MODULE 1 · SECTION 2";
const S3 = "MODULE 1 · SECTION 3";
const S4 = "MODULE 1 · SECTION 4";
const S5 = "MODULE 1 · SECTION 5";
const CLOSING = "MODULE 1 · CLOSING";

export const module1Slides: Slide[] = [
  // 01 · Module title
  {
    kind: "hero",
    id: "m1-title",
    crumb: "",
    tag: "",
    number: "01",
    audio: { src: "/audio/m1/m1-1.mp3" },
    surface: "plum",
    strata: 1,
    heading: "Your *positioning*.",
    sub: "Three questions every other foundation depends on. Twenty-five minutes. One working answer.",
    meta: [
      { label: "Length", value: "25 minutes of teaching, plus writing time" },
      { label: "Output", value: "Working positioning statement" },
      { label: "Module", value: "1 of 8" },
    ],
  },

  // 02 · The three questions
  {
    kind: "question",
    id: "m1-three-questions",
    crumb: S1,
    tag: "DIAGNOSTIC",
    number: "02",
    audio: {
      src: "/audio/m1/m1-2.mp3",
      // The questions land as the intro names them ("who you're
      // talking to, what you're offering, what makes you the right
      // choice"); the positioning panel builds through the back half
      // while the questions hold the screen.
      cues: [14.9, 16.0, 17.4, 43.2, 47.5, 68.2, 85.6],
      callouts: [
        { text: "Not what you need first.", at: 61.6, until: 67.9 },
        { text: "A real instinct, worth following.", at: 100.2, until: 107.2 },
      ],
    },
    pre: "The three questions.",
    lines: ["Who do you serve.", "What do you do.", "What makes you *different*."],
    post: "That's the module.",
    panel: {
      eyebrow: "Foundation-level positioning",
      sub: "Not deep brand strategy.",
      paragraphs: [
        "A *working* answer: specific enough to write a tagline, fill out a profile, ask for the right kind of reviews.",
        "Not a polished brand. Not a final positioning statement you'd put on a billboard. *Enough to keep moving.*",
      ],
    },
  },

  // 03 · The patterns of confusion
  {
    kind: "patterns",
    id: "m1-patterns-confusion",
    crumb: S1,
    tag: "CALIBRATION",
    number: "03",
    audio: {
      src: "/audio/m1/m1-3.mp3",
      cues: [5.8, 30.0, 49.1],
      // The example answers, flashing up as the voice quotes them.
      callouts: [
        { text: "\"I serve small businesses.\"", at: 8.4, until: 9.7, card: true },
        { text: "\"I help busy professionals.\"", at: 9.7, until: 11.8, card: true },
        { text: "\"I work with anyone who needs my service.\"", at: 11.8, until: 16.0, card: true },
        { text: "\"I care about quality.\"", at: 31.9, until: 33.5, card: true },
        { text: "\"I take a personal approach.\"", at: 33.5, until: 35.2, card: true },
        { text: "\"I have years of experience.\"", at: 35.2, until: 39.5, card: true },
        { text: "\"I'm a marketing consultant.\"", at: 52.3, until: 54.0, card: true },
        { text: "\"I'm a chiropractor.\"", at: 54.0, until: 57.5, card: true },
      ],
    },
    heading: "The patterns of *confusion*.",
    patterns: [
      {
        label: "Pattern 1",
        quote: "\"Vagueness in the name of inclusivity.\"",
        diagnosis:
          "A vague answer feels safe but does no work. The cost of being too vague is being chosen by no one.",
      },
      {
        label: "Pattern 2",
        quote: "\"Generic differentiation.\"",
        diagnosis:
          "\"I care about quality.\" If your competitor could put it on their website word-for-word, it's not a differentiator.",
      },
      {
        label: "Pattern 3",
        quote: "\"Describing yourself instead of your service.\"",
        diagnosis:
          "\"I'm a chiropractor.\" That's a category. The service is what you actually do for a person.",
      },
    ],
  },

  // 04 · Module structure
  {
    kind: "structure",
    id: "m1-structure",
    crumb: S1,
    tag: "STRUCTURE",
    number: "04",
    audio: { src: "/audio/m1/m1-4.mp3", cues: [0.3, 7.6, 8.1, 8.6, 9.1] },
    eyebrow: "How this module works",
    heading: "Five sections. *Twenty-five minutes*.",
    rows: [
      { label: "Section 1", title: "The three questions", minutes: "5 min" },
      { label: "Section 2", title: "Who do you serve", minutes: "5 min" },
      { label: "Section 3", title: "What do you do", minutes: "5 min" },
      { label: "Section 4", title: "What makes you different", minutes: "7 min" },
      { label: "Section 5", title: "Pulling it together", minutes: "3 min" },
    ],
  },

  // 05 · Question 1
  {
    kind: "question",
    id: "m1-q1",
    crumb: S2,
    tag: "QUESTION 01",
    number: "05",
    audio: {
      src: "/audio/m1/m1-5.mp3",
      // The question holds the screen; the operational framing
      // builds in beneath as the voice works through it.
      cues: [4.4, 9.4, 11.6, 18.2, 30.9],
    },
    pre: "The strategic audience.",
    lines: ["Who do you *serve?*"],
    panel: {
      eyebrow: "Not demographic. Operational.",
      paragraphs: [
        "\"What age range and gender\" rarely changes a *marketing* decision.",
        "The real question: *when I imagine the person I most want walking through my door, what's specifically true about them?*",
      ],
      callout:
        "The test: *would two competitors answer this question identically?* If your answer applies to every business in your category, it's not specific enough.",
    },
  },

  // 06 · Three answers that don't work
  {
    kind: "patterns",
    id: "m1-serve-weak",
    crumb: S2,
    tag: "CALIBRATION",
    number: "06",
    audio: { src: "/audio/m1/m1-6.mp3", cues: [3.4, 18.0, 35.0] },
    heading: "Three answers that *don't work*.",
    patterns: [
      {
        label: "Demographic-only",
        quote: ["\"Women 35 to 55.\"", "\"Small business owners.\"", "\"Local homeowners.\""],
        diagnosis:
          "Describes a population, not a person. Every business in your category serves the same one.",
      },
      {
        label: "Needs-based without specificity",
        quote: ["\"People who want quality work.\"", "\"People who care about results.\""],
        diagnosis:
          "Universal. No customer says they want bad work. Naming the obvious isn't naming your audience.",
      },
      {
        label: "Every customer you've ever had",
        quote: "The instinct to include everyone you've worked with.",
        diagnosis: "Inclusive, but a description of your past, not your strategy.",
      },
    ],
  },

  // 07 · Situation. Context. Problem.
  {
    kind: "columns",
    id: "m1-serve-framework",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "07",
    audio: {
      src: "/audio/m1/m1-7.mp3",
      cues: [4.6, 17.0, 37.3],
      // Each layer's spoken example surfaces below while the voice
      // gives it, then clears for the next.
      callouts: [
        { text: "A solo professional, a growing team, a homeowner with a property they've owned five years, a couple planning their wedding.", at: 8.1, until: 16.6, card: true },
        { text: "High-functioning professionals managing chronic anxiety while running demanding careers.", at: 28.2, until: 35.3, card: true },
        { text: "Their property is showing wear after years they didn't budget time to maintain it, and they don't want to spend a Saturday doing it themselves.", at: 44.9, until: 52.8, card: true },
      ],
    },
    heading: "Situation. Context. *Problem*.",
    columns: [
      {
        num: "01",
        title: "The situation",
        bullets: [
          "Where they are in their life or business",
          "A solo professional, a growing team, a homeowner of five years",
        ],
      },
      {
        num: "02",
        title: "The context",
        bullets: [
          "Not the demographic, the active context",
          "What they're doing day-to-day that brings them to need your service",
        ],
      },
      {
        num: "03",
        title: "The problem",
        bullets: [
          "What pulled them to look for someone like you",
          "The problem under the problem",
        ],
      },
    ],
  },

  // 08 · Who do you serve, five examples
  {
    kind: "examples",
    id: "m1-serve-examples",
    crumb: S2,
    tag: "CALIBRATION",
    number: "08",
    audio: {
      src: "/audio/m1/m1-8.mp3",
      cues: [3.8, 23.1, 41.0, 59.4, 72.4],
      callouts: [
        { text: "Time, not money.", at: 39.2, until: 45.0 },
        { text: "They don't want to be sold ongoing care.", at: 69.8, until: 76.0 },
      ],
    },
    heading: "Who do you *serve*.",
    personas: [
      {
        name: "Maya,",
        role: "therapist",
        meta: "Solo private practice",
        quote:
          "\"High-functioning professionals, typically 30s to 50s in demanding careers, who are managing chronic anxiety and want a therapist who treats them as competent adults rather than fragile.\"",
        note: "Situation, context, and the *problem under the problem*: they want to be treated as capable.",
      },
      {
        name: "Marcus,",
        role: "pressure washer",
        meta: "Side hustle, 1 year in",
        quote:
          "\"Homeowners who've owned their property at least three years and are starting to notice the buildup, but don't want to spend a Saturday on a ladder.\"",
        note: "The problem is *time, not money*. That framing differentiates from price-based competitors.",
      },
      {
        name: "Lena,",
        role: "photographer",
        meta: "18-25 weddings/year",
        quote:
          "\"Couples planning weddings in the four-to-eight-thousand-dollar photography range, who want a documentary style and have already decided their wedding doesn't need to be picture-perfect to be worth photographing.\"",
        note: "Specific budget tier. Style preference. *A values position*: they self-select.",
      },
      {
        name: "James,",
        role: "chiropractor",
        meta: "18 months independent",
        quote:
          "\"Adults who've had a recent injury or pain event and want to address it without a long-term care plan they didn't ask for.\"",
        note: "The problem under the problem: *they don't want to be sold ongoing care*.",
      },
      {
        name: "Sasha,",
        role: "vivids stylist",
        meta: "Solo studio, 4 years independent",
        quote:
          "\"Women in their 20s and 30s who've been growing out their hair for a vivid transformation, who care about color theory and hair health, and who'll travel an hour or more to find a stylist they trust with fashion color.\"",
        note: "Visual proof matters. Audience is specific. *They self-select on willingness to travel.*",
      },
    ],
  },

  // 09 · On the fear of narrowing
  {
    kind: "principle",
    id: "m1-narrowing",
    crumb: S2,
    tag: "THE TAKEAWAY",
    number: "09",
    audio: { src: "/audio/m1/m1-9.mp3" },
    headline:
      "Naming a strategic audience doesn't mean turning away customers who walk through your door.",
    sub: "Specificity in marketing doesn't restrict your business. It only restricts your *marketing*.",
  },

  // 10 · Exercise: who do you serve
  {
    kind: "exercise",
    id: "m1-serve-exercise",
    crumb: S2,
    tag: "EXERCISE",
    number: "10",
    audio: { src: "/audio/m1/m1-10.mp3" },
    heading: "Write your *answer*.",
    promptLines: [
      "A rough first pass, using the three-layer framework: situation, context, problem.",
      "Give it the couple of real minutes it needs. *The course waits.*",
    ],
    exercise: "serve",
    remember:
      "Situation, context, problem. Specific enough that *two competitors couldn't answer it identically*.",
    compare: {
      do: "Homeowners who've owned their property at least three years and are starting to notice the buildup.",
      not: "Anyone who needs my service.",
    },
    // Reference copies of the module's persona answers (the
    // calibration slide is the source of truth for the wording).
    examples: [
      { name: "Maya", role: "therapist", text: "High-functioning professionals, typically 30s to 50s in demanding careers, who are managing chronic anxiety and want a therapist who treats them as competent adults rather than fragile." },
      { name: "Marcus", role: "pressure washer", text: "Homeowners who've owned their property at least three years and are starting to notice the buildup, but don't want to spend a Saturday on a ladder." },
      { name: "Lena", role: "photographer", text: "Couples planning weddings in the four-to-eight-thousand-dollar photography range, who want a documentary style and have already decided their wedding doesn't need to be picture-perfect to be worth photographing." },
      { name: "James", role: "chiropractor", text: "Adults who've had a recent injury or pain event and want to address it without a long-term care plan they didn't ask for." },
      { name: "Sasha", role: "vivids stylist", text: "Women in their 20s and 30s who've been growing out their hair for a vivid transformation, who care about color theory and hair health, and who'll travel an hour or more to find a stylist they trust with fashion color." },
    ],
  },

  // 11 · Question 2
  {
    kind: "question",
    id: "m1-q2",
    crumb: S3,
    tag: "QUESTION 02",
    number: "11",
    audio: {
      src: "/audio/m1/m1-11.mp3",
      // Dark question first, then the work-not-category teaching
      // arrives beneath it with the voice.
      cues: [0.3, 3.2, 3.3, 13.2, 15.2],
    },
    pre: "The work itself.",
    lines: ["What do you *do?*"],
    panel: {
      eyebrow: "The work, not the category",
      paragraphs: [
        "Most service business owners answer with their category. *I'm a chiropractor. I'm a wedding photographer. I'm a marketing consultant.*",
        "That's what you *are*. Not what you *do*.",
      ],
      callout:
        "The category locates you in a market. *The service is the work you perform on a person's behalf.*",
    },
  },

  // 12 · Three patterns that fall short
  {
    kind: "patterns",
    id: "m1-work-weak",
    crumb: S3,
    tag: "CALIBRATION",
    number: "12",
    audio: { src: "/audio/m1/m1-12.mp3", cues: [2.8, 13.7, 27.6] },
    heading: "Three patterns that *fall short*.",
    patterns: [
      {
        label: "Category-only",
        quote: ["\"I'm a chiropractor.\"", "\"I do branding.\"", "\"I clean houses.\""],
        diagnosis:
          "Accurate but inert. Tells the buyer what aisle of the marketplace you're in. Doesn't tell them what they're getting.",
      },
      {
        label: "Generic help statements",
        quote: ["\"I help businesses grow.\"", "\"I help homeowners protect their investment.\""],
        diagnosis:
          "Substantive-sounding but empty. Every business in your category helps with the same general thing.",
      },
      {
        label: "Full-service language",
        quote: "\"I do everything from X to Y to Z.\"",
        diagnosis: "A price-sheet move, not a positioning move. The buyer doesn't need a menu.",
      },
    ],
  },

  // 13 · Action. Output. Change.
  {
    kind: "columns",
    id: "m1-work-framework",
    crumb: S3,
    tag: "FRAMEWORK",
    number: "13",
    audio: { src: "/audio/m1/m1-13.mp3", cues: [4.5, 15.4, 27.2] },
    heading: "Action. Output. *Change*.",
    columns: [
      {
        num: "01",
        title: "The action",
        bullets: [
          "What you actually do. The verbs",
          "A chiropractor adjusts. A photographer captures and edits. A consultant audits and rebuilds",
        ],
      },
      {
        num: "02",
        title: "The output",
        bullets: [
          "What the client walks away with",
          "A treatment plan and reduced pain. A complete wedding gallery. A documented strategy",
        ],
      },
      {
        num: "03",
        title: "The change",
        bullets: [
          "What's true about the client's life that wasn't true before",
          "The client carries their child without flinching",
        ],
      },
    ],
  },

  // 14 · What do you do, five examples
  {
    kind: "examples",
    id: "m1-work-examples",
    crumb: S3,
    tag: "CALIBRATION",
    number: "14",
    audio: { src: "/audio/m1/m1-14.mp3", cues: [3.1, 17.0, 31.0, 45.4, 62.6] },
    heading: "What do you *do*.",
    personas: [
      {
        name: "Maya",
        role: "therapist",
        quote:
          "\"Weekly fifty-minute sessions over three to twelve months, using cognitive behavioral methods adapted for high-performing professionals. Clients leave with tools and self-knowledge that doesn't require staying in therapy forever.\"",
        note: "The change is positioned *against open-ended therapy*.",
      },
      {
        name: "Marcus",
        role: "pressure washer",
        quote:
          "\"Cleaning exterior surfaces (siding, driveways, decks, fences) using commercial-grade equipment in a single visit, four to six hours on-site. The client walks out the next morning to a property that looks five years younger.\"",
        note: "Action specific. Output same-day. Change *visible and immediate*.",
      },
      {
        name: "Lena",
        role: "photographer",
        quote:
          "\"Documenting wedding days from morning preparation through reception, in candid documentary style with minimal posing. Clients receive a complete edited gallery within six weeks, typically four to six hundred images.\"",
        note: "The change: *the wedding's actual story, preserved*.",
      },
      {
        name: "James",
        role: "chiropractor",
        quote:
          "\"Assessing the source of the injury or pain in the first visit, then designing a treatment plan with a defined endpoint, usually six to twelve sessions. Patients leave with reduced pain and the strength to keep it from coming back.\"",
        note: "Output is *finite*, not subscription. Change is durable.",
      },
      {
        name: "Sasha",
        role: "vivids stylist",
        quote:
          "\"Color transformations using fashion colors (vivid reds, blues, pinks, neons) across single 6-to-10-hour sessions, with hair-health protocols that protect integrity through repeated processing. Clients walk out with the color they followed me on Instagram for, and the structural strength to maintain it.\"",
        note: "The change: *vivid color without compromising the hair underneath*.",
      },
    ],
  },

  // 15 · On describing your service
  {
    kind: "principle",
    id: "m1-describing",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "15",
    audio: { src: "/audio/m1/m1-15.mp3" },
    headline:
      "Describing your service specifically doesn't mean refusing services you also offer.",
    sub: "A vague description doesn't expand your business. It only makes your marketing *harder to remember*.",
  },

  // 16 · Exercise: what do you do
  {
    kind: "exercise",
    id: "m1-work-exercise",
    crumb: S3,
    tag: "EXERCISE",
    number: "16",
    audio: { src: "/audio/m1/m1-16.mp3" },
    heading: "Write your *answer*.",
    promptLines: [
      "A rough first pass, using the three-layer framework: action, output, change.",
      "Give it the couple of real minutes it needs. *The course waits.*",
    ],
    exercise: "work",
    remember:
      "The action, the output, the change. What you *do*, not what you *are*.",
    compare: {
      do: "I clean exterior surfaces in a single visit. The client walks out to a property that looks five years younger.",
      not: "I'm a pressure washer.",
    },
    // Reference copies of the module's persona answers (the
    // calibration slide is the source of truth for the wording).
    examples: [
      { name: "Maya", role: "therapist", text: "Weekly fifty-minute sessions over three to twelve months, using cognitive behavioral methods adapted for high-performing professionals. Clients leave with tools and self-knowledge that doesn't require staying in therapy forever." },
      { name: "Marcus", role: "pressure washer", text: "Cleaning exterior surfaces (siding, driveways, decks, fences) using commercial-grade equipment in a single visit, four to six hours on-site. The client walks out the next morning to a property that looks five years younger." },
      { name: "Lena", role: "photographer", text: "Documenting wedding days from morning preparation through reception, in candid documentary style with minimal posing. Clients receive a complete edited gallery within six weeks, typically four to six hundred images." },
      { name: "James", role: "chiropractor", text: "Assessing the source of the injury or pain in the first visit, then designing a treatment plan with a defined endpoint, usually six to twelve sessions. Patients leave with reduced pain and the strength to keep it from coming back." },
      { name: "Sasha", role: "vivids stylist", text: "Color transformations using fashion colors (vivid reds, blues, pinks, neons) across single 6-to-10-hour sessions, with hair-health protocols that protect integrity through repeated processing. Clients walk out with the color they followed me on Instagram for, and the structural strength to maintain it." },
    ],
  },

  // 17 · Question 3
  {
    kind: "question",
    id: "m1-q3",
    crumb: S4,
    tag: "QUESTION 03",
    number: "17",
    audio: {
      src: "/audio/m1/m1-17.mp3",
      // The question holds the screen; the different-not-better
      // teaching arrives beneath it with the voice.
      cues: [0.3, 3.4, 3.6, 16.1, 42.7],
    },
    pre: "The hardest of the three.",
    lines: ["What makes you *different?*"],
    panel: {
      eyebrow: "Different. Not better.",
      paragraphs: [
        "*Different* and better are not the same question.",
        "Better is comparative and unverifiable. Different is descriptive and *falsifiable*.",
      ],
      callout:
        "The buyer's job isn't to decide which business is best. *It's to decide which business is for them.*",
    },
  },

  // 18 · Three patterns that flatten
  {
    kind: "patterns",
    id: "m1-different-weak",
    crumb: S4,
    tag: "CALIBRATION",
    number: "18",
    audio: { src: "/audio/m1/m1-18.mp3", cues: [2.6, 11.5, 22.1] },
    heading: "Three patterns that *flatten*.",
    patterns: [
      {
        label: "Quality claims",
        quote: ["\"I care about quality.\"", "\"I take a personal approach.\"", "\"I have high standards.\""],
        diagnosis: "Baseline expectations, not differentiators. The customer assumes these.",
      },
      {
        label: "Credentials as differentiation",
        quote: ["\"15 years of experience.\"", "\"Certified in X.\"", "\"Worked with hundreds of clients.\""],
        diagnosis:
          "Credentials answer *should I trust you*, not *why should I choose you over someone else*.",
      },
      {
        label: "False uniqueness",
        quote: ["\"I'm the only one who really understands my clients.\"", "\"Nobody does it like I do.\""],
        diagnosis:
          "Confidence with no evidence. The buyer can't verify it and shouldn't be expected to take it on faith.",
      },
    ],
  },

  // 19 · Approach. Constraint. Combination. Position.
  {
    kind: "columns",
    id: "m1-different-framework",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "19",
    audio: { src: "/audio/m1/m1-19.mp3", cues: [4.3, 9.3, 16.4, 24.1] },
    eyebrow: "Four sources of real differentiation",
    heading: "Approach. Constraint. Combination. *Position*.",
    columns: [
      {
        num: "01",
        title: "Approach",
        text: "A specific, named method or philosophy. *Not \"I'm thorough\" but a named way of working.*",
      },
      {
        num: "02",
        title: "Constraint",
        text: "What you deliberately don't do. *Most competitors are afraid to constrain.*",
      },
      {
        num: "03",
        title: "Combination",
        text: "The specific combination of skills or background you bring. *Not the credentials, but how they combine.*",
      },
      {
        num: "04",
        title: "Position",
        text: "A clear stance against something common. *The thing you've explicitly rejected that competitors quietly do.*",
      },
    ],
  },

  // 20 · What makes you different, five examples
  {
    kind: "examples",
    id: "m1-different-examples",
    crumb: S4,
    tag: "CALIBRATION",
    number: "20",
    audio: { src: "/audio/m1/m1-20.mp3", cues: [0.0, 18.5, 32.6, 51.7, 68.2] },
    heading: "What makes you *different*.",
    personas: [
      {
        name: "Maya",
        role: "therapist",
        quote:
          "\"Defined timeline with the explicit goal of ending therapy. Treats clients as competent adults who can handle directness, not fragile patients.\"",
        note: "*Constraint* + *approach*. Both push against category defaults.",
      },
      {
        name: "Marcus",
        role: "pressure washer",
        quote:
          "\"Shows up when he says he will. Completes the job in the window quoted. Doesn't upsell. The price you got is the price you pay.\"",
        note: "A *position* against the most common complaints customers have about contractors.",
      },
      {
        name: "Lena",
        role: "photographer",
        quote:
          "\"Documentary style only. Doesn't do extensive posing. 'If you want thirty staged photographs of the bridal party, I'm not the right photographer for you.'\"",
        note: "*Constraint* + *position*. The \"I'm not the right one\" line is the strongest move.",
      },
      {
        name: "James",
        role: "chiropractor",
        quote:
          "\"Defined treatment plan with a stated endpoint. Doesn't sell ongoing care plans, monthly memberships, or maintenance subscriptions. When the work is done, you stop coming.\"",
        note: "*Constraint* against the dominant business model in chiropractic care.",
      },
      {
        name: "Sasha",
        role: "vivids stylist",
        quote:
          "\"Vivids only. No balayage, no foils, no special-occasion blowouts. Hair-health-first protocol, including the willingness to refuse a transformation if I think the hair can't sustain it without damage.\"",
        note: "*Constraint* + *position*. The \"I'll refuse if it'll damage your hair\" is the strongest move.",
      },
    ],
  },

  // 21 · A common objection
  {
    kind: "principle",
    id: "m1-better-objection",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "21",
    audio: { src: "/audio/m1/m1-21.mp3" },
    eyebrow: "A common objection",
    headline: "If you're better, the work is to find what you're *specifically* better at.",
    sub: "\"Better\" on its own is invisible. \"Better at producing X for Y kind of client\" is visible. *Most of the time, what you find is closer to different than to more of the same.*",
  },

  // 22 · The contrarian move
  {
    kind: "principle",
    id: "m1-contrarian",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "22",
    audio: { src: "/audio/m1/m1-22.mp3" },
    eyebrow: "The contrarian move",
    headline: "What's the thing competitors in your category do *that you refuse to do?*",
    sub: "The strongest differentiators come from rejecting what's common. Maya rejected open-ended therapy. Marcus rejected upselling. Lena rejected staged posing. James rejected subscription care. Sasha rejected anything but vivids.",
  },

  // 23 · On being too direct
  {
    kind: "principle",
    id: "m1-repel",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "23",
    audio: { src: "/audio/m1/m1-23.mp3" },
    headline: "A sharp differentiator will turn off some prospects. *That's the point.*",
    sub: "If your differentiator doesn't repel anyone, it's probably not specific enough to attract anyone. A vague positioning attracts vague interest. *A sharp positioning attracts qualified interest.*",
  },

  // 24 · Exercise: your differentiator
  {
    kind: "exercise",
    id: "m1-different-exercise",
    crumb: S4,
    tag: "EXERCISE",
    number: "24",
    audio: { src: "/audio/m1/m1-24.mp3" },
    heading: "Write your *differentiator*.",
    promptLines: [
      "The hardest of the three. A rough first pass, using one or more of the four sources: approach, constraint, combination, position. Give it a few real minutes.",
      "If you're stuck, ask the contrarian question: *what does my category do that I refuse to do?*",
    ],
    exercise: "different",
    remember:
      "Different is descriptive and *falsifiable*. The buyer isn't choosing the best business, they're choosing the one that's *for them*.",
    compare: {
      do: "Documentary style only. If you want thirty staged photographs of the bridal party, I'm the wrong photographer.",
      not: "We care about quality.",
    },
    // Reference copies of the module's persona answers (the
    // calibration slide is the source of truth for the wording).
    examples: [
      { name: "Maya", role: "therapist", text: "Defined timeline with the explicit goal of ending therapy. Treats clients as competent adults who can handle directness, not fragile patients." },
      { name: "Marcus", role: "pressure washer", text: "Shows up when he says he will. Completes the job in the window quoted. Doesn't upsell. The price you got is the price you pay." },
      { name: "Lena", role: "photographer", text: "Documentary style only. Doesn't do extensive posing. 'If you want thirty staged photographs of the bridal party, I'm not the right photographer for you.'" },
      { name: "James", role: "chiropractor", text: "Defined treatment plan with a stated endpoint. Doesn't sell ongoing care plans, monthly memberships, or maintenance subscriptions. When the work is done, you stop coming." },
      { name: "Sasha", role: "vivids stylist", text: "Vivids only. No balayage, no foils, no special-occasion blowouts. Hair-health-first protocol, including the willingness to refuse a transformation if I think the hair can't sustain it without damage." },
    ],
  },

  // 25 · Section 5 opener
  {
    kind: "question",
    id: "m1-synthesis-open",
    crumb: S5,
    tag: "THE SYNTHESIS",
    number: "25",
    audio: { src: "/audio/m1/m1-25.mp3", cues: [2.4] },
    pre: "What you take with you.",
    lines: ["A positioning statement *that does real work.*"],
    post: "Three answers, one sentence, four minutes.",
  },

  // 26 · Three answers. One sentence. (the assembly moment)
  {
    kind: "synthesis",
    id: "m1-assemble",
    crumb: S5,
    tag: "FRAMEWORK",
    number: "26",
    audio: { src: "/audio/m1/m1-26.mp3" },
    eyebrow: "Pulling it together",
    heading: "Three answers. *One sentence*.",
    template:
      "\"I serve *[who you serve]* who *[situation, context, problem]*. I *[the action, output, change]*. What makes me different is *[approach, constraint, combination, position]*.\"",
    note: "The shape isn't sacred. You can rearrange the order, change the verbs, make it sound like you. *The substance is what matters.*",
  },

  // 27 · Maya + Marcus assembled
  {
    kind: "statements",
    id: "m1-assemblies-1",
    crumb: S5,
    tag: "CALIBRATION",
    number: "27",
    audio: { src: "/audio/m1/m1-27.mp3", cues: [0.0, 25.8] },
    heading: "Two ways the framework *assembles*.",
    statements: [
      {
        name: "Maya",
        role: "Therapist",
        text: "\"I work with high-functioning professionals managing chronic anxiety while running demanding careers. I deliver therapy on a defined timeline using cognitive behavioral methods, with the explicit goal of giving clients tools they take with them, not extending the relationship indefinitely. What makes me different is that I treat my clients as competent adults rather than fragile patients.\"",
      },
      {
        name: "Marcus",
        role: "Pressure washer",
        text: "\"I serve homeowners who've owned their property at least three years and are starting to notice the buildup but don't want to spend a Saturday on a ladder. I clean exterior surfaces with commercial-grade equipment in a single visit, and the price you got is the price you pay. What makes me different is that I show up when I say I will, complete the job in the window I quoted, and don't upsell during the visit.\"",
      },
    ],
  },

  // 28 · Lena + James assembled
  {
    kind: "statements",
    id: "m1-assemblies-2",
    crumb: S5,
    tag: "CALIBRATION",
    number: "28",
    audio: { src: "/audio/m1/m1-28.mp3", cues: [0.0, 24.7] },
    heading: "Two more *assemblies*.",
    statements: [
      {
        name: "Lena",
        role: "Photographer",
        text: "\"I serve couples planning weddings in the four-to-eight-thousand-dollar photography range who want a documentary style. I document wedding days in a candid style with minimal posing and deliver a complete edited gallery within six weeks. What makes me different is that I shoot documentary, not staged. If you want thirty posed photographs of the bridal party, I'm not the right photographer for you.\"",
      },
      {
        name: "James",
        role: "Chiropractor",
        text: "\"I work with adults who've had a recent injury or pain event and want to address it without being sold a long-term care plan they didn't ask for. I assess the source in the first visit and design a treatment plan with a defined endpoint, usually six to twelve sessions. What makes me different is that I don't sell ongoing care plans or maintenance subscriptions. When the work is done, you stop coming.\"",
      },
    ],
  },

  // 29 · Sasha assembled
  {
    kind: "statements",
    id: "m1-assemblies-3",
    crumb: S5,
    tag: "CALIBRATION",
    number: "29",
    audio: { src: "/audio/m1/m1-29.mp3", cues: [0.0] },
    eyebrow: "And one more, with a different shape",
    heading: "A visual-first *assembly*.",
    statements: [
      {
        name: "Sasha",
        role: "Vivids stylist",
        text: "\"I serve women in their 20s and 30s who've been growing out their hair for a vivid transformation, who care about color theory and hair health. I do vivid color only: fashion colors across single 6-to-10-hour sessions, with hair-health protocols built in. What makes me different is that I'll refuse a transformation if I don't think the hair can sustain it. The color you see on my Instagram is the color you get, and the hair will still be hair when I'm done.\"",
      },
    ],
  },

  // 30 · The threshold for good enough
  {
    kind: "principle",
    id: "m1-threshold",
    crumb: S5,
    tag: "THE TAKEAWAY",
    number: "30",
    audio: { src: "/audio/m1/m1-30.mp3" },
    eyebrow: "The threshold for good enough",
    headline: "Specific enough that two competitors couldn't write the same sentence.",
    sub: "Foundation-level positioning. Not brand strategy. *The work this module does is enough to keep moving.*",
  },

  // 31 · Your framework, saved (stands in for the Map's Positioning tab)
  {
    kind: "summary",
    id: "m1-summary",
    crumb: CLOSING,
    tag: "TOOL",
    number: "31",
    audio: { src: "/audio/m1/m1-31.mp3" },
    eyebrow: "Your framework, saved",
    heading: "Your positioning *framework*.",
    paragraphs: [
      "This is where the rest of the course will reference it. Module 2's diagnostic uses it as context. Modules 3 through 8 reference it when you build your foundation strategies.",
      "It saves automatically. Take a minute to read it back, then meet me in Module 2.",
    ],
  },

  // 32 · Bridge to Module 2
  {
    kind: "prose",
    id: "m1-bridge",
    crumb: CLOSING,
    tag: "BRIDGE",
    number: "32",
    audio: { src: "/audio/m1/m1-32.mp3" },
    surface: "plum",
    mapFilled: 1,
    eyebrow: "You have your working positioning statement",
    heading: "Next: *the audit*.",
    paragraphs: [
      "Seven foundations. Three layers. An honest look at where your marketing actually stands.",
      "Take a breath. Then move to Module 2.",
    ],
  },
];
