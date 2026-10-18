/**
 * What the plan says about each foundation, beyond what the buyer
 * answered.
 *
 * The export carried their decisions and none of the teaching, so a
 * sheet reread six months later was a record of what they typed with
 * no reminder of what any of it meant. These lines are what the
 * document says on the course's behalf.
 *
 * DRAFTED, NOT AUTHORED. The course defines touchpoints, proof
 * sources and kinds of authority, but never states the seven
 * foundations in a line each, so these were written from the module
 * teaching rather than lifted from it. They are in the right register
 * and they are not Amber's sentences. Read them before this ships.
 *
 * `standard` is the bar the foundation is built toward, which is the
 * half a plan needs most: a decision without a standard is a note.
 */
export interface FoundationNote {
  /** One line: what this foundation is. */
  what: string;
  /** One line: what good looks like, so progress is checkable. */
  standard: string;
  /** The course's own estimate, from Module 2 where it gives one. */
  effort?: string;
}

/**
 * The three layers are the course's spine and the export did not
 * mention them once. Stated here so every drafted line sits in one
 * reviewable file.
 */
export const LAYER_FRAME =
  "Each foundation below belongs to one of three layers: get found, get chosen, be remembered. The order you build them in is yours, and it is on this page.";

export const FOUNDATION_NOTES: Record<string, FoundationNote> = {
  positioning: {
    what: "Who you serve, what the work changes for them, and what makes you the one to do it.",
    standard:
      "Two competitors could not write the same sentence, and a friend could read it and know what you do.",
  },
  getFound: {
    what: "The places a prospect can come across you when they go looking, and what each one answers.",
    standard:
      "Your primary touchpoint is complete and current, and the rest point back to it.",
    effort: "A website rebuild, six to eight weeks. A Google Business Profile, two to four.",
  },
  earnedProof: {
    what: "Evidence from other people that the work is what you say it is.",
    standard:
      "Proof a prospect can verify without taking your word for it, current enough to still answer the doubt.",
  },
  referrals: {
    what: "The loop that turns finished work into the next conversation: earn it, ask for it, keep it alive.",
    standard:
      "Every stage holds, and the referrer can say in one sentence who you are right for.",
  },
  brandAwareness: {
    what: "Being known before you are needed, in a place your clients already gather.",
    standard:
      "One place, a rhythm you can hold through a bad week, and it still sounds like you.",
  },
  ownedAudience: {
    what: "A direct line to people who already know you, on a channel nobody can take away.",
    standard:
      "A reason to join that is worth joining for, and a cadence you keep when you are busy.",
    effort: "An email list with a real opt-in, six to twelve weeks.",
  },
  authority: {
    what: "Being the person whose judgment, craft or track record others rely on.",
    standard:
      "The thing you are trusted for is visible to someone who has never met you.",
  },
};
