"use client";

import { PresencePlanSlide as PresencePlanSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { GuidedField } from "@/components/primitives/GuidedField";
import { useModule6 } from "@/lib/store/provider";

export const PRESENCE_WEIGHTS = [
  { value: "minor", label: "Minor" },
  { value: "moderate", label: "Moderate" },
  { value: "significant", label: "Significant" },
  { value: "primary", label: "Primary" },
];

export const PRESENCE_CONDITIONS = [
  { id: "place", label: "Right place", hint: "Your clients actually gather there" },
  { id: "consistent", label: "Consistent", hint: "You can realistically hold a rhythm there" },
  { id: "you", label: "Recognizably you", hint: "You can show up there as yourself" },
];

export function PresencePlanSlide({ slide }: { slide: PresencePlanSlideDef }) {
  const { presence, setPresence, toggleCondition } = useModule6();
  const conditions = presence.conditions ?? {};

  return (
    <div className="mt-2 flex flex-1 flex-col">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-gold">
        {slide.eyebrow}
      </div>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        <Rich text={slide.heading} />
      </h1>
      <div className="mt-3 max-w-2xl space-y-1.5">
        {slide.paragraphs.map((p, i) => (
          <p key={i} className="text-[14px] leading-relaxed text-on-dark/85">
            <Rich text={p} />
          </p>
        ))}
      </div>

      <div className="mt-5 max-w-3xl space-y-3 pb-4">
        <div className="border border-gold/40 bg-cream/5 px-5 py-3.5">
          <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            The weight awareness should carry for you
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {PRESENCE_WEIGHTS.map((w) => {
              const active = presence.weight === w.value;
              return (
                <button
                  key={w.value}
                  type="button"
                  onClick={() => setPresence({ weight: w.value })}
                  aria-pressed={active}
                  className={`border px-3 py-1.5 text-[12.5px] transition-colors ${
                    active
                      ? "border-gold bg-gold text-ink"
                      : "border-gold/40 text-on-dark/85 hover:border-gold"
                  }`}
                >
                  {w.label}
                </button>
              );
            })}
          </div>
        </div>

        <GuidedField
          surface="dark"
          label="The one place"
          hint="A single, specific place where your future clients already are"
          rows={1}
          value={presence.place ?? ""}
          onChange={(v) => setPresence({ place: v })}
        />

        <div className="border border-gold/40 bg-cream/5 px-5 py-3.5">
          <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            Check the place against the three conditions
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {PRESENCE_CONDITIONS.map((c) => {
              const active = Boolean(conditions[c.id]);
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => toggleCondition(c.id)}
                  aria-pressed={active}
                  title={c.hint}
                  className={`border px-3 py-1.5 text-[12.5px] transition-colors ${
                    active
                      ? "border-gold bg-gold text-ink"
                      : "border-gold/40 text-on-dark/85 hover:border-gold"
                  }`}
                >
                  {active ? `${c.label}: holds` : c.label}
                </button>
              );
            })}
          </div>
          <p className="mt-2 font-serif text-[12.5px] italic leading-snug text-on-dark-muted">
            If a condition does not hold, the place is wrong. Better to find
            that out here than after six months of effort.
          </p>
        </div>

        <GuidedField
          surface="dark"
          label="The cadence"
          hint="Deliberately under-commit: the rhythm you could keep through a bad week"
          rows={1}
          value={presence.cadence ?? ""}
          onChange={(v) => setPresence({ cadence: v })}
        />
      </div>
    </div>
  );
}
