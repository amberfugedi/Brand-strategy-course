import { notFound } from "next/navigation";
import { courses, getCourseMeta } from "@/lib/content/courses";
import { FoundationMap } from "@/components/course/FoundationMap";

export function generateStaticParams() {
  return courses.filter((c) => c.released).map((c) => ({ course: c.id }));
}

export default async function MapPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const meta = getCourseMeta(course);
  if (!meta || !meta.released) notFound();
  return <FoundationMap course={meta} />;
}
