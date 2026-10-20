"""Read the narration script, including its beat markers.

One source for three jobs that have to agree exactly: the text sent to
the generator, the text the aligner lines the audio up against, and
the beat boundaries the cues are read from. When those drifted apart
they produced silent, hard-to-see errors, so they come from one file.

A `||` inside a paragraph marks where the next beat begins. A slide
with n beats carries n-1 of them; the first beat always starts at the
first word. The markers are editorial, not spoken: every consumer
strips them, so the generator and the aligner never see them.

Why they exist at all: the narration is written one paragraph per
slide, so nothing in it says which words belong to which beat. For a
beat the voice names ("Marcus, the pressure washer") that boundary can
be recovered from the text. For one it never names, where the slide
says "How it fails" and the voice says "And the failure mode", it
cannot, and guessing put cues ten to twenty-five seconds out. A marker
records the decision once instead.
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
NARRATION = ROOT / "docs/narration.md"
MARKER = "||"
CUT = "[cut]"


def read(path=NARRATION, include_cut=False):
    """{module key: [slide text with markers, ...]}, in slide order.

    A paragraph starting `[cut]` was written and deliberately not
    recorded, so it is left out by default. Every consumer here
    matches the script against audio that exists, and a paragraph
    with no audio shifts every index after it. Module 2's paragraph
    33 is the only one, and counting it made the module read as
    though it had lost 222 words of narration.

    Pass include_cut to read the script as written, cuts and all.
    """
    out, key = {}, None
    for line in Path(path).read_text().splitlines():
        head = re.match(r"^## (Course Intro|Module (\d+))", line)
        if head:
            key = "intro" if head.group(2) is None else f"m{head.group(2)}"
            out[key] = []
            continue
        para = re.match(r"^\*\*\d+\.\*\* (.+)$", line)
        if para and key:
            text = para.group(1).strip()
            if text.startswith(CUT) and not include_cut:
                continue
            out[key].append(text)
    return out


def spoken(text):
    """The paragraph as the voice says it, markers removed."""
    return re.sub(r"\s*\|\|\s*", " ", text).strip()


def beat_starts(text):
    """Word index where each beat begins. Always starts with 0.

    Indices are into `spoken(text).split()`, which is exactly the word
    list the aligner timed, so a cue is `words[index][1]` and nothing
    has to be matched.
    """
    starts, count = [0], 0
    for chunk in text.split(MARKER):
        n = len(chunk.split())
        if n:
            count += n
            starts.append(count)
    return starts[:-1] if len(starts) > 1 else [0]


def marked(text):
    """Whether this slide's boundaries have been recorded."""
    return MARKER in text
