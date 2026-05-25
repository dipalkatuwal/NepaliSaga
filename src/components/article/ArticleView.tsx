'use client'
import Link from 'next/link'
import { ArrowLeft, Share2, Clock, Eye } from 'lucide-react'
import type { Article } from '@/types'
import { articles } from '@/data/articles'


interface ArticleViewProps {
  article: Article
}

export default function ArticleView({ article }: ArticleViewProps) {
  const related = articles.filter((a) => a.id !== article.id).slice(0, 3)

  return (
    <>
      

      <div className="max-w-[780px] mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.08em] uppercase text-[#7A7060] hover:text-[#B5281E] transition-colors mb-6">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to NepaliSaga
        </Link>

        {/* Category */}
        <div className="text-[9.5px] tracking-[0.2em] uppercase text-[#B5281E] font-bold mb-3">
          {article.cat}
        </div>

        {/* Title */}
        <h1 className="font-serif text-[26px] md:text-[34px] lg:text-[40px] leading-[1.18] font-black text-[#1A1208] mb-4">
          {article.title}
        </h1>

        {/* Byline — date, read time, reads only (no author) */}
        <div className="flex flex-wrap items-center gap-2 text-[11.5px] text-[#7A7060] mb-6 pb-6 border-b border-[#DDD9D0]">
          <span>{article.publishedAt}</span>
          <span className="text-[#DDD9D0]">·</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
          <span className="text-[#DDD9D0]">·</span>
          <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {article.reads} reads</span>
          <div className="flex items-center gap-1.5 ml-auto">
            <button className="p-1.5 rounded border border-[#DDD9D0] hover:bg-[#F2EFE9] transition-colors" aria-label="Share">
              <Share2 className="w-3.5 h-3.5 text-[#7A7060]" />
            </button>
          </div>
        </div>

        {/* Hero image */}
        <div
          className="w-full h-[200px] md:h-[280px] rounded-[4px] overflow-hidden mb-6 flex items-center justify-center text-[60px] relative"
          style={{ background: article.bg }}
          role="img"
          aria-label={`Hero image for: ${article.title}`}
        >
          <span className="opacity-30 text-[80px]">{article.icon}</span>
          <div className="absolute bottom-3 left-4 text-[9px] tracking-[0.15em] uppercase text-white/40">
            Illustration · NepaliSaga
          </div>
        </div>

        {/* TL;DR */}
        <div className="bg-[#FAF8F5] border border-[#DDD9D0] border-l-4 border-l-[#B5281E] rounded-[3px] p-4 mb-7">
          <div className="text-[9px] tracking-[0.25em] uppercase text-[#A09888] mb-3 font-bold">TL;DR — 5-Second Scan</div>
          <ul className="space-y-2">
            {article.bullets.map((b, i) => (
              <li key={i} className="text-[13px] text-[#3D3326] pl-4 relative leading-[1.55]">
                <span className="absolute left-0 text-[#B5281E] font-bold">—</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Body */}
        <div className="article-prose">
          {article.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-10 mb-10 border-t border-[#DDD9D0] pt-8">
          <h3 className="font-serif text-[18px] font-bold text-[#1A1208] mb-6">The Saga — How This Story Developed</h3>
          <div className="space-y-0">
            {article.timeline.map((t, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#B5281E] shrink-0 mt-1" />
                  {i < article.timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[#DDD9D0] mt-1 mb-0 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-6">
                  <div className="text-[10.5px] font-bold tracking-[0.08em] text-[#B5281E] uppercase mb-1">{t.date}</div>
                  <div className="text-[13.5px] text-[#1A1208] font-medium leading-[1.5]">{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[#DDD9D0]">
          {article.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded border border-[#DDD9D0] text-[#7A7060] hover:border-[#B5281E] hover:text-[#B5281E] transition-colors cursor-pointer">
              {tag}
            </span>
          ))}
        </div>

        {/* Related */}
        <div className="mt-10">
          <h3 className="font-serif text-[18px] font-bold text-[#1A1208] mb-5 pb-2.5 border-b-2 border-[#B5281E]">
            More From NepaliSaga
          </h3>
          <div className="space-y-4">
            {related.map((r) => (
              <Link key={r.id} href={`/article/${r.slug}`} className="flex gap-4 group">
                <div
                  className="w-20 h-16 rounded-[3px] shrink-0 flex items-center justify-center text-2xl"
                  style={{ background: r.bg }}
                >
                  <span className="opacity-50">{r.icon}</span>
                </div>
                <div>
                  <div className="text-[9px] tracking-[0.14em] uppercase text-[#B5281E] font-bold mb-1">{r.cat}</div>
                  <div className="text-[13px] font-semibold text-[#1A1208] leading-[1.4] group-hover:text-[#B5281E] transition-colors line-clamp-2 font-serif">
                    {r.title}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-[#A09888] mt-1">
                    <Clock className="w-3 h-3" />
                    <span>{r.publishedAt}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
