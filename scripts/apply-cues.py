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

    # An audio block may be one line or several, and may already carry
    # cues from an earlier pass, so each track is located first and
    # edited within its own span.
    for slide, values in sorted(cues.items()):
        literal = f'src: "/audio/m{n}/m{n}-{slide}.mp3"'
        at = text.find(literal)
        if at < 0:
            sys.exit(f"slide {slide}: no track to attach cues to")
        nxt = text.find('src: "/audio/', at + len(literal))
        end = len(text) if nxt < 0 else nxt
        block = text[at : end]
        listed = f'[{", ".join(str(v) for v in values)}]'
        if re.search(r"cues: \[[^\]]*\]", block):
            block = re.sub(r"cues: \[[^\]]*\]", f"cues: {listed}", block, count=1)
        else:
            block = block.replace(literal, f"{literal}, cues: {listed}", 1)
        text = text[:at] + block + text[end:]
        written += 1

    src.write_text(text)
    print(f"module {n}: cues on {written} slides")


if __name__ == "__main__":
    main()
