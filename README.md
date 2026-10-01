# Novaris — IT Solutions & Technology (React front-end)

A front-end-only React rebuild of a classic IT-consultancy landing page layout, rewritten from scratch
with original branding, copy, imagery and components. No backend, no CMS — every value is a plain object
in [`src/data/site.js`](src/data/site.js).

## Stack

| Concern | Choice |
| --- | --- |
| Build | Vite 8 |
| UI | React 19 |
| Routing | react-router-dom (`BrowserRouter`) |
| Styling | Tailwind CSS 3.4 + a small component layer in `src/index.css` |
| Icons | `react-icons` (Feather / Font Awesome) plus a hand-authored SVG set in `ServiceIcon.jsx` |
| Fonts | Syne (display) + Istok Web (body), loaded from Google Fonts |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # emits dist/
npm run preview  # serve the production build
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Full landing page — hero slider, features, about, brands, services, counters, team, case studies, pricing, testimonials, blog, CTA |
| `/about` | About + four-step process + counters + team + testimonials |
| `/services` | All six services + counters + pricing |
| `/case-study` | Filterable project grid |
| `/team` | Team grid + counters |
| `/faq` | Accordion FAQ |
| `/blog` | Post grid with category filter |
| `/blog/:slug` | Post detail with sidebar |
| `/contact` | Contact details + validated form + map placeholder |
| `*` | 404 |

## Project layout

```
src/
  components/
    layout/     Header (sticky nav, dropdowns, drawer, search), Footer, PageBanner, BackToTop
    sections/   Reusable page sections — Hero, Features, About, Services, Counters, Team,
                CaseStudies, Pricing, Testimonials, BlogPreview, CtaBanner, BrandMarquee
    ui/         Logo, ServiceIcon, Reveal, SectionHeading
  data/site.js  All site content: nav, slides, services, team, pricing, posts, FAQs
  hooks/        useInView (scroll reveals), useCountUp (animated statistics)
  pages/        One component per route
public/images/  Photography (Unsplash licence) — 25 files, all served locally
```

## Editing content

Everything user-facing lives in `src/data/site.js`. Change the company name, phone, address, nav items,
services, prices, team members or posts there and every page picks it up — including the `<Logo />`
wordmark and the footer.

Colours and type live in [`tailwind.config.js`](tailwind.config.js) under `theme.extend`:
`accent` (#086AD7), `heading` (#211e3b), `body` (#696969), `night`, `mist`.

## Interaction notes

- **Hero / testimonials** — custom carousels with autoplay, pause-on-hover, arrows, dots and `aria-current`.
- **Reveals** — `useInView` adds `.is-visible`; it also checks the element rect on mount so anchor jumps
  and restored scroll positions can never leave a section stuck at `opacity: 0`.
- **Counters** — `requestAnimationFrame` easing that respects `prefers-reduced-motion`.
- **Contact form** — client-side validation only. Submitting shows a local confirmation; nothing is sent.
- **Search overlay / mobile drawer** — lock body scroll, close on `Escape` and on route change.

## Assets & attribution

Photography is from Unsplash (free to use under the Unsplash licence) and downloaded into
`public/images/` so the build has no external image dependencies. The logo, icon set, brand names,
copy and colour usage are original to this project.
