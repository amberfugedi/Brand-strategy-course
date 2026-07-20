import { StructureSlide as StructureSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function StructureSlide({
  slide,
  revealed = Infinity,
}: {
  slide: StructureSlideDef;
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

      <div className="mt-10 max-w-5xl">
        {slide.rows.slice(0, revealed).map((row) => (
          <div
            key={row.label}
            className="beat grid grid-cols-[130px_1fr_auto] items-baseline gap-6 border-b border-on-dark/15 py-4 md:grid-cols-[170px_1fr_auto]"
          >
            <div className="text-[11px] font-bold uppercase tracking-eyebrow text-gold">
              {row.label}
            </div>
            <div className="text-[16px]">{row.title}</div>
            <div className="text-[13px] text-on-dark-muted">{row.minutes}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
