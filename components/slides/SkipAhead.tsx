"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

/**
 * The quiet branch on a skippable section opener: buyers the section
 * doesn't apply to jump straight past it instead of clicking through.
 */
export function SkipAhead({ label, to }: { label: string; to: number }) {
  const params = useParams<{ course: string; module: string }>();
  if (!params?.course || !params?.module) return null;

  return (
    <Link
      href={`/${params.course}/${params.module}/${to}`}
      className="mt-8 inline-block self-start border border-gold/40 px-5 py-2.5 text-[12px] font-bold uppercase tracking-chrome text-on-dark/85 transition-colors hover:border-gold hover:text-gold"
    >
      {label}
    </Link>
  );
}
