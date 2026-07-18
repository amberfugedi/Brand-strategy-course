import { Fragment } from "react";

/**
 * Renders the *word* convention as the brand serif italic accent.
 * The accent color follows the surface via a className on the parent
 * (see .accent-serif in globals.css).
 */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/\*(.*?)\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <em key={i} className="accent-serif">
            {part}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
