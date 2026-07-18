"use client";

/**
 * Multi-select chips, used for the differentiator sources in Module 1
 * (approach, constraint, combination, position) and reusable for any
 * pick-one-or-more moment in later modules.
 */
interface ChipSelectProps<T extends string> {
  options: { value: T; label: string }[];
  selected: T[];
  onToggle: (value: T) => void;
}

export function ChipSelect<T extends string>({
  options,
  selected,
  onToggle,
}: ChipSelectProps<T>) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = selected.includes(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onToggle(opt.value)}
            aria-pressed={active}
            className={`border px-4 py-1.5 text-[13px] transition-colors ${
              active
                ? "border-gold bg-gold text-ink"
                : "border-ink/25 bg-transparent text-body-secondary hover:border-gold"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
