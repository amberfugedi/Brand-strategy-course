import { DetailSlide as DetailSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function DetailSlide({
  slide,
  revealed = Infinity,
}: {
  slide: DetailSlideDef;
  revealed?: number;
}) {
  return (
    <div className="mt-4 flex flex-1 flex-col">
      {slide.eyebrow ? (
        <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-aubergine">{slide.eyebrow}</div>
      ) : null}
      <h1 className="text-4xl font-bold tracking-tight text-aubergine md:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="my-auto grid gap-x-6 gap-y-4 py-5 md:grid-cols-3 md:gap-y-7 md:py-9 lg:gap-x-8">
        {slide.cols.slice(0, revealed).map((col) => (
          <div
            key={col.label}
            className="beat rounded-3xl border border-t-[3px] border-subtle border-t-stone bg-cream-light px-5 py-5 shadow-lift md:px-6 md:py-6"
          >
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
              {col.label}
            </div>
            <p className="mt-2.5 text-[15.5px] leading-relaxed text-body">
              <Rich text={col.text} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
