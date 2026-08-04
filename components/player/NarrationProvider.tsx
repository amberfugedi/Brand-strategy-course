"use client";

import {
  createContext,
  useCallback,
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
const CAPTIONS_KEY = "bymf.captions";

interface NarrationValue {
  /** Whether the current slide (or module) has a narration track. */
  available: boolean;
  /** The current track's URL; word timings live beside it. */
  src: string | null;
  playing: boolean;
  rate: number;
  captions: boolean;
  toggle: () => void;
  /** Replay the current slide's narration from the top. */
  restart: () => void;
  cycleRate: () => void;
  toggleCaptions: () => void;
  /** Current playback position, for the caption highlight. */
  getTime: () => number;
}

const NarrationContext = createContext<NarrationValue>({
  available: false,
  src: null,
  playing: false,
  rate: 1,
  captions: false,
  toggle: () => {},
  restart: () => {},
  cycleRate: () => {},
  toggleCaptions: () => {},
  getTime: () => 0,
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
  const [captions, setCaptions] = useState(false);

  // The saved speed and caption preferences, applied before anything
  // plays.
  useEffect(() => {
    const saved = Number(window.localStorage.getItem(RATE_KEY));
    if (RATES.includes(saved)) setRate(saved);
    setCaptions(window.localStorage.getItem(CAPTIONS_KEY) === "1");
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

  const toggleCaptions = () => {
    setCaptions((on) => {
      window.localStorage.setItem(CAPTIONS_KEY, on ? "0" : "1");
      return !on;
    });
  };

  const getTime = useCallback(() => audioRef.current?.currentTime ?? 0, []);

  return (
    <NarrationContext.Provider
      value={{
        available: Boolean(src),
        src,
        playing,
        rate,
        captions,
        toggle,
        restart,
        cycleRate,
        toggleCaptions,
        getTime,
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
