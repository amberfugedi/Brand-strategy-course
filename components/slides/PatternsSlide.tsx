import { PatternsSlide as PatternsSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { RevealCard } from "@/components/primitives/RevealCard";

export function PatternsSlide({
  slide,
  revealed = Infinity,
}: {
  slide: PatternsSlideDef;
  revealed?: number;
}) {
  return (
    <div className="mt-4 flex flex-1 flex-col">
      {slide.eyebrow ? (
        <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-body-tertiary">{slide.eyebrow}</div>
      ) : null}
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="my-auto max-w-5xl space-y-4 py-8">
        {slide.patterns.slice(0, revealed).map((p) => (
          <div key={p.label} className="beat">
            <RevealCard
              accent="coral"
              eyebrow={p.label}
              visible={
                Array.isArray(p.quote) ? (
                  <div className="space-y-1">
                    {p.quote.map((q) => (
                      <div key={q}>
                        <Rich text={q} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Rich text={p.quote} />
                )
              }
              revealed={<Rich text={p.diagnosis} />}
              revealLabel="Show the diagnosis"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
