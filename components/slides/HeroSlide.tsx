import { HeroSlide as HeroSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function HeroSlide({ slide }: { slide: HeroSlideDef }) {
  const dark = slide.surface !== "cream";
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className={dark ? "my-auto" : "mt-6"}>
        <div className="mb-5 text-[11px] font-bold uppercase tracking-eyebrow text-gold">
          {slide.eyebrow}
        </div>
        <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
          <Rich text={slide.heading} />
        </h1>
        <p
          className={`mt-7 max-w-2xl text-lg md:text-xl ${
            dark ? "text-on-dark/90" : "text-body"
          }`}
        >
          <Rich text={slide.sub} />
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-x-14 gap-y-6">
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
    </div>
  );
}
