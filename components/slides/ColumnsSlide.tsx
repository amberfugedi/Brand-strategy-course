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
      {slide.eyebrow ? (
        <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-gold">{slide.eyebrow}</div>
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      <div
        className={`grid gap-y-4 md:gap-y-8 ${
          four ? "md:grid-cols-2" : "md:grid-cols-3"
        } ${
          slide.columns.some((c) => c.bullets)
            ? "my-auto gap-x-6 py-5 md:py-10 lg:gap-x-8"
            : "mt-10 gap-x-10"
        }`}
      >
        {slide.columns.slice(0, revealed).map((col) =>
          col.bullets ? (
            <div
              key={col.num}
              className="beat flex flex-col rounded-3xl border border-t-[3px] border-subtle border-t-stone bg-cream-light px-5 py-5 shadow-lift md:px-7 md:py-7"
            >
              <div className="flex items-baseline gap-3 border-b border-subtle pb-3 md:pb-4">
                <span className="text-[11px] font-bold tracking-chrome text-gold">
                  {col.num}
                </span>
                <span className="text-[13.5px] font-bold uppercase tracking-[0.12em] md:text-[15px]">
                  {col.title}
                </span>
              </div>
              <ul className="ring-list mt-4 space-y-3 md:mt-5 md:space-y-4">
                {col.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-[14px] leading-relaxed text-body md:text-[16px]"
                  >
                    <Rich text={b} />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div key={col.num} className="beat border-l-[3px] border-teal pl-5">
              <div className="text-[11px] font-bold tracking-chrome text-body-tertiary">
                {col.num}
              </div>
              <div className="mt-1 text-[15px] font-bold uppercase tracking-[0.12em]">
                {col.title}
              </div>
              <p className="mt-2.5 text-[16px] leading-relaxed text-body">
                <Rich text={col.text ?? ""} />
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
