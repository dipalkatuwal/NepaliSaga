'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, TrendingUp, Clock, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import SectionHeader from '@/components/shared/SectionHeader'
import StoryCard from '@/components/home/StoryCard'
import { articles } from '@/data/articles'
import { searchArticles, highlightText } from '@/lib/search'
import type { Article } from '@/types'
import type { SearchResult } from '@/lib/search'

const SUGGESTIONS = ['Politics', 'NEPSE', 'Hydropower', 'Climate', 'Remittance', 'Gunla', 'Digital ID', 'Gold']

interface SearchResultsProps {
  initialQuery: string
}

function HighlightedTitle({ result }: { result: SearchResult }) {
  const titleMatch = result.matches.find((m) => m.key === 'title')
  if (!titleMatch) return <span>{result.item.title}</span>

  const segments = highlightText(result.item.title, titleMatch.indices)
  return (
    <>
      {segments.map((seg, i) =>
        seg.highlight ? (
          <mark key={i} className="bg-[#FEF08A] text-[#1A1208] rounded-[2px] px-[1px] not-italic">
            {seg.text}
          </mark>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  )
}

function SearchResultCard({ result }: { result: SearchResult }) {
  const { item } = result
  const relevanceLabel =
    result.score < 0.15 ? 'Best match' : result.score < 0.30 ? 'Good match' : null

  return (
    <Link
      href={`/article/${item.slug}`}
      className="group flex gap-4 py-5 border-b border-[#EBE7E0] last:border-0 hover:bg-[#F2EFE9] -mx-3 px-3 rounded-[3px] transition-colors"
    >
      {/* Colour swatch */}
      <div
        className="shrink-0 w-16 h-14 rounded-[3px] flex items-center justify-center text-2xl"
        style={{ background: item.bg }}
      >
        <span className="opacity-50">{item.icon}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[9px] tracking-[0.16em] uppercase text-[#B5281E] font-bold">
            {item.cat}
          </span>
          {relevanceLabel && (
            <span className="text-[8.5px] tracking-[0.1em] uppercase text-[#4D7C0F] font-semibold border border-[#BBF7D0] bg-[#F0FDF4] px-1.5 py-[1px] rounded-[2px]">
              {relevanceLabel}
            </span>
          )}
        </div>
        <h3 className="font-serif text-[14px] font-bold text-[#1A1208] leading-[1.4] group-hover:text-[#B5281E] transition-colors mb-1.5 line-clamp-2">
          <HighlightedTitle result={result} />
        </h3>
        <p className="text-[11.5px] text-[#7A7060] leading-[1.5] line-clamp-1">
          {item.bullets[0]}
        </p>
        <div className="flex items-center gap-3 mt-1.5 text-[10px] text-[#A09888]">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {item.publishedAt}
          </span>
          <span>{item.readTime}</span>
          <span>{item.reads} reads</span>
        </div>
      </div>

      <ChevronRight className="w-4 h-4 text-[#A09888] group-hover:text-[#B5281E] shrink-0 self-center transition-colors" />
    </Link>
  )
}

export default function SearchResults({ initialQuery }: SearchResultsProps) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<SearchResult[]>(() =>
    searchArticles(articles, initialQuery)
  )
  const [isTyping, setIsTyping] = useState(false)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const runSearch = useCallback((val: string) => {
    setResults(searchArticles(articles, val))
    setIsTyping(false)
    const url = val.trim() ? `/search?q=${encodeURIComponent(val.trim())}` : '/search'
    router.replace(url, { scroll: false })
  }, [router])

  function handleChange(val: string) {
    setQuery(val)
    setIsTyping(true)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => runSearch(val), 180)
  }

  function handleSuggestion(s: string) {
    setQuery(s)
    runSearch(s)
    inputRef.current?.focus()
  }

  function handleClear() {
    setQuery('')
    setResults([])
    setIsTyping(false)
    router.replace('/search', { scroll: false })
    inputRef.current?.focus()
  }

  const hasQuery = query.trim().length > 0

  return (
    <div>
      {/* Header */}
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
            placeholder="Search stories, topics, authors, sections…"
            className="flex-1 px-3 py-4 text-[16px] text-[#1A1208] placeholder-[#A09888] bg-transparent border-none outline-none"
          />
          {isTyping && (
            <span className="mr-3 text-[10px] text-[#A09888] tracking-wide">Searching…</span>
          )}
          {hasQuery && !isTyping && (
            <button
              onClick={handleClear}
              className="mr-3 p-1 rounded-full hover:bg-[#F2EFE9] text-[#7A7060] hover:text-[#1A1208] transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Tip */}
        {hasQuery && (
          <p className="text-[10.5px] text-[#A09888] mt-2">
            Tip: use <code className="bg-[#F2EFE9] px-1 rounded text-[#3D3326]">'exact phrase</code> for exact match,{' '}
            <code className="bg-[#F2EFE9] px-1 rounded text-[#3D3326]">!exclude</code> to exclude a word
          </p>
        )}

        {/* Suggestions (shown when empty) */}
        {!hasQuery && (
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-[11px] text-[#A09888] tracking-[0.06em] mr-1 self-center flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> Trending:
            </span>
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
      {hasQuery && !isTyping && (
        <>
          {results.length > 0 ? (
            <>
              <SectionHeader
                title={`${results.length} result${results.length === 1 ? '' : 's'} for "${query}"`}
                accent="red"
              />
              <div>
                {results.map((r) => (
                  <SearchResultCard key={r.item.id} result={r} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F2EFE9] flex items-center justify-center mb-5">
                <Search className="w-7 h-7 text-[#A09888]" />
              </div>
              <h2 className="font-serif text-[20px] font-bold text-[#1A1208] mb-2">
                No stories found for &ldquo;{query}&rdquo;
              </h2>
              <p className="text-[13px] text-[#7A7060] mb-6 max-w-sm">
                Try a different keyword, a section name like &ldquo;Politics&rdquo;, or an author name.
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

      {/* Default: all articles browsing when nothing searched */}
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
