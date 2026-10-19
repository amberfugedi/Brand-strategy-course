"""Record beat boundaries in the narration from verified cues.

Modules 5 and 6 had their cues measured against the audio and
corrected by hand. That work is the boundary, so this writes it back
into the script as `||` markers rather than leaving it in a generated
file that the next re-render would overwrite.

After this, the module's cues are a lookup rather than a guess, and
editing a sentence regenerates them correctly on its own.

Usage: mark-beats.py <module-number> [--write]
"""

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import narration  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent


def cues_in(n):
    """{slide: [cue, ...]} as the module file currently has them.

    An audio block may be written on one line or spread over several,
    so each track is found first and its cues looked for in the span
    before the next track rather than on the same line. Assuming one
    line silently found 4 of Module 4's 9 cued slides.
    """
    src = (ROOT / f"lib/content/module{n}.ts").read_text()
    hits = list(re.finditer(rf'src: "/audio/m{n}/m{n}-(\d+)\.mp3"', src))
    found = {}
    for k, m in enumerate(hits):
        end = hits[k + 1].start() if k + 1 < len(hits) else len(src)
        block = src[m.end() : end]
        c = re.search(r"cues: \[([^\]]+)\]", block)
        if c:
            found[int(m.group(1))] = [float(x) for x in c.group(1).split(",")]
    return found


def main():
    n = sys.argv[1]
    write = "--write" in sys.argv
    paras = narration.read()[f"m{n}"]
    cues = cues_in(n)
    edits, problems = {}, []

    for slide, values in sorted(cues.items()):
        text = paras[slide - 1]
        words = narration.spoken(text).split()
        timed = json.loads(
            (ROOT / f"public/audio/m{n}/m{n}-{slide}.words.json").read_text()
        )["words"]
        if len(words) != len(timed):
            problems.append(f"slide {slide}: {len(words)} words, {len(timed)} timed")
            continue

        # The cue sits a quarter-second before its word, so look just
        # past it for the first word that starts at or after.
        idx = []
        for c in values[1:]:
            hit = next((i for i, w in enumerate(timed) if w[1] >= c - 0.05), None)
            if hit is None or hit == 0:
                problems.append(f"slide {slide}: no word at {c}s")
                break
            idx.append(hit)
        else:
            if sorted(set(idx)) != idx:
                problems.append(f"slide {slide}: boundaries not in order: {idx}")
                continue
            out, prev = [], 0
            for i in idx:
                out.append(" ".join(words[prev:i]))
                prev = i
            out.append(" ".join(words[prev:]))
            edits[slide] = f" {narration.MARKER} ".join(out)
            print(f"  slide {slide}: {len(idx)} boundaries at words {idx}")

    if problems:
        print("\n".join(problems))
        sys.exit("refusing to write")

    if not write:
        print(f"\n{len(edits)} slides would be marked. Pass --write.")
        return

    path = narration.NARRATION
    lines = path.read_text().splitlines()
    key, i = None, 0
    for ln, line in enumerate(lines):
        head = re.match(r"^## (Course Intro|Module (\d+))", line)
        if head:
            key = "intro" if head.group(2) is None else f"m{head.group(2)}"
            i = 0
            continue
        para = re.match(r"^(\*\*\d+\.\*\* )(.+)$", line)
        if para and key:
            i += 1
            if key == f"m{n}" and i in edits:
                lines[ln] = para.group(1) + edits[i]
    path.write_text("\n".join(lines) + "\n")
    print(f"\nmodule {n}: marked {len(edits)} slides in {path.name}")


if __name__ == "__main__":
    main()
