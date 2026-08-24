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

**Modules 5 to 8 need only the audio.** The script document already
carries their narration, one paragraph per slide, and the paragraph
counts match the slide counts exactly (21, 20, 21, and 22 against 20
for Module 8, which needs a look).

**The older captions drift.** Modules 1 and 2 and the intro were
aligned with aeneas, and where those timings disagree with the new
method they disagree by up to two seconds. Cutting the audio at both
predicted times and asking the recogniser which one actually contains
the word: the new timings hit 8 of 10, the existing ones 0 of 10. So
the shipped captions on those modules lag or lead the voice in places.
Module 2 would be a straight regeneration, its paragraphs matching its
slides 1:1. Module 1 (36 paragraphs, 32 slides) and the intro (9 and 4)
need a mapping decision first.

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

## Other parked items

- **James's face on the m1-11 callout.** The chiropractor callout says
  "she" in the recording, so the persona card stays unattributed. If that
  line is ever re-recorded as "he", attach `who: "james"`.
- **The Module 2 audit tool is the densest slide in the course**
  (286 rendered words on m2/22). The words are the questions and answer
  options, so it is not decoration, but walking one foundation at a time
  instead of showing all seven would cut it hard. Not done because it
  changes the interaction, not the design. Offered, not taken up.
