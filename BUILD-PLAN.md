# Building Plan — Maths Explorer

> **Scope note.** This plan covers the project already in this repo: the static, accessible
> maths-learning site aligned to the WA Mathematics curriculum (Pre-primary–Year 10). It
> documents what is built, how it fits together, and a phased plan for building it up from
> foundation to full coverage and beyond.

---

## 1. Goal and constraints

**Goal.** A student or teacher can open one HTML file (or the GitHub Pages URL) and explore
what each year level learns, read it aloud, try a short quiz, and see their best score — with
no install, no build step, no server, no accounts.

**Hard constraints (these drive every decision):**

| Constraint | Consequence |
| --- | --- |
| Runs from `file://` by double-click | No ES modules, no `fetch()` of local data, no bundler. Plain `<script src>` tags. |
| No build step | `index.html` + `data/curriculum.js` are the source of truth. |
| No internet required | No CDNs, no fonts, no analytics. Read-aloud uses the built-in Web Speech API. |
| Accessibility first | Read-aloud, text-size steps, easy-read font, high contrast, reduced motion, keyboard + screen reader. |
| Progress must survive a reload | `localStorage` is the only durable store available. |

---

## 2. What already exists (audit)

| Artifact | Status | Notes |
| --- | --- | --- |
| `index.html` | Built, 56 lines | Shell: header, a11y toolbar, `<main id="app">`, footer, script tags. |
| `data/curriculum.js` | Built, 1,136 lines | All curriculum data (`window.MATHS_CURRICULUM`). |
| `assets/css/styles.css` | Built, 574 lines | Design system + components + a11y theming. |
| `assets/js/app.js` | Built, 454 lines | Hash router + page rendering. |
| `assets/js/quiz.js` | Built, 205 lines | Quiz engine. |
| `assets/js/visuals.js` | Built, 508 lines | Per-topic visual examples. |
| `assets/js/speech.js` | Built, 138 lines | Read-aloud (Web Speech API). |
| `assets/js/a11y.js` | Built, 64 lines | Accessibility controls. |
| `assets/img/favicon.svg` | Built | Site icon. |
| `extracted/*.txt` | Built | Plain-text extraction of the source PDFs. |
| `*.pdf` | Included | Source SCSA curriculum documents. |
| `.nojekyll` | Built | Ensures GitHub Pages serves the asset folders. |

**Functional coverage:** home + year hubs + topic pages + grown-ups view; quizzes with numbered
choices, number-key answering, encouraging feedback and stars; best score persisted per topic;
per-topic visuals; read-aloud; four accessibility toggles.

**Content coverage:** **Year 1** (17 topics, 85 questions) and **Year 2** (18 topics, 90
questions) are complete; Pre-primary and Years 3–10 are stubbed as locked "Coming soon" cards.

> **Note:** the README status table still lists only Year 1 as complete, but `yearCards` marks
> **Year 2** `available: true` as well. The README should be updated to match.

---

## 3. Architecture

Single-page app, no framework. Plain scripts loaded in dependency order.

```
index.html               1–56     shell + toolbar + script order
data/curriculum.js       1–35     siteName, strands, yearCards
                        37–570    yearData["1"]  (Year 1: 17 topics)
                       571–1136   yearData["2"]  (Year 2: 18 topics)
assets/js/a11y.js        1–64     text size / easy-read / contrast / motion (+ localStorage)
assets/js/speech.js      1–138    read-aloud, en-AU voice, chunking, status
assets/js/quiz.js        1–205    quiz engine + number-key answering
assets/js/visuals.js     1–508    visual examples keyed by "year:topicId"
assets/js/app.js         1–454    hash router + page rendering + toolbar wiring
assets/css/styles.css    1–574    design system + component styles
```

**Data flow**

```
SCSA PDFs → extracted/*.txt → data/curriculum.js (MATHS_CURRICULUM)
                                        │
                                        ▼
                            app.js router ──► home / year / topic / grown-ups
                                        │
              ┌─────────────────────────┼──────────────────────────┐
              ▼                         ▼                          ▼
        quiz.js (stars,            visuals.js                 speech.js
        best score →               (role="img" +             (read aloud)
        localStorage)               aria-label)
```

**Key invariants to preserve**

1. Everything works offline from `file://` — no external requests.
2. Script load order: data → a11y → speech → quiz → visuals → app.
3. Every visual is `role="img"` with a meaningful `aria-label`.
4. The global key handler is only active for the visible quiz and resets on navigation.
5. A11y preferences and best scores persist in `localStorage` and are re-applied on load.

---

## 4. Build phases

### Phase 0 — Foundations
**Deliverable:** static skeleton + design system.
- [ ] `index.html` shell: header/brand, a11y toolbar, `<main id="app">`, footer, skip link.
- [ ] `styles.css` design system: tokens, cards, grids, responsive breakpoints, a11y theming.
- [ ] `data/curriculum.js` with `siteName`, `strands`, `yearCards`, `curriculumNote`.

**Exit test:** the page loads offline and renders the toolbar and an empty main area.

