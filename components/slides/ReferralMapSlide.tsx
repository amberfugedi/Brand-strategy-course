"use client";

import { ReferralMapSlide as ReferralMapSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { GuidedField } from "@/components/primitives/GuidedField";
import { useModule5 } from "@/lib/store/provider";

export const REFERRAL_STAGES = [
  {
    id: "earn",
    label: "Earn",
    hint: "Do they have something specific they could say about you?",
  },
  {
    id: "ask",
    label: "Ask",
    hint: "Do they know you welcome referrals, and who you are right for?",
  },
  {
    id: "tend",
    label: "Keep",
    hint: "After a referral, does anything keep the relationship alive?",
  },
];

const STATES = [
  { value: "solid", label: "Solid" },
  { value: "leaking", label: "Leaking" },
];

export function ReferralMapSlide({ slide }: { slide: ReferralMapSlideDef }) {
  const { referral, setReferral, setStage } = useModule5();
  const stages = referral.stages ?? {};

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

      <div className="mt-5 max-w-3xl space-y-3 pb-4">
        <GuidedField
          surface="dark"
          label="The source"
          hint="One real referral source: a kind of client, or a particular peer"
          rows={1}
          value={referral.source ?? ""}
          onChange={(v) => setReferral({ source: v })}
        />

        {REFERRAL_STAGES.map((stage) => (
          <div
            key={stage.id}
            className="border border-gold/40 bg-cream/5 px-5 py-3.5"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
              <div className="min-w-0">
                <div className="text-[15px] font-bold text-cream">
                  {stage.label}
                </div>
                <p className="mt-0.5 font-serif text-[12.5px] italic leading-snug text-on-dark-muted">
                  {stage.hint}
                </p>
              </div>
              <div className="flex shrink-0 gap-1.5">
                {STATES.map((s) => {
                  const active = stages[stage.id] === s.value;
                  return (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => setStage(stage.id, s.value)}
                      aria-pressed={active}
                      className={`border px-3 py-1.5 text-[12px] font-semibold transition-colors ${
                        active
                          ? "border-gold bg-gold text-ink"
                          : "border-gold/40 text-on-dark/85 hover:border-gold"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        <div className="border border-gold/40 bg-cream/5 px-5 py-3.5">
          <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            The single weak stage
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {REFERRAL_STAGES.map((stage) => {
              const active = referral.weakStage === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setReferral({ weakStage: stage.id })}
                  aria-pressed={active}
                  className={`border px-3 py-1.5 text-[12.5px] transition-colors ${
                    active
                      ? "border-gold bg-gold text-ink"
                      : "border-gold/40 text-on-dark/85 hover:border-gold"
                  }`}
                >
                  {stage.label}
                </button>
              );
            })}
          </div>
        </div>

        <GuidedField
          surface="dark"
          label="The one change"
          hint="One concrete change you will make to repair that stage"
          rows={1}
          value={referral.change ?? ""}
          onChange={(v) => setReferral({ change: v })}
        />
      </div>
    </div>
  );
}
