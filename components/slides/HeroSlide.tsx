import { HeroSlide as HeroSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { MeetHost } from "@/components/slides/MeetHost";
import { StrataMark } from "@/components/slides/StrataMark";

export function HeroSlide({
  slide,
  revealed = Infinity,
}: {
  slide: HeroSlideDef;
  revealed?: number;
}) {
  const dark = slide.surface !== "cream";
  // A hero with a whoFor line builds in beats; every other hero
  // renders at once.
  const builds = Boolean(slide.whoFor);
  const show = (beat: number) => !builds || revealed >= beat;
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className={dark ? "my-auto" : "mt-6"}>
        <div className="mb-5 text-[11px] font-bold uppercase tracking-eyebrow text-gold">
          {slide.eyebrow}
        </div>
        <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
          <Rich text={slide.heading} />
        </h1>
        {slide.whoFor && show(1) ? (
          <p
            className={`beat mt-6 max-w-2xl font-serif text-[16px] italic leading-relaxed ${
              dark ? "text-on-dark-muted" : "text-body-secondary"
            }`}
          >
            <Rich text={slide.whoFor} />
          </p>
        ) : null}
        {show(2) ? (
          <p
            className={`mt-7 max-w-2xl text-lg md:text-xl ${
              builds ? "beat " : ""
            }${dark ? "text-on-dark/90" : "text-body"}`}
          >
            <Rich text={slide.sub} />
          </p>
        ) : null}
      </div>

      {show(3) ? (
        <div
          className={`mt-12 flex flex-wrap items-end justify-between gap-x-10 gap-y-8 ${
            builds ? "beat" : ""
          }`}
        >
          <div className="flex flex-wrap gap-x-14 gap-y-6">
            {slide.meta.map((m) => (
              <div key={m.label}>
                <div className="mb-1.5 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                  {m.label}
                </div>
                <div className="text-[15px]">
                  <Rich text={m.value} />
                </div>
              </div>
            ))}
          </div>
          {slide.host ? (
            <MeetHost dark={dark} />
          ) : slide.strata ? (
            <StrataMark active={slide.strata} />
          ) : null}
        </div>
      ) : (
        <div className="mt-12" />
      )}
    </div>
  );
}
