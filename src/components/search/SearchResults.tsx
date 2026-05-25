'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'
import StoryCard from '@/components/home/StoryCard'
import SectionHeader from '@/components/shared/SectionHeader'
import { articles } from '@/data/articles'
import type { Article } from '@/types'

function searchArticles(query: string): Article[] {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  return articles.filter((a) => {
    return (
      a.title.toLowerCase().includes(q) ||
      a.cat.toLowerCase().includes(q) ||
      a.section.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q)) ||
      a.bullets.some((b) => b.toLowerCase().includes(q)) ||
      a.body.some((p) => p.toLowerCase().includes(q))
    )
  })
}

const SUGGESTIONS = ['Politics', 'NEPSE', 'Hydropower', 'Climate', 'Remittance', 'Gunla', 'Digital ID', 'Gold']

interface SearchResultsProps {
  initialQuery: string
}

export default function SearchResults({ initialQuery }: SearchResultsProps) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<Article[]>(() => searchArticles(initialQuery))

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleChange(val: string) {
    setQuery(val)
    setResults(searchArticles(val))
    // Update URL without page reload
    const url = val.trim() ? `/search?q=${encodeURIComponent(val.trim())}` : '/search'
    router.replace(url, { scroll: false })
  }

  function handleSuggestion(s: string) {
    handleChange(s)
    inputRef.current?.focus()
  }

  function handleClear() {
    handleChange('')
    inputRef.current?.focus()
  }

  const hasQuery = query.trim().length > 0

  return (
    <div>
      {/* Search header */}
      <div className="mb-8">
        <div className="text-[9px] tracking-[0.28em] uppercase text-[#A09888] mb-3">NepaliSaga</div>
        <h1 className="font-serif text-[28px] md:text-[36px] font-black text-[#1A1208] mb-6">
          Search Stories
        </h1>

        {/* Search input */}
        <div className="relative flex items-center bg-white border-2 border-[#1A1208] rounded-[4px] focus-within:border-[#B5281E] transition-colors">
          <Search className="w-5 h-5 text-[#A09888] ml-4 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search sagas, topics, people, sections…"
            className="flex-1 px-3 py-4 text-[16px] text-[#1A1208] placeholder-[#A09888] bg-transparent border-none outline-none font-[DM_Sans]"
          />
          {hasQuery && (
            <button
              onClick={handleClear}
              className="mr-3 p-1 rounded-full hover:bg-[#F2EFE9] text-[#7A7060] hover:text-[#1A1208] transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Suggestions (shown when empty) */}
        {!hasQuery && (
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-[11px] text-[#A09888] tracking-[0.06em] mr-1 self-center">Try:</span>
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => handleSuggestion(s)}
                className="text-[11.5px] px-3 py-1.5 rounded-[3px] border border-[#DDD9D0] text-[#3D3326] hover:border-[#B5281E] hover:text-[#B5281E] hover:bg-[#FEF5F4] transition-all font-medium"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results */}
      {hasQuery && (
        <>
          {results.length > 0 ? (
            <>
              <SectionHeader
                title={`${results.length} result${results.length === 1 ? '' : 's'} for "${query}"`}
                accent="red"
              />
              <div className="space-y-0">
                {results.map((a) => (
                  <StoryCard key={a.id} article={a} variant="feature" />
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F2EFE9] flex items-center justify-center mb-5">
                <Search className="w-7 h-7 text-[#A09888]" />
              </div>
              <h2 className="font-serif text-[20px] font-bold text-[#1A1208] mb-2">
                No stories found for "{query}"
              </h2>
              <p className="text-[13px] text-[#7A7060] mb-6 max-w-sm">
                Try a different keyword, a section name like "Politics", or an author name.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSuggestion(s)}
                    className="text-[11.5px] px-3 py-1.5 rounded-[3px] border border-[#DDD9D0] text-[#3D3326] hover:border-[#B5281E] hover:text-[#B5281E] transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Default: show all articles when nothing searched */}
      {!hasQuery && (
        <>
          <SectionHeader title="All Stories" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((a) => (
              <StoryCard key={a.id} article={a} variant="grid" />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
