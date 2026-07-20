"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useParams, usePathname } from "next/navigation";
import { moduleNarration } from "@/lib/content/narration";
import { getModule } from "@/lib/content/registry";

const RATES = [1, 1.25, 1.5, 0.75];
const RATE_KEY = "bymf.narrationRate";

interface NarrationValue {
  /** Whether the current slide (or module) has a narration track. */
  available: boolean;
  playing: boolean;
  rate: number;
  toggle: () => void;
  /** Replay the current slide's narration from the top. */
  restart: () => void;
  cycleRate: () => void;
}

const NarrationContext = createContext<NarrationValue>({
  available: false,
  playing: false,
  rate: 1,
  toggle: () => {},
  restart: () => {},
  cycleRate: () => {},
});

/**
 * Holds the narration audio element. Lives in the course layout,
 * which persists across slide navigation. Each slide with an
 * audio.src plays its own segment on arrival, so the voice tracks
 * what's on screen; a module listed in moduleNarration instead plays
 * one continuous track across its slides.
 *
 * Browsers may block the first unprompted start (phones especially);
 * the footer Listen control is the fallback, and once tapped, later
 * slides start on their own. A buyer who pauses stays paused until
 * they choose to listen again.
 */
export function NarrationProvider({ children }: { children: ReactNode }) {
  const params = useParams<{ module?: string; slide?: string }>();
  const pathname = usePathname();
  const moduleId = params?.module;
  const slideIndex = Number(params?.slide);
  const slideSrc =
    (moduleId &&
      Number.isFinite(slideIndex) &&
      getModule(moduleId)?.slides[slideIndex - 1]?.audio.src) ||
    null;
  const src = slideSrc ?? (moduleId && moduleNarration[moduleId]) ?? null;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userPausedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [rate, setRate] = useState(1);

  // The saved speed preference, applied before anything plays.
  useEffect(() => {
    const saved = Number(window.localStorage.getItem(RATE_KEY));
    if (RATES.includes(saved)) setRate(saved);
  }, []);

  useEffect(() => {
    const el = audioRef.current;
    if (el) el.playbackRate = rate;
  }, [rate, src]);

  // A new track (a new slide's segment, or a new module) starts by
  // itself; a blocked attempt just leaves the Listen control waiting.
  // Leaving narrated content clears the paused choice.
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    if (!src) {
      el.pause();
      userPausedRef.current = false;
      setPlaying(false);
      return;
    }
    el.playbackRate = rate;
    const t = setTimeout(() => {
      if (!userPausedRef.current) void el.play().catch(() => {});
    }, 80);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  // For a module-level track the src doesn't change between slides;
  // navigation retries a start the browser blocked earlier.
  useEffect(() => {
    const el = audioRef.current;
    if (!el || !src) return;
    if (el.paused && !el.ended && !userPausedRef.current) {
      void el.play().catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const toggle = () => {
    const el = audioRef.current;
    if (!el || !src) return;
    if (el.paused) {
      userPausedRef.current = false;
      if (el.ended) el.currentTime = 0;
      void el.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      el.pause();
    }
  };

  const restart = () => {
    const el = audioRef.current;
    if (!el || !src) return;
    userPausedRef.current = false;
    el.currentTime = 0;
    void el.play().catch(() => {});
  };

  const cycleRate = () => {
    const next = RATES[(RATES.indexOf(rate) + 1) % RATES.length];
    setRate(next);
    window.localStorage.setItem(RATE_KEY, String(next));
  };

  return (
    <NarrationContext.Provider
      value={{
        available: Boolean(src),
        playing,
        rate,
        toggle,
        restart,
        cycleRate,
      }}
    >
      {children}
      <audio
        ref={audioRef}
        src={src ?? undefined}
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="hidden"
      />
    </NarrationContext.Provider>
  );
}

export function useNarration(): NarrationValue {
  return useContext(NarrationContext);
}
