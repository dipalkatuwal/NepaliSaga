import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/shared/SectionHeader'
import StoryCard from '@/components/home/StoryCard'
import { SidebarAd } from '@/components/ads/AdBanner'
import NEPSEWidget from '@/components/widgets/NEPSEWidget'
import TrendingWidget from '@/components/widgets/TrendingWidget'
import NewsletterWidget from '@/components/widgets/NewsletterWidget'
import { articles } from '@/data/articles'
import type { Article } from '@/types'
import { SITE_NAME } from '@/lib/constants'

interface SectionConfig {
  slug: string
  label: string
  description: string
  accent?: 'red' | 'gold' | 'green' | 'ink'
  /** Which article.section or article.tags values to match */
  match: string[]
  /** If true, show all articles when none match (fallback for stub sections) */
  fallback?: boolean
}

export const SECTION_CONFIGS: Record<string, SectionConfig> = {
  politics: {
    slug: 'politics',
    label: 'Politics',
    description: 'Government, diplomacy, elections, and power in Nepal.',
    accent: 'red',
    match: ['Politics', 'Diplomacy'],
  },
  economy: {
    slug: 'economy',
    label: 'Economy',
    description: "Markets, trade, fiscal policy, and Nepal's economic story.",
    accent: 'green',
    match: ['Economy', 'Markets', 'Gold', 'Commodities', 'Remittance'],
  },
  markets: {
    slug: 'markets',
    label: 'Markets',
    description: 'NEPSE, forex rates, bullion, and financial data.',
    accent: 'green',
    match: ['Markets', 'NEPSE', 'Economy'],
  },
  climate: {
    slug: 'climate',
    label: 'Climate',
    description: "Environment, disaster, floods, and Nepal's climate frontline.",
    accent: 'ink',
    match: ['Climate', 'Disaster', 'Floods'],
  },
  technology: {
    slug: 'technology',
    label: 'Technology',
    description: 'Digital Nepal, startups, and tech policy.',
    accent: 'ink',
    match: ['Technology', 'Digital', 'Governance'],
  },
  culture: {
    slug: 'culture',
    label: 'Culture',
    description: 'Heritage, arts, festivals, and living traditions of Nepal.',
    accent: 'gold',
    match: ['Culture', 'Heritage', 'UNESCO', 'Tourism'],
  },
  world: {
    slug: 'world',
    label: 'World',
    description: "Nepal's place in the world -- diplomacy, trade, and global events.",
    accent: 'ink',
    match: ['Diplomacy', 'India', 'Politics'],
    fallback: true,
  },
  opinion: {
    slug: 'opinion',
    label: 'Opinion',
    description: 'Analysis, commentary, and editorial perspective.',
    accent: 'red',
    match: ['Politics', 'Economy'],
    fallback: true,
  },
  multimedia: {
    slug: 'multimedia',
    label: 'Multimedia',
    description: 'Video, photo essays, and visual journalism.',
    accent: 'red',
    match: ['Culture', 'Climate'],
    fallback: true,
  },
}

function getArticlesForSection(config: SectionConfig): Article[] {
  const matched = articles.filter((a) =>
    config.match.some(
      (m) =>
        a.section === m ||
        a.tags.includes(m) ||
        a.cat.includes(m)
    )
  )
  if (matched.length === 0 && config.fallback) return articles
  return matched.length > 0 ? matched : articles
}

interface SectionPageProps {
  section: string
}

export function generateSectionMetadata(section: string): Metadata {
  const config = SECTION_CONFIGS[section]
  if (!config) return {}
  return {
    title: `${config.label} -- ${SITE_NAME}`,
    description: config.description,
  }
}

export default function SectionPage({ section }: SectionPageProps) {
  const config = SECTION_CONFIGS[section]
  if (!config) return null

  const sectionArticles = getArticlesForSection(config)
  const hero = sectionArticles[0]
  const rest = sectionArticles.slice(1)

  return (
    <>
      <main className="bg-[#FAF8F5] min-h-screen">
        <div className="max-w-[1260px] mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">

            {/* Feed */}
            <div className="min-w-0">
              {sectionArticles.length === 0 ? (
                <EmptySection section={config.label} />
              ) : (
                <>
                  {/* Hero article */}
                  {hero && (
                    <>
                      <SectionHeader title={`Latest in ${config.label}`} accent={config.accent} />
                      <StoryCard article={hero} variant="feature" />
                    </>
                  )}

                  {/* Grid */}
                  {rest.length > 0 && (
                    <>
                      <SectionHeader title="More Stories" className="mt-6" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {rest.map((a) => (
                          <StoryCard key={a.id} article={a} variant="grid" />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Stub notice for fallback sections */}
                  {config.fallback && (
                    <div className="mt-8 rounded-[4px] border border-[#DDD9D0] bg-white p-6 text-center">
                      <div className="text-[11px] tracking-[0.16em] uppercase text-[#7A7060] mb-2">Coming soon</div>
                      <p className="text-[13px] text-[#3D3326]">
                        Dedicated {config.label} coverage is on its way. In the meantime, here are our most relevant recent stories.
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <aside className="w-full space-y-5">
              <SidebarAd />
              <NEPSEWidget />
              <TrendingWidget />
              <NewsletterWidget />
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}

function EmptySection({ section }: { section: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="text-[11px] tracking-[0.2em] uppercase text-[#A09888] mb-3">No stories yet</div>
      <h2 className="font-serif text-[22px] font-bold text-[#1A1208] mb-3">{section} coverage coming soon</h2>
      <p className="text-[13px] text-[#7A7060] mb-6 max-w-sm">
        Our journalists are working on it. Check back soon, or browse all our latest stories.
      </p>
      <Link
        href="/"
        className="text-[11px] tracking-[0.1em] uppercase font-semibold text-[#B5281E] hover:underline"
      >
        ← Back to Today's Stories
      </Link>
    </div>
  )
}
