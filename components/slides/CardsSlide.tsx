import { CardsSlide as CardsSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

function Card({
  card,
}: {
  card: CardsSlideDef["cards"][number];
}) {
  return (
    <div className="beat h-full rounded-3xl border border-subtle bg-cream-light px-5 py-4 shadow-lift sm:px-6 sm:py-5">
      {card.label ? (
        <div className="text-[10px] font-bold uppercase tracking-eyebrow text-rust">
          {card.label}
        </div>
      ) : null}
      <div className="text-[16px] font-bold tracking-tight text-aubergine sm:text-[18px]">
        {card.title}
      </div>
      <p className="mt-2 text-[14px] leading-snug text-body-secondary sm:text-[14.5px] sm:leading-relaxed">
        <Rich text={card.text} />
      </p>
    </div>
  );
}

export function CardsSlide({
  slide,
  revealed = Infinity,
}: {
  slide: CardsSlideDef;
  revealed?: number;
}) {
  const shown = slide.cards.slice(0, revealed);
  const fiveUp = slide.cards.length === 5;
  const top = fiveUp ? shown.slice(0, 3) : shown;
  const bottom = fiveUp ? shown.slice(3) : [];

  return (
    <div className="mt-2 flex flex-1 flex-col">
      {slide.eyebrow ? (
        <div className="mb-3 text-[11px] font-bold uppercase tracking-eyebrow text-body-tertiary">{slide.eyebrow}</div>
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight text-aubergine md:text-5xl lg:text-6xl">
        <Rich text={slide.heading} />
      </h1>
      {slide.intro ? (
        <p className="mt-4 max-w-4xl text-[16px] leading-relaxed">
          <Rich text={slide.intro} />
        </p>
      ) : null}

      <div
        className={`mt-auto grid gap-3 pt-5 sm:gap-4 sm:pt-7 ${
          fiveUp
            ? "md:grid-cols-3"
            : slide.cards.length === 4
              ? "md:grid-cols-2"
              : "md:grid-cols-3"
        }`}
      >
        {top.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
      {fiveUp && bottom.length > 0 ? (
        <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4 md:mx-auto md:w-2/3 md:grid-cols-2">
          {bottom.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
      ) : null}

      {slide.footnote && revealed >= slide.cards.length ? (
        <p className="beat mt-6 max-w-4xl text-[16px] leading-relaxed">
          <Rich text={slide.footnote} />
        </p>
      ) : null}
      <div className="mb-auto" />
    </div>
  );
}
