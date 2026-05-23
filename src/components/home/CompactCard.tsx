import Link from 'next/link'
import { Clock, Eye } from 'lucide-react'
import type { Article } from '@/types'

interface CompactCardProps {
  article: Article
  catOverride?: string
  timeOverride?: string
  readsOverride?: string
}

export default function CompactCard({ article, catOverride, timeOverride, readsOverride }: CompactCardProps) {
  return (
    <Link href={`/article/${article.slug}`}>
      <article className="bg-white border border-[#DDD9D0] rounded-[4px] p-3.5 cursor-pointer group hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(26,18,8,.08)] transition-all duration-200 h-full flex flex-col">
        <div className="text-[9.5px] tracking-[0.14em] uppercase text-[#7A7060] font-semibold mb-1.5">
          {catOverride ?? article.cat}
        </div>
        <h4 className="font-serif text-[13.5px] leading-[1.4] font-semibold text-[#1A1208] mb-3 flex-1 group-hover:text-[#B5281E] transition-colors">
          {article.title}
        </h4>
        <div className="flex items-center gap-2 text-[10px] text-[#A09888]">
          <Clock className="w-3 h-3 shrink-0" />
          <span>{timeOverride ?? article.publishedAt}</span>
          <span>·</span>
          <Eye className="w-3 h-3 shrink-0" />
          <span>{readsOverride ?? article.reads}</span>
        </div>
      </article>
    </Link>
  )
}
