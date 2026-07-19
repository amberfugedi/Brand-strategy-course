"use client";

import { StartingPointSlide as StartingPointSlideDef } from "@/lib/content/types";
import {
  computeGaps,
  computePriorities,
  computeStartingPoint,
  diagnosticComplete,
} from "@/lib/content/m2Logic";
import { Rich } from "@/components/Rich";
import { useModule2 } from "@/lib/store/provider";

export function StartingPointSlide({
  slide,
}: {
  slide: StartingPointSlideDef;
}) {
  const { diagnostic, audit } = useModule2();
  const complete = diagnosticComplete(diagnostic);
  const startingPoint = complete
    ? computeStartingPoint(
        computePriorities(diagnostic),
        computeGaps(computePriorities(diagnostic), audit),
      )
    : null;

  return (
    <div className="flex flex-1 flex-col justify-center">
      {slide.pre ? (
        <p className="mb-8 text-[17px] text-gold/80">{slide.pre}</p>
      ) : null}
      {slide.lines.map((line, i) => (
        <h1
          key={i}
          className="text-4xl font-normal leading-snug tracking-tight md:text-5xl"
        >
          <Rich text={line} />
        </h1>
      ))}
      {slide.post ? (
        <p className="mt-8 text-[17px] text-gold/80">{slide.post}</p>
      ) : null}

      <div className="mt-10 max-w-2xl border-l-[3px] border-gold bg-cream/5 px-7 py-6">
        {startingPoint ? (
          <>
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
              Build first
            </div>
            <div className="mt-2 text-2xl font-bold tracking-tight text-cream">
              {startingPoint.foundation.name}
            </div>
            <p className="mt-3 font-serif text-[15px] italic leading-relaxed text-on-dark-muted">
              {startingPoint.reasoning}
            </p>
          </>
        ) : (
          <p className="font-serif text-[15px] italic text-on-dark-muted">
            Your starting point compiles from the diagnostic and the audit.
            Finish both to see it here.
          </p>
        )}
      </div>
    </div>
  );
}
