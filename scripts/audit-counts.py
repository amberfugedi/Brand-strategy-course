"""Write each module's script word count for the audit to compare.

The audit is TypeScript, because it has to import the slides, and the
script is parsed in Python. Rather than teach one language the other's
job, this drops a small count per module that the audit reads.

Regenerated every run, so it cannot go stale against the script.
"""

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import narration  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent

for key, paras in narration.read().items():
    words = sum(len(narration.spoken(p).split()) for p in paras)
    (ROOT / f"scripts/.audit-{key}.json").write_text(json.dumps({"words": words}))
print(f"counted {len(narration.read())} modules")
