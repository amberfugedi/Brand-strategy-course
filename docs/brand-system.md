# Course slide system

Specification for the slide surfaces of "Build your marketing foundation."
Derived from the deployed amberfugedi.com system, with course-specific
extensions. This revision folds in the implementation rulings; where it and
an existing slide disagree, this document wins. Where it is silent, do not
invent a rule: flag it.

Status marks: **verified** (deployed source), **sampled** (read off a
screenshot; confirm against source before treating as final), **new**
(minted for this system), **ruled** (decided during implementation).

The app enforces the color system structurally: layer tones and the course
accent are CSS variables that resolve per surface (`app/globals.css`).
Components cannot put a layer color on cream even by mistake.

---

## 1. Canvas

The reference deck canvas is 1456 x 819. The app is responsive and keeps
its own verified sizes; families, weights, and tracking follow this
document verbatim, px sizes are deck-only. Reading measures cap in `ch`.

## 2. Color

### Grounds

| Token | Hex | Use | Status |
|---|---|---|---|
| Cream | `#FDF9F5` | default slide ground | verified |
| White | `#FFFFFF` | cards and boxes on cream | verified |
| Plum | `#2E2633` | dark slides, matches the course card | sampled |
| Plum low | `#29222E` | gradient end | sampled |

Dark slides use the gradient 160deg `#312836` → `#2E2633` → `#29222E`.
A flat fill reads as a near-miss. Slides follow the card, not the site's
warm-neutral band.

### Text

| Token | Hex | Use | Status |
|---|---|---|---|
| Ink | `#2E2A27` | headlines on cream | verified |
| Body | `#3E3833` | body copy on cream | verified |
| Muted | `#5C544B` | labels, footer, secondary | verified |
| On-dark body | `#D9D2C9` | body copy on plum | verified |
| On-dark muted | `#9A9098` | labels and footer on plum | sampled |
| Cream | `#FDF9F5` | headlines on plum | verified |

### Course accent

| Token | Hex | Use | Status |
|---|---|---|---|
| Peach | `#FCE4C4` | fill only: bullet centers, washes | verified |
| Courses deep | `#8A5A14` | text and stroke on cream | verified |
| Butter | `#FBEDBF` | the course accent on dark (12.47:1) | ruled |

`#8A5A14` fails on plum (2.47:1) and mostly never needs to appear there:
its jobs (exercise label, ring bullet, cream progress fill) are cream
jobs. Any other course-accent need on dark uses butter, never a layer
tone. Butter is also the paper-tab fill; the double duty is accepted.

### Layer tones (dark surfaces and progress only)

| Layer | Hex | Contrast on plum | Status |
|---|---|---|---|
| Get found | `#DA8970` | 5.41:1 | sampled |
| Get chosen | `#A69BDB` | 5.78:1 | sampled |
| Be remembered | `#DDB774` | 7.70:1 | sampled |

**Pre-layer modules (intro, positioning, the audit) carry no layer color
at all.** Their dark accents invert value instead: body `#D9D2C9`, accent
phrase cream `#FDF9F5` italic. Their dark progress fill is cream at 60%.
This makes the first appearance of `#DA8970` at module three mean
something. (ruled; closes the former gap)

### Hairlines, lift, radius

- Hairline: `1px solid rgba(46,42,39,0.12)` on cream,
  `rgba(253,249,245,0.14)` on plum.
- One shadow: `0 14px 40px -18px rgba(46,42,39,0.18)`. No elevation scale.
- Radius: 24px cards and bands, 14px compact elements and inputs.

### Forbidden on slides

- Bright coral (`#FF6F61` family) anywhere. The permitted coral-family
  appearances are `#DA8970` on plum, and on cream only as the
  decorative borders the layer-rule amendment in section 3 allows.
- Blush `#FBD5E4` and lavender `#DAD4F5` as content color.
- Any blue, teal, or cool green.
- Any color not listed above.

## 3. The layer rule

Layer color appears on dark surfaces and in the progress fill as the
carrier of meaning: layer-opener labels and numerals, takeaway accents,
dark progress. On cream, layer color never appears as **text** or as a
meaning-bearing control; cream surfaces resolve all layer text variables
to `#8A5A14`, so that half of the rule holds by construction.

**Amendment (2026-08, ruled by the cream-and-gold audit):** the three
tones may appear on cream as **decorative fills and borders only**, and
they carry role meaning rather than rotating for variety:

- **Coral**: cautionary material. Weak-pattern cards, the "not that"
  half of an exercise compare.
- **Lilac**: examples. Persona cards, spoken-example callout cards.
- **Stone**: framework structure. Concept-column top bars, the
  "do this" half of an exercise compare.
- **Map zones** keep one color per zone (zone identity, per the deck).
- **Course home** borders each module in its layer tone.
- **Auras**: amber, rose, and lilac variants, cream only.

Decorative means: removing the color changes nothing about what the
interface says. Text on cream stays on the collapsed courses accent for
contrast; the literals live in `tailwind.config.ts` as `coral`,
`lilac`, `stone` with this restriction documented at the definition.

**Progress (ruled):** the single fill shipped. Cream: `#8A5A14` at 70%.
Dark, layered module: the module's layer tone at full. Dark, pre-layer
module: cream at 60%. The three-segment bar is deferred; revisit after
recording, if at all.

## 4. Typography

**Newsreader** (display: 500, 600, italic 500) and **Manrope** (body:
400, 500 — never 700 or 800; the app caps bold utilities at 500).
Display is Newsreader 500 with -0.02em. Uppercase labels track at
**0.08em**, Manrope 500. Sentence case everywhere. A headline that is a
sentence takes a period. The ladder is label, headline, body, and stops.

