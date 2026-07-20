import { ReactNode } from "react";
import Link from "next/link";
import { Surface } from "@/lib/content/types";

const surfaceClasses: Record<Surface, string> = {
  cream: "bg-cream text-body surface-cream",
  plum: "bg-aubergine text-on-dark surface-dark plum-glow",
  ink: "bg-ink-black text-on-dark surface-dark",
};

const chromeText: Record<Surface, string> = {
  cream: "text-body-tertiary",
  plum: "text-gold/70",
  ink: "text-gold/70",
};

interface SlideChromeProps {
  surface: Surface;
  crumb: string;
  tag: string;
  number: string;
  /** Course home; when set, the chrome carries a way out mid-module. */
  homeHref?: string;
  /** Back/Next, rendered in the footer row beside the page number so
   *  they share its baseline and right margin on every slide. */
  controls?: ReactNode;
  /** A short transient note (e.g. the finish-this-step hold), shown
   *  in the footer's left cluster. */
  note?: ReactNode;
  children: ReactNode;
}

/**
 * The fixed chrome every slide shares: top-left breadcrumb, top-right
 * slide-type tag, footer monogram + course name + page number. Matches
 * the produced deck exactly. When homeHref is set, an "All modules"
 * link sits ahead of the breadcrumb and the footer wordmark links
 * home, so a buyer can leave a module from any slide. Player controls
 * live inside the footer row: in flow, so they never overlap slide
 * content, and aligned with the chrome on every slide.
 */
export function SlideChrome({
  surface,
  crumb,
  tag,
  number,
  homeHref,
  controls,
  note,
  children,
}: SlideChromeProps) {
  const homeLink = `transition-colors ${
    surface === "cream" ? "hover:text-aubergine" : "hover:text-gold"
  }`;
  return (
    <div
      className={`slide-viewport relative flex flex-col overflow-hidden ${surfaceClasses[surface]}`}
    >
      <header
        className={`flex items-center justify-between gap-6 px-[4.5vw] pt-10 text-[10px] font-bold uppercase tracking-chrome ${chromeText[surface]}`}
      >
        <span className="flex min-w-0 items-center gap-3">
          {homeHref ? (
            <>
              <Link
                href={homeHref}
                className={`shrink-0 whitespace-nowrap ${homeLink}`}
              >
                ← All modules
              </Link>
              {crumb ? (
                <span aria-hidden="true" className="shrink-0 opacity-50">
                  ·
                </span>
              ) : null}
            </>
          ) : null}
          <span className="min-w-0 truncate">{crumb}</span>
        </span>
        <span className="hidden shrink-0 whitespace-nowrap sm:inline">
          {tag}
        </span>
      </header>

      <main className="relative z-10 flex flex-1 flex-col px-[7.5vw] py-8">
        {children}
      </main>

      <footer
        className={`relative z-10 flex items-center justify-between gap-4 px-[4.5vw] pb-8 text-xs ${chromeText[surface]}`}
      >
        <span className="flex min-w-0 items-center gap-2.5">
          {homeHref ? (
            <Link
              href={homeHref}
              className={`flex shrink-0 items-center gap-2.5 ${homeLink}`}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/70">
                <span className="font-serif italic text-[13px] leading-none text-gold">
                  A
                </span>
              </span>
              <span
                className={`text-[11px] normal-case tracking-normal ${
                  controls ? "hidden md:inline" : ""
                }`}
              >
                Build Your Marketing Foundation
              </span>
            </Link>
          ) : (
            <span className="flex shrink-0 items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/70">
                <span className="font-serif italic text-[13px] leading-none text-gold">
                  A
                </span>
              </span>
              <span
                className={`text-[11px] normal-case tracking-normal ${
                  controls ? "hidden md:inline" : ""
                }`}
              >
                Build Your Marketing Foundation
              </span>
            </span>
          )}
          {note}
        </span>
        <span className="flex shrink-0 items-center gap-4">
          {controls}
          <span className="text-[10px] font-bold tracking-chrome">
            {number}
          </span>
        </span>
      </footer>
    </div>
  );
}
