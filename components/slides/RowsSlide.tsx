import { RowsSlide as RowsSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function RowsSlide({
  slide,
  revealed = Infinity,
}: {
  slide: RowsSlideDef;
  revealed?: number;
}) {
  return (
    <div className="mt-4 flex flex-1 flex-col">
      <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-gold">
        {slide.eyebrow}
      </div>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="mt-8 space-y-2.5">
        {slide.rows.slice(0, revealed).map((row) => (
          <div
            key={row.label}
            className="beat grid grid-cols-1 gap-2 border-l-[3px] border-ink/60 bg-cream-light px-7 py-4 md:grid-cols-[180px_1fr] md:gap-8"
          >
            <div className="pt-0.5 text-[11px] font-bold uppercase tracking-eyebrow text-body-secondary">
              {row.label}
            </div>
            <div className="text-[15px] leading-relaxed">
              <Rich text={row.text} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
