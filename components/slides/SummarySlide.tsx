"use client";

import { useEffect, useState } from "react";
import { SummarySlide as SummarySlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { GuidedField } from "@/components/primitives/GuidedField";
import { usePositioning } from "@/lib/store/provider";

function Part({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
        {label}
      </div>
      <p className="mt-0.5 text-[14.5px] leading-relaxed text-body-secondary">{value}</p>
    </div>
  );
}

export function SummarySlide({ slide }: { slide: SummarySlideDef }) {
  const { positioning, setPositioning } = usePositioning();
  const statement = positioning.statement?.trim() ?? "";
  const [editing, setEditing] = useState(false);

  const serve = { situation: "", context: "", problem: "", ...positioning.serve };
  const work = { action: "", output: "", change: "", ...positioning.work };
  const different = { text: "", sources: [], ...positioning.different };

  // The framework counts as completed once a statement exists.
  useEffect(() => {
    if (statement && !positioning.completedAt) {
      setPositioning({ completedAt: new Date().toISOString() });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statement]);

  const serveParts = [serve.situation, serve.context, serve.problem]
    .filter(Boolean)
    .join(" · ");
  const workParts = [work.action, work.output, work.change]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="mt-4 flex flex-1 flex-col">
      <h1
        className="enter text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        style={{ "--n": 0 } as React.CSSProperties}
      >
        <Rich text={slide.heading} />
      </h1>

      <div
        className="enter rounded-3xl mt-8 max-w-3xl border-l-[3px] border-gold bg-cream-light px-7 py-7 md:px-9 md:py-8"
        style={{ "--n": 1 } as React.CSSProperties}
      >
        <label className="block">
          <span className="sr-only">Your positioning statement</span>
          <textarea
            value={positioning.statement ?? ""}
            onChange={(e) => setPositioning({ statement: e.target.value })}
            placeholder="No statement saved yet. Write it here, or in the assembly slide back in section 5."
            rows={3}
            className="w-full resize-y rounded-[14px] border border-transparent bg-transparent font-serif text-[18px] italic leading-relaxed text-body outline-none transition-colors placeholder:font-sans placeholder:not-italic placeholder:text-[15px] placeholder:text-body-tertiary hover:border-ink/15 focus:border-aubergine md:text-[19px]"
          />
        </label>

        <div className="mt-4 space-y-3 border-t border-subtle pt-5">
          {!editing ? (
            <>
              <Part label="Who you serve" value={serveParts} />
              <Part label="What you do" value={workParts} />
              <Part label="What makes you different" value={different.text} />
              <button
                type="button"
                onClick={() => setEditing(true)}
                className="text-[11px] font-bold uppercase tracking-chrome text-gold transition-colors hover:text-aubergine"
              >
                Edit the parts
              </button>
            </>
          ) : (
            <div className="space-y-2.5">
              <GuidedField
                label="Situation"
                value={serve.situation}
                onChange={(v) => setPositioning({ serve: { ...serve, situation: v } })}
              />
              <GuidedField
                label="Context"
                value={serve.context}
                onChange={(v) => setPositioning({ serve: { ...serve, context: v } })}
              />
              <GuidedField
                label="Problem"
                value={serve.problem}
                onChange={(v) => setPositioning({ serve: { ...serve, problem: v } })}
              />
              <GuidedField
                label="Action"
                value={work.action}
                onChange={(v) => setPositioning({ work: { ...work, action: v } })}
              />
              <GuidedField
                label="Output"
                value={work.output}
                onChange={(v) => setPositioning({ work: { ...work, output: v } })}
              />
              <GuidedField
                label="Change"
                value={work.change}
                onChange={(v) => setPositioning({ work: { ...work, change: v } })}
              />
              <GuidedField
                label="Your differentiator"
                value={different.text}
                onChange={(v) => setPositioning({ different: { ...different, text: v } })}
              />
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="text-[11px] font-bold uppercase tracking-chrome text-gold transition-colors hover:text-aubergine"
              >
                Done editing
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className="enter mt-7 max-w-3xl space-y-3"
        style={{ "--n": 3 } as React.CSSProperties}
      >
        {slide.paragraphs.map((p, i) => (
          <p key={i} className="text-[16px] leading-relaxed">
            <Rich text={p} />
          </p>
        ))}
      </div>
    </div>
  );
}
