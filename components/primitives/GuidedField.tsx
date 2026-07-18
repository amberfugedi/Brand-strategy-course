"use client";

/**
 * A labeled free-text input for exercise slides. Controlled from the
 * course store by the slide that uses it; saves as the buyer types.
 */
interface GuidedFieldProps {
  label: string;
  hint?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  surface?: "cream" | "dark";
  rows?: number;
}

export function GuidedField({
  label,
  hint,
  value,
  onChange,
  placeholder,
  surface = "cream",
  rows = 2,
}: GuidedFieldProps) {
  const dark = surface === "dark";
  return (
    <label className="block">
      <span className="mb-1 flex items-baseline gap-2.5">
        <span
          className={`text-[10px] font-bold uppercase tracking-eyebrow ${
            dark ? "text-gold" : "text-body-secondary"
          }`}
        >
          {label}
        </span>
        {hint ? (
          <span
            className={`font-serif text-[12.5px] italic ${
              dark ? "text-on-dark-muted" : "text-body-tertiary"
            }`}
          >
            {hint}
          </span>
        ) : null}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`w-full resize-y rounded-none border bg-transparent px-3.5 py-2 text-[14px] leading-relaxed outline-none transition-colors ${
          dark
            ? "border-gold/40 text-on-dark placeholder:text-on-dark-muted/60 focus:border-gold"
            : "border-ink/20 bg-cream-light text-body placeholder:text-body-tertiary focus:border-gold"
        }`}
      />
    </label>
  );
}
