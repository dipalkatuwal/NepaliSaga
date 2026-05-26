// src/app/sitemap.ts
// Next.js generates /sitemap.xml automatically from this file.
// Includes static routes + every article slug.

import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/cms/adapter'
import { SITE_URL } from '@/lib/constants'

const STATIC_ROUTES = [
  '',          // homepage
  '/politics',
  '/economy',
  '/markets',
  '/climate',
  '/technology',
  '/culture',
  '/world',
  '/opinion',
  '/multimedia',
  '/search',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articleSlugs = await getAllSlugs()

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'hourly' : 'daily',
    priority: path === '' ? 1.0 : 0.8,
  }))

  const articleEntries: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${SITE_URL}/article/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [...staticEntries, ...articleEntries]
}
