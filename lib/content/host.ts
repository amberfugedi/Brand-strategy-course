/**
 * The course host, shown behind "Meet Amber" on the title slide.
 * Replace bio with Amber's own lines (short paragraphs, first person
 * or third, her call) and drop a square photo at
 * public/images/amber.jpg; the panel falls back to the monogram until
 * the photo exists, and shows a holding line while bio is empty.
 */
export const host = {
  name: "Amber Fugedi",
  cta: "Meet Amber",
  photo: "/images/amber.jpg",
  bio: [
    "Amber is a marketing strategist with over ten years of experience helping businesses build marketing systems that support *sustainable* growth.",
    "She has led marketing for SaaS companies, financial institutions, and service businesses, combining strategic thinking with practical execution to help businesses grow with *confidence*.",
  ] as string[],
};
