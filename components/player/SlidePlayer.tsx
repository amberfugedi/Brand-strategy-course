"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
import { DiagnosticSlide } from "@/components/slides/DiagnosticSlide";
import { PrioritiesSlide } from "@/components/slides/PrioritiesSlide";
import { AuditSlide } from "@/components/slides/AuditSlide";
import { GapListSlide } from "@/components/slides/GapListSlide";
import { StartingPointSlide } from "@/components/slides/StartingPointSlide";
import { PlanSlide } from "@/components/slides/PlanSlide";
import { FrameSlide } from "@/components/slides/FrameSlide";
import { CardsSlide } from "@/components/slides/CardsSlide";
import { DetailSlide } from "@/components/slides/DetailSlide";
import { CompareSlide } from "@/components/slides/CompareSlide";
import { TableSlide } from "@/components/slides/TableSlide";
import { MapSlide } from "@/components/slides/MapSlide";
import { TouchpointsSlide } from "@/components/slides/TouchpointsSlide";
import { ProofInventorySlide } from "@/components/slides/ProofInventorySlide";
import { ReferralMapSlide } from "@/components/slides/ReferralMapSlide";
import { PresencePlanSlide } from "@/components/slides/PresencePlanSlide";
import { OwnedAudienceSlide } from "@/components/slides/OwnedAudienceSlide";
import { AuthorityKindSlide } from "@/components/slides/AuthorityKindSlide";
import { FoundationPlanSlide } from "@/components/slides/FoundationPlanSlide";
import { AudioSlot } from "./AudioSlot";
import { useCourseStore } from "@/lib/store/provider";
import { useAuth } from "@/lib/auth/provider";
import { SignInGate } from "@/components/auth/SignInGate";
import { stepsOf } from "@/lib/content/steps";
import { slideComplete } from "@/lib/content/completion";

function surfaceOf(slide: Slide): Surface {
  if (slide.kind === "hero") return slide.surface;
  if (slide.kind === "prose" && slide.surface) return slide.surface;
  if (
    slide.kind === "question" ||
    slide.kind === "structure" ||
    slide.kind === "startingPoint" ||
    slide.kind === "frame" ||
    slide.kind === "touchpoints" ||
    slide.kind === "proofInventory" ||
    slide.kind === "referralMap" ||
    slide.kind === "presencePlan" ||
    slide.kind === "ownedAudience" ||
    slide.kind === "foundationPlan"
  )
    return "plum";
  if (slide.kind === "principle") return "ink";
  return "cream";
}

function SlideBody({ slide, revealed }: { slide: Slide; revealed: number }) {
  switch (slide.kind) {
    case "hero":
      return <HeroSlide slide={slide} />;
    case "system":
      return <SystemSlide slide={slide} revealed={revealed} />;
    case "cardList":
      return <CardListSlide slide={slide} revealed={revealed} />;
    case "rows":
      return <RowsSlide slide={slide} revealed={revealed} />;
    case "prose":
      return <ProseSlide slide={slide} revealed={revealed} />;
    case "question":
      return <QuestionSlide slide={slide} revealed={revealed} />;
    case "framework":
      return <FrameworkSlide slide={slide} revealed={revealed} />;
    case "patterns":
      return <PatternsSlide slide={slide} revealed={revealed} />;
    case "columns":
      return <ColumnsSlide slide={slide} revealed={revealed} />;
    case "examples":
      return <ExamplesSlide slide={slide} revealed={revealed} />;
    case "principle":
      return <PrincipleSlide slide={slide} />;
    case "structure":
      return <StructureSlide slide={slide} revealed={revealed} />;
    case "exercise":
      return <ExerciseSlide slide={slide} />;
    case "synthesis":
      return <SynthesisSlide slide={slide} />;
    case "statements":
      return <StatementsSlide slide={slide} revealed={revealed} />;
    case "summary":
      return <SummarySlide slide={slide} />;
    case "diagnostic":
      return <DiagnosticSlide slide={slide} />;
    case "priorities":
      return <PrioritiesSlide slide={slide} />;
    case "audit":
      return <AuditSlide slide={slide} />;
    case "gaplist":
      return <GapListSlide slide={slide} />;
    case "startingPoint":
      return <StartingPointSlide slide={slide} />;
    case "plan":
      return <PlanSlide slide={slide} />;
    case "frame":
      return <FrameSlide slide={slide} />;
    case "cards":
      return <CardsSlide slide={slide} revealed={revealed} />;
    case "detail":
      return <DetailSlide slide={slide} revealed={revealed} />;
    case "compare":
      return <CompareSlide slide={slide} revealed={revealed} />;
    case "table":
      return <TableSlide slide={slide} revealed={revealed} />;
    case "map":
      return <MapSlide slide={slide} />;
    case "touchpoints":
      return <TouchpointsSlide slide={slide} />;
    case "proofInventory":
      return <ProofInventorySlide slide={slide} />;
    case "referralMap":
      return <ReferralMapSlide slide={slide} />;
    case "presencePlan":
      return <PresencePlanSlide slide={slide} />;
    case "ownedAudience":
      return <OwnedAudienceSlide slide={slide} />;
    case "authorityKind":
      return <AuthorityKindSlide slide={slide} />;
    case "foundationPlan":
      return <FoundationPlanSlide slide={slide} />;
  }
}

