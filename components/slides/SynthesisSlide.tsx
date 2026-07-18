"use client";

import { SynthesisSlide as SynthesisSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { usePositioning } from "@/lib/store/provider";

function AnswerRef({ label, parts }: { label: string; parts: string[] }) {
  const text = parts.filter(Boolean).join(" · ");
  return (
    <div className="border-l-2 border-olive/60 bg-cream-light px-4 py-3">
      <div className="text-[9px] font-bold uppercase tracking-eyebrow text-body-tertiary">
        {label}
      </div>
      <p className="mt-1 text-[13px] leading-relaxed text-body-secondary">
        {text || <em className="font-serif italic">Not written yet.</em>}
      </p>
    </div>
  );
}

export function SynthesisSlide({ slide }: { slide: SynthesisSlideDef }) {
  const { positioning, setPositioning } = usePositioning();
  const serve = positioning.serve;
  const work = positioning.work;
  const different = positioning.different;

  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-teal">
        {slide.eyebrow}
      </div>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="mt-4 max-w-4xl border-l-[3px] border-teal bg-cream-light px-7 py-4">
        <p className="text-[15px] leading-relaxed">
          <Rich text={slide.template} />
        </p>
      </div>

      <p className="mt-3 max-w-3xl text-[13.5px] leading-snug text-body-secondary">
        <Rich text={slide.note} />
      </p>

      <div className="mt-4 grid max-w-4xl gap-3 md:grid-cols-3">
        <AnswerRef
          label="Who you serve"
          parts={[serve?.situation ?? "", serve?.context ?? "", serve?.problem ?? ""]}
        />
        <AnswerRef
          label="What you do"
          parts={[work?.action ?? "", work?.output ?? "", work?.change ?? ""]}
        />
        <AnswerRef label="What makes you different" parts={[different?.text ?? ""]} />
      </div>

      <label className="mt-4 block max-w-4xl">
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-eyebrow text-body-secondary">
          Your working statement
        </span>
        <textarea
          value={positioning.statement ?? ""}
          onChange={(e) => setPositioning({ statement: e.target.value })}
          placeholder="Write it as one sentence, or three short ones."
          rows={3}
          className="w-full resize-y border border-ink/20 bg-cream-light px-4 py-3 text-[15px] leading-relaxed outline-none transition-colors placeholder:text-body-tertiary focus:border-gold"
        />
      </label>
    </div>
  );
}
