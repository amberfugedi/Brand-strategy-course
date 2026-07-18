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
}

export function GuidedField({
  label,
  hint,
  value,
  onChange,
  placeholder,
  surface = "cream",
}: GuidedFieldProps) {
  const dark = surface === "dark";
  return (
    <label className="block">
      <span
        className={`mb-1.5 block text-[10px] font-bold uppercase tracking-eyebrow ${
          dark ? "text-gold" : "text-body-secondary"
        }`}
      >
        {label}
      </span>
      {hint ? (
        <span
          className={`mb-2 block font-serif text-[13px] italic ${
            dark ? "text-on-dark-muted" : "text-body-tertiary"
          }`}
        >
          {hint}
        </span>
      ) : null}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={2}
        className={`w-full resize-y rounded-none border bg-transparent px-4 py-3 text-[15px] leading-relaxed outline-none transition-colors ${
          dark
            ? "border-gold/40 text-on-dark placeholder:text-on-dark-muted/60 focus:border-gold"
            : "border-ink/20 bg-cream-light text-body placeholder:text-body-tertiary focus:border-gold"
        }`}
      />
    </label>
  );
}
