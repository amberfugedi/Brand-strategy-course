"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

/**
 * A link from inside a slide to another slide in the same module, for
 * the moments where the copy tells the buyer to go do something. A
 * heading never takes an underline, so the clickable headline shifts
 * colour on hover and a small explicit link carries the affordance.
 */
export function SlideLink({
  to,
  label,
  children,
}: {
  to: number;
  /** Spoken to assistive tech, since the visible text is an instruction. */
  label?: string;
  children: React.ReactNode;
}) {
  const params = useParams<{ course: string; module: string }>();
  if (!params?.course || !params?.module) return <>{children}</>;

  return (
    <Link
      href={`/${params.course}/${params.module}/${to}`}
      aria-label={label}
      className="no-underline transition-colors hover:text-aubergine"
    >
      {children}
    </Link>
  );
}

/** The visible way in, sized like a control rather than like copy. */
export function SlideAction({ to, children }: { to: number; children: React.ReactNode }) {
  const params = useParams<{ course: string; module: string }>();
  if (!params?.course || !params?.module) return null;

  return (
    <Link
      href={`/${params.course}/${params.module}/${to}`}
      className="mt-7 inline-block self-start rounded-full border border-aubergine px-5 py-2.5 text-[11px] font-bold uppercase tracking-chrome text-aubergine transition-colors hover:bg-aubergine hover:text-cream"
    >
      {children}
    </Link>
  );
}
