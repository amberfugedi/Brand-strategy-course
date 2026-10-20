"""Attach callouts to a module's slides, timed from the narration.

A callout surfaces a line the voice says and the slide does not, for
the seconds it is being said. The wording is the narration's, so the
only real inputs are which lines are worth showing; the window is
arithmetic, read off the same word timings the captions use.

Which is the point of doing it this way. Timings typed by hand drift
from the audio and nothing complains: the note simply opens over the
wrong sentence. Here the phrase has to appear in that slide's
narration word for word or the script refuses, and `at` and `until`
come from the first and last word of the match.

The spec is {slide number: [phrase, ...]}, phrases verbatim from
docs/narration.md. A phrase may instead be {"text": ..., "font": ...}
to override the length rule: a short line is set in the serif by
default, which reads as a remark, and an instruction wants the body
font however short it is.

Usage: place-callouts.py <module-number> <spec.json> [--write]
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))
import narration  # noqa: E402

# A beat of air either side, so the note is not racing the voice.
LEAD = 0.2
TAIL = 0.5


def norm(w):
    return re.sub(r"[^a-z0-9]", "", w.lower())


def window(phrase, words):
    """(at, until) for a phrase, or None if it is not said verbatim."""
    want = [norm(w) for w in phrase.split() if norm(w)]
    have = [norm(w[0]) for w in words]
    for i in range(len(have) - len(want) + 1):
        if have[i : i + len(want)] == want:
            at = max(0.0, words[i][1] - LEAD)
            until = words[i + len(want) - 1][2] + TAIL
            return round(at, 1), round(until, 1)
    return None


def main():
    n, specfile = sys.argv[1], sys.argv[2]
    write = "--write" in sys.argv
    spec = {int(k): v for k, v in json.load(open(specfile)).items()}
    paras = narration.read()[f"m{n}"]

    out, problems = {}, []
    for slide, phrases in sorted(spec.items()):
        wf = ROOT / f"public/audio/m{n}/m{n}-{slide}.words.json"
        if not wf.exists():
            problems.append(f"slide {slide}: no timings")
            continue
        words = json.load(open(wf))["words"]
        made = []
        for entry in phrases:
            phrase = entry if isinstance(entry, str) else entry["text"]
            w = window(phrase, words)
            if not w:
                problems.append(f"slide {slide}: not said verbatim: {phrase[:60]}")
                continue
            c = {"text": phrase, "at": w[0], "until": w[1]}
            if not isinstance(entry, str) and entry.get("font"):
                c["font"] = entry["font"]
            made.append(c)
        # Two notes in the same seconds would stack in one slot, and
        # the second would be the only one seen.
        for a, b in zip(made, made[1:]):
            if b["at"] < a["until"]:
                problems.append(
                    f"slide {slide}: windows overlap, "
                    f"{a['until']} then {b['at']}"
                )
        if made:
            out[slide] = made
            for c in made:
                print(f"  slide {slide:2}  {c['at']:6.1f} - {c['until']:5.1f}  {c['text'][:62]}")

    if problems:
        print("\n" + "\n".join(problems))
        sys.exit("refusing to write")

    if not write:
        total = sum(len(v) for v in out.values())
        print(f"\n{total} callouts on {len(out)} slides. Pass --write.")
        return

    src = ROOT / f"lib/content/module{n}.ts"
    text = src.read_text()
    for slide, made in sorted(out.items()):
        literal = f'src: "/audio/m{n}/m{n}-{slide}.mp3"'
        at = text.find(literal)
        if at < 0:
            sys.exit(f"slide {slide}: no track to attach callouts to")
        nxt = text.find('src: "/audio/', at + len(literal))
        end = len(text) if nxt < 0 else nxt
        block = text[at:end]
        if "callouts:" in block:
            sys.exit(f"slide {slide}: already has callouts, not overwriting")
        lines = ",\n".join(
            f'        {{ text: {json.dumps(c["text"], ensure_ascii=False)}, '
            f'at: {c["at"]}, until: {c["until"]}'
            + (f', font: "{c["font"]}"' if c.get("font") else "")
            + " }"
            for c in made
        )
        block = block.replace(
            literal, f"{literal},\n      callouts: [\n{lines},\n      ]", 1
        )
        text = text[:at] + block + text[end:]
    src.write_text(text)
    print(f"\nmodule {n}: callouts on {len(out)} slides")


if __name__ == "__main__":
    main()
