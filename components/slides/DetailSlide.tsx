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
      <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-aubergine">
        {slide.eyebrow}
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-aubergine md:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="mt-9 grid gap-x-12 gap-y-7 md:grid-cols-3">
        {slide.cols.slice(0, revealed).map((col) => (
          <div key={col.label} className="beat">
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
              {col.label}
            </div>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-body">
              <Rich text={col.text} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
