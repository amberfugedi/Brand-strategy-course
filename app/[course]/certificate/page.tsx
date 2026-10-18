import { notFound } from "next/navigation";
import { courses, getCourseMeta } from "@/lib/content/courses";
import { Certificate } from "@/components/course/Certificate";

export function generateStaticParams() {
  return courses.filter((c) => c.released).map((c) => ({ course: c.id }));
}

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const meta = getCourseMeta(course);
  if (!meta || !meta.released) notFound();
  return <Certificate course={meta} />;
}
