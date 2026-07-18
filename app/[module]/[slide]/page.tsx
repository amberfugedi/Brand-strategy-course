import { notFound } from "next/navigation";
import { getModule, courseModules } from "@/lib/content/registry";
import { SlidePlayer } from "@/components/player/SlidePlayer";

export function generateStaticParams() {
  return courseModules
    .filter((m) => m.released)
    .flatMap((m) =>
      m.slides.map((_, i) => ({ module: m.id, slide: String(i + 1) })),
    );
}

export default async function SlidePage({
  params,
}: {
  params: Promise<{ module: string; slide: string }>;
}) {
  const { module: moduleId, slide } = await params;
  const mod = getModule(moduleId);
  const slideIndex = Number(slide);

  if (
    !mod ||
    !mod.released ||
    !Number.isInteger(slideIndex) ||
    slideIndex < 1 ||
    slideIndex > mod.slides.length
  ) {
    notFound();
  }

  return <SlidePlayer module={mod} slideIndex={slideIndex} />;
}
