"use client";

import { PrioritiesSlide as PrioritiesSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { PriorityOrderList } from "@/components/course/LivePlan";

export function PrioritiesSlide({
  slide,
  revealed = Infinity,
}: {
  slide: PrioritiesSlideDef;
  revealed?: number;
}) {
  return (
    <div className="mt-2 flex flex-1 flex-col">
      {slide.eyebrow ? (
        <div className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-body-tertiary">{slide.eyebrow}</div>
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="my-auto py-4 sm:py-6">
        <div className="grid max-w-5xl gap-x-10 gap-y-1.5 sm:gap-y-2 md:grid-cols-2">
          {slide.tiers.slice(0, revealed).map((t) => (
            <p key={t.label} className="beat text-[14.5px] leading-snug">
              <em className="accent-serif">{t.label}</em>
              <span className="text-body-secondary">. {t.text}</span>
            </p>
          ))}
        </div>

        <div className="mt-5 border-t border-subtle pt-4 sm:mt-7 sm:pt-6">
          <div className="mb-2 text-[10px] sm:mb-3 font-bold uppercase tracking-eyebrow text-body-secondary">
            Your priority order
          </div>
          <div className="max-w-5xl">
            <PriorityOrderList reasons={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
