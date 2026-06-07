# Layout Practice

A plain HTML, CSS, and JavaScript site for learning web page layout. Work through practice modules that teach you how to create divs, sections, flexbox, and grid layouts — either by following examples or building your own structure.

## Getting started

No build tools or package manager required.

1. Clone or download this repository.
2. Open `index.html` in your browser, **or** use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code for the best experience (ES modules work reliably over HTTP).

Recommended entry points:

- [index.html](index.html) — site landing page
- [practice/index.html](practice/index.html) — practice module hub
- [practice/divs-and-sections/index.html](practice/divs-and-sections/index.html) — first full lesson

## Project structure

```text
layoutPractice/
├── index.html                 # Landing page
├── css/
│   ├── base/                  # Reset and CSS variables
│   ├── layout/                # Page shell and containers
│   ├── components/            # Header, footer, nav, cards
│   └── main.css               # Single CSS entry (imports all partials)
├── js/
│   ├── main.js                # Site-wide init
│   └── utils/                 # tabs.js, navigation.js
├── assets/
│   ├── images/
│   └── icons/
├── practice/
│   ├── index.html             # Module hub
│   ├── css/practice-common.css
│   ├── js/practice.js
│   ├── divs-and-sections/     # Available lesson
│   ├── flexbox/               # Coming soon
│   └── grid/                  # Coming soon
└── coder/                     # Your private practice workspace (not linked from the site)
    ├── index.html             # Main playground
    ├── css/styles.css
    └── experiments/starter/   # Copy this folder for each new layout try
```

## Conventions

| Area | Convention |
|------|------------|
| CSS | Site pages link `css/main.css`. Lesson pages also link `practice/css/practice-common.css` and their module `css/styles.css`. |
| JS | Vanilla ES modules via `<script type="module">`. No bundler. |
| Classes | BEM-ish naming: `.practice-card`, `.lesson-tabs`, `.example-preview` |
| Modules | One topic per folder. `index.html` is the lesson. `examples/` holds standalone reference HTML. |

## Practice modules

Each module page has three tabs:

1. **Instructions** — concepts and syntax
2. **Example** — embedded preview + link to a standalone file in `examples/`
3. **Try it** — starter area for hands-on practice (edit the HTML directly for now)

| Module | Status | Path |
|--------|--------|------|
| Divs & Sections | Available | `practice/divs-and-sections/` |
| Flexbox | Coming soon | `practice/flexbox/` |
| CSS Grid | Coming soon | `practice/grid/` |

## Coder workspace

The [`coder/`](coder/) folder is your personal sandbox. It is separate from the public lesson pages — edit freely without affecting the site.

- [coder/index.html](coder/index.html) — main playground
- [coder/experiments/starter/](coder/experiments/starter/) — duplicate for each new layout experiment

See [coder/README.md](coder/README.md) for details.

## Adding a new module

1. Copy the `practice/divs-and-sections/` folder and rename it (e.g. `practice/positioning/`).
2. Update `index.html` inside the new folder: title, lesson content, and example links.
3. Add module-specific styles in `css/styles.css`.
4. Add standalone examples in `examples/`.
5. Add a card to [practice/index.html](practice/index.html) and optionally [index.html](index.html).

## Tech stack

- HTML5
- CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript (ES modules)

No frameworks, no build step.
