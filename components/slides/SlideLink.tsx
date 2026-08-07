"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

/**
 * A link from inside a slide to another slide in the same module, for
 * the moments where the copy tells the buyer to go do something. The
 * heading is the target when the instruction is the heading, so the
 * sentence that says "check your six answers" is the thing you click
 * to go check them.
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
      className="underline decoration-gold/40 decoration-2 underline-offset-[10px] transition-colors hover:decoration-gold"
    >
      {children}
    </Link>
  );
}
