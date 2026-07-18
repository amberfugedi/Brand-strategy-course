"use client";

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

  const serve = { situation: "", context: "", problem: "", ...positioning.serve };
  const work = { action: "", output: "", change: "", ...positioning.work };
  const different = { text: "", sources: [], ...positioning.different };

  return (
    <div className="flex flex-1 items-center justify-center py-4">
      <div className="w-full max-w-2xl border border-gold bg-cream-light px-8 py-9 md:px-12">
        <div className="text-center">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            Your turn
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            <Rich text={slide.heading} />
          </h1>
          <div className="mx-auto mt-4 max-w-lg space-y-1.5">
            {slide.promptLines.map((line, i) => (
              <p key={i} className="text-[14px] leading-relaxed text-body-secondary">
                <Rich text={line} />
              </p>
            ))}
          </div>
        </div>

        <div className="mt-7 space-y-4 text-left">
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
    </div>
  );
}
