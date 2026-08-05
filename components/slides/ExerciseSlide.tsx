"use client";

import { useState } from "react";
import { ExerciseSlide as ExerciseSlideDef } from "@/lib/content/types";
import { DifferentiatorSource } from "@/lib/store/types";
import { Rich } from "@/components/Rich";
import { GuidedField } from "@/components/primitives/GuidedField";
import { ChipSelect } from "@/components/primitives/ChipSelect";
import { usePositioning } from "@/lib/store/provider";

const SOURCE_OPTIONS: { value: DifferentiatorSource; label: string }[] = [
  { value: "approach", label: "Approach" },
  { value: "constraint", label: "Constraint" },
  { value: "combination", label: "Combination" },
  { value: "position", label: "Position" },
];

export function ExerciseSlide({ slide }: { slide: ExerciseSlideDef }) {
  const { positioning, setPositioning } = usePositioning();
  const [examplesOpen, setExamplesOpen] = useState(false);

  const serve = { situation: "", context: "", problem: "", ...positioning.serve };
  const work = { action: "", output: "", change: "", ...positioning.work };
  const different = { text: "", sources: [], ...positioning.different };

  const hasAside = Boolean(slide.remember || slide.compare || slide.examples);

  return (
    <div className="relative flex flex-1 items-center justify-center py-2">
      <div aria-hidden className="aura -right-[24vmin] -top-[18vmin]" />
      <div
        className={`grid w-full items-start gap-5 ${
          hasAside ? "max-w-5xl lg:grid-cols-[minmax(0,1fr),300px]" : "max-w-2xl"
        }`}
      >
      <div
        className="enter w-full rounded-3xl border border-subtle bg-cream-light px-7 py-5 shadow-lift md:px-10"
        style={{ "--n": 0 } as React.CSSProperties}
      >
        <div className="text-center">
          <div className="mb-2.5 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            Your turn
          </div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            <Rich text={slide.heading} />
          </h1>
          <div className="mx-auto mt-2.5 max-w-lg space-y-1">
            {slide.promptLines.map((line, i) => (
              <p key={i} className="text-[14.5px] leading-snug text-body-secondary">
                <Rich text={line} />
              </p>
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-2.5 text-left">
          {slide.exercise === "serve" ? (
            <>
              <GuidedField
                label="Situation"
                hint="Where they are in their life or business"
                value={serve.situation}
                onChange={(v) => setPositioning({ serve: { ...serve, situation: v } })}
              />
              <GuidedField
                label="Context"
                hint="What they're doing day to day that brings them to need you"
                value={serve.context}
                onChange={(v) => setPositioning({ serve: { ...serve, context: v } })}
              />
              <GuidedField
                label="Problem"
                hint="What pulled them to look, the problem under the problem"
                value={serve.problem}
                onChange={(v) => setPositioning({ serve: { ...serve, problem: v } })}
              />
            </>
          ) : null}

          {slide.exercise === "work" ? (
            <>
              <GuidedField
                label="Action"
                hint="What you actually do, the verbs"
                value={work.action}
                onChange={(v) => setPositioning({ work: { ...work, action: v } })}
              />
              <GuidedField
                label="Output"
                hint="What the client walks away with"
                value={work.output}
                onChange={(v) => setPositioning({ work: { ...work, output: v } })}
              />
              <GuidedField
                label="Change"
                hint="What's true about their life after the work"
                value={work.change}
                onChange={(v) => setPositioning({ work: { ...work, change: v } })}
              />
            </>
          ) : null}

          {slide.exercise === "different" ? (
            <>
              <div>
                <div className="mb-2 text-[10px] font-bold uppercase tracking-eyebrow text-body-secondary">
                  Where it comes from
                </div>
                <ChipSelect
                  options={SOURCE_OPTIONS}
                  selected={different.sources}
                  onToggle={(v) =>
                    setPositioning({
                      different: {
                        ...different,
                        sources: different.sources.includes(v)
                          ? different.sources.filter((s) => s !== v)
                          : [...different.sources, v],
                      },
                    })
                  }
                />
              </div>
              <GuidedField
                label="Your differentiator"
                hint="Something a competitor genuinely doesn't operate with"
                value={different.text}
                onChange={(v) => setPositioning({ different: { ...different, text: v } })}
              />
            </>
          ) : null}
        </div>
      </div>

      {hasAside ? (
        <aside
          className="enter space-y-4"
          style={{ "--n": 1 } as React.CSSProperties}
        >
          {slide.remember ? (
            <div className="rounded-3xl border-l-[3px] border-gold bg-butter/50 px-5 py-4">
              <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                Remember
              </div>
              <p className="mt-1.5 font-serif text-[15px] italic leading-relaxed text-body">
                <Rich text={slide.remember} />
              </p>
            </div>
          ) : null}

          {slide.compare ? (
            <div className="rounded-3xl border border-subtle bg-cream-light px-5 py-4">
              <div className="border-l-[3px] border-stone pl-3">
                <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                  Do this
                </div>
                <p className="mt-1 font-serif text-[13.5px] italic leading-relaxed text-body">
                  {slide.compare.do}
                </p>
              </div>
              <div className="mt-3.5 border-l-[3px] border-coral pl-3">
                <div className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
                  Not that
                </div>
                <p className="mt-1 font-serif text-[13.5px] italic leading-relaxed text-body-tertiary">
                  {slide.compare.not}
                </p>
              </div>
            </div>
          ) : null}

          {slide.examples?.length ? (
            <div className="rounded-3xl border border-subtle bg-cream-light px-5 py-4">
              <button
                type="button"
                onClick={() => setExamplesOpen((o) => !o)}
                aria-expanded={examplesOpen}
                className="text-[11px] font-bold uppercase tracking-chrome text-gold transition-colors hover:text-aubergine"
              >
                {examplesOpen ? "Hide module examples" : "See module examples"}
              </button>
              {examplesOpen ? (
                <div className="mt-3 max-h-[42vh] space-y-3.5 overflow-y-auto pr-1">
                  {slide.examples.map((ex) => (
                    <div key={ex.name}>
                      <div className="text-[12.5px] font-bold">
                        {ex.name}{" "}
                        <span className="font-normal text-body-tertiary">
                          {ex.role}
                        </span>
                      </div>
                      <p className="mt-0.5 font-serif text-[13px] italic leading-relaxed text-body-secondary">
                        {ex.text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </aside>
      ) : null}
      </div>
    </div>
  );
}
