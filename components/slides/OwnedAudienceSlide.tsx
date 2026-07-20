"use client";

import { OwnedAudienceSlide as OwnedAudienceSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { GuidedField } from "@/components/primitives/GuidedField";
import { useModule7 } from "@/lib/store/provider";

const CHANNEL_SUGGESTIONS = ["Email list", "Text messages", "Client list for seasonal notes"];

export function OwnedAudienceSlide({ slide }: { slide: OwnedAudienceSlideDef }) {
  const { ownedAudience, setOwnedAudience } = useModule7();

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

      <div className="mt-6 max-w-2xl space-y-4">
        <GuidedField
          surface="dark"
          label="The people"
          hint="Who you start with, the people already within reach"
          value={ownedAudience.people ?? ""}
          onChange={(v) => setOwnedAudience({ people: v })}
        />
        <div>
          <GuidedField
            surface="dark"
            label="The channel"
            hint="The single channel you will own"
            rows={1}
            value={ownedAudience.channel ?? ""}
            onChange={(v) => setOwnedAudience({ channel: v })}
          />
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {CHANNEL_SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setOwnedAudience({ channel: s })}
                className={`border px-2.5 py-1 text-[11.5px] transition-colors ${
                  ownedAudience.channel === s
                    ? "border-gold bg-gold text-ink"
                    : "border-gold/40 text-on-dark/80 hover:border-gold"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <GuidedField
          surface="dark"
          label="The cadence"
          hint="A rhythm you are confident you can hold on a busy month"
          rows={1}
          value={ownedAudience.cadence ?? ""}
          onChange={(v) => setOwnedAudience({ cadence: v })}
        />
      </div>
    </div>
  );
}
