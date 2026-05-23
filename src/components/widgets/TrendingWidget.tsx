import Link from 'next/link'
import { trendingItems } from '@/data/ads'
import { articles } from '@/data/articles'

export default function TrendingWidget() {
  return (
    <div className="bg-white border border-[#DDD9D0] rounded-[4px] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#EBE7E0]">
        <h3 className="font-serif text-[15px] font-bold text-[#1A1208]">Trending Now</h3>
        <span className="text-[10px] text-[#7A7060] uppercase tracking-[0.1em]">Today</span>
      </div>
      <div className="divide-y divide-[#EBE7E0]">
        {trendingItems.map((item) => {
          const article = articles[item.articleId] ?? articles[0]
          return (
            <Link key={item.rank} href={`/article/${article.slug}`}>
              <div className="flex gap-3 px-4 py-3 hover:bg-[#FAF8F5] transition-colors cursor-pointer group">
                <div className="text-[22px] font-black text-[#EBE7E0] tabular-nums leading-none pt-0.5 w-7 shrink-0">
                  {String(item.rank).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9.5px] tracking-[0.1em] uppercase text-[#7A7060] mb-1">{item.cat}</div>
                  <div className="text-[12px] font-semibold text-[#1A1208] leading-[1.4] group-hover:text-[#B5281E] transition-colors line-clamp-2">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-[#A09888] mt-1">{item.time} · {item.reads} reads</div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
