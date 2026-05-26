# NepaliSaga — Feature Setup Guide

Three features have been implemented. This doc explains how to activate each.

---

## 2 · CMS — Sanity

The site now has a full Sanity adapter. Static `src/data/articles.ts` is the automatic fallback — no Sanity account required. Once you're ready to switch to a live CMS:

### One-time setup

```bash
# 1. Install Sanity CLI
npm install -g sanity@latest

# 2. Initialise a studio inside the project
npx sanity@latest init --project nepalisaga --dataset production

# 3. Register the schemas (copy into your studio's schemaTypes)
#    File: sanity/schemas/article.ts  ← already in this repo
```

### Environment variables (`.env.local`)

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_read_token          # only needed for draft previews
```

The adapter (`src/lib/cms/adapter.ts`) auto-detects whether Sanity is configured via
`NEXT_PUBLIC_SANITY_PROJECT_ID`. Leave it unset → static fallback. Set it → Sanity.

### Pages that use the adapter

| File | Change |
|------|--------|
| `src/app/article/[slug]/page.tsx` | `getArticleBySlug`, `getAllSlugs` |
| `src/app/sitemap.ts` | `getAllSlugs` |

Content revalidates every **60 seconds** via Next.js ISR.

---

## 3 · Search — Fuse.js fuzzy search

No setup required. Ships and works out of the box.

### What changed

- `src/lib/search.ts` — Fuse.js index builder + `searchArticles()` + `highlightText()`
- `src/components/search/SearchResults.tsx` — rewired to use fuzzy search

### Features

- **Fuzzy matching** — typos and partial words still return results
- **Weighted fields** — title > bullets > body > cat > tags > author
- **Match highlighting** — matched characters are highlighted in yellow in the results list
- **Debounced input** — 180ms debounce, URL synced via `router.replace`
- **Extended search syntax** — users can type:
  - `'exact` for exact phrase match
  - `!exclude` to exclude a word
  - `^prefix` to match start of field

### Fuse.js threshold

Adjust `threshold` in `src/lib/search.ts` (line ~34):
- `0.2` = strict (fewer, more accurate results)
- `0.4` = default (balanced)
- `0.6` = loose (more results, more noise)

---

## 6 · SEO

All implemented, zero config required for static use.

### What was added

| File | What it does |
|------|-------------|
| `src/app/og/route.tsx` | Edge-rendered OG image at `/og?title=…&cat=…&author=…` |
| `src/app/sitemap.ts` | Auto-generates `/sitemap.xml` with all routes + article slugs |
| `src/app/robots.ts` | Generates `/robots.txt` with sitemap pointer |
| `src/app/layout.tsx` | WebSite + NewsMediaOrganization JSON-LD in `<head>` |
| `src/app/article/[slug]/page.tsx` | NewsArticle JSON-LD + OG image per article |
| `src/components/layout/SectionPage.tsx` | BreadcrumbList JSON-LD per section + OG image |

### OG image preview

Visit locally: `http://localhost:3000/og?title=Your+Headline&cat=Politics&author=Jane+Doe&section=Politics`

Produces a 1200×630 image in NepaliSaga's brand colours.

### Update SITE_URL

Before deploying, set the real domain in `src/lib/constants.ts`:

```ts
export const SITE_URL = 'https://nepalisaga.com'
```

This flows into all canonical URLs, OG image URLs, sitemap, and JSON-LD automatically.

---

## Dependency summary

```bash
# Already installed by this update:
fuse.js           # fuzzy search
next-sanity       # Sanity client + ISR helpers
@sanity/image-url # future image handling
next-sitemap      # (installed but not used — native Next.js sitemap used instead)
```
