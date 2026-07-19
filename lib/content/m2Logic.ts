/**
 * Module 2 domain: the seven foundations, the six diagnostic
 * questions, the audit dimensions, and the logic that turns answers
 * into a priority order, Gap List, and starting point.
 *
 * IMPORTANT: the scoring rules below are a first implementation of
 * the patterns documented in the course scaffold (ethics restrictions
 * lower Reviews and raise Authority, remote removes Local Presence,
 * audience age shifts email/search vs social, long pre-contact
 * engagement rewards Authority and Owned Audience, the discovery
 * channel anchors what already works). Edge cases are not final.
 * Review and adjust the RULES table; nothing else needs to change.
 */

export type PriorityTier = "high" | "medium" | "low" | "na";
export type GapTier = "critical" | "maintenance" | "solid";

export interface Foundation {
  id: string;
  num: string;
  name: string;
  layer: string;
}

export const FOUNDATIONS: Foundation[] = [
  { id: "localPresence", num: "01", name: "Local Presence", layer: "Get found" },
  { id: "onlinePresence", num: "02", name: "Online Presence", layer: "Get found" },
  { id: "reviews", num: "03", name: "Reviews and Social Proof", layer: "Get chosen" },
  { id: "referrals", num: "04", name: "Referral System", layer: "Get chosen" },
  { id: "brandAwareness", num: "05", name: "Brand Awareness", layer: "Be remembered" },
  { id: "ownedAudience", num: "06", name: "Owned Audience", layer: "Be remembered" },
  { id: "authority", num: "07", name: "Authority Building", layer: "Be remembered" },
];

export interface DiagnosticQuestion {
  id: string;
  num: string;
  prompt: string;
  options: { value: string; label: string }[];
}

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: "discovery",
    num: "Q01",
    prompt: "Where do most current clients first hear about you?",
    options: [
      { value: "search", label: "Google search" },
      { value: "directory", label: "An industry directory" },
      { value: "referrals", label: "Referrals" },
      { value: "social", label: "Social media" },
      { value: "walkby", label: "Walk-by or signage" },
      { value: "unknown", label: "I genuinely don't know" },
    ],
  },
  {
    id: "visualProof",
    num: "Q02",
    prompt: "Does your work depend on visual proof?",
    options: [
      { value: "high", label: "High. The work itself is visual." },
      { value: "medium", label: "Medium. Visuals help but don't decide it." },
      { value: "low", label: "Low. I sell expertise and judgment." },
    ],
  },
  {
    id: "ethics",
    num: "Q03",
    prompt: "Are you in an ethics-restricted profession?",
    options: [
      { value: "full", label: "Yes. Therapy, legal, healthcare, financial." },
      { value: "some", label: "Some restrictions apply." },
      { value: "none", label: "No restrictions." },
    ],
  },
  {
    id: "audienceAge",
    num: "Q04",
    prompt: "How old is your typical client?",
    options: [
      { value: "55plus", label: "55 and up" },
      { value: "35to55", label: "35 to 55" },
      { value: "18to35", label: "18 to 35" },
      { value: "wide", label: "A wide range" },
    ],
  },
  {
    id: "geography",
    num: "Q05",
    prompt: "Local-only, hybrid, or remote?",
    options: [
      { value: "local", label: "Local only" },
      { value: "hybrid", label: "Hybrid" },
      { value: "remote", label: "Fully remote or national" },
    ],
  },
  {
    id: "preContact",
    num: "Q06",
    prompt: "How long does a prospect engage with your work before reaching out?",
    options: [
      { value: "days", label: "Days or less" },
      { value: "weeks", label: "A few weeks" },
      { value: "months", label: "Months or longer" },
    ],
  },
];

export function diagnosticComplete(answers: Record<string, string>): boolean {
  return DIAGNOSTIC_QUESTIONS.every((q) => Boolean(answers[q.id]));
}

/* ------------------------------------------------------------------ */
/* Priority logic                                                      */
/* ------------------------------------------------------------------ */

interface Rule {
  when: (a: Record<string, string>) => boolean;
  foundation: string;
  delta: number;
  reason: string;
}

