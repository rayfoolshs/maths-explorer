# Maths Explorer

A friendly, accessible maths learning website aligned to the **Western Australian Curriculum: Mathematics** (for implementation in 2026), covering **Pre-primary to Year 10**.

Built as a static site with plain HTML, CSS and JavaScript — no build step, no dependencies. Open `index.html` in any browser, or view the published version on GitHub Pages.

## Status

| Year level | Status |
|---|---|
| Year 1 | ✅ Complete (17 topics, 85 quiz questions, visual examples) |
| Pre-primary, Years 2–10 | 🚧 Coming soon (cards are shown but locked) |

## Features

- **Year hubs** — kid-friendly intro, a "What I will be able to do" list (from the achievement standard), and topics grouped by strand.
- **Topic pages** — simple explanations with read-aloud buttons, a worked example with a **visual**, and a short quiz.
- **Quizzes** — one question at a time, instant encouraging feedback, stars, best score saved in the browser.
- **Grown-ups view** — the verbatim achievement standard, year-level description, and content by strand.
- **Accessibility** — read-aloud (Web Speech API), text-size steps, easy-read font, high contrast, reduced motion, keyboard and screen-reader support.

## Running locally

Just open `index.html`. Everything works offline.

If you prefer a local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Project structure

```
index.html                 entry point
data/curriculum.js         year data (Year 1 complete; other years stubbed)
assets/css/styles.css      design system + all component styles
assets/js/app.js           hash router + page rendering
assets/js/quiz.js          quiz engine
assets/js/visuals.js       visual examples per topic
assets/js/speech.js        read-aloud
assets/js/a11y.js          accessibility controls
assets/img/favicon.svg
extracted/                 plain-text extraction of the source PDFs
*.pdf                      source SCSA curriculum documents
```

## Curriculum source and copyright

Content is aligned to the Western Australian Curriculum: Mathematics documents published by the **School Curriculum and Standards Authority (SCSA)**. The source PDFs are included in this repository for reference.

© School Curriculum and Standards Authority, 2025. The Authority is acknowledged as the copyright owner. Content derived from the Australian Curriculum is used under the Creative Commons Attribution 4.0 International licence. This site uses plain-language, learner-friendly summaries; the authoritative wording is available in the "For grown-ups" section of each year and in the source documents.
