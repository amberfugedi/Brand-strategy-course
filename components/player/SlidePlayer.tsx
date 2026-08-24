"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Slide, Surface } from "@/lib/content/types";
import type { ModuleMeta } from "@/lib/content/meta";
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
import { useCourseStore } from "@/lib/store/provider";
import { useAuth } from "@/lib/auth/provider";
import { useNarration } from "@/components/player/NarrationProvider";
import { CaptionBar } from "@/components/player/CaptionBar";
import { CalloutNote } from "@/components/player/CalloutNote";
import { ReferenceTray } from "@/components/player/ReferenceTray";
import { SpokenMarkProvider } from "@/components/player/SpokenMark";
import { NarrationClock } from "@/components/player/NarrationClock";
import { useEntitlement } from "@/lib/auth/entitlement";
import { useSlides } from "@/components/player/SlidesProvider";
import { SignInGate } from "@/components/auth/SignInGate";
import { stepsOf } from "@/lib/content/steps";
import { slideComplete } from "@/lib/content/completion";

function surfaceOf(slide: Slide): Surface {
  if (slide.kind === "hero") return slide.surface;
  if (slide.kind === "prose" && slide.surface) return slide.surface;
  if (
    slide.kind === "system" ||
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

function SlideBody({
  slide,
  revealed,
  strata,
}: {
  slide: Slide;
  revealed: number;
  strata?: number | "all";
}) {
  switch (slide.kind) {
    case "hero":
      return <HeroSlide slide={slide} revealed={revealed} />;
    case "system":
      return <SystemSlide slide={slide} revealed={revealed} />;
    case "cardList":
      return <CardListSlide slide={slide} revealed={revealed} />;
    case "rows":
      return <RowsSlide slide={slide} revealed={revealed} />;
    case "prose":
      return <ProseSlide slide={slide} revealed={revealed} />;
    case "question":
      return <QuestionSlide slide={slide} revealed={revealed} strata={strata} />;
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
      return <PrioritiesSlide slide={slide} revealed={revealed} />;
    case "audit":
      return <AuditSlide slide={slide} />;
    case "gaplist":
      return <GapListSlide slide={slide} revealed={revealed} />;
    case "startingPoint":
      return <StartingPointSlide slide={slide} strata={strata} />;
    case "plan":
      return <PlanSlide slide={slide} />;
    case "frame":
      return <FrameSlide slide={slide} strata={strata} />;
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
  module: ModuleMeta;
  slideIndex: number; // 1-based, matches the URL
}

// Which foundation (1-7) each module builds; "all" for the audit.
const STRATA_OF: Record<string, number | "all"> = {
  m1: 1,
  m2: "all",
  m3: 2,
  m4: 3,
  m5: 4,
  m6: 5,
  m7: 6,
  m8: 7,
};

const LAYER_OF: Record<string, string> = {
  m3: "layer-found",
  m4: "layer-chosen",
  m5: "layer-chosen",
  m6: "layer-remembered",
  m7: "layer-remembered",
  m8: "layer-remembered",
};

export function SlidePlayer({ courseId, module, slideIndex }: SlidePlayerProps) {
  const router = useRouter();
  const { doc, update, ready } = useCourseStore();
  const auth = useAuth();
  const narration = useNarration();
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
  // An account is not enough once the course is being sold. Undefined
  // means the lookup is still out, which must not read as "has not paid"
  // or a buyer sees a paywall flash on every load.
  const entitled = useEntitlement(courseId);
  const { slides, status: slidesStatus } = useSlides();
  const slideList = slides ?? [];
  const unpaid = module.id !== "intro" && !gated && entitled === false;
  const slide = slideList[slideIndex - 1];
  const isFirst = slideIndex <= 1;
  const isLast = slideIndex >= module.slideCount;
  // These run above the loading guard, where the slide may not have
  // arrived yet, so each needs a sane answer for "nothing here yet".
  const surface = slide ? surfaceOf(slide) : "cream";
  const dark = surface !== "cream";

  // Slides build beat by beat on a timer, matching the pacing the
  // voiceover will carry. A slide the buyer has already seen renders
  // fully revealed, and reduced-motion preferences skip the build.
  const totalSteps = slide ? stepsOf(slide) : 0;
  const [step, setStep] = useState(0);
  // Interactive slides hold Next until their inputs are filled in, so
  // a buyer cannot finish a module with an empty plan. The note only
  // appears once they try to move on.
  const inputComplete = slide ? slideComplete(slide, doc) : true;
  const [nudged, setNudged] = useState(false);
  // First Next during narration holds with a note; the second one
  // skips ahead. Resets on a new slide or when the track ends.
  const [skipArmed, setSkipArmed] = useState(false);
  const seenRef = useRef(doc.progress.seenSlides);
  seenRef.current = doc.progress.seenSlides;
  useEffect(() => {
    const current = slideList[slideIndex - 1];
    const wasSeen = Boolean(seenRef.current[`${module.id}/${slideIndex}`]);
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // A slide with narration cues rebuilds with the voice on every
    // visit (its track replays on arrival); other seen slides render
    // fully, and reduced motion always does.
    const cued = Boolean(current?.audio.cues?.length);
    setStep(
      current && (reducedMotion || (wasSeen && !cued)) ? stepsOf(current) : 0,
    );
    setNudged(false);
    setSkipArmed(false);
  }, [ready, module, slideIndex]);

  // The restart control replays the track from the top; a cued slide
  // rebuilds along with it.
  const restartSeenRef = useRef(narration.restartCount);
  useEffect(() => {
    if (narration.restartCount === restartSeenRef.current) return;
    restartSeenRef.current = narration.restartCount;
    if (slide?.audio.cues?.length) setStep(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [narration.restartCount]);

  // The timer that reveals the next beat. Chained timeouts: a short
  // settle before the first beat, a reading pace between the rest.
  // On slides with narration cues the playing voice drives the beats
  // instead; the timer only covers a blocked or paused track.
  const cueDriven = Boolean(slide?.audio.cues?.length) && narration.playing;
  useEffect(() => {
    if (step >= totalSteps || cueDriven) return;
    const t = setTimeout(
      () => setStep((s) => Math.min(totalSteps, s + 1)),
      step === 0 ? 700 : 1900,
    );
    return () => clearTimeout(t);
  }, [step, totalSteps, cueDriven, module.id, slideIndex]);

  // Record where the buyer is so the home page can offer to continue.
  // Reaching a module's final slide marks the module completed, but
  // only once every interactive slide in it is filled in, so jumping
  // ahead by URL earns no credit.
  useEffect(() => {
    if (!ready || lockedByPrereq) return;
    const reachedEnd = slideIndex >= module.slideCount;
    update((d) => {
      const toolsDone = slideList.every((s) => slideComplete(s, d));
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
      if (index < 1 || index > module.slideCount) return;
      router.push(`/${courseId}/${module.id}/${index}`);
    },
    [courseId, module.id, module.slideCount, router],
  );

  const stepRef = useRef(step);
  stepRef.current = step;

  // Narration-synced reveals: each beat lands when the voice reaches
  // its cue. Monotonic, so a Next-press skip is never undone and a
  // restarted track doesn't hide what's on screen.
  useEffect(() => {
    const cues = slide?.audio.cues;
    if (!cues?.length || !narration.playing) return;
    let raf = 0;
    const tick = () => {
      const t = narration.getTime();
      let due = 0;
      for (const c of cues) if (c <= t) due++;
      if (due > stepRef.current) setStep(Math.min(totalSteps, due));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [slide, narration.playing, narration.getTime, totalSteps]);

  // Next skips the remaining beats if any are still arriving;
  // otherwise it moves to the next slide, once the slide's inputs
  // (if it has any) are filled in.
  const inputCompleteRef = useRef(inputComplete);
  inputCompleteRef.current = inputComplete;
  const playingRef = useRef(narration.playing);
  playingRef.current = narration.playing;
  const skipArmedRef = useRef(skipArmed);
  skipArmedRef.current = skipArmed;
  const advance = useCallback(() => {
    if (stepRef.current < totalSteps) setStep(totalSteps);
    else if (!inputCompleteRef.current) setNudged(true);
    else if (playingRef.current && !skipArmedRef.current) setSkipArmed(true);
    else goTo(slideIndex + 1);
  }, [totalSteps, goTo, slideIndex]);

  useEffect(() => {
    if (!narration.playing) setSkipArmed(false);
  }, [narration.playing]);

  const goBack = useCallback(() => {
    goTo(slideIndex - 1);
  }, [goTo, slideIndex]);

  // Swipe navigation on touch screens: a mostly-horizontal swipe of
  // 70px or more advances or goes back, ignoring gestures that start
  // on interactive elements or inside drag tools.
  const touchRef = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const target = e.target as HTMLElement | null;
    if (
      target &&
      target.closest("button, a, input, textarea, select, [data-noswipe]")
    ) {
      touchRef.current = null;
      return;
    }
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY };
  }, []);
  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const start = touchRef.current;
      touchRef.current = null;
      if (!start) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 2) return;
      if (dx < 0) advance();
      else goBack();
    },
    [advance, goBack],
  );

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
      if (e.key === "Escape") router.push(`/${courseId}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance, goBack, router, courseId]);

  // Sign-in and paywall answers come before the loading state: a
  // visitor should be told what they need, not watch a spinner first.
  if (gated || slidesStatus === "unauthenticated") {
    return <SignInGate nextPath={`/${courseId}/${module.id}/${slideIndex}`} />;
  }

  if (unpaid || slidesStatus === "denied") {
    return (
      <PlayerNotice
        courseId={courseId}
        eyebrow="The intro is open to everyone"
        heading="The modules come with the course."
        body="If you have already bought it, sign in with the email you paid with and this opens straight away."
      />
    );
  }

  if (slidesStatus === "error") {
    return (
      <PlayerNotice
        courseId={courseId}
        eyebrow="That did not load"
        heading="This module didn't come through."
        body="The connection dropped on the way. Refreshing usually sorts it, and none of your work is lost."
      />
    );
  }

  // The copy is no longer in the bundle, so there is a beat before it
  // lands. Metadata is already here, so the chrome does not move.
  if (!slide) {
    return (
      <div
        className="flex min-h-screen items-center justify-center bg-cream surface-cream"
        role="status"
        aria-label="Loading this module"
      >
        <div className="h-1 w-24 overflow-hidden rounded-full bg-subtle">
          <div className="h-full w-1/3 animate-pulse rounded-full bg-gold" />
        </div>
      </div>
    );
  }

  if (lockedByPrereq) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-body surface-cream">
        <div className="rounded-3xl w-full max-w-md border border-subtle bg-cream-light shadow-lift px-9 py-10 text-center">
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
            className="mt-6 inline-block rounded-[14px] border border-aubergine bg-aubergine px-6 py-3 text-[12px] font-bold uppercase tracking-chrome text-cream transition-colors hover:bg-transparent hover:text-aubergine"
          >
            Back to the course
          </Link>
        </div>
      </div>
    );
  }

  // Generous padding for the most-tapped controls in the course; the
  // negative vertical margin keeps the footer row's height unchanged
  // while the hit area runs well past the label.
  const navButton = `px-4 py-2 sm:-my-3 sm:px-5 sm:py-3 text-[12px] font-bold uppercase tracking-chrome transition-colors ${
    dark
      ? "text-on-dark-muted hover:text-gold"
      : "text-body-tertiary hover:text-aubergine"
  }`;

  const progress =
    ((slideIndex - 1 + (totalSteps > 0 ? step / totalSteps : 1)) /
      module.slideCount) *
    100;

  // Module 2 hands over a priority order and a Gap List, then keeps
  // referring to both; the foundation modules refer to them too. From
  // the reading slide that first asks for the order onward, they are
  // reachable from the chrome rather than only on the slide that
  // rendered them.
  // A slide that already prints the priority order or the Gap List
  // does not also need the tab that opens them.
  const showsPlanItself =
    slide.kind === "priorities" ||
    slide.kind === "gaplist" ||
    slide.kind === "startingPoint" ||
    slide.kind === "plan" ||
    (slide.kind === "question" && Boolean(slide.live));
  // The drawer belongs where the outputs get used, and Module 2 is
  // explicit that the teaching modules are not that place: "you take
  // all six whether or not they are your build priority", and "come
  // back to your priority order" once the learning is done. A standing
  // tab through Modules 3 to 7 invites the is-this-one-mine skim the
  // course tells them not to do, and none of those modules asks the
  // buyer to consult either output. So: Module 2 from the slide that
  // first asks them to read the order, and Module 8, the build phase
  // the order was for.
  const carriesPlan =
    !showsPlanItself &&
    ((module.id === "m2" && slideIndex >= 11) || module.id === "m8");

  // Phone navigation lives at the top of the slide (the footer is
  // crowded by the player controls and the browser's own bottom bar)
  // as generous pill targets; larger screens keep the footer pair.
  const pill = `rounded-full border px-4 py-2.5 text-[11px] font-bold uppercase tracking-chrome transition-colors ${
    dark
      ? "border-subtle-dark text-on-dark-muted hover:border-gold/60 hover:text-gold"
      : "border-subtle text-body-secondary hover:border-aubergine hover:text-aubergine"
  }`;
  const pillStrong = `rounded-full border px-4 py-2.5 text-[11px] font-bold uppercase tracking-chrome transition-colors ${
    dark
      ? "border-gold/60 text-gold hover:bg-gold/10"
      : "border-aubergine text-aubergine hover:bg-aubergine hover:text-cream"
  }`;
  const pillMuted = `rounded-full border px-4 py-2.5 text-[11px] font-bold uppercase tracking-chrome transition-colors ${
    dark ? "border-subtle-dark text-on-dark-muted" : "border-subtle text-body-tertiary"
  }`;
  const topControls = (
    <>
      {!isFirst ? (
        <button type="button" onClick={goBack} className={pill}>
          Back
        </button>
      ) : null}
      {!isLast || step < totalSteps ? (
        <button type="button" onClick={advance} className={pillStrong}>
          Next
        </button>
      ) : (
        <Link href={`/${courseId}`} className={pillStrong}>
          Done
        </Link>
      )}
    </>
  );

  const controls = (
    <div className="hidden items-center gap-3 sm:flex">
      {!isFirst ? (
        <button type="button" onClick={goBack} className={pill}>
          Back
        </button>
      ) : null}
      {!isLast || step < totalSteps ? (
        <button
          type="button"
          onClick={advance}
          className={!inputComplete && step >= totalSteps ? pillMuted : pillStrong}
        >
          Next
        </button>
      ) : (
        <Link href={`/${courseId}`} className={`${pillStrong} whitespace-nowrap`}>
          Back to the course
        </Link>
      )}
    </div>
  );

  const note = (
    <>
      {narration.available ? (
        <>
          <button
            type="button"
            onClick={narration.toggle}
            className={`shrink-0 whitespace-nowrap px-2 py-2 sm:-my-3 sm:py-3 text-[11px] font-bold uppercase tracking-chrome transition-colors ${
              dark
                ? "text-gold hover:text-cream"
                : "text-aubergine hover:text-gold"
            }`}
          >
            {narration.playing ? "❚❚ Pause" : "▶ Listen"}
          </button>
          <NarrationClock dark={dark} />
          <button
            type="button"
            onClick={narration.restart}
            aria-label="Restart slide narration"
            className={`shrink-0 px-1.5 py-2 sm:-my-3 sm:py-3 text-[13px] leading-none transition-colors ${
              dark
                ? "text-on-dark-muted hover:text-gold"
                : "text-body-tertiary hover:text-aubergine"
            }`}
          >
            ↺
          </button>
          <button
            type="button"
            onClick={narration.cycleRate}
            aria-label="Narration speed"
            className={`shrink-0 whitespace-nowrap px-2 py-2 sm:-my-3 sm:py-3 text-[11px] font-bold tracking-chrome transition-colors ${
              dark
                ? "text-on-dark-muted hover:text-gold"
                : "text-body-tertiary hover:text-aubergine"
            }`}
          >
            {narration.rate}×
          </button>
          <button
            type="button"
            onClick={narration.toggleCaptions}
            aria-label="Captions"
            aria-pressed={narration.captions}
            className={`shrink-0 whitespace-nowrap px-2 py-2 sm:-my-3 sm:py-3 text-[11px] font-bold tracking-chrome transition-colors ${
              narration.captions
                ? dark
                  ? "text-gold hover:text-cream"
                  : "text-aubergine hover:text-gold"
                : dark
                  ? "text-on-dark-muted hover:text-gold"
                  : "text-body-tertiary hover:text-aubergine"
            }`}
          >
            CC
          </button>
          {narration.captions ? (
            <button
              type="button"
              onClick={narration.cycleCaptionSize}
              aria-label="Caption text size"
              className={`shrink-0 whitespace-nowrap px-2 py-2 sm:-my-3 sm:py-3 text-[12px] font-bold tracking-chrome transition-colors ${
                dark
                  ? "text-on-dark-muted hover:text-gold"
                  : "text-body-tertiary hover:text-aubergine"
              }`}
            >
              Aa
            </button>
          ) : null}
        </>
      ) : null}
      {nudged && !inputComplete ? (
        <span
          className={`min-w-0 truncate text-[12.5px] ${
            dark ? "text-on-dark-muted" : "text-body-secondary"
          }`}
        >
          Finish this step to continue.
        </span>
      ) : skipArmed && narration.playing ? (
        <span
          className={`min-w-0 truncate text-[12.5px] ${
            dark ? "text-on-dark-muted" : "text-body-secondary"
          }`}
        >
          Still narrating. Next again to skip ahead.
        </span>
      ) : null}
    </>
  );

  return (
    <div
      className={`relative ${LAYER_OF[module.id] ?? ""} ${dark ? "progress-dark" : ""}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="fixed left-0 top-0 z-30 h-[2px] transition-[width] duration-300"
        style={{
          width: `${progress}%`,
          background: "rgb(var(--progress) / var(--progress-alpha))",
        }}
      />
      <SlideChrome
        surface={surface}
        crumb={slide.crumb}
        tag={slide.tag}
        number={slide.number}
        homeHref={`/${courseId}`}
        controls={controls}
        topControls={topControls}
        note={note}
        caption={<CaptionBar dark={dark} />}
      >
        <SpokenMarkProvider marks={slide.audio.marks}>
          <SlideBody slide={slide} revealed={step} strata={STRATA_OF[module.id]} />
          {/* Spoken asides sit in the body's own column, under the
              slide and clear of the controls. */}
          {slide.audio.callouts?.length ? (
            <CalloutNote callouts={slide.audio.callouts} dark={dark} />
          ) : null}
        </SpokenMarkProvider>
      </SlideChrome>
      {/* The priority order and Gap List stay one tab away from every
          slide that refers to them, from the moment Module 2 produces
          them through the foundation modules that use them. */}
      {carriesPlan ? <ReferenceTray courseId={courseId} dark={dark} /> : null}
    </div>
  );
}

/** The full-screen card the player shows instead of a slide: not signed
 *  in, not bought, or the fetch failed. Same shape as the prerequisite
 *  lock so the three read as one family. */
function PlayerNotice({
  courseId,
  eyebrow,
  heading,
  body,
}: {
  courseId: string;
  eyebrow: string;
  heading: string;
  body: string;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-body surface-cream">
      <div className="rounded-3xl w-full max-w-md border border-subtle bg-cream-light shadow-lift px-9 py-10 text-center">
        <div className="mb-4 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
          {eyebrow}
        </div>
        <h1 className="text-2xl font-bold tracking-tight">{heading}</h1>
        <p className="mt-3 text-[14px] leading-relaxed text-body-secondary">{body}</p>
        <Link
          href={`/${courseId}`}
          className="mt-6 inline-block rounded-[14px] border border-aubergine bg-aubergine px-6 py-3 text-[12px] font-bold uppercase tracking-chrome text-cream transition-colors hover:bg-transparent hover:text-aubergine"
        >
          Back to the course
        </Link>
      </div>
    </div>
  );
}
