"""Every spoken mark must match text that is actually on its slide,
and must not overlap a callout window on the same slide."""
import re, sys, glob

bad = 0
for path in sorted(glob.glob("/workspace/brand-strategy-course/lib/content/module*.ts")
                   + glob.glob("/workspace/brand-strategy-course/lib/content/intro.ts")):
    src = open(path).read()
    chunks = re.split(r"\n  // (\d+) · ", src)[1:]
    for num, body in zip(chunks[0::2], chunks[1::2]):
        am = re.search(r"    audio: \{.*?\n    \},", body, re.S) or re.search(r"    audio: \{[^\n]*\},", body)
        audio = am.group(0) if am else ""
        marks = re.findall(r'\{ text: "((?:[^"\\]|\\.)*)", at: ([\d.]+), until: ([\d.]+) \},',
                           re.search(r"marks: \[(.*?)\]", audio, re.S).group(1)) if "marks: [" in audio else []
        if not marks:
            continue
        copy_src = body.replace(audio, "")
        copy = " ¶ ".join(re.findall(r'"((?:[^"\\]|\\.)*)"', copy_src))
        plain = copy.replace("\\\"", '"').replace("*", "")
        fold = lambda x: x.replace("\u2019", "'").replace("\u2018", "'")
        plain = fold(plain)

        callouts = []
        if "callouts: [" in audio:
            cblock = re.search(r"callouts: \[(.*?)\n      \]", audio, re.S)
            if cblock:
                callouts = [(float(a), float(u)) for a, u in
                            re.findall(r"at: ([\d.]+), until: ([\d.]+)", cblock.group(1))]

        for text, a, u in marks:
            t = text.replace('\\"', '"')
            if fold(t) not in plain:
                print(f"MISS  {path.split('/')[-1]} slide {num}: {t!r}")
                bad += 1
            for ca, cu in callouts:
                if float(a) < cu and ca < float(u):
                    print(f"CLASH {path.split('/')[-1]} slide {num}: mark {a}-{u} overlaps callout {ca}-{cu}")
                    bad += 1

print("FAIL" if bad else "all marks match their slide copy, no overlaps")
sys.exit(1 if bad else 0)
