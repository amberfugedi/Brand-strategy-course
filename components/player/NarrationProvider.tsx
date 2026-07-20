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

const RATES = [1, 1.25, 1.5, 0.75];
const RATE_KEY = "bymf.narrationRate";

interface NarrationValue {
  /** Whether the current module has a narration track. */
  available: boolean;
  playing: boolean;
  rate: number;
  toggle: () => void;
  cycleRate: () => void;
}

const NarrationContext = createContext<NarrationValue>({
  available: false,
  playing: false,
  rate: 1,
  toggle: () => {},
  cycleRate: () => {},
});

/**
 * Holds the module narration audio element. Lives in the course
 * layout, which persists across slide navigation, so playback carries
 * from slide to slide within a module and stops on leaving it.
 *
 * Narration starts by itself on entering a module with a track and
 * keeps going as slides change. Browsers may block that first
 * unprompted start (phones especially); the footer Listen control is
 * the fallback, and once tapped, later starts are automatic. A buyer
 * who pauses stays paused until they choose to listen again.
 */
export function NarrationProvider({ children }: { children: ReactNode }) {
  const params = useParams<{ module?: string }>();
  const pathname = usePathname();
  const moduleId = params?.module;
  const src = (moduleId && moduleNarration[moduleId]) || null;
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

  // Entering a module resets the paused choice and tries to start its
  // track; a blocked attempt just leaves the Listen control waiting.
  useEffect(() => {
    const el = audioRef.current;
    userPausedRef.current = false;
    setPlaying(false);
    if (!el) return;
    if (!src) {
      el.pause();
      return;
    }
    el.playbackRate = rate;
    const t = setTimeout(() => {
      void el.play().catch(() => {});
    }, 80);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  // Slide changes within the module resume a track the browser
  // blocked earlier, unless the buyer paused it or it has finished.
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
      void el.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      el.pause();
    }
  };

  const cycleRate = () => {
    const next = RATES[(RATES.indexOf(rate) + 1) % RATES.length];
    setRate(next);
    window.localStorage.setItem(RATE_KEY, String(next));
  };

  return (
    <NarrationContext.Provider
      value={{ available: Boolean(src), playing, rate, toggle, cycleRate }}
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
