import { CompareSlide as CompareSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function CompareSlide({
  slide,
  revealed = Infinity,
}: {
  slide: CompareSlideDef;
  revealed?: number;
}) {
  return (
    <div className="mt-4 flex flex-1 flex-col">
      {slide.eyebrow ? (
        <div className="mb-3 text-[11px] font-bold uppercase tracking-eyebrow text-gold">{slide.eyebrow}</div>
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="my-auto grid gap-6 py-9 md:grid-cols-2">
        {revealed >= 1 ? (
          <div className="rounded-3xl beat border border-l-[3px] border-subtle border-l-coral bg-cream-light px-7 py-6 shadow-lift">
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
              Weak
            </div>
            <p className="mt-3 text-[16px] font-bold">
              &ldquo;<Rich text={slide.weak.quote} />&rdquo;
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-body-secondary">
              <Rich text={slide.weak.text} />
            </p>
          </div>
        ) : null}
        {revealed >= 2 ? (
          <div className="rounded-3xl beat border border-l-[3px] border-subtle border-l-stone bg-cream-light px-7 py-6 shadow-lift">
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
              Strong
            </div>
            <p className="mt-3 text-[16px] font-bold">
              &ldquo;<Rich text={slide.strong.quote} />&rdquo;
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-body-secondary">
              <Rich text={slide.strong.text} />
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
