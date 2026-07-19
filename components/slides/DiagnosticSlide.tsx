"use client";

import { DiagnosticSlide as DiagnosticSlideDef } from "@/lib/content/types";
import { DIAGNOSTIC_QUESTIONS, diagnosticComplete } from "@/lib/content/m2Logic";
import { Rich } from "@/components/Rich";
import { useModule2 } from "@/lib/store/provider";

export function DiagnosticSlide({ slide }: { slide: DiagnosticSlideDef }) {
  const { diagnostic, setDiagnostic } = useModule2();
  const complete = diagnosticComplete(diagnostic);

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

      <div className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-2">
        {DIAGNOSTIC_QUESTIONS.map((q) => (
          <div key={q.id}>
            <div className="flex items-baseline gap-2.5">
              <span className="text-[10px] font-bold tracking-chrome text-gold">
                {q.num}
              </span>
              <span className="text-[14px] font-semibold">{q.prompt}</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {q.options.map((opt) => {
                const active = diagnostic[q.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setDiagnostic(q.id, opt.value)}
                    aria-pressed={active}
                    className={`border px-3 py-1.5 text-[12.5px] transition-colors ${
                      active
                        ? "border-aubergine bg-aubergine text-cream"
                        : "border-ink/20 bg-cream-light text-body-secondary hover:border-gold"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 font-serif text-[14px] italic text-body-tertiary">
        {complete
          ? "All six answered. Your priority order is ready on the next slides."
          : "Answer all six. If you genuinely don't know, pick the option that says so."}
      </p>
    </div>
  );
}
