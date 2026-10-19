"""Write derived cues into a module's slides.

Takes the JSON `derive-cues.py` leaves behind and sets `cues` on the
slides that have beats. Overrides are hand-measured corrections for
beats the deriver places wrongly; they win, and each one should say
why in the commit that adds it.

Usage: apply-cues.py <module-number> [slide:index=seconds ...]
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def main():
    n = sys.argv[1]
    cues = {int(k): v for k, v in json.load(open(ROOT / f"scripts/.cues-m{n}.json")).items()}

    for arg in sys.argv[2:]:
        where, secs = arg.split("=")
        slide, idx = (int(x) for x in where.split(":"))
        was = cues[slide][idx]
        cues[slide][idx] = float(secs)
        print(f"  override slide {slide} beat {idx + 1}: {was} -> {secs}")

    src = ROOT / f"lib/content/module{n}.ts"
    text = src.read_text()
    written = 0

    for slide, values in sorted(cues.items()):
        old = f'audio: {{ src: "/audio/m{n}/m{n}-{slide}.mp3" }}'
        new = (
            f'audio: {{ src: "/audio/m{n}/m{n}-{slide}.mp3", '
            f'cues: [{", ".join(str(v) for v in values)}] }}'
        )
        if old not in text:
            sys.exit(f"slide {slide}: no plain audio line to replace")
        text = text.replace(old, new, 1)
        written += 1

    src.write_text(text)
    print(f"module {n}: cues on {written} slides")


if __name__ == "__main__":
    main()
