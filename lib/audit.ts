/**
 * Audit mode: open every module, for reviewing the course.
 *
 * Off unless `NEXT_PUBLIC_AUDIT=1`, so the buyer's course is never
 * accidentally shipped unlocked. An audit build is meant to be a
 * preview, not a state the live site is left in and someone has to
 * remember to undo.
 *
 * What it does: lifts the sequence lock, so any module opens without
 * finishing the one before it, and lets the certificate and the Map
 * render before the course is complete. It also puts a bar across
 * the top of every page, because an unlocked build that looks exactly
 * like the real one is the thing most likely to mislead a review.
 *
 * What it does NOT do: it does not grant access to the slides. Their
 * copy comes from a route that checks entitlement on the server, so
 * audit mode cannot be used to read a course nobody paid for. The
 * flag is visible in the bundle and that is fine, because unlocking
 * navigation is all it can unlock.
 */
export const AUDIT = process.env.NEXT_PUBLIC_AUDIT === "1";
