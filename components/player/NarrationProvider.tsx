"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useParams } from "next/navigation";
import { moduleNarration } from "@/lib/content/narration";

interface NarrationValue {
  /** Whether the current module has a narration track. */
  available: boolean;
  playing: boolean;
  toggle: () => void;
}

const NarrationContext = createContext<NarrationValue>({
  available: false,
  playing: false,
  toggle: () => {},
});

/**
 * Holds the module narration audio element. Lives in the course
 * layout, which persists across slide navigation, so playback carries
 * from slide to slide within a module and stops on leaving it.
 */
export function NarrationProvider({ children }: { children: ReactNode }) {
  const params = useParams<{ module?: string }>();
  const moduleId = params?.module;
  const src = (moduleId && moduleNarration[moduleId]) || null;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // A module change swaps or clears the track; playback never carries
  // across modules.
  useEffect(() => {
    const el = audioRef.current;
    if (el && !src) el.pause();
    setPlaying(false);
  }, [src]);

  const toggle = () => {
    const el = audioRef.current;
    if (!el || !src) return;
    if (el.paused) void el.play().catch(() => {});
    else el.pause();
  };

  return (
    <NarrationContext.Provider
      value={{ available: Boolean(src), playing, toggle }}
    >
      {children}
      <audio
        ref={audioRef}
        src={src ?? undefined}
        preload="none"
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
