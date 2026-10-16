"""The rules from docs/brand-system.md that a machine can check.

Companion to verify-marks.py. That one guards the spoken marks; this
one guards the voice rules in section 9, the emphasis rule in section
5, and the callout rule in section 7. Pure stdlib, no browser: the
rules that need a rendered page (type floors, tap targets, colour)
live in scripts/audit-render.js, which needs a running server.

Section 1 says: where the spec is silent, do not invent a rule, flag
it. So this script only checks what the document actually states, and
anything it lets through is either allowed or not yet ruled on.
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "lib/content"
FILES = ["intro.ts"] + [f"module{n}.ts" for n in range(1, 9)]

HEAD = ("heading", "headline")
# Quoted speech: the course puts real reviews and real client lines on
# slides, and those are allowed to sound like people rather than like
# the course voice.
QUOTED = ("quote",)

AUDIO = re.compile(r"    audio: \{.*?\n    \},", re.S)
AUDIO1 = re.compile(r"    audio: \{[^\n]*\},")
FIELD = re.compile(r'(\w+): "((?:[^"\\]|\\.)*)"')

errors, warnings = [], []
seen_heads = {}

def plain(t):
    return t.replace("*", "")

for fn in FILES:
    src = (CONTENT / fn).read_text()
    mod = fn.replace(".ts", "")
    parts = re.split(r"\n  // (\S+) · ", src)[1:]
    for num, full in zip(parts[0::2], parts[1::2]):
        where = f"{mod}/{num}"
        m = AUDIO.search(full) or AUDIO1.search(full)
        audio = m.group(0) if m else ""
        body = full.replace(audio, "") if audio else full
        fields = [(x.group(1), x.group(2)) for x in FIELD.finditer(body)]

        for k, v in fields:
            # Section 9: no em dashes, a period and a new sentence instead.
            if "—" in v or "–" in v:
                errors.append(f"{where} {k}: em or en dash in {v[:60]!r}")
            # Section 9: no exclamation marks, outside quoted speech.
            if "!" in v and k not in QUOTED:
                errors.append(f"{where} {k}: exclamation mark in {v[:60]!r}")
            # Curly apostrophes, ruled by the 2026-10 audit.
            if re.search(r"[A-Za-z]'[A-Za-z]", v):
                errors.append(f"{where} {k}: straight apostrophe in {v[:60]!r}")

        # Sections 5 and 9: one emphasis phrase per headline.
        for k, v in fields:
            if k not in HEAD:
                continue
            if v.count("*") // 2 > 1:
                errors.append(f"{where}: more than one emphasis in headline {plain(v)[:60]!r}")
            h = plain(v).strip()
            if h:
                seen_heads.setdefault(h.lower(), []).append(where)
                # Section 4: a headline that is a sentence takes a period.
                if len(h.split()) > 2 and h[-1] not in ".?:" and not h.endswith(("”", '"')):
                    errors.append(f"{where}: headline has no final period: {h[:60]!r}")

        # Section 7: a callout is only for what the voice adds. One that
        # repeats slide copy prints the same sentence twice.
        copy = " ".join(plain(v) for k, v in fields).lower()
        cb = re.search(r"callouts: \[(.*?)\n      \]", audio, re.S)
        if cb:
            for t in re.findall(r'text: "((?:[^"\\]|\\.)*)"', cb.group(1)):
                if t.lower().rstrip(".") in copy:
                    errors.append(f"{where}: callout repeats slide copy: {t[:60]!r}")

for h, wheres in seen_heads.items():
    if len(wheres) > 1:
        warnings.append(f"headline used on {len(wheres)} slides ({', '.join(wheres)}): {h[:55]!r}")

for w in warnings:
    print(f"warn  {w}")
for e in errors:
    print(f"FAIL  {e}")
print(f"\n{len(errors)} errors, {len(warnings)} warnings")
sys.exit(1 if errors else 0)
