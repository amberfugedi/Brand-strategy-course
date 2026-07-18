import { notFound } from "next/navigation";
import { getCourse } from "@/lib/content/courses";
import { CourseStoreProvider } from "@/lib/store/provider";

export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  if (!getCourse(course)) notFound();
  return <CourseStoreProvider courseId={course}>{children}</CourseStoreProvider>;
}
