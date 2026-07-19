"use client";

import { GapListSlide as GapListSlideDef } from "@/lib/content/types";
import {
  computeGaps,
  computePriorities,
  diagnosticComplete,
  GapTier,
} from "@/lib/content/m2Logic";
import { Rich } from "@/components/Rich";
import { useModule2 } from "@/lib/store/provider";

const GAP_META: Record<GapTier, { label: string; color: string }> = {
  critical: { label: "Critical", color: "border-rust text-rust" },
  maintenance: { label: "Maintenance", color: "border-gold text-gold" },
  solid: { label: "Solid", color: "border-olive text-olive" },
};

export function GapListSlide({ slide }: { slide: GapListSlideDef }) {
  const { diagnostic, audit } = useModule2();
  const complete = diagnosticComplete(diagnostic);
  const gaps = complete
    ? computeGaps(computePriorities(diagnostic), audit)
    : [];
  const answered = gaps.filter((g) => g.gap !== null);
  const unanswered = gaps.length - answered.length;

  return (
    <div className="mt-2 flex flex-1 flex-col">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-teal">
        {slide.eyebrow}
      </div>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="mt-4 max-w-4xl space-y-1.5">
        {slide.tiers.map((t) => (
          <p key={t.label} className="text-[13.5px] leading-snug">
            <em className="accent-serif">{t.label}</em>
            <span className="text-body-secondary">. {t.text}</span>
          </p>
        ))}
      </div>

      <div className="mt-6 border-t border-subtle pt-5">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-eyebrow text-body-secondary">
          Your Gap List
        </div>
        {!complete ? (
          <p className="font-serif text-[14px] italic text-body-tertiary">
            The Gap List compiles from your diagnostic and audit. Do those
            first.
          </p>
        ) : (
          <>
            <div className="grid max-w-4xl gap-x-8 gap-y-2 md:grid-cols-2">
              {answered.map((g) => (
                <div key={g.foundation.id} className="flex items-baseline gap-3">
                  <span
                    className={`shrink-0 border px-2 py-0.5 text-[9px] font-bold uppercase tracking-chrome ${GAP_META[g.gap!].color}`}
                  >
                    {GAP_META[g.gap!].label}
                  </span>
                  <span className="text-[14px] font-semibold">
                    {g.foundation.name}
                  </span>
                  <span className="text-[11px] uppercase tracking-chrome text-body-tertiary">
                    {g.tier} priority
                  </span>
                </div>
              ))}
            </div>
            {unanswered > 0 ? (
              <p className="mt-4 font-serif text-[13px] italic text-body-tertiary">
                {unanswered === 1
                  ? "One foundation is still unanswered in the audit."
                  : `${unanswered} foundations are still unanswered in the audit.`}
              </p>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