### Phase 1 — Curriculum data model
**Deliverable:** the per-year content structure.
- [ ] Extract the SCSA PDFs to `extracted/`.
- [ ] Encode `yearData` per year: `kidIntro`, `canDo[]`, `achievementStandard`,
      `yearLevelDescription`, `topics[]` (`learn[]`, `example`, `quiz[]`).
- [ ] Group topics under the three strands; mark years `available` as they are completed.

**Exit test:** a table of each year's topics matches the scope & sequence.

### Phase 2 — Router & pages
**Deliverable:** navigation and rendering.
- [ ] Hash router: `#/`, `#/year/:y`, `#/year/:y/topic/:t`, `#/year/:y/grown-ups`.
- [ ] Home (year grid), year hub (intro + can-do + topics by strand), topic page
      (learn + example + quiz), grown-ups (verbatim standards).
- [ ] On navigation: stop speech, reset quiz keys, scroll to top, focus the `h1`.

**Exit test:** all four page types render; locked years show "coming soon".

### Phase 3 — Quiz engine
**Deliverable:** the learning interaction.
- [ ] One question at a time, progress dots (`role="progressbar"`), no timers.
- [ ] Numbered choices + number-key answering; guarded global key handler.
- [ ] Encouraging feedback, reveal-the-answer on wrong, `explain` per question.
- [ ] Stars (80/50 thresholds), best score in `localStorage`, "Try again".

**Exit test:** answering by mouse and by keyboard both work; stars and best score persist.

### Phase 4 — Visuals & read-aloud
**Deliverable:** the "look at this" examples and speech.
- [ ] `visuals.js` helpers (ten-frames, dots, labelled rows, order rows) keyed by year+topic.
- [ ] Every visual `role="img"` + `aria-label`.
- [ ] `speech.js`: en-AU voice, chunking, cancel→speak race fix, status reporting.
- [ ] Per-item and toolbar read-aloud wiring, with a "Test sound" tip.

**Exit test:** visuals render on topic pages; read-aloud works and reports errors gracefully.

### Phase 5 — Accessibility & release
**Deliverable:** the a11y controls and the published site.
- [ ] `a11y.js`: text size (3 steps), easy-read, contrast, reduced motion; persisted.
- [ ] Skip link, `aria-live`, `aria-pressed`, focus management.
- [ ] `.nojekyll` + README; deploy to GitHub Pages.

**Exit test:** all four toggles persist across reloads; the live Pages site works.

---

## 5. Acceptance checklist (definition of done)

- [ ] Opens by double-click / offline; no build step or dependencies.
- [ ] Home → year → topic → grown-ups navigation works; locked years show "coming soon".
- [ ] Each available year complete (topics, quizzes, visuals); stars + best score persist.
- [ ] Quiz: numbered choices, number-key answering, encouraging feedback, no timers.
- [ ] Read-aloud works with a status/error path; all four a11y toggles persist.
- [ ] Every visual has `role="img"` + `aria-label`; keyboard and screen-reader friendly.
- [ ] SCSA attribution present; deploys to GitHub Pages.

---

## 6. Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Read-aloud silent in some browsers/embedded previews | Prefer local `en-AU` voice; chunk text; status handler shows a friendly error; tip suggests Chrome/Edge/Safari. |
| Chrome `cancel()`→`speak()` race cutting speech off | Defer the first utterance ~40 ms; ~1.2 s "no output" guard. |
| Number-key handler firing on other pages | Single active handler, reset on navigation and after answering; ignore inputs/modifiers. |
| Visuals drift from topic ids | Key visuals by `year:topicId`; namespaced so ids can repeat across years. |
| Progress lost (cleared storage / different browser) | Document it; progress is a convenience, not a record. |
| README/content drift as years are added | Update the status table and `yearCards.available` together; keep this plan current. |
| Content copyright | Attribute SCSA (© SCSA 2025); Australian Curriculum content under CC BY 4.0. |

---

## 7. Forward roadmap (next builds)

Ordered by value-to-effort; each is an independent, shippable increment.

**Near term**
1. **Complete more year levels** — Years 3–10, one at a time, same structure as Years 1–2.
2. **Update the README status table** to match `yearCards` (Year 2 is already live).
3. **Export/import progress as JSON** — move a learner's stars between machines.
4. **Teacher/print view** — print a year's topics + quizzes for paper use.

**Medium term**
5. **More visual types** — number lines, fraction bars, clocks, grid/area models, charts.
6. **Aural practice** — spoken maths prompts ("listen and answer") using the speech module.
7. **Per-strand progress summary** — aggregate best scores into strengths/weaknesses.

**Longer term**
8. **Optional PWA/offline install** — service worker + manifest, keeping the double-click path.
9. **Suite shell** — a launcher linking Maths Explorer with the other classroom tools.

**Deferred / explicit non-goals**
- No accounts, no server, no tracking, no ads — the offline, static model is a feature.
- No framework/build step unless a real need appears.

---

## 8. How to run / verify today

```
Open  index.html                         (double-click; works offline)
# or
python3 -m http.server 8000              (then http://localhost:8000)
```

Verify in a browser: browse home → a year → a topic; answer a quiz by mouse **and** by number
keys; check stars and best score survive a reload; toggle each a11y control and reload; use
read-aloud on a page, a list and a question; confirm locked years show "coming soon" and the
console has no errors.