interface SlidePlayerProps {
  courseId: string;
  module: ModuleDef;
  slideIndex: number; // 1-based, matches the URL
}

export function SlidePlayer({ courseId, module, slideIndex }: SlidePlayerProps) {
  const router = useRouter();
  const { doc, update, ready } = useCourseStore();
  const auth = useAuth();
  // Modules unlock in sequence: a module with a prerequisite stays
  // locked until that module is completed.
  const lockedByPrereq = Boolean(
    module.requires &&
      ready &&
      !doc.progress.completedModules.includes(module.requires),
  );
  // The intro is open to everyone; modules need an account when
  // sign-in is configured. In local mode nothing is gated.
  const gated = module.id !== "intro" && auth.enabled && !auth.loading && !auth.user;
  const slide = module.slides[slideIndex - 1];
  const isFirst = slideIndex <= 1;
  const isLast = slideIndex >= module.slides.length;
  const surface = surfaceOf(slide);
  const dark = surface !== "cream";

  // Slides build beat by beat on a timer, matching the pacing the
  // voiceover will carry. A slide the buyer has already seen renders
  // fully revealed, and reduced-motion preferences skip the build.
  const totalSteps = stepsOf(slide);
  const [step, setStep] = useState(0);
  // Interactive slides hold Next until their inputs are filled in, so
  // a buyer cannot finish a module with an empty plan. The note only
  // appears once they try to move on.
  const inputComplete = slideComplete(slide, doc);
  const [nudged, setNudged] = useState(false);
  const seenRef = useRef(doc.progress.seenSlides);
  seenRef.current = doc.progress.seenSlides;
  useEffect(() => {
    const current = module.slides[slideIndex - 1];
    const wasSeen = Boolean(seenRef.current[`${module.id}/${slideIndex}`]);
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setStep(current && (wasSeen || reducedMotion) ? stepsOf(current) : 0);
    setNudged(false);
  }, [ready, module, slideIndex]);

  // The timer that reveals the next beat. Chained timeouts: a short
  // settle before the first beat, a reading pace between the rest.
  useEffect(() => {
    if (step >= totalSteps) return;
    const t = setTimeout(
      () => setStep((s) => Math.min(totalSteps, s + 1)),
      step === 0 ? 700 : 1900,
    );
    return () => clearTimeout(t);
  }, [step, totalSteps, module.id, slideIndex]);

  // Record where the buyer is so the home page can offer to continue.
  // Reaching a module's final slide marks the module completed, but
  // only once every interactive slide in it is filled in, so jumping
  // ahead by URL earns no credit.
  useEffect(() => {
    if (!ready || lockedByPrereq) return;
    const reachedEnd = slideIndex >= module.slides.length;
    update((d) => {
      const toolsDone = module.slides.every((s) => slideComplete(s, d));
      return {
        ...d,
        progress: {
          ...d.progress,
          lastLocation: { moduleId: module.id, slideIndex },
          seenSlides: {
            ...d.progress.seenSlides,
            [`${module.id}/${slideIndex}`]: true,
          },
          completedModules:
            reachedEnd &&
            toolsDone &&
            !d.progress.completedModules.includes(module.id)
              ? [...d.progress.completedModules, module.id]
              : d.progress.completedModules,
        },
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, module.id, slideIndex]);

  const goTo = useCallback(
    (index: number) => {
      if (index < 1 || index > module.slides.length) return;
      router.push(`/${courseId}/${module.id}/${index}`);
    },
    [courseId, module.id, module.slides.length, router],
  );

  const stepRef = useRef(step);
  stepRef.current = step;

  // Next skips the remaining beats if any are still arriving;
  // otherwise it moves to the next slide, once the slide's inputs
  // (if it has any) are filled in.
  const inputCompleteRef = useRef(inputComplete);
  inputCompleteRef.current = inputComplete;
  const advance = useCallback(() => {
    if (stepRef.current < totalSteps) setStep(totalSteps);
    else if (!inputCompleteRef.current) setNudged(true);
    else goTo(slideIndex + 1);
  }, [totalSteps, goTo, slideIndex]);

  const goBack = useCallback(() => {
    goTo(slideIndex - 1);
  }, [goTo, slideIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["TEXTAREA", "INPUT", "BUTTON", "SELECT"].includes(target.tagName))
        return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        advance();
      }
      if (e.key === "ArrowLeft") goBack();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance, goBack]);

  if (!slide) return null;

  if (gated) {
    return <SignInGate nextPath={`/${courseId}/${module.id}/${slideIndex}`} />;
  }

  if (lockedByPrereq) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-body surface-cream">
        <div className="w-full max-w-md border border-gold bg-cream-light px-9 py-10 text-center">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            One step at a time
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            This module opens after the one before it.
          </h1>
          <p className="mt-3 text-[14px] leading-relaxed text-body-secondary">
            Everything here builds on work you haven't finished yet. Complete
            the previous module and this one unlocks.
          </p>
          <Link
            href={`/${courseId}`}
            className="mt-6 inline-block border border-aubergine bg-aubergine px-6 py-3 text-[12px] font-bold uppercase tracking-chrome text-cream transition-colors hover:bg-transparent hover:text-aubergine"
          >
            Back to the course
          </Link>
        </div>
      </div>
    );
  }

  const navButton = `px-4 py-2 text-[12px] font-bold uppercase tracking-chrome transition-colors ${
    dark
      ? "text-on-dark-muted hover:text-gold"
      : "text-body-tertiary hover:text-aubergine"
  }`;

  const progress =
    ((slideIndex - 1 + (totalSteps > 0 ? step / totalSteps : 1)) /
      module.slides.length) *
    100;

  return (
    <div className="relative">
      <div
        className="fixed left-0 top-0 z-30 h-[2px] bg-gold/70 transition-[width] duration-300"
        style={{ width: `${progress}%` }}
      />
      <SlideChrome
        surface={surface}
        crumb={slide.crumb}
        tag={slide.tag}
        number={slide.number}
      >
        <SlideBody slide={slide} revealed={step} />
      </SlideChrome>

      <AudioSlot audio={slide.audio} dark={dark} />

      <nav className="absolute bottom-[70px] right-[4.5vw] z-20 flex items-center gap-1">
        {nudged && !inputComplete ? (
          <span
            className={`mr-2 font-serif text-[13px] italic ${
              dark ? "text-on-dark-muted" : "text-body-secondary"
            }`}
          >
            Finish this step to continue.
          </span>
        ) : null}
        {!isFirst ? (
          <button type="button" onClick={goBack} className={navButton}>
            Back
          </button>
        ) : null}
        {!isLast || step < totalSteps ? (
          <button
            type="button"
            onClick={advance}
            className={`${navButton} ${
              !inputComplete && step >= totalSteps
                ? dark
                  ? "text-on-dark-muted"
                  : "text-body-tertiary"
                : dark
                  ? "text-gold"
                  : "text-aubergine"
            }`}
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
