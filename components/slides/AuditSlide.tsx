"use client";

import { AuditSlide as AuditSlideDef } from "@/lib/content/types";
import {
  computePriorities,
  diagnosticComplete,
  dimensionsFor,
  presenceLocked,
  PriorityTier,
} from "@/lib/content/m2Logic";
import { Rich } from "@/components/Rich";
import { useModule2 } from "@/lib/store/provider";

const TIER_LABEL: Record<PriorityTier, string> = {
  high: "High priority",
  medium: "Medium priority",
  low: "Low priority",
  na: "Not applicable",
};

export function AuditSlide({ slide }: { slide: AuditSlideDef }) {
  const { diagnostic, audit, setAudit } = useModule2();
  const complete = diagnosticComplete(diagnostic);
  const priorities = complete
    ? computePriorities(diagnostic).filter((p) => p.tier !== "na")
    : [];

  return (
    <div className="mt-2 flex flex-1 flex-col">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-rust">
        {slide.eyebrow}
      </div>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        <Rich text={slide.heading} />
      </h1>
      <p className="mt-2 max-w-3xl text-[14px] text-body-secondary">
        <Rich text={slide.intro} />
      </p>

      {!complete ? (
        <p className="mt-8 font-serif text-[14px] italic text-body-tertiary">
          The audit is tailored by your diagnostic. Answer the six questions
          first.
        </p>
      ) : (
        <div className="mt-6 max-w-5xl space-y-4 pb-4">
          {priorities.map((p) => {
            const picks = audit[p.foundation.id] ?? {};
            const locked = presenceLocked(picks);
            const dims = dimensionsFor(p.tier);
            return (
              <div
                key={p.foundation.id}
                className="border-l-[3px] border-teal bg-cream-light px-6 py-5"
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="text-[16px] font-bold">
                    {p.foundation.name}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
                    {TIER_LABEL[p.tier]}
                  </span>
                </div>

                <div className="mt-3 space-y-3">
                  {dims.map((dim, di) => {
                    const isLocked = locked && di > 0;
                    return (
                      <div key={dim.id}>
                        <div className="flex items-baseline gap-2.5">
                          <span className="text-[10px] font-bold uppercase tracking-eyebrow text-body-secondary">
                            {dim.title}
                          </span>
                          <span className="font-serif text-[12.5px] italic text-body-tertiary">
                            {dim.question}
                          </span>
                        </div>
                        {isLocked ? (
                          <p className="mt-1.5 text-[13px] text-body-tertiary">
                            Not applicable yet. Absence is the gap.
                          </p>
                        ) : (
                          <div className="mt-1.5 flex flex-wrap gap-1.5">
                            {dim.options.map((opt) => {
                              const active = picks[dim.id] === opt.value;
                              return (
                                <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() =>
                                    setAudit(p.foundation.id, dim.id, opt.value)
                                  }
                                  aria-pressed={active}
                                  className={`border px-3 py-1.5 text-[12.5px] transition-colors ${
                                    active
                                      ? "border-aubergine bg-aubergine text-cream"
                                      : "border-ink/20 bg-cream text-body-secondary hover:border-gold"
                                  }`}
                                >
                                  {opt.label}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
