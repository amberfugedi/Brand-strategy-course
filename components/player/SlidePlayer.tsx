"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ModuleDef, Slide, Surface } from "@/lib/content/types";
import { SlideChrome } from "@/components/chrome/SlideChrome";
import { HeroSlide } from "@/components/slides/HeroSlide";
import { SystemSlide } from "@/components/slides/SystemSlide";
import { CardListSlide } from "@/components/slides/CardListSlide";
import { RowsSlide } from "@/components/slides/RowsSlide";
import { ProseSlide } from "@/components/slides/ProseSlide";
import { AudioSlot } from "./AudioSlot";
import { useCourseStore } from "@/lib/store/provider";

function surfaceOf(slide: Slide): Surface {
  if (slide.kind === "hero") return slide.surface;
  if (slide.kind === "prose" && slide.surface) return slide.surface;
  return "cream";
}

function SlideBody({ slide }: { slide: Slide }) {
  switch (slide.kind) {
    case "hero":
      return <HeroSlide slide={slide} />;
    case "system":
      return <SystemSlide slide={slide} />;
    case "cardList":
      return <CardListSlide slide={slide} />;
    case "rows":
      return <RowsSlide slide={slide} />;
    case "prose":
      return <ProseSlide slide={slide} />;
  }
}

interface SlidePlayerProps {
  module: ModuleDef;
  slideIndex: number; // 1-based, matches the URL
}

export function SlidePlayer({ module, slideIndex }: SlidePlayerProps) {
  const router = useRouter();
  const { update, ready } = useCourseStore();
  const slide = module.slides[slideIndex - 1];
  const isFirst = slideIndex <= 1;
  const isLast = slideIndex >= module.slides.length;
  const surface = surfaceOf(slide);
  const dark = surface !== "cream";

  // Record where the buyer is so the home page can offer to continue.
  useEffect(() => {
    if (!ready) return;
    update((d) => ({
      ...d,
      progress: {
        ...d.progress,
        lastLocation: { moduleId: module.id, slideIndex },
        seenSlides: {
          ...d.progress.seenSlides,
          [`${module.id}/${slideIndex}`]: true,
        },
      },
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, module.id, slideIndex]);

  const goTo = useCallback(
    (index: number) => {
      if (index < 1 || index > module.slides.length) return;
      router.push(`/${module.id}/${index}`);
    },
    [module.id, module.slides.length, router],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["TEXTAREA", "INPUT"].includes(target.tagName)) return;
      if (e.key === "ArrowRight") goTo(slideIndex + 1);
      if (e.key === "ArrowLeft") goTo(slideIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, slideIndex]);

  if (!slide) return null;

  const navButton = `px-4 py-2 text-[12px] font-bold uppercase tracking-chrome transition-colors ${
    dark
      ? "text-on-dark-muted hover:text-gold"
      : "text-body-tertiary hover:text-aubergine"
  }`;

  return (
    <div className="relative">
      <SlideChrome
        surface={surface}
        crumb={slide.crumb}
        tag={slide.tag}
        number={slide.number}
      >
        <SlideBody slide={slide} />
      </SlideChrome>

      <AudioSlot audio={slide.audio} dark={dark} />

      <nav className="absolute bottom-[70px] right-[4.5vw] z-20 flex items-center gap-1">
        {!isFirst ? (
          <button type="button" onClick={() => goTo(slideIndex - 1)} className={navButton}>
            Back
          </button>
        ) : null}
        {!isLast ? (
          <button
            type="button"
            onClick={() => goTo(slideIndex + 1)}
            className={`${navButton} ${dark ? "text-gold" : "text-aubergine"}`}
          >
            Next
          </button>
        ) : (
          <Link href="/" className={`${navButton} ${dark ? "text-gold" : "text-aubergine"}`}>
            Back to the course
          </Link>
        )}
      </nav>
    </div>
  );
}
