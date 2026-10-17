"use client";

import { TableSlide as TableSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { PersonaAvatar } from "@/components/slides/PersonaAvatar";
import { useProfile } from "@/lib/store/provider";

/**
 * The five-businesses calibration table, and the one place the buyer
 * says which of the five they are closest to.
 *
 * The same five recur in seven tables across Modules 3 to 8, and those
 * modules are otherwise a long passive stretch: Module 4 runs eighteen
 * slides before it asks for anything. One tap here marks their row on
 * every table after it, so the calibration reads as being about them
 * rather than about five strangers.
 *
 * The mark is additive on purpose. The narration walks all five rows,
 * so dimming the other four would contradict the voice.
 */
export function TableSlide({
  slide,
  revealed = Infinity,
}: {
  slide: TableSlideDef;
  revealed?: number;
}) {
  const { closestPersona, setClosestPersona } = useProfile();
  const rows = slide.rows.slice(0, revealed);
  const allShown = revealed >= slide.rows.length;

  return (
    <div className="mt-2 flex flex-1 flex-col">
      {slide.eyebrow ? (
        <div className="mb-3 text-[11px] font-bold uppercase tracking-eyebrow text-gold">{slide.eyebrow}</div>
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="my-auto py-6">
        <div className="grid grid-cols-[140px_1fr] gap-6 border-b border-subtle pb-2 md:grid-cols-[200px_1fr]">
          <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            {slide.leftLabel}
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
              {slide.rightLabel}
            </div>
            {/* The invitation, only once the table is whole and only
                until they answer it. */}
            {allShown && !closestPersona ? (
              <div className="text-[13.5px] text-body-tertiary">
                Tap the business closest to yours.
              </div>
            ) : null}
          </div>
        </div>

        {rows.map((row) => {
          const mine = closestPersona === row.name;
          return (
            <button
              key={row.name}
              type="button"
              onClick={() => setClosestPersona(row.name)}
              aria-pressed={mine}
              aria-label={`${row.name}, ${row.meta}. ${mine ? "Your business. Tap to clear." : "Closest to my business."}`}
              className={`beat grid w-full grid-cols-[140px_1fr] gap-6 border-b border-subtle py-3 pl-3 text-left transition-colors md:grid-cols-[200px_1fr] ${
                mine
                  ? "border-l-[3px] border-l-gold bg-butter/40"
                  : "border-l-[3px] border-l-transparent hover:bg-butter/20"
              }`}
            >
              <div className="flex items-start gap-2.5">
                <PersonaAvatar name={row.name} size={28} />
                <div>
                  <div className="text-[16px] font-bold text-aubergine">
                    {row.name}
                  </div>
                  <div className="text-[13.5px] text-body-tertiary">{row.meta}</div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <p className="text-[14.5px] leading-relaxed text-body">
                  <span className="font-bold text-aubergine">{row.lead}</span>{" "}
                  <Rich text={row.text} />
                </p>
                {mine ? (
                  <span className="mt-0.5 shrink-0 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                    Yours
                  </span>
                ) : null}
              </div>
            </button>
          );
        })}

        {slide.footnote && allShown ? (
          <p className="beat mt-5 max-w-4xl text-[14.5px] leading-relaxed text-body-secondary">
            <Rich text={slide.footnote} />
          </p>
        ) : null}
      </div>
    </div>
  );
}