### Size standards (ruled by the 2026-08 type audit)

The floors below hold on every surface, phone and desktop. New
components follow them; violations are bugs.

| Role | Phone | Desktop | Floor |
|---|---|---|---|
| Teaching-slide headline (one ladder for every cream content slide) | 30px | 48px, 60px wide | scales via responsive classes, never fixed |
| Display headline (heroes, questions, principles, dividers) | 36px | 48–60px | intentionally a step above teaching slides |
| Tool-slide headline (diagnostic, audit, plan, foundation tools) | 30px | 36px | compact above interactive content |
| Primary reading (paragraphs, bullets, panels) | 15–17px | 16–18px | **14px** |
| Secondary reading (reveal notes, references, annotations) | 13.5–14.5px | 13.5–15px | **13.5px** |
| Labels, eyebrows, chrome (Manrope 500, uppercase, 0.08em) | 10–11px | 10–11px | **10px** |
| Anything typed into (inputs, textareas) | **16px** | 16px | 16px — under 16px triggers iOS focus zoom |
| Navigation pills | 11px uppercase | 11px uppercase | tap target ≥ 40px tall |
| Captions | listener-controlled: 12.5 / 14.5 / 17 / 20px | same | user choice, default 14.5px |

One documented exception: the Map document illustration carries its
smallest caption at 9.5px — it is artwork, not interface, and its
labels repeat information available elsewhere.

## 5. Emphasis (ruled)

**The mark is headline-only, one per slide.** On cream headlines the
emphasis phrase takes the paper tab (butter variant) in Newsreader
italic. On dark headlines it is Newsreader italic in the module's layer
tone, cream on pre-layer modules. **Body-copy emphasis carries unmarked**:
no tab, no serif italic inside Manrope body copy. Content keeps its
emphasis annotations; they simply render plain in body positions, so a
future body-level treatment is a CSS decision, not a content pass.

## 6. Devices

- **Paper tab**: two counter-rotated pseudo-elements, butter fills,
  geometry in `em` (see `app/globals.css`). Cream headlines only.
- **Ring bullet**: peach center, `#8A5A14` ring; 20px with a 2.5px
  ring on md and up, 15px with a 2px ring on phones. Never a disc,
  never recolored per layer. Applied to the Map card list and the
  concept-column cards.
- **Aura**: one static blob per cream slide at most, warm core (amber
  `rgba(248,190,116,…)` or rose `rgba(246,158,199,…)`), fading by 60%,
  corner-bled. Never on dark, never animated. Currently placed on cream
  heroes (amber) and the course home (rose).
- **Strata mark** (course device, ruled in): the seven-foundation
  wayfinding bar on module openers. Dark surfaces only. Positioning
  segment is peach; foundation segments use the layer tones; the active
  module's foundation stands taller.
- **Survey ground-line** (course device, ruled in): the ticked hairline
  on question dividers, in the surface's muted tone.

## 7. Diagnostic output (ruled, was a gap)

Tier and gap displays use a single-hue intensity ramp on `#8A5A14`.
For accessibility, **text stays at full opacity; only the border ramps**
(full, 60%, 25%, and a near-empty ring for not applicable). No
traffic-light greens or reds.

**One renderer, four places.** The priority order and the Gap List are
rendered by `components/course/LivePlan.tsx` wherever they appear: the
reading slide that asks for them, the framework slide that explains the
tiers, and the reference drawer. Rows are hairline cards with a rounded
tier pill, two columns on a slide and one in the drawer. Reasoning lines
show on the reading slide, where they are the teaching point, and are
suppressed everywhere else so the list does not repeat itself.

**A slide that names an output must show it.** If narration tells the
buyer to read something they produced, that thing belongs on the same
screen. The reference drawer (a paper tab on the right edge, opening a
cream panel) carries both outputs to every later slide that refers to
them, and links back to the diagnostic and the audit so an answer that
did not land can be changed at the source.

### Spoken marks versus callouts (ruled)

When the voice says a sentence **the slide already carries**, underline
it: a gold rule draws under the words in place and retracts when the
voice moves on (`audio.marks`). A floating callout is only for what the
voice adds that the slide does **not** say (`audio.callouts`). A callout
that repeats slide copy prints the same sentence twice and makes the
reader read it again, which is the noise it was meant to avoid.

Mark text must appear in that slide's copy. `scripts/verify-marks.py`
asserts this and fails on a mark that matches nothing, so a typo cannot
silently become a no-op. Marks may span an accent boundary and
underline in one piece.

## 8. App chrome

Course home, sign-in, gates, the host panel, captions, and narration
controls follow the token system by inheritance: cream grounds, white
24px cards with the hairline border and lift shadow, muted chrome text,
courses-deep accents on cream and butter on dark.

## 9. Voice on slides

Median sentence length 11 words. No em dashes; a period and a new
sentence instead. Paired sentences: claim, then qualification. Fragments
allowed in sequences of three. No exclamation marks. Lead with the
diagnosis. One emphasis phrase per headline.

## 10. Open questions

- **Dark-slide frequency.** The reference deck rule is ~4% dark with one
  takeaway per module. The app runs far above that (heroes, dividers,
  tools, and multiple takeaways are dark). Undecided whether the rule is
  deck-only or app surfaces should be demoted (dividers to cream is the
  spec-consistent first step).
- **Module header surface.** Still uncovered; heroes are plum today.
- **Sampled values.** The layer tones and plum family are in production
  as sampled; confirm against the deployed stylesheet (one-line edits in
  `app/globals.css` / `tailwind.config.ts`).
- Completion states, callout boxes, captions/tables/video frames, print
  surfaces: still no rule; ask before inventing.
