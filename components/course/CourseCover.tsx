/**
 * Generated cover art for library cards: the deck's module-title
 * treatment as an image. No photography needed; each course supplies
 * one serif word.
 */
export function CourseCover({
  ordinal,
  word,
  muted = false,
}: {
  ordinal: string;
  word: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`plum-glow relative aspect-[16/9] w-full overflow-hidden ${
        muted ? "bg-aubergine/40" : "bg-aubergine"
      }`}
    >
      <div className="absolute left-6 top-5 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/70">
          <span className="font-serif italic text-[12px] leading-none text-gold">
            A
          </span>
        </span>
        <span className="text-[9px] font-bold uppercase tracking-eyebrow text-gold/80">
          {ordinal}
        </span>
      </div>
      <div className="absolute bottom-5 left-6 right-6">
        <span className="font-serif text-4xl italic leading-none text-gold md:text-5xl">
          {word}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex h-[3px]">
        <div className="flex-1 bg-teal" />
        <div className="flex-1 bg-rust" />
        <div className="flex-1 bg-olive" />
      </div>
    </div>
  );
}
