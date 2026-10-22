# BUILD PROMPT — "Maths Explorer" (WA Mathematics, Pre-primary–Year 10)

Build a friendly, **accessible** maths-learning website aligned to the **Western Australian
Curriculum: Mathematics** (for implementation in 2026), covering **Pre-primary to Year 10**.
Static site, plain HTML/CSS/JS — no build step, no dependencies, no backend. It must run by
opening `index.html` (works offline) and deploy to GitHub Pages.

---

## 1. Source material

Content is derived from the SCSA documents (included in the repo for reference) and their
plain-text extractions in `extracted/`:

- `Mathematics-Achievement-standards_P-10_…pdf`
- `Mathematics-Year-level-descriptions_P-10_…pdf`
- `Mathematics_Scope-and-sequence-of-mandated-content_P-10_…pdf`
- `Mathematics_Scope-and-sequence_P-6_…pdf`
- `Mathematics_Scope-and-sequence_7-10_…pdf`

Build the content **one year at a time**. Ship **Year 1 (17 topics, 85 quiz questions)** and
**Year 2 (18 topics, 90 quiz questions)** as complete; show the other years as visible but
**locked "Coming soon"** cards.

## 2. Structure

```
index.html                 entry point (header, toolbar, <main id="app">, footer, scripts)
data/curriculum.js         all curriculum data (window.MATHS_CURRICULUM)
assets/css/styles.css      design system + all components
assets/js/app.js           hash router + page rendering
assets/js/quiz.js          quiz engine
assets/js/visuals.js       per-topic visual examples (SVG/HTML strings)
assets/js/speech.js        read-aloud (Web Speech API)
assets/js/a11y.js          accessibility controls
assets/img/favicon.svg
extracted/                 plain-text extraction of the source PDFs
*.pdf                      source SCSA documents
```

Script order matters: data → a11y → speech → quiz → visuals → app.

## 3. Data model (`window.MATHS_CURRICULUM`)

- `siteName`, `curriculumNote`
- `strands` — keyed by id, each `{ name, icon, colour }`
- `yearCards` — `[{ year, label, icon, colour, available }]`
- `yearData` — keyed by year id, each:
  - `icon, label, tagline, colour, kidIntro`
  - `canDo[]` — "What I will be able to do" (from the achievement standard)
  - `achievementStandard`, `yearLevelDescription` — verbatim, for the grown-ups view
  - `topics[]` — `{ id, strand, icon, name, summary, learn[], example{ prompt, steps[] }, quiz[] }`
  - each quiz item: `{ q, options[], answer, explain }`

## 4. Pages & router

Hash router with these routes: `#/` (home), `#/year/:y`, `#/year/:y/topic/:t`,
`#/year/:y/grown-ups`.

- **Home** — hero, a "Read this page" button, a dismissible read-aloud tip, and a year grid
  (ready cards link; locked cards are `aria-disabled`).
- **Year hub** — kid intro + "Listen", a ✅ "What I will be able to do" checklist, topics
  grouped by strand (cards show best-score stars), and a "For grown-ups" link.
- **Topic page** — "Let's learn" items each with a read-aloud button, a worked **example with
  a visual**, and an embedded quiz.
- **Grown-ups** — verbatim achievement standard, year-level description, and content by strand.

On navigation: stop speech, reset the quiz key handler, scroll to top, and move focus to the
page `h1` (`tabindex="-1"`).

## 5. Quiz engine

- One question at a time; **no timers**.
- Progress dots with `role="progressbar"` + `aria-valuenow`.
- Answer choices are **numbered** (1, 2, 3…), each with an `aria-keyshortcuts` and a visible
  key badge; **number keys 1–9 answer**.
- Instant, encouraging feedback; wrong answers reveal the correct option; each question has an
  `explain` string.
- Stars: ≥80% = 3, ≥50% = 2, else 1. Best score saved in `localStorage`
  (`mathsExplorer.progress`) and shown per topic; "Try again" resets.
- Read the question/feedback aloud via the speech module.
- Guard the global key handler: ignore when a modifier is held or focus is in an
  input/textarea/contentEditable; reset it on navigation.

## 6. Visuals

Self-contained HTML/SVG strings keyed by `year + ":" + topicId`. Every visual is `role="img"`
with a descriptive `aria-label`. Include helpers like ten-frames, dot arrays, labelled rows and
order/arrow rows. Namespace visuals by year so topic ids can repeat across years.

## 7. Accessibility (core requirement)

- **Read-aloud** via the Web Speech API: prefer a local `en-AU` voice; `rate 0.92`,
  `pitch 1.05`; chunk text into ~180-character sentences so Chrome/Edge do not cut off; defer
  the first utterance ~40 ms to dodge the Chrome `cancel()`→`speak()` race; report status
  (start / end / error / unsupported) with a ~1.2 s "no output" guard; a global Read/Stop
  toolbar plus per-item speak buttons.
- Toolbar toggles persisted in `localStorage` (`mathsExplorer.a11y`): **text size** (3 steps),
  **easy-read font**, **high contrast**, **reduced motion** — applied via `data-*` attributes
  on `<html>`.
- Skip link, `aria-live` regions, `aria-pressed` on toggles, visible focus rings, and full
  keyboard support.
- Note: read-aloud needs a real browser (Chrome/Edge/Safari), not an embedded preview — say so
  in the tip.

## 8. Styling

A single design system in `styles.css`: CSS custom properties, rounded cards, strand colour
coding, responsive year/topic grids, `data-easyread` / `data-contrast` / `data-motion` theming,
and a friendly kid-appropriate look (emoji icons).

## 9. Content & copyright

Plain-language, learner-friendly summaries for students; the authoritative wording only in the
grown-ups view. Attribute SCSA (© SCSA 2025) and note that content derived from the Australian
Curriculum is used under **CC BY 4.0**.

## 10. Acceptance checklist

- [ ] Opens by double-click / offline; no build step or dependencies.
- [ ] Home → year → topic → grown-ups navigation works; locked years show "coming soon".
- [ ] Each available year complete (topics, quizzes, visuals); stars and best score persist.
- [ ] Quiz: numbered choices, number-key answering, encouraging feedback, no timers.
- [ ] Read-aloud works with a status/error path; all four a11y toggles persist.
- [ ] Every visual has `role="img"` + `aria-label`; keyboard and screen-reader friendly.
- [ ] SCSA attribution present; deploys to GitHub Pages (`.nojekyll`).
