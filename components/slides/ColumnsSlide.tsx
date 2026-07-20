import { ColumnsSlide as ColumnsSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function ColumnsSlide({
  slide,
  revealed = Infinity,
}: {
  slide: ColumnsSlideDef;
  revealed?: number;
}) {
  const four = slide.columns.length === 4;
  return (
    <div className="mt-4 flex flex-1 flex-col">
      <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-teal">
        {slide.eyebrow}
      </div>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      <div
        className={`mt-10 grid gap-x-10 gap-y-8 ${
          four ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {slide.columns.slice(0, revealed).map((col) => (
          <div key={col.num} className="beat border-l-[3px] border-teal pl-5">
            <div className="text-[11px] font-bold tracking-chrome text-body-tertiary">
              {col.num}
            </div>
            <div className="mt-1 text-[14px] font-bold uppercase tracking-[0.12em]">
              {col.title}
            </div>
            <p className="mt-2.5 text-[15px] leading-relaxed text-body">
              <Rich text={col.text} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
