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
  children: ReactNode;
}

/**
 * The fixed chrome every slide shares: top-left breadcrumb, top-right
 * slide-type tag, footer monogram + course name + page number. Matches
 * the produced deck exactly. When homeHref is set, an "All modules"
 * link sits ahead of the breadcrumb and the footer wordmark links
 * home, so a buyer can leave a module from any slide.
 */
export function SlideChrome({
  surface,
  crumb,
  tag,
  number,
  homeHref,
  children,
}: SlideChromeProps) {
  const homeLink = `transition-colors ${
    surface === "cream" ? "hover:text-aubergine" : "hover:text-gold"
  }`;
  return (
    <div
      className={`relative flex min-h-screen flex-col overflow-hidden ${surfaceClasses[surface]}`}
    >
      <header
        className={`flex items-center justify-between px-[4.5vw] pt-10 text-[10px] font-bold uppercase tracking-chrome ${chromeText[surface]}`}
      >
        <span className="flex items-center gap-3">
          {homeHref ? (
            <>
              <Link href={homeHref} className={`whitespace-nowrap ${homeLink}`}>
                ← All modules
              </Link>
              {crumb ? (
                <span aria-hidden="true" className="opacity-50">
                  ·
                </span>
              ) : null}
            </>
          ) : null}
          <span className="whitespace-nowrap">{crumb}</span>
        </span>
        <span className="hidden whitespace-nowrap sm:inline">{tag}</span>
      </header>

      <main className="relative z-10 flex flex-1 flex-col px-[7.5vw] py-8">
        {children}
      </main>

      <footer
        className={`relative z-10 flex items-center justify-between px-[4.5vw] pb-8 text-xs ${chromeText[surface]}`}
      >
        {homeHref ? (
          <Link href={homeHref} className={`flex items-center gap-2.5 ${homeLink}`}>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/70">
              <span className="font-serif italic text-[13px] leading-none text-gold">
                A
              </span>
            </span>
            <span className="text-[11px] normal-case tracking-normal">
              Build Your Marketing Foundation
            </span>
          </Link>
        ) : (
          <span className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/70">
              <span className="font-serif italic text-[13px] leading-none text-gold">
                A
              </span>
            </span>
            <span className="text-[11px] normal-case tracking-normal">
              Build Your Marketing Foundation
            </span>
          </span>
        )}
        <span className="text-[10px] font-bold tracking-chrome">{number}</span>
      </footer>
    </div>
  );
}
