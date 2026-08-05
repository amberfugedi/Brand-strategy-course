import { PrincipleSlide as PrincipleSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function PrincipleSlide({ slide }: { slide: PrincipleSlideDef }) {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mx-auto w-full max-w-5xl text-center">
        <div className="rule-draw h-px w-full bg-gold/25" />
        <div className="py-20 md:py-24">
          {slide.eyebrow ? (
            <div
              className="enter mb-8 text-[11px] font-bold uppercase tracking-eyebrow text-gold"
              style={{ "--n": 1 } as React.CSSProperties}
            >
              {slide.eyebrow}
            </div>
          ) : null}
          <h1
            className={`enter mx-auto max-w-4xl text-balance ${
              slide.sans
                ? "text-4xl font-bold leading-tight tracking-tight md:text-5xl"
                : "font-serif text-4xl leading-snug md:text-5xl"
            }`}
            style={{ "--n": 2 } as React.CSSProperties}
          >
            <Rich text={slide.headline} />
          </h1>
          <p
            className="enter mx-auto mt-8 max-w-3xl text-[16px] leading-relaxed text-on-dark-muted"
            style={{ "--n": 4 } as React.CSSProperties}
          >
            <Rich text={slide.sub} />
          </p>
        </div>
        <div className="rule-draw h-px w-full bg-gold/25" />
      </div>
    </div>
  );
}
