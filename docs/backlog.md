# Backlog

Parked work, with enough context to pick up cold.

## Captions for Modules 3 and 4 (and 5 to 8 when recorded)

**What's missing.** Every track in `public/audio/m1` and `m2` has a
`.words.json` beside it. Modules 3 and 4 have none, so the CC button in
the player has nothing to display on the new audio. Everything else
about the narration works: the tracks play, the cues drive the reveals,
and the callouts fire.

**The format.** `CaptionBar` fetches the mp3 path with `.mp3` swapped
for `.words.json` and expects `{"words": [[word, start, end], ...]}`
with times in seconds:

```json
{"words": [["Module", 0.35, 0.75], ["1.", 0.75, 1.16], ["Positioning.", 1.33, 2.01]]}
```

A missing file fails quietly, which is why nothing looks broken today.

**How m1 and m2 were built.** Forced alignment with aeneas: the verbatim
script text (one word per line) plus a 16k mono wav, `PYTHONIOENCODING=UTF-8`,
against the patched `wavfile.py`. Alignment needs the *known text*; it
matches audio to words you supply rather than guessing them.

**Why it's parked.** The real blocker is the script text, not tooling.
There is no Module 3 or 4 script in the repo, and aeneas needs it
verbatim to align. Two paths:

1. **Preferred.** Amber supplies the recording scripts for 3 and 4, then
   run the same aeneas pipeline as m1/m2. Accurate captions.
2. **Fallback.** Transcribe with an ASR model and use its output as both
   text and timing. `faster-whisper` is installed but its model download
   hits a 403 at the proxy (`huggingface.co` is not on the allowlist), so
   this needs either an allowlist change or a model cached another way.
   `pocketsphinx` runs offline but mis-hears enough words that its
   transcript is unusable as on-screen caption text. It was accurate
   enough for *timing* work (placing cues and callouts), not for words.

Do this before recording 5 through 8 if the captions should ship
together; the same pipeline covers all of them.

## Other parked items

- **James's face on the m1-11 callout.** The chiropractor callout says
  "she" in the recording, so the persona card stays unattributed. If that
  line is ever re-recorded as "he", attach `who: "james"`.
- **The Module 2 audit tool is the densest slide in the course**
  (286 rendered words on m2/22). The words are the questions and answer
  options, so it is not decoration, but walking one foundation at a time
  instead of showing all seven would cut it hard. Not done because it
  changes the interaction, not the design. Offered, not taken up.