/** Additive adjustments on a base score of 1 per foundation. */
const RULES: Rule[] = [
  // Q01: the discovery channel that already works gets protected.
  { when: (a) => a.discovery === "search", foundation: "onlinePresence", delta: 1, reason: "Clients already find you through search. Protect and build on it." },
  { when: (a) => a.discovery === "search", foundation: "localPresence", delta: 1, reason: "Search discovery leans on your local listings." },
  { when: (a) => a.discovery === "directory", foundation: "onlinePresence", delta: 1, reason: "Directory discovery ends at your online presence." },
  { when: (a) => a.discovery === "referrals", foundation: "referrals", delta: 1, reason: "Referrals are already your discovery channel. Make them intentional." },
  { when: (a) => a.discovery === "social", foundation: "brandAwareness", delta: 1, reason: "Social discovery makes ongoing visibility strategic." },
  { when: (a) => a.discovery === "walkby", foundation: "localPresence", delta: 1, reason: "Walk-by discovery makes local presence your front door." },

  // Q02: visual work weights visual surfaces; judgment work weights credibility.
  { when: (a) => a.visualProof === "high", foundation: "brandAwareness", delta: 1, reason: "Your work sells visually. Prospects need to see it." },
  { when: (a) => a.visualProof === "high", foundation: "onlinePresence", delta: 1, reason: "Visual work needs a place to be seen." },
  { when: (a) => a.visualProof === "low", foundation: "authority", delta: 1, reason: "You sell judgment, so credibility signals carry the weight." },

  // Q03: ethics restrictions reshape the trust layer (see also FORCED below).
  { when: (a) => a.ethics === "full", foundation: "authority", delta: 2, reason: "In a restricted profession, authority substitutes for review-based credibility." },
  { when: (a) => a.ethics === "some", foundation: "reviews", delta: -1, reason: "Some restrictions limit how actively you can pursue reviews." },

  // Q04: where the audience lives shapes the Be Remembered layer.
  { when: (a) => a.audienceAge === "55plus", foundation: "ownedAudience", delta: 1, reason: "An older audience lives in email more than social." },
  { when: (a) => a.audienceAge === "55plus", foundation: "localPresence", delta: 1, reason: "An older audience finds services through search and local listings." },
  { when: (a) => a.audienceAge === "55plus", foundation: "brandAwareness", delta: -1, reason: "An older audience lives less on social." },
  { when: (a) => a.audienceAge === "18to35", foundation: "brandAwareness", delta: 1, reason: "A younger audience discovers visually and socially." },

  // Q05: geography.
  { when: (a) => a.geography === "local", foundation: "localPresence", delta: 1, reason: "A local business is found locally first." },
  { when: (a) => a.geography === "remote", foundation: "onlinePresence", delta: 1, reason: "Fully remote means your online presence does the finding." },

  // Q06: the length of the consideration period.
  { when: (a) => a.preContact === "days", foundation: "reviews", delta: 1, reason: "Quick decisions lean on quick-trust signals." },
  { when: (a) => a.preContact === "months", foundation: "authority", delta: 1, reason: "Long consideration rewards sustained credibility." },
  { when: (a) => a.preContact === "months", foundation: "ownedAudience", delta: 1, reason: "A long consideration period is where an owned audience earns its keep." },
];

/** Hard overrides applied after scoring. */
const FORCED: {
  when: (a: Record<string, string>) => boolean;
  foundation: string;
  tier: PriorityTier;
  reason: string;
}[] = [
  {
    when: (a) => a.geography === "remote",
    foundation: "localPresence",
    tier: "na",
    reason: "Fully remote. Local discovery does not apply to your business.",
  },
  {
    when: (a) => a.ethics === "full",
    foundation: "reviews",
    tier: "low",
    reason: "Professional rules restrict soliciting reviews. Keep the mechanism claimed, nothing more.",
  },
];

export interface Priority {
  foundation: Foundation;
  tier: PriorityTier;
  reasons: string[];
}

export function computePriorities(
  answers: Record<string, string>,
): Priority[] {
  const scores = new Map<string, number>();
  const reasons = new Map<string, string[]>();
  for (const f of FOUNDATIONS) {
    scores.set(f.id, 1);
    reasons.set(f.id, []);
  }

  for (const rule of RULES) {
    if (!rule.when(answers)) continue;
    scores.set(rule.foundation, (scores.get(rule.foundation) ?? 1) + rule.delta);
    reasons.get(rule.foundation)!.push(rule.reason);
  }

  const forced = new Map<string, { tier: PriorityTier; reason: string }>();
  for (const f of FORCED) {
    if (f.when(answers)) forced.set(f.foundation, { tier: f.tier, reason: f.reason });
  }

  const tierOf = (score: number): PriorityTier =>
    score >= 3 ? "high" : score === 2 ? "medium" : "low";

  let priorities = FOUNDATIONS.map((f) => {
    const override = forced.get(f.id);
    if (override) {
      return { foundation: f, tier: override.tier, reasons: [override.reason] };
    }
    const score = Math.max(0, Math.min(4, scores.get(f.id) ?? 1));
    const rs = reasons.get(f.id)!;
    return {
      foundation: f,
      tier: tierOf(score),
      reasons: rs.length
        ? rs
        : ["No answer pushed this up or down. Acceptable is enough here."],
    };
  });

  // Every business needs at least one place to start building.
  if (!priorities.some((p) => p.tier === "high")) {
    const candidates = priorities.filter((p) => p.tier !== "na");
    const top = candidates.reduce((best, p) =>
      (scores.get(p.foundation.id) ?? 0) > (scores.get(best.foundation.id) ?? 0)
        ? p
        : best,
    );
    priorities = priorities.map((p) =>
      p === top ? { ...p, tier: "high" as PriorityTier } : p,
    );
  }

  const order: PriorityTier[] = ["high", "medium", "low", "na"];
  return priorities.sort(
    (a, b) =>
      order.indexOf(a.tier) - order.indexOf(b.tier) ||
      a.foundation.num.localeCompare(b.foundation.num),
  );
}

