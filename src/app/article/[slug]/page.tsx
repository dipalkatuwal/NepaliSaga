import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getArticleBySlug, articles } from '@/data/articles'
import Header from '@/components/layout/Header'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'
import ArticleView from '@/components/article/ArticleView'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.bullets[0],
    openGraph: {
      title: article.title,
      description: article.bullets[0],
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      url: `${SITE_URL}/article/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.bullets[0],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  return (
    <>
      <TopBar />
      <Header />
      <main className="min-h-screen bg-[#FAF8F5]">
        <ArticleView article={article} />
      </main>
      <Footer />
    </>
  )
}
