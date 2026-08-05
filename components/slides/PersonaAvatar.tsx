/**
 * The persona mark: an illustrated portrait in a circle, ringed in
 * the persona's identity tint. Each persona keeps one tint for the
 * whole course, so Maya reads as Maya from the calibration slides to
 * the exercise references. Personas without a portrait yet fall back
 * to the tinted monogram.
 */
const TINTS: Record<string, { bg: string; ring: string }> = {
  maya: { bg: "rgba(166, 155, 219, 0.26)", ring: "#A69BDB" },
  marcus: { bg: "rgba(218, 137, 112, 0.24)", ring: "#DA8970" },
  lena: { bg: "rgba(252, 228, 196, 0.55)", ring: "#DA8970" },
  james: { bg: "rgba(221, 183, 116, 0.28)", ring: "#DDB774" },
  sasha: { bg: "rgba(251, 237, 191, 0.6)", ring: "#8A5A14" },
};
const FALLBACK = { bg: "rgba(252, 228, 196, 0.55)", ring: "#8A5A14" };

/** Personas with a commissioned portrait in public/images/personas. */
const PORTRAITS = ["maya", "marcus", "lena", "james", "sasha"];

export function PersonaAvatar({
  name,
  size = 44,
}: {
  name: string;
  size?: number;
}) {
  const key = name.toLowerCase().replace(/[^a-z]/g, "");
  const tint = TINTS[key] ?? FALLBACK;
  if (PORTRAITS.includes(key)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/images/personas/${key}.jpg`}
        alt=""
        aria-hidden
        className="shrink-0 rounded-full object-cover"
        style={{
          width: size,
          height: size,
          border: `2px solid ${tint.ring}`,
        }}
      />
    );
  }
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
