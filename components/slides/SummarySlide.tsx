"use client";

import { useEffect } from "react";
import { SummarySlide as SummarySlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { usePositioning } from "@/lib/store/provider";

function Part({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div>
      <div className="text-[9px] font-bold uppercase tracking-eyebrow text-body-tertiary">
        {label}
      </div>
      <p className="mt-0.5 text-[13.5px] leading-relaxed text-body-secondary">{value}</p>
    </div>
  );
}

export function SummarySlide({ slide }: { slide: SummarySlideDef }) {
  const { positioning, setPositioning } = usePositioning();
  const statement = positioning.statement?.trim() ?? "";

  // The framework counts as completed once a statement exists.
  useEffect(() => {
    if (statement && !positioning.completedAt) {
      setPositioning({ completedAt: new Date().toISOString() });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statement]);

  const serveParts = [
    positioning.serve?.situation,
    positioning.serve?.context,
    positioning.serve?.problem,
  ]
    .filter(Boolean)
    .join(" · ");
  const workParts = [
    positioning.work?.action,
    positioning.work?.output,
    positioning.work?.change,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="mt-4 flex flex-1 flex-col">
      <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-rust">
        {slide.eyebrow}
      </div>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="mt-8 max-w-3xl border-l-[3px] border-gold bg-cream-light px-9 py-8">
        {statement ? (
          <p className="font-serif text-[19px] italic leading-relaxed text-body">
            {statement}
          </p>
        ) : (
          <p className="text-[15px] text-body-secondary">
            No statement saved yet. The assembly slide in section 5 is where
            you write it. Your exercise answers appear here as you work.
          </p>
        )}
        {(serveParts || workParts || positioning.different?.text) && (
          <div className="mt-6 space-y-3 border-t border-subtle pt-5">
            <Part label="Who you serve" value={serveParts} />
            <Part label="What you do" value={workParts} />
            <Part label="What makes you different" value={positioning.different?.text ?? ""} />
          </div>
        )}
      </div>

      <div className="mt-7 max-w-3xl space-y-3">
        {slide.paragraphs.map((p, i) => (
          <p key={i} className="text-[16px] leading-relaxed">
            <Rich text={p} />
          </p>
        ))}
      </div>
    </div>
  );
}
