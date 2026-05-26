import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getArticleBySlug, getAllSlugs } from '@/lib/cms/adapter'
import ArticleView from '@/components/article/ArticleView'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return {}

  const description = article.bullets[0]
  const canonicalUrl = `${SITE_URL}/article/${slug}`

  // Dynamic OG image via /og route
  const ogImageUrl =
    `${SITE_URL}/og?` +
    new URLSearchParams({
      title:   article.title,
      cat:     article.cat,
      author:  article.author,
      section: article.section,
      date:    article.publishedAt,
    }).toString()

  return {
    title: article.title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: article.title,
      description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      url: canonicalUrl,
      siteName: SITE_NAME,
      tags: article.tags,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
      images: [ogImageUrl],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) notFound()

  // JSON-LD: NewsArticle schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.bullets[0],
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: article.publishedAt,
    keywords: article.tags.join(', '),
    url: `${SITE_URL}/article/${slug}`,
    articleSection: article.section,
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og?title=${encodeURIComponent(article.title)}&section=${encodeURIComponent(article.section)}`,
      width: 1200,
      height: 630,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#FAF8F5]">
        <ArticleView article={article} />
      </main>
    </>
  )
}
