# nickantes.github.io

Personal portfolio for Nick Antes — Developer, Systems Architect & Digital Strategist.

Live at [nickantes.github.io](https://nickantes.github.io)

---

## Stack

- **AngularJS 1.x** — hash-based SPA routing (`#/`, `#/projects/:slug`)
- **Vanilla CSS** — custom design system with CSS custom properties, bento grid layout, glassmorphism cards
- **Vanilla JS** — theme toggle, mobile nav, anchor scroll, copyright year
- **Google Fonts** — Inter
- **Google Analytics** — UA-109980697-1
- **angular-markdown** — markdown rendering in project detail pages (local library)

## Routes

| Hash | View |
|------|------|
| `#/` | Home (hero, about, skills, projects, contact) |
| `#/projects/bloc-jams` | Bloc Jams project detail |
| `#/projects/elia-cafe` | Elia Cafe project detail |
| `#/projects/sales-pipeline` | Automated Sales Pipeline detail |

## Structure

```
index.html                  — Shell: topbar, ng-view, footer
style.css                   — All styles; dark default, cream light theme via data-theme="light"
script.js                   — Theme toggle, mobile nav, anchor scroll, year
js/app.js                   — AngularJS routes, controllers, ProjectsService
templates/
  home.html                 — Home view (bento grid)
  project-bloc-jams.html    — Project detail
  project-elia-cafe.html    — Project detail
  project-sales-pipeline.html — Project detail
thank_you.html              — Standalone thank-you page (outside SPA)
libraries/angular_markdown/ — Local angular-md library
utility/                    — Legacy static pages (not part of SPA)
posts/                      — Legacy blog posts (not part of SPA)
```

## Theming

The site defaults to a dark charcoal theme. A light cream/tan theme is toggled via the moon icon in the header. The preference is stored in `localStorage` under the key `na_theme`.

## Development

No build step required. Open `index.html` directly in a browser or serve the repo root with any static file server:

```bash
npx serve .
```

GitHub Pages deploys automatically from the `master` branch.
