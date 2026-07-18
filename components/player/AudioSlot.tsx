"use client";

import { SlideAudio } from "@/lib/content/types";

/**
 * The per-slide audio insertion point. Audio is added in a later pass;
 * until a slide has a src, this renders nothing. When audio lands, this
 * becomes the play control without touching slide layouts.
 */
export function AudioSlot({ audio, dark }: { audio: SlideAudio; dark: boolean }) {
  if (!audio.src) return null;
  return (
    <div className="absolute bottom-7 left-[4.5vw] z-20">
      <audio
        controls
        src={audio.src}
        className={dark ? "opacity-80" : "opacity-90"}
      />
    </div>
  );
}
