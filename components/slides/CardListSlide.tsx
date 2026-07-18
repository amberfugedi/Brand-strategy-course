import { CardListSlide as CardListSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function CardListSlide({ slide }: { slide: CardListSlideDef }) {
  return (
    <div className="mt-4 flex flex-1 flex-col">
      <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-gold">
        {slide.eyebrow}
      </div>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      {slide.intro ? (
        <p className="mt-7 max-w-4xl text-[17px] leading-relaxed">
          <Rich text={slide.intro} />
        </p>
      ) : null}

      <div className="mt-9 max-w-2xl border-l-[3px] border-gold bg-cream-light px-9 py-8">
        <h2 className="text-2xl font-bold tracking-tight">
          <Rich text={slide.card.title} />
        </h2>
        <p className="mt-2 font-serif text-[15px] italic text-body-secondary">
          {slide.card.subtitle}
        </p>
        <ul className="mt-5 space-y-2 text-[15px]">
          {slide.card.items.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-gold">·</span>
              <span>
                <Rich text={item} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
