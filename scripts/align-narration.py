"""Word timings for a narration track.

The generator returns audio and no timings, and the player needs
`.words.json`: every word of the script with a clock reading. So the
timings are recovered rather than reported.

The method, from the pass that did Modules 3 and 4: recognise the
audio with sherpa-onnx, which hears it well enough to place words in
time but mis-hears some of them, then line its word sequence up
against the script, which has the words exactly and no times. Each
script word takes the clock reading of the recognised word it matched.
Words the recogniser dropped are interpolated across the gap they sit
in, so every word gets a time and the ones that are guesses are
counted rather than hidden.

Validated against a track whose timings already shipped: rebuilding
`m4-1` from its audio reproduces the shipped `.words.json` with a
median difference of 0.000s and every word inside 0.25s.

The recogniser is sherpa-onnx with the zipformer English model, which
is what the proxy here can actually reach:

    pip install sherpa-onnx numpy
    curl -L -O https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-zipformer-en-2023-06-26.tar.bz2
    tar xf sherpa-onnx-zipformer-en-2023-06-26.tar.bz2

Usage: align-narration.py <audio> <text-file> <out.json>

Needs the interpreter the packages went to, which is not necessarily
the one `python3` resolves to.
"""

import json
import os
import re
import subprocess
import sys
import tempfile
from difflib import SequenceMatcher
from pathlib import Path

MODEL = Path(
    os.environ.get("ASR_MODEL")
    or Path(__file__).parent / "sherpa-onnx-zipformer-en-2023-06-26"
)


def decode(path):
    """16 kHz mono float samples, which is what the recogniser wants."""
    import numpy as np

    with tempfile.NamedTemporaryFile(suffix=".wav") as tmp:
        subprocess.run(
            ["ffmpeg", "-v", "error", "-y", "-i", str(path),
             "-ar", "16000", "-ac", "1", "-f", "wav", tmp.name],
            check=True,
        )
        import wave

        with wave.open(tmp.name) as w:
            raw = w.readframes(w.getnframes())
    return np.frombuffer(raw, dtype="<i2").astype("float32") / 32768.0


GAINS = (1.0, 0.5, 0.25)


def recognise(samples, model=MODEL, gain=1.0):
    """Recognised words with start times, merged up from BPE pieces."""
    import numpy as np
    import sherpa_onnx

    rec = sherpa_onnx.OfflineRecognizer.from_transducer(
        encoder=str(model / "encoder-epoch-99-avg-1.int8.onnx"),
        decoder=str(model / "decoder-epoch-99-avg-1.onnx"),
        joiner=str(model / "joiner-epoch-99-avg-1.int8.onnx"),
        tokens=str(model / "tokens.txt"),
        num_threads=4,
    )
    stream = rec.create_stream()
    if gain != 1.0:
        samples = np.ascontiguousarray(samples * gain, dtype="float32")
    stream.accept_waveform(16000, samples)
    rec.decode_stream(stream)
    res = stream.result

    # A word opens on a piece carrying the boundary mark: this model
    # uses a leading space, others use U+2581. Both, so a model swap
    # does not silently yield one enormous word.
    words, cur, start = [], "", None
    for tok, t in zip(res.tokens, res.timestamps):
        if tok[:1] in (" ", "▁"):
            if cur:
                words.append((cur, start))
            cur, start = tok[1:], t
        else:
            cur += tok
    if cur:
        words.append((cur, start))
    return words


def norm(w):
    return re.sub(r"[^a-z0-9]", "", w.lower())


def align(script_words, heard, duration):
    """Give every script word a time, and say how many are guesses."""
    a = [norm(w) for w in script_words]
    b = [norm(w) for w, _ in heard]

    anchored = {}
    for op, i1, i2, j1, j2 in SequenceMatcher(a=a, b=b, autojunk=False).get_opcodes():
        if op != "equal":
            continue
        for k in range(i2 - i1):
            anchored[i1 + k] = heard[j1 + k][1]

    n = len(script_words)
    times = [None] * n
    for i, t in anchored.items():
        times[i] = t

    # Ends are pinned so interpolation has something to run between.
    if times[0] is None:
        times[0] = 0.0
    if times[-1] is None:
        times[-1] = max(duration - 0.25, times[0])

    known = [i for i, t in enumerate(times) if t is not None]
    for lo, hi in zip(known, known[1:]):
        if hi - lo < 2:
            continue
        span = times[hi] - times[lo]
        for k in range(lo + 1, hi):
            times[k] = times[lo] + span * (k - lo) / (hi - lo)

    out = []
    for i, w in enumerate(script_words):
        end = times[i + 1] if i + 1 < n else duration
        out.append([w, round(times[i], 2), round(min(end, duration), 2)])
    return out, len(anchored)


def main():
    audio, textfile, out = sys.argv[1], sys.argv[2], sys.argv[3]
    text = Path(textfile).read_text().strip()
    script_words = text.split()

    samples = decode(audio)
    duration = len(samples) / 16000.0

    # The int8 encoder sometimes returns nothing at all on a loud
    # track, and the threshold is per-track: m7-9 came back empty at
    # full gain and transcribed perfectly at 0.55, while m7-15, which
    # is louder still, was fine at 1.0. Normalising every track to a
    # common level does not fix it, so the retry is a ladder rather
    # than a target. An empty result is the only trigger: a track that
    # recognises at all is left at the gain it recognised on.
    for gain in GAINS:
        heard = recognise(samples, gain=gain)
        if heard:
            break
    else:
        gain = GAINS[-1]
    words, anchored = align(script_words, heard, duration)

    Path(out).write_text(json.dumps({"words": words}))
    pct = 100.0 * anchored / len(script_words)
    quieter = "" if gain == 1.0 else f", at gain {gain}"
    print(f"{Path(audio).name}: {len(script_words)} words, "
          f"{anchored} anchored ({pct:.0f}%), {len(heard)} heard, "
          f"{duration:.2f}s{quieter}")
    if pct < 85:
        print("  LOW ANCHOR RATE, check this one", file=sys.stderr)


if __name__ == "__main__":
    main()
