import { FrameSlide as FrameSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { SkipAhead } from "@/components/slides/SkipAhead";
import { StrataEtch } from "@/components/slides/StrataEtch";

export function FrameSlide({
  slide,
  strata,
}: {
  slide: FrameSlideDef;
  strata?: number | "all";
}) {
  return (
    <div className="relative flex flex-1 flex-col justify-center">
      <StrataEtch active={strata} />
      {slide.eyebrow ? (
          <div
            className="enter mb-5 text-[11px] font-bold uppercase tracking-eyebrow text-gold"
            style={{ "--n": 0 } as React.CSSProperties}
          >
            {slide.eyebrow}
          </div>
        ) : null}
      <h1
        className="enter max-w-4xl text-balance font-serif text-5xl leading-tight md:text-6xl"
        style={{ "--n": 1 } as React.CSSProperties}
      >
        <Rich text={slide.heading} />
      </h1>
      {slide.sub ? (
        <p
          className="enter mt-5 max-w-xl text-[17px] leading-relaxed text-on-dark/85"
          style={{ "--n": 3 } as React.CSSProperties}
        >
          <Rich text={slide.sub} />
        </p>
      ) : null}
      {slide.skip ? (
        <div className="enter" style={{ "--n": 4 } as React.CSSProperties}>
          <SkipAhead label={slide.skip.label} to={slide.skip.to} />
        </div>
      ) : null}
    </div>
  );
}
