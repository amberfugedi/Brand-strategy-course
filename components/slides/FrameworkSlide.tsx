import { FrameworkSlide as FrameworkSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function FrameworkSlide({ slide }: { slide: FrameworkSlideDef }) {
  return (
    <div className="mt-4 flex flex-1 flex-col">
      <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-teal">
        {slide.eyebrow}
      </div>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      {slide.sub ? (
        <p className="mt-4 text-[17px] text-body-secondary">
          <Rich text={slide.sub} />
        </p>
      ) : null}

      <div className="mt-8 max-w-4xl space-y-4">
        {slide.paragraphs.map((p, i) => (
          <p key={i} className="text-[17px] leading-relaxed">
            <Rich text={p} />
          </p>
        ))}
      </div>

      {slide.callout ? (
        <div className="mt-9 max-w-4xl border-l-[3px] border-teal bg-cream-light px-8 py-6">
          <p className="text-[16px] leading-relaxed">
            <Rich text={slide.callout} />
          </p>
        </div>
      ) : null}
    </div>
  );
}
