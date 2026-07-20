"use client";

import { FoundationPlanSlide as FoundationPlanSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import {
  useCourseStore,
  useModule2,
  useModule8,
} from "@/lib/store/provider";
import {
  computeGaps,
  computePriorities,
  computeStartingPoint,
  diagnosticComplete,
} from "@/lib/content/m2Logic";
import { TOUCHPOINTS } from "@/components/slides/TouchpointsSlide";
import { REFERRAL_STAGES } from "@/components/slides/ReferralMapSlide";

/** The revised seven foundations, one per module. */
const PLAN_FOUNDATIONS = [
  { id: "positioning", name: "Positioning" },
  { id: "getFound", name: "Get found" },
  { id: "earnedProof", name: "Earned proof" },
  { id: "referrals", name: "Referral system" },
  { id: "brandAwareness", name: "Brand awareness" },
  { id: "ownedAudience", name: "Owned audience" },
  { id: "authority", name: "Authority building" },
];

const BUCKETS = [
  { value: "first", label: "First" },
  { value: "next", label: "Next" },
  { value: "later", label: "Later" },
];

const PROOF_LABELS: Record<string, string> = {
  client: "Client proof first",
  peer: "Peer proof first",
  institutional: "Institutional proof first",
};

const KIND_LABELS: Record<string, string> = {
  craft: "Craft",
  expertise: "Expertise",
  judgment: "Judgment",
};

export function FoundationPlanSlide({
  slide,
}: {
  slide: FoundationPlanSlideDef;
}) {
  const { doc } = useCourseStore();
  const { diagnostic } = useModule2();
  const { authorityKind, buckets, setBucket } = useModule8();

  const statement = doc.modules.m1?.positioning?.statement?.trim();
  const startingPoint = diagnosticComplete(diagnostic)
    ? computeStartingPoint(
        computePriorities(diagnostic),
        computeGaps(computePriorities(diagnostic), doc.modules.m2?.audit ?? {}),
      )
    : null;
  const touchpointOrder = doc.modules.m3?.touchpoints?.order ?? [];
  const primaryTouchpoint = TOUCHPOINTS.find(
    (t) => t.id === touchpointOrder[0],
  )?.label;
  const proofFirst = doc.modules.m4?.proof?.buildFirst;
  const referral = doc.modules.m5?.referral;
  const weakStage = REFERRAL_STAGES.find(
    (s) => s.id === referral?.weakStage,
  )?.label;
  const presence = doc.modules.m6?.presence;
  const owned = doc.modules.m7?.ownedAudience;

  const gathered: Record<string, string> = {
    positioning: statement
      ? `“${statement.length > 80 ? `${statement.slice(0, 80)}...` : statement}”`
      : "No statement saved yet.",
    getFound: primaryTouchpoint
      ? `Primary touchpoint: ${primaryTouchpoint}.`
      : "No primary touchpoint marked yet.",
    earnedProof: proofFirst
      ? `${PROOF_LABELS[proofFirst] ?? proofFirst}.`
      : "No source named yet.",
    referrals: weakStage
      ? `Weak stage to repair: ${weakStage}.${
          referral?.change ? ` One change named.` : ""
        }`
      : "No weak stage named yet.",
    brandAwareness: presence?.place
      ? `${presence.place}${
          presence.cadence ? `, ${presence.cadence.toLowerCase()}` : ""
        }.`
      : "No place named yet.",
    ownedAudience: owned?.channel
      ? `${owned.channel}${owned.cadence ? `, ${owned.cadence.toLowerCase()}` : ""}.`
      : "No channel planned yet.",
    authority: authorityKind
      ? `${KIND_LABELS[authorityKind] ?? authorityKind} authority.`
      : "No kind named yet.",
  };
  if (startingPoint) {
    gathered.positioning += ` Audit starting point: ${startingPoint.foundation.name}.`;
  }

  const sorted = PLAN_FOUNDATIONS.filter((f) => buckets[f.id]).length;

  return (
    <div className="mt-2 flex flex-1 flex-col">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-gold">
        {slide.eyebrow}
      </div>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        <Rich text={slide.heading} />
      </h1>
      <div className="mt-3 max-w-2xl space-y-1.5">
        {slide.paragraphs.map((p, i) => (
          <p key={i} className="text-[14px] leading-relaxed text-on-dark/85">
            <Rich text={p} />
          </p>
        ))}
      </div>

      <div className="mt-6 max-w-3xl space-y-2 pb-4">
        {PLAN_FOUNDATIONS.map((f) => (
          <div
            key={f.id}
            className="border border-gold/40 bg-cream/5 px-5 py-3.5"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
              <div className="min-w-0">
                <div className="text-[15px] font-bold text-cream">{f.name}</div>
                <p className="mt-0.5 font-serif text-[12.5px] italic leading-snug text-on-dark-muted">
                  {gathered[f.id]}
                </p>
              </div>
              <div className="flex shrink-0 gap-1.5">
                {BUCKETS.map((b) => {
                  const active = buckets[f.id] === b.value;
                  return (
                    <button
                      key={b.value}
                      type="button"
                      onClick={() => setBucket(f.id, b.value)}
                      aria-pressed={active}
                      className={`border px-3 py-1.5 text-[12px] font-semibold transition-colors ${
                        active
                          ? "border-gold bg-gold text-ink"
                          : "border-gold/40 text-on-dark/85 hover:border-gold"
                      }`}
                    >
                      {b.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
        <p className="pt-1 font-serif text-[13px] italic text-on-dark-muted">
          {sorted === PLAN_FOUNDATIONS.length
            ? "All seven sorted. This is your Foundation Plan."
            : `${sorted} of ${PLAN_FOUNDATIONS.length} sorted. Later is allowed to be a long list.`}
        </p>
      </div>
    </div>
  );
}
