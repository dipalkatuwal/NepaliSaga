// src/lib/cms/adapter.ts
// Data adapter — returns Sanity GraphQL data when configured, static fallback otherwise.
// This is the ONLY import your pages/components need. CMS can be toggled on/off
// purely via env vars — no code changes required.
//
// Usage:
//   import { getArticles, getArticleBySlug } from '@/lib/cms/adapter'
//   const articles = await getArticles()

import { isSanityConfigured, sanityGraphQL } from './sanity.client'
import {
  ALL_ARTICLES_QUERY,
  ARTICLE_BY_SLUG_QUERY,
  ARTICLES_BY_SECTION_QUERY,
  ALL_SLUGS_QUERY,
} from './queries'

// Static data fallback
import {
  articles as staticArticles,
  getArticleBySlug as getStaticArticleBySlug,
} from '@/data/articles'
import type { Article } from '@/types'

// ------------------------------------------------------------------
// Raw GraphQL response shapes
// ------------------------------------------------------------------

interface RawAuthor {
  name: string
  desk?: string
}

interface RawTimeline {
  date: string
  event: string
}

interface RawArticle {
  _id: string
  slug: { current: string }
  cat: string
  section: string
  title: string
  author?: RawAuthor
  publishedAt: string
  readTime: string
  reads: string
  icon: string
  gradient: string
  bullets: string[]
  body: string[]
  timeline: RawTimeline[]
  tags: string[]
  featured?: boolean
}

interface AllArticlesResponse {
  allArticle: RawArticle[]
}

interface AllSlugsResponse {
  allArticle: { slug: { current: string } }[]
}

// ------------------------------------------------------------------
// Normaliser: converts raw GraphQL doc → Article shape
// ------------------------------------------------------------------
function normaliseArticle(raw: RawArticle): Article {
  const authorName = raw.author?.name ?? ''
  const desk       = raw.author?.desk ?? ''

  return {
    id:          parseInt(raw._id.slice(-4), 16) % 1000,
    slug:        raw.slug?.current ?? '',
    cat:         raw.cat ?? '',
    section:     raw.section ?? '',
    title:       raw.title ?? '',
    byline:      [authorName, desk, raw.publishedAt].filter(Boolean).join(' · '),
    author:      authorName,
    publishedAt: raw.publishedAt ?? '',
    readTime:    raw.readTime ?? '',
    reads:       raw.reads ?? '',
    bg:          raw.gradient ?? '',
    icon:        raw.icon ?? '',
    bullets:     raw.bullets ?? [],
    body:        raw.body ?? [],
    timeline:    raw.timeline ?? [],
    tags:        raw.tags ?? [],
    featured:    raw.featured ?? false,
  }
}

// ------------------------------------------------------------------
// Public API
// ------------------------------------------------------------------

/** All articles, newest first */
export async function getArticles(): Promise<Article[]> {
  if (!isSanityConfigured) return staticArticles

  try {
    const data = await sanityGraphQL<AllArticlesResponse>(ALL_ARTICLES_QUERY)
    return data.allArticle.map(normaliseArticle)
  } catch (err) {
    console.warn('[NepaliSaga] Sanity GraphQL fetch failed, falling back to static data:', err)
    return staticArticles
  }
}

/** Single article by URL slug */
export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  if (!isSanityConfigured) return getStaticArticleBySlug(slug)

  try {
    const data = await sanityGraphQL<AllArticlesResponse>(
      ARTICLE_BY_SLUG_QUERY,
      { slug },
    )
    const raw = data.allArticle[0]
    return raw ? normaliseArticle(raw) : undefined
  } catch (err) {
    console.warn('[NepaliSaga] Sanity GraphQL fetch failed, falling back to static data:', err)
    return getStaticArticleBySlug(slug)
  }
}

/** Articles for a section page */
export async function getArticlesBySection(section: string): Promise<Article[]> {
  if (!isSanityConfigured) {
    return staticArticles.filter(
      (a) => a.section.toLowerCase() === section.toLowerCase()
    )
  }

  try {
    const data = await sanityGraphQL<AllArticlesResponse>(
      ARTICLES_BY_SECTION_QUERY,
      { section },
    )
    return data.allArticle.map(normaliseArticle)
  } catch (err) {
    console.warn('[NepaliSaga] Sanity section fetch failed, falling back:', err)
    return staticArticles.filter(
      (a) => a.section.toLowerCase() === section.toLowerCase()
    )
  }
}

/** Static slugs for generateStaticParams — always from static data at build time */
export async function getAllSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return staticArticles.map((a) => a.slug)

  try {
    const data = await sanityGraphQL<AllSlugsResponse>(ALL_SLUGS_QUERY)
    return data.allArticle.map((i) => i.slug.current)
  } catch {
    return staticArticles.map((a) => a.slug)
  }
}
