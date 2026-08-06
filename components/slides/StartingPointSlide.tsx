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
import { StrataEtch } from "@/components/slides/StrataEtch";

export function StartingPointSlide({
  slide,
  strata,
}: {
  slide: StartingPointSlideDef;
  strata?: number | "all";
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
    <div className="relative flex flex-1 flex-col justify-center">
      <StrataEtch active={strata} />
      {slide.pre ? (
        <p
          className="enter mb-8 text-[17px] text-gold/80"
          style={{ "--n": 0 } as React.CSSProperties}
        >
          {slide.pre}
        </p>
      ) : null}
      {slide.lines.map((line, i) => (
        <h1
          key={i}
          className="enter max-w-3xl text-balance text-4xl font-normal leading-snug tracking-tight md:text-5xl"
          style={{ "--n": 1 + i } as React.CSSProperties}
        >
          <Rich text={line} />
        </h1>
      ))}
      {slide.post ? (
        <p
          className="enter mt-8 text-[17px] text-gold/80"
          style={{ "--n": 1 + slide.lines.length } as React.CSSProperties}
        >
          {slide.post}
        </p>
      ) : null}

      <div
        className="enter mt-10 max-w-2xl border-l-[3px] border-gold bg-cream/5 px-7 py-6"
        style={{ "--n": 3 + slide.lines.length } as React.CSSProperties}
      >
        {startingPoint ? (
          <>
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
              Build first
            </div>
            <div className="mt-2 text-2xl font-bold tracking-tight text-cream">
              {startingPoint.foundation.name}
            </div>
            <p className="mt-3 text-[16px] leading-relaxed text-on-dark-muted">
              {startingPoint.reasoning}
            </p>
          </>
        ) : (
          <p className="text-[16px] text-on-dark-muted">
            Your starting point compiles from the diagnostic and the audit.
            Finish both to see it here.
          </p>
        )}
      </div>
    </div>
  );
}
