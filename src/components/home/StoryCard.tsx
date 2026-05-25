import Link from 'next/link'
import { Clock, Eye } from 'lucide-react'
import Tag from '@/components/shared/Tag'
import type { Article } from '@/types'
import { cn } from '@/lib/utils'
import type { ReactElement } from 'react'

interface StoryCardProps {
  article: Article
  variant?: 'grid' | 'feature' | 'compact'
}

const tagVariantMap: Record<string, 'red' | 'green' | 'blue' | 'gold' | 'dark'> = {
  Economy: 'green',
  Markets: 'green',
  Technology: 'blue',
  Politics: 'red',
  Culture: 'dark',
  Climate: 'red',
  Sports: 'gold',
}

function getSectionThumb(article: Article): ReactElement {
  const section = article.section
  const thumbs: Record<string, ReactElement> = {
    Economy: (
      <svg viewBox="0 0 260 130" className="w-full h-full">
        <polyline points="20,100 50,80 80,90 110,60 140,70 170,45 200,55 220,30 250,40" fill="none" stroke="rgba(76,217,100,.7)" strokeWidth="2.5" />
        <polyline points="20,100 50,80 80,90 110,60 140,70 170,45 200,55 220,30 250,40 250,130 20,130" fill="rgba(76,217,100,.08)" />
        <text x="50%" y="78" textAnchor="middle" fill="rgba(255,255,255,.06)" fontSize="28" fontFamily="Georgia,serif" fontWeight="700">NEPSE</text>
      </svg>
    ),
    Technology: (
      <svg viewBox="0 0 260 130" className="w-full h-full">
        <circle cx="130" cy="60" r="38" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
        <circle cx="130" cy="60" r="22" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.07)" strokeWidth="1" />
        <text x="130" y="70" textAnchor="middle" fill="rgba(255,255,255,.1)" fontSize="24">🌐</text>
      </svg>
    ),
    Culture: (
      <svg viewBox="0 0 260 130" className="w-full h-full">
        <polygon points="130,18 148,72 102,44 158,44 112,72" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
        <circle cx="130" cy="48" r="28" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="1" />
        <text x="50%" y="110" textAnchor="middle" fill="rgba(255,255,255,.1)" fontSize="9" fontFamily="sans-serif" letterSpacing="3">CULTURE</text>
      </svg>
    ),
    Climate: (
      <svg viewBox="0 0 260 130" className="w-full h-full">
        <defs>
          <radialGradient id="cg1" cx="40%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1B7A3E" stopOpacity=".4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#cg1)" />
        <text x="130" y="75" textAnchor="middle" fill="rgba(255,255,255,.07)" fontSize="48">🌊</text>
      </svg>
    ),

  }
  return thumbs[section] ?? (
    <svg viewBox="0 0 260 130" className="w-full h-full">
      <text x="130" y="75" textAnchor="middle" fill="rgba(255,255,255,.07)" fontSize="40">⚡</text>
    </svg>
  )
}

export default function StoryCard({ article, variant = 'grid' }: StoryCardProps) {
  const tagVariant = tagVariantMap[article.section] ?? 'red'

  if (variant === 'feature') {
    return (
      <Link href={`/article/${article.slug}`}>
        <article className="bg-white border border-[#DDD9D0] rounded-[4px] overflow-hidden cursor-pointer group transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(26,18,8,.10)] flex mb-4">
          <div className="w-[200px] md:w-[240px] shrink-0 relative overflow-hidden" style={{ background: article.bg }}>
            <div className="w-full h-full min-h-[130px] group-hover:scale-105 transition-transform duration-500">
              {getSectionThumb(article)}
            </div>
          </div>
          <div className="p-4 md:p-[18px] flex-1 min-w-0">
            <div className="text-[9.5px] tracking-[0.16em] uppercase text-[#B5281E] font-bold mb-1.5">{article.cat}</div>
            <h3 className="font-serif text-[15px] md:text-[16px] leading-[1.35] font-semibold text-[#1A1208] mb-2 group-hover:text-[#B5281E] transition-colors">
              {article.title}
            </h3>
            <p className="text-[12px] text-[#3D3326] leading-relaxed mb-3 line-clamp-2">{article.body[0]}</p>
            <div className="flex items-center gap-2 text-[10px] text-[#7A7060] border-t border-[#EBE7E0] pt-2">
              <Clock className="w-3 h-3" />
              <span>{article.publishedAt}</span>
              <span>·</span>
              <Eye className="w-3 h-3" />
              <span>{article.reads} reads</span>
              <span className="ml-auto">
                <Tag variant={tagVariant}>{article.section}</Tag>
              </span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/article/${article.slug}`}>
      <article className="bg-white border border-[#DDD9D0] rounded-[4px] overflow-hidden cursor-pointer group transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(26,18,8,.10)] h-full flex flex-col">
        <div className="h-[130px] relative overflow-hidden" style={{ background: article.bg }}>
          <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
            {getSectionThumb(article)}
          </div>
          <div className="absolute top-2 left-2">
            <Tag variant={tagVariant}>{article.section}</Tag>
          </div>
        </div>
        <div className="p-3.5 flex-1 flex flex-col">
          <div className="text-[9.5px] tracking-[0.16em] uppercase text-[#B5281E] font-bold mb-1.5">{article.cat}</div>
          <h3 className="font-serif text-[14px] leading-[1.38] font-semibold text-[#1A1208] mb-2 group-hover:text-[#B5281E] transition-colors flex-1">
            {article.title}
          </h3>
          <ul className="space-y-1 mb-3">
            {article.bullets.slice(0, 2).map((b, i) => (
              <li key={i} className="text-[11px] text-[#3D3326] pl-3 relative leading-[1.5]">
                <span className="absolute left-0 text-[#B5281E] font-bold">›</span>
                {b}
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center text-[10px] text-[#7A7060] border-t border-[#EBE7E0] pt-2 mt-auto">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{article.publishedAt}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{article.reads}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
