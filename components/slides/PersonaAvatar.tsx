/**
 * The persona mark: a tinted circle carrying the persona's initial
 * in the brand serif. Each persona keeps one tint for the whole
 * course, so Maya reads as Maya from the calibration slides to the
 * exercise references. Tints come from the decorative palette; the
 * course stays illustrated and editorial, no photography.
 */
const TINTS: Record<string, { bg: string; ring: string }> = {
  maya: { bg: "rgba(166, 155, 219, 0.26)", ring: "#A69BDB" },
  marcus: { bg: "rgba(218, 137, 112, 0.24)", ring: "#DA8970" },
  lena: { bg: "rgba(252, 228, 196, 0.55)", ring: "#DA8970" },
  james: { bg: "rgba(221, 183, 116, 0.28)", ring: "#DDB774" },
  sasha: { bg: "rgba(251, 237, 191, 0.6)", ring: "#8A5A14" },
};
const FALLBACK = { bg: "rgba(252, 228, 196, 0.55)", ring: "#8A5A14" };

export function PersonaAvatar({
  name,
  size = 44,
}: {
  name: string;
  size?: number;
}) {
  const key = name.toLowerCase().replace(/[^a-z]/g, "");
  const tint = TINTS[key] ?? FALLBACK;
  return (
    <span
      aria-hidden
      className="flex shrink-0 items-center justify-center rounded-full font-serif italic text-ink"
      style={{
        width: size,
        height: size,
        background: tint.bg,
        border: `2px solid ${tint.ring}`,
        fontSize: size * 0.44,
      }}
    >
      {name.trim().charAt(0)}
    </span>
  );
}
