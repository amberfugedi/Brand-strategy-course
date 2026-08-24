import { notFound } from "next/navigation";
import { getCourse } from "@/lib/content/courses";
import { CourseStoreProvider } from "@/lib/store/provider";
import { NarrationProvider } from "@/components/player/NarrationProvider";
import { SlidesProvider } from "@/components/player/SlidesProvider";

export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  if (!getCourse(course)) notFound();
  return (
    <CourseStoreProvider courseId={course}>
      <SlidesProvider>
        <NarrationProvider>{children}</NarrationProvider>
      </SlidesProvider>
    </CourseStoreProvider>
  );
}
