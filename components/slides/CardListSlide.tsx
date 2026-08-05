import { CardListSlide as CardListSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { MapArt } from "@/components/slides/MapArt";

export function CardListSlide({
  slide,
  revealed = Infinity,
}: {
  slide: CardListSlideDef;
  revealed?: number;
}) {
  return (
    <div className="mt-4 flex flex-1 flex-col">
      {slide.eyebrow ? (
        <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-gold">{slide.eyebrow}</div>
      ) : null}
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      {slide.intro ? (
        <p className="mt-7 max-w-4xl text-[17px] leading-relaxed">
          <Rich text={slide.intro} />
        </p>
      ) : null}

      {revealed < 1 ? null : (
      <div className="mt-9 flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-16">
      <div className="rounded-3xl beat w-full max-w-2xl border-l-[3px] border-gold bg-cream-light px-9 py-8">
        <h2 className="text-2xl font-bold tracking-tight">
          <Rich text={slide.card.title} />
        </h2>
        <p className="mt-2 text-[15px] text-body-secondary">
          {slide.card.subtitle}
        </p>
        <ul className="ring-list mt-5 space-y-2.5 text-[16px]">
          {slide.card.items.map((item, i) => (
            <li key={i}>
              <Rich text={item} />
            </li>
          ))}
        </ul>
      </div>
      {slide.art ? <MapArt /> : null}
      </div>
      )}
    </div>
  );
}
