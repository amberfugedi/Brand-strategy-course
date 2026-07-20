import { MapSlide as MapSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

/**
 * The Module 3 landscape graphic, realized from the deck's placeholder
 * spec: the five touchpoints as zones with common terms placed inside
 * the zone they belong to, ads as an overlay across all zones, the
 * buyer at the center.
 */
const ZONES: { title: string; accent: string; terms: string[] }[] = [
  { title: "Your website", accent: "border-t-teal", terms: ["SEO", "AEO", "Content marketing", "Email list"] },
  { title: "Search & map", accent: "border-t-rust", terms: ["Google Business Profile", "Apple Maps"] },
  { title: "Social platforms", accent: "border-t-olive", terms: ["Instagram", "TikTok", "LinkedIn"] },
  { title: "Third-party listings", accent: "border-t-gold", terms: ["Yelp", "Google Reviews", "Psychology Today", "OpenTable", "The Knot", "Houzz"] },
  { title: "Online communities", accent: "border-t-aubergine", terms: ["Facebook groups", "Reddit", "Discord", "Niche forums"] },
];

export function MapSlide({ slide }: { slide: MapSlideDef }) {
  return (
    <div className="mt-2 flex flex-1 flex-col">
      <div className="mb-3 text-[11px] font-bold uppercase tracking-eyebrow text-body-tertiary">
        {slide.eyebrow}
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-aubergine md:text-4xl">
        <Rich text={slide.heading} />
      </h1>
      <p className="mt-3 max-w-4xl text-[14px] leading-relaxed text-body-secondary">
        <Rich text={slide.intro} />
      </p>

      <div className="relative mt-6 pb-2">
        <div className="grid gap-3 md:grid-cols-5">
          {ZONES.map((zone) => (
            <div
              key={zone.title}
              className={`border-t-[3px] bg-cream-dark/60 px-4 py-4 ${zone.accent}`}
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-aubergine">
                {zone.title}
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {zone.terms.map((term) => (
                  <span
                    key={term}
                    className="border border-ink/15 bg-cream px-2 py-0.5 text-[11px] text-body-secondary"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-3 border border-dashed border-gold/60 px-4 py-2.5">
          <span className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            Ads
          </span>
          <span className="text-[12.5px] text-body-secondary">
            An overlay across every zone. Ads amplify a touchpoint you
            already have; they don't create a new one.
          </span>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-aubergine bg-aubergine">
            <span className="font-serif text-[13px] italic leading-none text-cream">
              B
            </span>
          </span>
          <span className="text-[12.5px] text-body-secondary">
            The buyer at the center. Every zone is a place they might meet
            you, or fail to.
          </span>
        </div>
      </div>
    </div>
  );
}
