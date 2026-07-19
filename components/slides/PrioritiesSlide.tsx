"use client";

import { PrioritiesSlide as PrioritiesSlideDef } from "@/lib/content/types";
import {
  computePriorities,
  diagnosticComplete,
  PriorityTier,
} from "@/lib/content/m2Logic";
import { Rich } from "@/components/Rich";
import { useModule2 } from "@/lib/store/provider";

const TIER_LABEL: Record<PriorityTier, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
  na: "Not applicable",
};

const TIER_COLOR: Record<PriorityTier, string> = {
  high: "text-rust border-rust",
  medium: "text-teal border-teal",
  low: "text-olive border-olive",
  na: "text-body-tertiary border-ink/20",
};

export function PrioritiesSlide({ slide }: { slide: PrioritiesSlideDef }) {
  const { diagnostic } = useModule2();
  const complete = diagnosticComplete(diagnostic);
  const priorities = complete ? computePriorities(diagnostic) : [];

  return (
    <div className="mt-2 flex flex-1 flex-col">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-teal">
        {slide.eyebrow}
      </div>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="mt-4 grid max-w-5xl gap-x-10 gap-y-2 md:grid-cols-2">
        {slide.tiers.map((t) => (
          <p key={t.label} className="text-[13.5px] leading-snug">
            <em className="accent-serif">{t.label}</em>
            <span className="text-body-secondary">. {t.text}</span>
          </p>
        ))}
      </div>

      <div className="mt-6 border-t border-subtle pt-5">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-eyebrow text-body-secondary">
          Your priority order
        </div>
        {complete ? (
          <div className="grid max-w-5xl gap-x-8 gap-y-2.5 md:grid-cols-2">
            {priorities.map((p) => (
              <div key={p.foundation.id} className="flex items-baseline gap-3">
                <span
                  className={`shrink-0 border px-2 py-0.5 text-[9px] font-bold uppercase tracking-chrome ${TIER_COLOR[p.tier]}`}
                >
                  {TIER_LABEL[p.tier]}
                </span>
                <div>
                  <span className="text-[14px] font-semibold">
                    {p.foundation.name}
                  </span>
                  <p className="font-serif text-[12.5px] italic leading-snug text-body-tertiary">
                    {p.reasons[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-serif text-[14px] italic text-body-tertiary">
            Answer the six questions on the diagnostic slide first.
          </p>
        )}
      </div>
    </div>
  );
}
