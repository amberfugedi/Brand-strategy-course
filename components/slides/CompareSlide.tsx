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
      <div className="mb-3 text-[11px] font-bold uppercase tracking-eyebrow text-body-tertiary">
        {slide.eyebrow}
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-aubergine md:text-5xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {revealed >= 1 ? (
          <div className="beat border-l-[3px] border-mauve bg-cream-light px-7 py-6">
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
              Weak
            </div>
            <p className="mt-3 text-[15px] font-bold">
              &ldquo;<Rich text={slide.weak.quote} />&rdquo;
            </p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-body-secondary">
              <Rich text={slide.weak.text} />
            </p>
          </div>
        ) : null}
        {revealed >= 2 ? (
          <div className="beat border-l-[3px] border-olive bg-cream-dark/60 px-7 py-6">
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
              Strong
            </div>
            <p className="mt-3 text-[15px] font-bold">
              &ldquo;<Rich text={slide.strong.quote} />&rdquo;
            </p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-body-secondary">
              <Rich text={slide.strong.text} />
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
