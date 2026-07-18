import { notFound } from "next/navigation";
import { getCourse, courses } from "@/lib/content/courses";
import { CourseHome } from "@/components/course/CourseHome";

export function generateStaticParams() {
  return courses.map((c) => ({ course: c.id }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const def = getCourse(course);
  if (!def || !def.released) notFound();
  return <CourseHome courseId={def.id} />;
}
