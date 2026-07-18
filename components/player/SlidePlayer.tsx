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
import { QuestionSlide } from "@/components/slides/QuestionSlide";
import { FrameworkSlide } from "@/components/slides/FrameworkSlide";
import { PatternsSlide } from "@/components/slides/PatternsSlide";
import { ColumnsSlide } from "@/components/slides/ColumnsSlide";
import { ExamplesSlide } from "@/components/slides/ExamplesSlide";
import { PrincipleSlide } from "@/components/slides/PrincipleSlide";
import { StructureSlide } from "@/components/slides/StructureSlide";
import { ExerciseSlide } from "@/components/slides/ExerciseSlide";
import { SynthesisSlide } from "@/components/slides/SynthesisSlide";
import { StatementsSlide } from "@/components/slides/StatementsSlide";
import { SummarySlide } from "@/components/slides/SummarySlide";
import { AudioSlot } from "./AudioSlot";
import { useCourseStore } from "@/lib/store/provider";
import { useAuth } from "@/lib/auth/provider";
import { SignInGate } from "@/components/auth/SignInGate";

function surfaceOf(slide: Slide): Surface {
  if (slide.kind === "hero") return slide.surface;
  if (slide.kind === "prose" && slide.surface) return slide.surface;
  if (slide.kind === "question" || slide.kind === "structure") return "plum";
  if (slide.kind === "principle") return "ink";
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
    case "question":
      return <QuestionSlide slide={slide} />;
    case "framework":
      return <FrameworkSlide slide={slide} />;
    case "patterns":
      return <PatternsSlide slide={slide} />;
    case "columns":
      return <ColumnsSlide slide={slide} />;
    case "examples":
      return <ExamplesSlide slide={slide} />;
    case "principle":
      return <PrincipleSlide slide={slide} />;
    case "structure":
      return <StructureSlide slide={slide} />;
    case "exercise":
      return <ExerciseSlide slide={slide} />;
    case "synthesis":
      return <SynthesisSlide slide={slide} />;
    case "statements":
      return <StatementsSlide slide={slide} />;
    case "summary":
      return <SummarySlide slide={slide} />;
  }
}

interface SlidePlayerProps {
  courseId: string;
  module: ModuleDef;
  slideIndex: number; // 1-based, matches the URL
}

export function SlidePlayer({ courseId, module, slideIndex }: SlidePlayerProps) {
  const router = useRouter();
  const { update, ready } = useCourseStore();
  const auth = useAuth();
  // The intro is open to everyone; modules need an account when
  // sign-in is configured. In local mode nothing is gated.
  const gated = module.id !== "intro" && auth.enabled && !auth.loading && !auth.user;
  const slide = module.slides[slideIndex - 1];
  const isFirst = slideIndex <= 1;
  const isLast = slideIndex >= module.slides.length;
  const surface = surfaceOf(slide);
  const dark = surface !== "cream";

  // Record where the buyer is so the home page can offer to continue.
  // Reaching a module's final slide marks the module completed.
  useEffect(() => {
    if (!ready) return;
    const reachedEnd = slideIndex >= module.slides.length;
    update((d) => ({
      ...d,
      progress: {
        ...d.progress,
        lastLocation: { moduleId: module.id, slideIndex },
        seenSlides: {
          ...d.progress.seenSlides,
          [`${module.id}/${slideIndex}`]: true,
        },
        completedModules:
          reachedEnd && !d.progress.completedModules.includes(module.id)
            ? [...d.progress.completedModules, module.id]
            : d.progress.completedModules,
      },
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, module.id, slideIndex]);

  const goTo = useCallback(
    (index: number) => {
      if (index < 1 || index > module.slides.length) return;
      router.push(`/${courseId}/${module.id}/${index}`);
    },
    [courseId, module.id, module.slides.length, router],
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

  if (gated) {
    return <SignInGate nextPath={`/${courseId}/${module.id}/${slideIndex}`} />;
  }

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
          <Link
            href={`/${courseId}`}
            className={`${navButton} ${dark ? "text-gold" : "text-aubergine"}`}
          >
            Back to the course
          </Link>
        )}
      </nav>
    </div>
  );
}
