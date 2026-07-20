import { PrincipleSlide as PrincipleSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function PrincipleSlide({ slide }: { slide: PrincipleSlideDef }) {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mx-auto w-full max-w-5xl border-y border-gold/25 py-20 text-center md:py-24">
        {slide.eyebrow ? (
          <div className="mb-8 text-[11px] font-bold uppercase tracking-eyebrow text-gold">
            {slide.eyebrow}
          </div>
        ) : null}
        <h1
          className={`mx-auto max-w-4xl ${
            slide.sans
              ? "text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              : "font-serif text-4xl leading-snug md:text-5xl"
          }`}
        >
          <Rich text={slide.headline} />
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-[16px] leading-relaxed text-on-dark-muted">
          <Rich text={slide.sub} />
        </p>
      </div>
    </div>
  );
}
