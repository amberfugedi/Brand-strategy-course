import { FrameSlide as FrameSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { SkipAhead } from "@/components/slides/SkipAhead";

export function FrameSlide({ slide }: { slide: FrameSlideDef }) {
  return (
    <div className="flex flex-1 flex-col justify-center">
      {slide.eyebrow ? (
        <div className="mb-5 text-[11px] font-bold uppercase tracking-eyebrow text-gold/80">
          {slide.eyebrow}
        </div>
      ) : null}
      <h1 className="max-w-4xl text-balance font-serif text-5xl leading-tight md:text-6xl">
        <Rich text={slide.heading} />
      </h1>
      {slide.sub ? (
        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-on-dark/85">
          <Rich text={slide.sub} />
        </p>
      ) : null}
      {slide.skip ? (
        <SkipAhead label={slide.skip.label} to={slide.skip.to} />
      ) : null}
    </div>
  );
}
