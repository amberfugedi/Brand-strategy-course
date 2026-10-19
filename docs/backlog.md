# Backlog

Parked work, with enough context to pick up cold.

## Captions

Done for Modules 3 and 4, from the recording script plus a forced
alignment of a different kind. Worth writing down, because the method
is now the one to use for Modules 5 to 8.

**How.** The model hosts the usual tools pull from are blocked by the
proxy (Hugging Face, Whisper's own CDN, Vosk's) but GitHub release
assets are reachable, so the recogniser is `sherpa-onnx` with the
zipformer English model from `k2-fsa/sherpa-onnx`. It hears the audio
well enough to place words in time, and mis-hears a few; the script has
the words exactly and no times. So: recognise the track, line the two
word sequences up with difflib, and give each script word the clock
reading of the recognised word it matched. Anything the recogniser
dropped is interpolated across the gap it sits in. On these tracks 99%
of words anchor on a real timestamp. `/tmp/asr/align.py` in the session
that built it; the whole thing is about sixty lines.

**Modules 5 to 8 need only the audio.** The script document carries
their narration, one paragraph per slide. Counted off the document
itself rather than from memory, Modules 5, 6 and 7 match their slides
exactly (21, 20, 21). Module 8 has 21 paragraphs against 20 slides,
not the 22 recorded here before.

**Module 8's extra paragraph is a duplicate, not a missing slide.**
Paragraphs 17 and 18 both close the teaching and hand over to the
plan, and slide 17 (`frame`, "Seven foundations, one plan") is the one
surface they share. Paragraph 17 is the short version; paragraph 18
says the same thing and then does the setup the slide needs, so
dropping 17 resolves the count and loses nothing. The same repetition
is what closed Module 2 before it was cut.

**The older captions drift.** Modules 1 and 2 and the intro were
aligned with aeneas, and where those timings disagree with the new
method they disagree by up to two seconds. Cutting the audio at both
predicted times and asking the recogniser which one actually contains
the word: the new timings hit 8 of 10, the existing ones 0 of 10. So
the shipped captions on those modules lag or lead the voice in places.
Module 2 is 36 paragraphs against 35 slides, so it is one short of the
straight regeneration claimed here before. Module 1 (36 paragraphs, 32
slides) and the intro (9 and 4) need a mapping decision first.

**The audio is generated, not recorded**, with the ElevenLabs voice
"Amber v2" (`yrZkbGvXWUQthvPeZshz`), for every module shipped so far.
That makes the alignment step above optional for anything generated
from here: the generator can return word timings directly, which is
where `.words.json` would otherwise have to be inferred from. The
script's own note says to render per slide rather than per module,
since v2 drifts when one generation holds many breaks, and per slide
is what the player wants anyway.

## Signing the audio

Parked deliberately, with the slide copy already dealt with. The copy
now comes from `/api/slides/<module>`, which checks entitlement, and
`registry.ts` is `server-only` so it cannot drift back into the bundle.
The mp3s did not get the same treatment: they sit in `public/audio/`
at paths anyone can guess from a slide number, so a free account, or
no account, can still download every track.

**The size.** 119 files, 70 MB, for the intro and Modules 1 to 4. The
four unrecorded modules take it to roughly 130 MB. The `.words.json`
caption files sit beside them and carry the full narration text, so
they need whatever treatment the audio gets.

**Why it stopped here.** The obvious move is a private Supabase Storage
bucket with signed URLs, and the egress is the thing to decide first.
The free tier allows 5 GB a month, which is about 38 complete
listen-throughs of a 130 MB course. Pro is $25 a month for 250 GB,
about 1,900. Serving from Netlify instead is 100 GB free but is exactly
what leaves the files public, so it is not an option, it is the status
quo. The call is Pro, or accept that the tracks are copyable while the
copy is not, which is defensible: the audio is the least useful half to
take without the slides.

**A session agent cannot finish this alone.** The sandbox gateway
refuses `*.supabase.co` outright, and the Supabase MCP hands out
publishable keys only, never the service role key. So the upload and
the end-to-end check need a human at a terminal. The code around it,
the signing endpoint and the player change, can be written and reviewed
first.

