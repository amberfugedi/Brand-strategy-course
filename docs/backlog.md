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

## Other parked items

- **James's face on the m1-11 callout.** The chiropractor callout says
  "she" in the recording, so the persona card stays unattributed. If that
  line is ever re-recorded as "he", attach `who: "james"`.
- **The Module 2 audit tool is the densest slide in the course**
  (286 rendered words on m2/22). The words are the questions and answer
  options, so it is not decoration, but walking one foundation at a time
  instead of showing all seven would cut it hard. Not done because it
  changes the interaction, not the design. Offered, not taken up.
