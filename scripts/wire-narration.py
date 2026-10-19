"""Point a module's slides at their narration files.

The slides ship with `audio: { src: null }` placeholders, one per
slide, in slide order. This fills them in, and refuses rather than
guesses if the count does not match the files on disk: a module whose
placeholders and tracks disagree would otherwise end up silently
off by one, every slide playing the narration of its neighbour.

Usage: wire-narration.py <module-number>
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def main():
    n = sys.argv[1]
    src = ROOT / f"lib/content/module{n}.ts"
    audio = ROOT / f"public/audio/m{n}"

    text = src.read_text()
    holes = re.findall(r"audio: \{ src: null \}", text)
    tracks = sorted(
        audio.glob(f"m{n}-*.mp3"),
        key=lambda p: int(p.stem.split("-")[1]),
    )

    if len(holes) != len(tracks):
        sys.exit(
            f"{len(holes)} placeholders but {len(tracks)} tracks. "
            "Refusing: the pairing would be a guess."
        )

    missing = [t for t in tracks if not t.with_suffix(".words.json").exists()]
    if missing:
        sys.exit(f"no timings for: {', '.join(p.name for p in missing)}")

    i = 0

    def fill(_match):
        nonlocal i
        i += 1
        return f'audio: {{ src: "/audio/m{n}/m{n}-{i}.mp3" }}'

    src.write_text(re.sub(r"audio: \{ src: null \}", fill, text))
    print(f"module {n}: wired {i} slides")


if __name__ == "__main__":
    main()
