"use client";

import { PlanSlide as PlanSlideDef } from "@/lib/content/types";
import {
  computeGaps,
  computePriorities,
  computeStartingPoint,
  diagnosticComplete,
  GapTier,
  PriorityTier,
} from "@/lib/content/m2Logic";
import { Rich } from "@/components/Rich";
import { useModule2, usePositioning } from "@/lib/store/provider";

const TIER_LABEL: Record<PriorityTier, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
  na: "N/A",
};

const GAP_LABEL: Record<GapTier, string> = {
  critical: "Critical",
  maintenance: "Maintenance",
  solid: "Solid",
};

export function PlanSlide({ slide }: { slide: PlanSlideDef }) {
  const { positioning } = usePositioning();
  const { diagnostic, audit } = useModule2();
  const complete = diagnosticComplete(diagnostic);
  const priorities = complete ? computePriorities(diagnostic) : [];
  const gaps = complete ? computeGaps(priorities, audit) : [];
  const startingPoint = complete
    ? computeStartingPoint(priorities, gaps)
    : null;
  const statement = positioning.statement?.trim();

  return (
    <div className="mt-2 flex flex-1 flex-col">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-rust">
        {slide.eyebrow}
      </div>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        <Rich text={slide.heading} />
      </h1>
      <div className="mt-3 max-w-3xl space-y-2">
        {slide.paragraphs.map((p, i) => (
          <p key={i} className="text-[14px] leading-relaxed text-body-secondary">
            <Rich text={p} />
          </p>
        ))}
      </div>

      <div className="mt-6 grid max-w-5xl gap-4 pb-4 md:grid-cols-2">
        <div className="border-l-[3px] border-gold bg-cream-light px-6 py-5">
          <div className="text-[9px] font-bold uppercase tracking-eyebrow text-body-tertiary">
            Positioning
          </div>
          {statement ? (
            <p className="mt-2 font-serif text-[14px] italic leading-relaxed">
              {statement}
            </p>
          ) : (
            <p className="mt-2 text-[13px] text-body-tertiary">
              No statement saved. It lives at the end of Module 1.
            </p>
          )}
        </div>

        <div className="border-l-[3px] border-teal bg-cream-light px-6 py-5">
          <div className="text-[9px] font-bold uppercase tracking-eyebrow text-body-tertiary">
            Priority order
          </div>
          {complete ? (
            <ul className="mt-2 space-y-1">
              {priorities.map((p) => (
                <li key={p.foundation.id} className="flex items-baseline gap-2 text-[13px]">
                  <span className="w-16 shrink-0 text-[10px] font-bold uppercase tracking-chrome text-body-tertiary">
                    {TIER_LABEL[p.tier]}
                  </span>
                  {p.foundation.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-[13px] text-body-tertiary">
              Compiles from the diagnostic.
            </p>
          )}
        </div>

        <div className="border-l-[3px] border-olive bg-cream-light px-6 py-5">
          <div className="text-[9px] font-bold uppercase tracking-eyebrow text-body-tertiary">
            Gap List
          </div>
          {gaps.some((g) => g.gap !== null) ? (
            <ul className="mt-2 space-y-1">
              {gaps
                .filter((g) => g.gap !== null)
                .map((g) => (
                  <li key={g.foundation.id} className="flex items-baseline gap-2 text-[13px]">
                    <span className="w-24 shrink-0 text-[10px] font-bold uppercase tracking-chrome text-body-tertiary">
                      {GAP_LABEL[g.gap!]}
                    </span>
                    {g.foundation.name}
                  </li>
                ))}
            </ul>
          ) : (
            <p className="mt-2 text-[13px] text-body-tertiary">
              Compiles from the audit.
            </p>
          )}
        </div>

        <div className="border-l-[3px] border-rust bg-cream-light px-6 py-5">
          <div className="text-[9px] font-bold uppercase tracking-eyebrow text-body-tertiary">
            Starting point
          </div>
          {startingPoint ? (
            <>
              <div className="mt-2 text-[15px] font-bold">
                {startingPoint.foundation.name}
              </div>
              <p className="mt-1 font-serif text-[13px] italic leading-relaxed text-body-secondary">
                {startingPoint.reasoning}
              </p>
            </>
          ) : (
            <p className="mt-2 text-[13px] text-body-tertiary">
              Appears when the audit is complete.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
