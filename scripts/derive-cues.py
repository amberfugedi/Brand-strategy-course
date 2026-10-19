"""Derive narration cues for a module's slides.

`cues[k]` is the second at which beat k + 1 appears, so a beat lands
as the voice reaches it rather than on a reading-pace timer. Modules 3
and 4 got theirs by hand. This finds them from the word timings the
aligner already produced, by matching each beat's wording against the
narration and taking the clock reading where the voice arrives.

The match is a heuristic, so the script prints what it matched on and
how strongly, and marks anything weak. Read that output before
trusting a module's worth of cues: a confident wrong match is the
failure mode, and it looks exactly like a confident right one.

Beat 1 is pinned to 0.5s, which is what 22 of the 24 hand-authored
cue lists do. The slide needs something on it from the start.

Usage: derive-cues.py <module-number> <beats.json>
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

FIRST_CUE = 0.5
MIN_GAP = 1.0        # seconds between beats, so two never land together
LEAD = 0.25          # appear a beat before the voice says the words
WEAK = 1.5           # below this, say so rather than pretend
HEAD_BONUS = 50.0    # a named beat lands where it is named, outright

STOP = set(
    """a an and are as at be been but by can could did do does for from had has
    have he her him his how i if in into is it its me my no nor not of on or our
    out over own she so than that the their them then there these they this to
    too up was we were what when where which who why will with would you your
    it's don't isn't""".split()
)


def norm(w):
    return re.sub(r"[^a-z0-9]", "", w.lower())


def tokens(text):
    text = text.replace("’", "'")
    return [t for t in (norm(w) for w in re.split(r"\s+", text)) if t and t not in STOP]


def sentences(words):
    """Narration split at sentence ends, each with its start time.

    Beats are not scattered through the narration, they are what its
    sentences are about: "Ask is the second", "For a peer, keeping
    is". So the candidates are sentence starts, not every word.
    """
    out, start = [], 0
    for i, (w, _, _) in enumerate(words):
        if w.rstrip('"”’)').endswith((".", "!", "?")) or i == len(words) - 1:
            if i >= start:
                out.append((start, i))
            start = i + 1
    return [(a, b) for a, b in out if b >= a]


def derive(beats, words):
    """One cue per beat. words is [[word, start, end], ...].

    Beats are assigned to sentences in order, by dynamic programming
    over the whole slide rather than one beat at a time. Greedy
    matching drifts: an early beat takes a sentence a later one needed
    and everything after it slides. Solving the slide at once lets a
    poor local choice be rejected for a better whole.
    """
    heard = [norm(w) for w, _, _ in words]
    freq = {}
    for t in heard:
        freq[t] = freq.get(t, 0) + 1
    weight = lambda t: 1.0 / (1.0 + freq.get(t, 0))

    sents = sentences(words)
    n, m = len(beats), len(sents)
    if not m:
        return [FIRST_CUE] * n, [("none", FIRST_CUE, "no sentences")] * n

    # Where each beat's own name is spoken. A beat is introduced by a
    # short sentence naming it ("Marcus, the pressure washer.", "For a
    # peer, keeping is...") and then discussed in longer ones; on
    # overlap alone the long sentence wins and the cue lands eight to
    # fifteen seconds late.
    #
    # Only the FIRST naming counts. Scoring every mention equally sent
    # the table beats to the closing recap, which names all five
    # businesses again and matches more words: James landed 42 seconds
    # late and Sasha 29. A beat belongs where the voice turns to it,
    # not where it is mentioned last.
    named = {}
    for bi, beat in enumerate(beats):
        head = tokens(beat.get("head", ""))
        if not head:
            continue
        hits = [
            si for si, (a, b) in enumerate(sents)
            if all(t in set(heard[a : b + 1]) for t in head)
        ]
        if hits:
            named[bi] = (hits[0], set(hits[1:]))

    def score(bi, si):
        want = set(tokens(beats[bi]["head"] + " " + beats[bi]["body"]))
        if not want:
            return 0.0
        a = sents[si][0]
        b = sents[min(si + 1, m - 1)][1]
        base = sum(weight(t) for t in set(heard[a : b + 1]) & want)
        first, rest = named.get(bi, (None, set()))
        if si == first:
            base += HEAD_BONUS
        elif si in rest:
            base += HEAD_BONUS * 0.1
        return base

    NEG = float("-inf")
    best = [[NEG] * m for _ in range(n)]
    back = [[-1] * m for _ in range(n)]
    best[0][0] = score(0, 0)          # beat 1 opens the slide
    for bi in range(1, n):
        run = NEG
        arg = -1
        for si in range(bi, m):
            if best[bi - 1][si - 1] > run:
                run, arg = best[bi - 1][si - 1], si - 1
            if run > NEG:
                best[bi][si] = run + score(bi, si)
                back[bi][si] = arg

    end = max(range(m), key=lambda si: best[n - 1][si]) if n > 1 else 0
    picks = [0] * n
    picks[n - 1] = end
    for bi in range(n - 1, 0, -1):
        picks[bi - 1] = back[bi][picks[bi]]

    duration = words[-1][2] if words else 0.0
    cues, notes = [], []
    for bi, si in enumerate(picks):
        if bi == 0:
            cues.append(FIRST_CUE)
            notes.append(("pinned", FIRST_CUE, "start of slide"))
            continue
        a = sents[si][0]
        t = max(words[a][1] - LEAD, cues[-1] + MIN_GAP)
        t = min(t, max(duration - 0.5, cues[-1] + MIN_GAP))
        cues.append(round(t, 1))
        # A beat the narration names somewhere is placed reliably; one
        # it never names is a guess from word overlap, and those ran
        # five to twenty-five seconds late on the modules measured so
        # far. The distinction is worth more than a score, so it is
        # what gets reported.
        notes.append(
            ("named" if bi in named else "GUESS", cues[-1],
             " ".join(w for w, _, _ in words[a : a + 6])),
        )
    return cues, notes


def main():
    n, beatfile = sys.argv[1], sys.argv[2]
    spec = json.load(open(beatfile))
    audio = ROOT / f"public/audio/m{n}"
    out, weak = {}, []

    for s in spec:
        if not s["beats"]:
            continue
        wf = audio / f"m{n}-{s['slide']}.words.json"
        if not wf.exists():
            sys.exit(f"no timings for slide {s['slide']}")
        words = json.load(open(wf))["words"]
        cues, notes = derive(s["beats"], words)
        out[s["slide"]] = cues

        print(f"\nslide {s['slide']} ({s['kind']}, {len(cues)} beats) -> {cues}")
        texts = [(b["head"] + " " + b["body"]).strip() for b in s["beats"]]
        for (kind, t, phrase), beat in zip(notes, texts):
            flag = ""
            if kind == "GUESS":
                flag = "  <-- CHECK: never named in the narration"
                weak.append((s["slide"], beat[:40]))
            print(f"  {t:7.1f}  [{kind:>6}] {beat[:46]:<46} | {phrase[:44]}{flag}")

    print(f"\n{len(out)} slides cued, {len(weak)} beats to check by ear")
    for s, b in weak:
        print(f"  slide {s}: {b}")
    json.dump(out, open(ROOT / f"scripts/.cues-m{n}.json", "w"))


if __name__ == "__main__":
    main()
