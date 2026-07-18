import { notFound } from "next/navigation";
import { courses, getCourse } from "@/lib/content/courses";
import { SlidePlayer } from "@/components/player/SlidePlayer";

export function generateStaticParams() {
  return courses
    .filter((c) => c.released)
    .flatMap((c) =>
      c.modules
        .filter((m) => m.released)
        .flatMap((m) =>
          m.slides.map((_, i) => ({
            course: c.id,
            module: m.id,
            slide: String(i + 1),
          })),
        ),
    );
}

export default async function SlidePage({
  params,
}: {
  params: Promise<{ course: string; module: string; slide: string }>;
}) {
  const { course: courseId, module: moduleId, slide } = await params;
  const course = getCourse(courseId);
  const mod = course?.modules.find((m) => m.id === moduleId);
  const slideIndex = Number(slide);

  if (
    !course ||
    !course.released ||
    !mod ||
    !mod.released ||
    !Number.isInteger(slideIndex) ||
    slideIndex < 1 ||
    slideIndex > mod.slides.length
  ) {
    notFound();
  }

  return <SlidePlayer courseId={courseId} module={mod} slideIndex={slideIndex} />;
}
