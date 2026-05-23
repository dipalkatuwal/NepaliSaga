# NepaliSaga — The Chronicle of Nepal's Unfolding Story

A premium editorial news platform built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and a hand-crafted editorial design system. Inspired by the design sensibility of the Financial Times, New York Times, Rest of World, and Bloomberg Weekend — adapted for Nepal's premier digital newsroom.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| UI Primitives | Radix UI (headless) |
| Motion | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Playfair Display · DM Sans · Libre Baskerville · Noto Serif Devanagari |
| Utilities | clsx · tailwind-merge |

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, MobileNav, metadata)
│   ├── page.tsx                # Homepage
│   ├── loading.tsx             # Route-level skeleton loader
│   ├── not-found.tsx           # 404 page
│   ├── globals.css             # CSS custom properties + base styles
│   └── article/[slug]/
│       └── page.tsx            # Dynamic article route
│
├── components/
│   ├── layout/
│   │   ├── TopBar.tsx          # Utility bar (date, markets ticker, search)
│   │   ├── Header.tsx          # Sticky masthead + navigation
│   │   └── Footer.tsx          # Full-width footer with newsletter
│   │
│   ├── home/
│   │   ├── HeroStory.tsx       # Full-bleed hero card with TL;DR overlay
│   │   ├── StoryCard.tsx       # Reusable card (grid / feature variants)
│   │   └── CompactCard.tsx     # Text-only compact card for dense grids
│   │
│   ├── article/
│   │   └── ArticleView.tsx     # Full article layout with timeline + related
│   │
│   ├── widgets/
│   │   ├── NEPSEWidget.tsx     # Live NEPSE index + sparklines (simulated)
│   │   ├── ForexWidget.tsx     # NRB forex rates table
│   │   ├── BullionWidget.tsx   # Gold/silver bullion rates
│   │   ├── WeatherWidget.tsx   # Nepal city weather grid
│   │   ├── TrendingWidget.tsx  # Ranked trending stories
│   │   ├── PollWidget.tsx      # Interactive reader poll
│   │   ├── NewsletterWidget.tsx# Email subscription card
│   │   └── MarketsTable.tsx    # Full NEPSE stock table
│   │
│   ├── ads/
│   │   └── AdBanner.tsx        # TopAdBanner, InfeedAd, MarketplaceBanner, SidebarAd
│   │
│   ├── navigation/
│   │   └── MobileNav.tsx       # Sticky bottom nav for mobile
│   │
│   └── shared/
│       ├── SectionHeader.tsx   # Consistent section dividers with accent colours
│       ├── Tag.tsx             # Category/status tags (5 colour variants)
│       ├── DarkModeToggle.tsx  # Light/dark theme switcher (localStorage-persisted)
│       └── ReadingProgressBar.tsx # Fixed top reading progress indicator
│
├── data/
│   ├── articles.ts             # All 7 editorial articles with full body + timelines
│   ├── markets.ts              # NEPSE stocks, forex rates, bullion rates
│   ├── weather.ts              # Nepal city weather data
│   └── ads.ts                  # Ad copy, trending items, reader poll
│
├── hooks/
│   ├── useReadingProgress.ts   # Scroll-derived 0–100 reading progress
│   ├── useScrollAware.ts       # Scroll direction + threshold awareness
│   └── useNEPSE.ts             # Live-simulated NEPSE index ticker hook
│
├── lib/
│   ├── utils.ts                # cn(), formatNumber(), slugify(), truncate()
│   └── constants.ts            # Site name, nav items, breaking news items
│
├── styles/
│   └── typography.css          # Editorial type scale tokens (.type-display etc.)
│
└── types/
    └── index.ts                # Article, MarketStock, ForexRate, WeatherCity…
```

---

## Key Features

- **Editorial design system** — warm newspaper palette, serif + sans pairing, dense information layout
- **Live NEPSE ticker** — simulated real-time index with sparklines, updates every 3.2s
- **Dynamic article routing** — `/article/[slug]` with reading progress, timeline, drop cap, related stories
- **Breaking news strip** — auto-scrolling horizontal ticker with hover-pause
- **Sidebar widgets** — NEPSE, Forex, Bullion, Weather, Trending, Poll, Newsletter
- **Responsive** — mobile-first with sticky bottom nav, tablet reflow, ultrawide max-width
- **Dark mode** — warm editorial dark palette toggled via `localStorage`
- **Accessibility** — semantic HTML, ARIA labels, keyboard navigation, WCAG AA contrast
- **Performance** — Server Components by default, client components only where interactivity needed, `next/image` ready

---

## Customisation

### Add a New Article

Edit `src/data/articles.ts` — add an object to the `rawArticles` array. The `slug` is auto-generated from the title via `slugify()`.

### Add a New Nav Section

Edit `NAV_ITEMS` in `src/lib/constants.ts`.

### Change the Colour Palette

Edit the CSS custom properties in `src/app/globals.css` under `:root` and `.dark`.

---

## Deployment

### Vercel (recommended)

```bash
npx vercel
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## License

© 2026 NepaliSaga Media Pvt. Ltd. All rights reserved.
