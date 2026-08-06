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
      {slide.eyebrow ? (
        <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-gold">{slide.eyebrow}</div>
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
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
            <div className="text-[16px] leading-relaxed">
              <Rich text={row.text} />
            </div>
          </div>
        ))}
      </div>

      {slide.next && revealed > slide.rows.length ? (
        <div className="beat mt-8 flex max-w-3xl flex-wrap items-center justify-between gap-x-10 gap-y-4 rounded-3xl border border-subtle bg-cream-light px-7 py-5 shadow-lift">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
              {slide.next.eyebrow}
            </div>
            <h2 className="mt-1 text-2xl">
              <Rich text={slide.next.title} />
            </h2>
            <p className="mt-1 text-[14px] text-body-secondary">
              <Rich text={slide.next.note} />
            </p>
          </div>
          <div aria-hidden className="flex items-end gap-1">
            <span className="h-4 w-6 rounded-[2px] bg-peach ring-1 ring-gold/60" />
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="h-2 w-6 rounded-[2px] bg-gold/25" />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
