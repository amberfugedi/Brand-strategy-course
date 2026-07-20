"use client";

import { useState } from "react";
import { ExamplesSlide as ExamplesSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

function PersonaCard({
  persona,
}: {
  persona: ExamplesSlideDef["personas"][number];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-full flex-col border-l-[3px] border-olive bg-cream-light px-6 py-5">
      <div className="text-[17px] font-bold tracking-tight">
        {persona.name}{" "}
        <span className="font-serif text-[16px] font-normal italic text-body-secondary">
          {persona.role}
        </span>
      </div>
      {persona.meta ? (
        <div className="mt-0.5 text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
          {persona.meta}
        </div>
      ) : null}
      <p className="mt-3 font-serif text-[14.5px] italic leading-relaxed text-body">
        {persona.quote}
      </p>
      <div className="mt-auto border-t border-subtle pt-3">
        {open ? (
          <p className="text-[13px] leading-relaxed text-body-secondary">
            <Rich text={persona.note} />
          </p>
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-[11px] font-bold uppercase tracking-chrome text-gold hover:text-rust"
          >
            Show the note
          </button>
        )}
      </div>
    </div>
  );
}

export function ExamplesSlide({
  slide,
  revealed = Infinity,
}: {
  slide: ExamplesSlideDef;
  revealed?: number;
}) {
  const shown = slide.personas.slice(0, revealed);
  const top = shown.slice(0, 3);
  const bottom = shown.slice(3);
  return (
    <div className="mt-2 flex flex-1 flex-col">
      <div className="mb-3 text-[11px] font-bold uppercase tracking-eyebrow text-body-tertiary">
        {slide.eyebrow}
      </div>
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {top.map((p) => (
          <div key={p.name} className="beat">
            <PersonaCard persona={p} />
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:mx-auto md:w-2/3 md:grid-cols-2">
        {bottom.map((p) => (
          <div key={p.name} className="beat">
            <PersonaCard persona={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
