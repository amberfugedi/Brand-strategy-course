import { FrameworkSlide as FrameworkSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function FrameworkSlide({
  slide,
  revealed = Infinity,
}: {
  slide: FrameworkSlideDef;
  revealed?: number;
}) {
  return (
    <div className="mt-4 flex flex-1 flex-col justify-center">
      <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,5fr),minmax(0,7fr)] lg:items-center">
        <div>
          {slide.eyebrow ? (
            <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-teal">{slide.eyebrow}</div>
          ) : null}
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <Rich text={slide.heading} />
          </h1>
          {slide.sub ? (
            <p className="mt-4 text-[17px] text-body-secondary">
              <Rich text={slide.sub} />
            </p>
          ) : null}
        </div>

        <div>
          <div className="space-y-4">
            {slide.paragraphs.slice(0, revealed).map((p, i) => (
              <p key={i} className="beat text-[17px] leading-relaxed lg:text-[18px]">
                <Rich text={p} />
              </p>
            ))}
          </div>

          {slide.callout && revealed > slide.paragraphs.length ? (
            <div className="beat mt-9 rounded-3xl border-l-[3px] border-teal bg-cream-light px-8 py-6 shadow-lift">
              <p className="text-[16px] leading-relaxed">
                <Rich text={slide.callout} />
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
