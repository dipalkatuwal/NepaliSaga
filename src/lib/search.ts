// src/lib/search.ts
// Fuzzy full-text search powered by Fuse.js
// Falls back to exact substring matching during SSR

import Fuse, { type IFuseOptions, type FuseResult } from 'fuse.js'
import type { Article } from '@/types'

export interface SearchResult {
  item: Article
  score: number
  matches: SearchMatch[]
}

export interface SearchMatch {
  key: string
  value: string
  indices: readonly [number, number][]
}

const FUSE_OPTIONS: IFuseOptions<Article> = {
  // Keys with weights — title is most important
  keys: [
    { name: 'title',   weight: 0.40 },
    { name: 'bullets', weight: 0.20 },
    { name: 'body',    weight: 0.15 },
    { name: 'cat',     weight: 0.10 },
    { name: 'tags',    weight: 0.10 },
    { name: 'author',  weight: 0.05 },
  ],
  threshold: 0.40,        // 0 = exact, 1 = match anything
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2,
  ignoreLocation: true,   // search anywhere in the string, not just prefix
  useExtendedSearch: true, // enables !not, 'exact, ^prefix, .suffix$
}

let fuseInstance: Fuse<Article> | null = null

export function buildSearchIndex(articles: Article[]): Fuse<Article> {
  fuseInstance = new Fuse(articles, FUSE_OPTIONS)
  return fuseInstance
}

export function getOrBuildIndex(articles: Article[]): Fuse<Article> {
  if (!fuseInstance) fuseInstance = buildSearchIndex(articles)
  return fuseInstance
}

export function searchArticles(
  articles: Article[],
  query: string,
  limit = 20
): SearchResult[] {
  if (!query.trim()) return []

  const fuse = getOrBuildIndex(articles)
  const raw: FuseResult<Article>[] = fuse.search(query, { limit })

  return raw.map((r) => ({
    item: r.item,
    score: r.score ?? 1,
    matches: (r.matches ?? []).map((m) => ({
      key: m.key ?? '',
      value: m.value ?? '',
      indices: m.indices,
    })),
  }))
}

/** Highlight matched substrings in a string given Fuse match indices */
export function highlightText(
  text: string,
  indices: readonly [number, number][]
): { text: string; highlight: boolean }[] {
  if (!indices.length) return [{ text, highlight: false }]

  const segments: { text: string; highlight: boolean }[] = []
  let cursor = 0

  for (const [start, end] of indices) {
    if (cursor < start) {
      segments.push({ text: text.slice(cursor, start), highlight: false })
    }
    segments.push({ text: text.slice(start, end + 1), highlight: true })
    cursor = end + 1
  }

  if (cursor < text.length) {
    segments.push({ text: text.slice(cursor), highlight: false })
  }

  return segments
}
