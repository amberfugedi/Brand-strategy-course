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
      <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-body-tertiary">
        {slide.eyebrow}
      </div>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="mt-9 max-w-5xl space-y-4">
        {slide.patterns.slice(0, revealed).map((p) => (
          <div key={p.label} className="beat">
            <RevealCard
              eyebrow={p.label}
              visible={p.quote}
              revealed={<Rich text={p.diagnosis} />}
              revealLabel="Show the diagnosis"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
