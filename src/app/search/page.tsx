import type { Metadata } from 'next'
import SearchResults from '@/components/search/SearchResults'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Search — ${SITE_NAME}`,
  description: 'Search all NepaliSaga articles, topics, and stories.',
}

interface Props {
  searchParams: Promise<{ q?: string }>
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams
  const query = q?.trim() ?? ''

  return (
    <>
      <main className="bg-[#FAF8F5] min-h-screen">
        <div className="max-w-[1260px] mx-auto px-4 md:px-6 py-8">
          <SearchResults initialQuery={query} />
        </div>
      </main>
    </>
  )
}