## Animations waiting on audio

Five narration-timed illustrations exist (see brand-system section 6).
Two more are worth building, and both want the recording first so the
motion lands on the right word rather than on a guess:

- **The referral loop, Module 5.** Earn, ask, tend as a cycle with a
  visible leak at the weak stage. It would pay straight into the
  referral tool at m5/20, which asks the buyer to name that stage.
- ~~**m5/10's curve needs real timings.**~~ Done. It draws from
  10.4s over 9, which is the sentence it illustrates, checked in the
  browser: 0% at 5s, 34% at 13s, complete by 20s.

The same applies to anything built for Modules 6 to 8.

## Cues

`scripts/derive-cues.py` finds them from the word timings rather than
by hand. Beats are assigned to narration sentences by dynamic
programming over the whole slide, because greedy matching drifts: one
beat takes a sentence a later one needed and everything after slides.

Two things were learned the hard way and are worth keeping. Scoring a
beat by how many of its words a passage contains puts every cue eight
to fifteen seconds late, because a beat's words are densest in the
middle of the passage discussing it, not where the voice turns to it.
And the fix is the head bonus: a beat is introduced by a short
sentence naming it ("Marcus, the pressure washer.", "For a peer,
keeping is") and scoring that name separately is what moves the cue to
the turn. With it, 14 of 16 Module 5 cues landed within 2.2s of the
measured truth; without it, 5 were 8 to 15 seconds out.

The two it still misses are beats with no name to anchor on, and they
were hand-measured. Expect the same on any module: run it, check the
output against the narration, and pass corrections to
`scripts/apply-cues.py` as `slide:index=seconds`.

## Modules 4, 5 and 6 are the same deck

Writing each module's slide kinds as a letter, in order (H hero,
R frame, F framework, C cards, D detail, P principle, T table,
M compare, p prose):

    m3  H R F R C · D D D D D P R C M P R C C T F P P M P · p
    m4  H R F R C D D D P P R T P P M P F P · p
    m5  H R F R C D D D P P R T P P M P F F P · p
    m6  H R F R C D D D P P R T P P M P F P · p

Modules 4 and 6 are identical in shape for their whole length, and 5
differs by one slide. A learner going 4 to 5 to 6 meets the same
twelve openings in the same order, three times, with only the words
changed. Module 3 is the same template stretched, and carries five
consecutive detail slides, which is five identical three-card layouts
in a row.

Nothing here is a bug and no individual slide is badly made. It is
that the deck was templated per module and the template never varied,
so the second and third pass through it feel like rereading.

Fixing it is editorial rather than visual: change which layout carries
which beat in some of the modules, break the detail runs with a
different kind in the middle, or let a module open somewhere other
than hero into frame. Worth doing before more courses are built on
the same template.

## Slide tags

The top-right tag is 61 distinct labels across 194 slides, and the
distribution is lopsided: THE TAKEAWAY 44, FRAMEWORK 41, CALIBRATION
31, then a tail of one-offs including QUESTION 01 and QUESTION 02 used
once each. Three labels cover 60% of the course and the rest carry
almost no signal, so a reader learns nothing from the tag after the
first module.

Worth either collapsing to a small fixed set that means something, or
dropping the tag from slides where it only fills the corner. Not done
because the tags are copy, and which distinctions are worth keeping is
a teaching judgment rather than a design one.

## Other parked items

- **James's face on the m1-11 callout.** The chiropractor callout says
  "she" in the recording, so the persona card stays unattributed. If that
  line is ever re-recorded as "he", attach `who: "james"`.
- **A callout on m1/30 repeats its own heading.** "Two competitors
  couldn't write the same sentence." is both the slide's heading and a
  floating callout, which section 7 forbids. It cannot become a spoken
  mark either, since marks never underline a heading. It needs the
  callout deleted or reworded into something the voice adds.
- **The Module 2 audit tool is the densest slide in the course**
  (286 rendered words on m2/22). The words are the questions and answer
  options, so it is not decoration, but walking one foundation at a time
  instead of showing all seven would cut it hard. Not done because it
  changes the interaction, not the design. Offered, not taken up.
