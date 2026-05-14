# devendrainfotech.github.io

Personal portfolio site for **Devendra Yadav** — full-stack JavaScript developer based in Bengaluru.

Live at [devendrainfotech.github.io](https://devendrainfotech.github.io)

## Stack

- [Nuxt 3](https://nuxt.com) — static site generation
- Vue 3 + TypeScript
- CSS custom properties — no UI framework
- Self-hosted Google Fonts (Inter Tight, Instrument Serif, JetBrains Mono)
- GitHub Actions → GitHub Pages

## Project structure

```
components/        Vue components — one per UI unit
  AppHeader.vue
  AppFooter.vue
  DotGrid.client.vue   interactive canvas background
  HeroSection.vue
  SectionHead.vue      reusable section heading
  SectionSideLabel.vue reusable sticky side label
  SkillRow.vue / SkillsSection.vue
  ProjectRow.vue / WorkSection.vue
  TimelineRow.vue / ExperienceSection.vue
  WritingCard.vue / WritingSection.vue
  TestimonialCard.vue / TestimonialsSection.vue
  AwardRow.vue / AwardsSection.vue
  ContactSection.vue

data/
  portfolio.ts     all site content — edit here

assets/css/
  main.css         design system (CSS variables, layout, all component styles)

composables/
  useTheme.ts      dark/light toggle, persisted to localStorage
  useClock.ts      live IST clock

plugins/
  reveal.client.ts IntersectionObserver scroll reveals

pages/
  index.vue        root page + SEO meta tags + JSON-LD schema

.github/workflows/
  deploy.yml       CI/CD — generates static site and deploys to GitHub Pages
```

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy

Pushes to `master` trigger the GitHub Actions workflow automatically.

Manual deploy:

```bash
npm run generate   # outputs to .output/public/
```

To enable GitHub Pages: **Settings → Pages → Source → GitHub Actions**.

## Updating content

All text, projects, skills, and experience live in **`data/portfolio.ts`**. No component changes needed for content updates.

## Features

- Dark / light theme toggle with no flash on load
- Interactive dot-grid canvas that reacts to mouse movement
- Split-letter hero title animation
- Rotating word in headline
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- SEO: Open Graph, Twitter cards, JSON-LD Person schema, sitemap, robots.txt
- Self-hosted fonts — zero external requests at runtime
