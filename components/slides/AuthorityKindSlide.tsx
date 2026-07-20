"use client";

import { AuthorityKindSlide as AuthorityKindSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { useModule8 } from "@/lib/store/provider";

const KINDS = [
  {
    id: "craft",
    signal: "“Look at the work”",
    name: "Craft authority",
    note: "They point you to what was made. That is *craft* authority, and the work being seen is how it grows.",
  },
  {
    id: "expertise",
    signal: "“She really knows this”",
    name: "Expertise authority",
    note: "They point to depth of knowledge. That is *expertise* authority, made visible in how you work.",
  },
  {
    id: "judgment",
    signal: "“She was right”",
    name: "Judgment authority",
    note: "They point to a call that held up. That is *judgment* authority, built by a visible track record.",
  },
];

export function AuthorityKindSlide({ slide }: { slide: AuthorityKindSlideDef }) {
  const { authorityKind, setAuthorityKind } = useModule8();

  return (
    <div className="mt-4 flex flex-1 flex-col">
      <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-teal">
        {slide.eyebrow}
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-aubergine md:text-5xl">
        <Rich text={slide.heading} />
      </h1>
      <p className="mt-5 max-w-4xl text-[16px] leading-relaxed">
        <Rich text={slide.intro} />
      </p>

      <div className="mt-7 grid max-w-5xl gap-4 md:grid-cols-3">
        {KINDS.map((kind) => {
          const active = authorityKind === kind.id;
          return (
            <button
              key={kind.id}
              type="button"
              onClick={() => setAuthorityKind(kind.id)}
              aria-pressed={active}
              className={`border-l-[3px] px-6 py-5 text-left transition-colors ${
                active
                  ? "border-gold bg-cream-dark/80"
                  : "border-ink/15 bg-cream-light hover:border-gold"
              }`}
            >
              <div className="font-serif text-[16px] italic text-body-secondary">
                If they say {kind.signal}
              </div>
              <div className="mt-2 text-[17px] font-bold tracking-tight text-aubergine">
                {kind.name}
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-body-secondary">
                <Rich text={kind.note} />
              </p>
              <div
                className={`mt-3 text-[10px] font-bold uppercase tracking-chrome ${
                  active ? "text-gold" : "text-body-tertiary"
                }`}
              >
                {active ? "This is mine" : "Pick this one"}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
