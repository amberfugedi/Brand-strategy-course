"use client";

import { FrameworkSlide as FrameworkSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { AdviceCloud, useNarrationPast } from "@/components/slides/AdviceCloud";
import { SlideAction, SlideLink } from "@/components/slides/SlideLink";
import { Emphasis } from "@/components/course/Emphasis";

export function FrameworkSlide({
  slide,
  revealed = Infinity,
}: {
  slide: FrameworkSlideDef;
  revealed?: number;
}) {
  // The art leaves partway through the narration on the slides that
  // have it; when it goes, the prose takes the width back instead of
  // sitting in a column beside an empty one.
  const artGone = useNarrationPast(slide.art?.clear);
  const shown = slide.paragraphs.slice(0, revealed);

  const body = (
    <>
      {slide.eyebrow ? (
        <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-gold">{slide.eyebrow}</div>
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        {slide.headingTo ? (
          <SlideLink to={slide.headingTo} label="Go back and edit your answers">
            <Rich text={slide.heading} />
          </SlideLink>
        ) : (
          <Rich text={slide.heading} />
        )}
      </h1>
      {slide.sub ? (
        <p className="mt-4 text-[17px] text-body-secondary">
          <Rich text={slide.sub} />
        </p>
      ) : null}

      {slide.bullets ? (
        <ul className={`ring-list max-w-4xl space-y-3 ${slide.art ? "mt-6" : "mt-8"}`}>
          {shown.map((p, i) => (
            <li key={i} className="beat text-[16px] leading-relaxed lg:text-[17px]">
              <Rich text={p} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={`space-y-4 ${slide.art ? "mt-6 max-w-2xl" : "mt-8 max-w-4xl"}`}>
          {shown.map((p, i) => (
            <p key={i} className="beat text-[17px] leading-relaxed lg:text-[18px]">
              <Rich text={p} />
            </p>
          ))}
        </div>
      )}

      {slide.headingTo ? (
        <SlideAction to={slide.headingTo}>Edit your six answers</SlideAction>
      ) : null}

      {slide.callout && revealed > slide.paragraphs.length ? (
        <div className="beat mt-8 max-w-3xl">
          <Emphasis text={slide.callout} />
        </div>
      ) : null}
    </>
  );

  // Illustrated frameworks run the prose and the art as a pair, so the
  // heading travels with the text column and the slide stays balanced
  // from the first frame, before any cued paragraph has landed. The
  // art column collapses on the beat the art fades, so the prose
  // recentres rather than leaving a hole beside it.
  if (slide.art) {
    return (
      <div className="mt-4 flex flex-1 flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-1">{body}</div>
          <div
            className={`transition-all duration-1000 ${
              artGone
                ? "mt-0 max-h-0 overflow-hidden opacity-0 lg:ml-0 lg:w-0"
                : "mt-8 max-h-[560px] opacity-100 lg:ml-14 lg:mt-0 lg:w-[390px] lg:shrink-0"
            }`}
          >
            <AdviceCloud
              words={slide.art.words}
              settle={slide.art.settle}
              clear={slide.art.clear}
              image={slide.art.image}
            />
          </div>
        </div>
      </div>
    );
  }

  return <div className="mt-4 flex flex-1 flex-col justify-center">{body}</div>;
}
