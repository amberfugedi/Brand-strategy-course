import { TableSlide as TableSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function TableSlide({
  slide,
  revealed = Infinity,
}: {
  slide: TableSlideDef;
  revealed?: number;
}) {
  return (
    <div className="mt-2 flex flex-1 flex-col">
      <div className="mb-3 text-[11px] font-bold uppercase tracking-eyebrow text-body-tertiary">
        {slide.eyebrow}
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-aubergine md:text-5xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="mt-7">
        <div className="grid grid-cols-[140px_1fr] gap-6 border-b border-subtle pb-2 md:grid-cols-[200px_1fr]">
          <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            {slide.leftLabel}
          </div>
          <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            {slide.rightLabel}
          </div>
        </div>
        {slide.rows.slice(0, revealed).map((row) => (
          <div
            key={row.name}
            className="beat grid grid-cols-[140px_1fr] gap-6 border-b border-subtle py-3 md:grid-cols-[200px_1fr]"
          >
            <div>
              <div className="text-[15px] font-bold text-aubergine">
                {row.name}
              </div>
              <div className="text-[11.5px] text-body-tertiary">{row.meta}</div>
            </div>
            <p className="text-[13.5px] leading-relaxed text-body">
              <span className="font-bold text-aubergine">{row.lead}</span>{" "}
              <Rich text={row.text} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
