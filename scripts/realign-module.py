"""Rebuild a whole module's word timings against the current script.

`align-narration.py` times one track against one paragraph. That only
works where the two line up, and in the intro and Module 1 they do
not: those were recorded before the script settled, so some tracks
carry two paragraphs. Matching each track to its best single
paragraph would quietly drop the merged one's words.

The method is one alignment across the whole module, not one per
track. Every track is recognised, the results are strung together in
order, and that single sequence is matched against the whole script.
Each script word then belongs to whichever track its matched word
came from, and the per-track spans fall out of that.

Doing it per track instead, sliding a window forward, is what the
first attempt did, and it failed in a way worth recording: a track
the recogniser heard poorly matched a stray word far ahead, claimed
123 script words for 42 heard, and every track after it was offset.
A single alignment is monotonic by construction, so no track can take
another's words.

Worth doing at all because the old timings came from a different
aligner and are looser (Module 1 drifts 0.16s at the median and 1.22s
at worst), and because they still hold words from a draft of the
script that was never spoken. Captions read from these files.

Usage: realign-module.py <intro|m1|m2|...> [--write]
"""

import difflib
import importlib.util
import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))
import narration  # noqa: E402

# align-narration.py is not an importable name, so load it by path and
# reuse its decode, recognise and align rather than restating them.
_spec = importlib.util.spec_from_file_location(
    "aligner", ROOT / "scripts/align-narration.py"
)
aligner = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(aligner)

# Recognising a module takes minutes, and the walk wants tuning, so
# the recogniser's output is cached. It depends only on the audio.
CACHE = Path(os.environ.get("REALIGN_CACHE", "/tmp/realign-cache"))

MIN_RATE = 0.80


def norm(w):
    return re.sub(r"[^a-z0-9]", "", w.lower())


def hear(track):
    """Recognised words for one track, cached, with its duration."""
    CACHE.mkdir(parents=True, exist_ok=True)
    cached = CACHE / f"{track.stem}.json"
    if cached.exists():
        d = json.loads(cached.read_text())
        return [(w, t) for w, t in d["heard"]], d["duration"]
    samples = aligner.decode(track)
    duration = len(samples) / 16000.0
    for gain in aligner.GAINS:
        heard = aligner.recognise(samples, gain=gain)
        if heard:
            break
    cached.write_text(json.dumps({"heard": heard, "duration": duration}))
    return heard, duration


def owners(script, heard_all, track_of, n_tracks):
    """Which track each script word belongs to.

    Anchored words take the track of the word they matched. The rest
    sit in the gaps and take the last decided track, so a word the
    recogniser missed stays with its neighbours. The running maximum
    keeps the result non-decreasing: a single stray match cannot send
    a later word back to an earlier track.
    """
    owner = [None] * len(script)
    sm = difflib.SequenceMatcher(
        a=[norm(w) for w in script],
        b=[norm(w) for w, _ in heard_all],
        autojunk=False,
    )
    for i, j, size in sm.get_matching_blocks():
        for k in range(size):
            owner[i + k] = track_of[j + k]

    out, cur = [], 0
    for o in owner:
        if o is not None:
            cur = max(cur, o)
        out.append(cur)
    # Monotonic, so each track owns one contiguous run.
    spans = [0] * n_tracks
    for o in out:
        spans[o] += 1
    return spans


def main():
    key = sys.argv[1]
    write = "--write" in sys.argv
    audio = ROOT / f"public/audio/{key}"

    script = []
    for para in narration.read()[key]:
        script += narration.spoken(para).split()

    tracks = sorted(
        audio.glob(f"{key}-*.mp3"), key=lambda p: int(p.stem.split("-")[1])
    )
    print(f"{key}: {len(script)} script words, {len(tracks)} tracks")

    heard_all, track_of, per_track = [], [], []
    for i, track in enumerate(tracks):
        heard, duration = hear(track)
        per_track.append((track, heard, duration))
        heard_all += heard
        track_of += [i] * len(heard)

    spans = owners(script, heard_all, track_of, len(tracks))

    pos, out, problems = 0, {}, []
    for (track, heard, duration), take in zip(per_track, spans):
        mine = script[pos : pos + take]
        if not mine:
            problems.append(f"{track.name}: no words assigned")
            pos += take
            continue
        timed, anchored = aligner.align(mine, heard, duration)
        rate = anchored / len(mine)
        out[track.name] = timed
        flag = "" if rate >= MIN_RATE else "   <-- LOW"
        print(
            f"  {track.name:14} {len(mine):4} words  "
            f"{anchored:4} anchored ({rate:.0%})  heard {len(heard):4}{flag}"
        )
        if rate < MIN_RATE:
            problems.append(f"{track.name}: only {rate:.0%} anchored")
        pos += take

    # The spans have to cover the script exactly. Short or over means
    # a track took the wrong run and every file after it is offset,
    # which is worse than leaving the old timings alone.
    if pos != len(script):
        problems.append(f"spans cover {pos} of {len(script)} words")

    if problems:
        print("\n" + "\n".join(problems))
        sys.exit("refusing to write")

    if not write:
        print(f"\n{len(out)} files would be rewritten. Pass --write.")
        return

    for name, timed in out.items():
        (audio / f"{Path(name).stem}.words.json").write_text(
            json.dumps({"words": timed})
        )
    print(f"\n{key}: rewrote {len(out)} timing files")


if __name__ == "__main__":
    main()