/* ------------------------------------------------------------------ */
/* Audit                                                               */
/* ------------------------------------------------------------------ */

export interface Dimension {
  id: string;
  title: string;
  question: string;
  options: { value: GapTier; label: string }[];
}

/**
 * v1 audit states. The deck teaches scenario-based picking; these
 * generic states use the deck's own tier language until the full
 * per-foundation scenario anchors are supplied, at which point they
 * swap in here per foundation without touching the components.
 */
export const DIMENSIONS: Record<string, Dimension> = {
  presence: {
    id: "presence",
    title: "Presence",
    question: "Does it exist?",
    options: [
      { value: "critical", label: "It does not exist yet." },
      { value: "maintenance", label: "It exists, but it's incomplete or out of date." },
      { value: "solid", label: "It exists and represents the business well." },
    ],
  },
  quality: {
    id: "quality",
    title: "Quality",
    question: "Does it work well?",
    options: [
      { value: "critical", label: "It wouldn't help someone choose us." },
      { value: "maintenance", label: "Acceptable. Not strong, not broken." },
      { value: "solid", label: "Strong. It does its job." },
    ],
  },
  consistency: {
    id: "consistency",
    title: "Consistency",
    question: "Are you sustaining it?",
    options: [
      { value: "critical", label: "No one maintains it." },
      { value: "maintenance", label: "Maintained in bursts, then neglected." },
      { value: "solid", label: "Maintained as a routine." },
    ],
  },
  acceptability: {
    id: "acceptability",
    title: "Acceptability",
    question: "Is it acceptable for right now?",
    options: [
      { value: "critical", label: "No. It's actively hurting us." },
      { value: "maintenance", label: "It's fine for now." },
      { value: "solid", label: "Yes. It's solid." },
    ],
  },
};

/** Depth varies by priority: the Option C weighting, locked. */
export function dimensionsFor(tier: PriorityTier): Dimension[] {
  if (tier === "high")
    return [DIMENSIONS.presence, DIMENSIONS.quality, DIMENSIONS.consistency];
  if (tier === "medium") return [DIMENSIONS.presence, DIMENSIONS.quality];
  if (tier === "low") return [DIMENSIONS.acceptability];
  return [];
}

/** Presence marked absent locks the deeper dimensions (the deck's
 *  "some questions will be locked" behavior). */
export function presenceLocked(picks: Record<string, string> | undefined): boolean {
  return picks?.presence === "critical";
}

export interface GapResult {
  foundation: Foundation;
  tier: PriorityTier;
  gap: GapTier | null; // null while incomplete
}

const GAP_ORDER: GapTier[] = ["critical", "maintenance", "solid"];

export function computeGaps(
  priorities: Priority[],
  audit: Record<string, Record<string, string>>,
): GapResult[] {
  return priorities
    .filter((p) => p.tier !== "na")
    .map((p) => {
      const picks = audit[p.foundation.id] ?? {};
      if (presenceLocked(picks)) {
        return { foundation: p.foundation, tier: p.tier, gap: "critical" as GapTier };
      }
      const dims = dimensionsFor(p.tier);
      const answered = dims
        .map((d) => picks[d.id])
        .filter((v): v is GapTier => GAP_ORDER.includes(v as GapTier));
      if (answered.length < dims.length) {
        return { foundation: p.foundation, tier: p.tier, gap: null };
      }
      const worst = answered.reduce((w, v) =>
        GAP_ORDER.indexOf(v) < GAP_ORDER.indexOf(w) ? v : w,
      );
      return { foundation: p.foundation, tier: p.tier, gap: worst };
    });
}

export function auditComplete(gaps: GapResult[]): boolean {
  return gaps.length > 0 && gaps.every((g) => g.gap !== null);
}

export interface StartingPoint {
  foundation: Foundation;
  tier: PriorityTier;
  reasoning: string;
}

/** The single foundation to build first: the highest-priority
 *  critical gap; if nothing is critical, the highest-priority
 *  maintenance gap. */
export function computeStartingPoint(
  priorities: Priority[],
  gaps: GapResult[],
): StartingPoint | null {
  if (!auditComplete(gaps)) return null;
  const tierOrder: PriorityTier[] = ["high", "medium", "low"];
  const pick =
    tierOrder
      .flatMap((t) => gaps.filter((g) => g.tier === t && g.gap === "critical"))
      .at(0) ??
    tierOrder
      .flatMap((t) => gaps.filter((g) => g.tier === t && g.gap === "maintenance"))
      .at(0);
  if (!pick) return null;

  const priority = priorities.find((p) => p.foundation.id === pick.foundation.id);
  const state =
    pick.gap === "critical" ? "broken or absent today" : "slipping today";
  const why = priority?.reasons[0] ?? "";
  return {
    foundation: pick.foundation,
    tier: pick.tier,
    reasoning: `${pick.foundation.name} is ${pick.tier} priority for your business and it is ${state}. ${why}`.trim(),
  };
}
