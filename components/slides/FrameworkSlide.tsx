import { FrameworkSlide as FrameworkSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { AdviceCloud } from "@/components/slides/AdviceCloud";

export function FrameworkSlide({
  slide,
  revealed = Infinity,
}: {
  slide: FrameworkSlideDef;
  revealed?: number;
}) {
  const art = Boolean(slide.art);

  const body = (
    <>
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

      <div className={`space-y-4 ${art ? "mt-6 max-w-2xl" : "mt-8 max-w-4xl"}`}>
        {slide.paragraphs.slice(0, revealed).map((p, i) => (
          <p key={i} className="beat text-[17px] leading-relaxed lg:text-[18px]">
            <Rich text={p} />
          </p>
        ))}
      </div>

      {slide.callout && revealed > slide.paragraphs.length ? (
        <div className="beat mt-9 max-w-4xl rounded-3xl border-l-[3px] border-teal bg-cream-light px-8 py-6 shadow-lift">
          <p className="text-[16px] leading-relaxed">
            <Rich text={slide.callout} />
          </p>
        </div>
      ) : null}
    </>
  );

  // Illustrated frameworks run the prose and the art as a pair, so the
  // heading travels with the text column and the slide stays balanced
  // from the first frame, before any cued paragraph has landed.
  if (slide.art) {
    return (
      <div className="mt-4 flex flex-1 flex-col justify-center">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr,390px] lg:gap-14">
          <div>{body}</div>
          <div>
            <AdviceCloud
              words={slide.art.words}
              settle={slide.art.settle}
              scatter={slide.art.scatter}
              focus={slide.art.focus}
              clear={slide.art.clear}
              image={slide.art.image}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-1 flex-col justify-center">{body}</div>
  );
}
