import Link from 'next/link'
import type { Article } from '@/types'

interface HeroStoryProps {
  article: Article
}

export default function HeroStory({ article }: HeroStoryProps) {
  return (
    <Link href={`/article/${article.slug}`} className="block group">
      <article
        className="relative rounded-[5px] overflow-hidden cursor-pointer shadow-[0_8px_32px_rgba(26,18,8,.10)] hover:shadow-[0_16px_48px_rgba(26,18,8,.16)] transition-shadow duration-300 mb-6"
        aria-label={`Read: ${article.title}`}
      >
        {/* Hero visual */}
        <div className="w-full h-[340px] md:h-[420px] relative overflow-hidden" style={{ background: article.bg }}>
          {/* Mountain silhouette SVG */}
          <svg viewBox="0 0 1200 390" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <defs>
              <radialGradient id="hg1" cx="50%" cy="0%" r="70%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hg1)" />
            <polygon points="0,260 100,120 200,200 310,80 420,170 540,60 660,140 780,80 900,120 1000,90 1200,130 1200,390 0,390" fill="rgba(255,255,255,.03)" />
            <polygon points="0,290 70,180 160,230 240,150 340,210 460,110 560,180 680,120 800,160 920,100 1050,150 1200,120 1200,390 0,390" fill="rgba(255,255,255,.025)" />
            <rect x="440" y="200" width="180" height="90" fill="rgba(255,255,255,.055)" rx="1" />
            <rect x="480" y="170" width="100" height="32" fill="rgba(255,255,255,.045)" rx="1" />
            <rect x="520" y="145" width="24" height="26" fill="rgba(255,255,255,.06)" />
            <circle cx="532" cy="133" r="8" fill="rgba(240,192,64,.35)" />
          </svg>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,5,2,0.95)]" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            {/* Category badge */}
            <div className="inline-flex items-center gap-1.5 text-[9.5px] tracking-[0.2em] uppercase text-[#E8B80C] font-bold mb-3 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-[2px] border border-[rgba(255,184,0,0.2)]">
              🏛 {article.cat}
            </div>

            {/* Title */}
            <h2 className="font-serif text-[22px] md:text-[28px] lg:text-[32px] leading-[1.25] text-white font-bold mb-4 text-shadow-[0_2px_8px_rgba(0,0,0,0.3)] max-w-3xl">
              {article.title}
            </h2>

            {/* TL;DR */}
            <div className="bg-black/35 border border-white/12 rounded-[3px] p-3 md:p-4 backdrop-blur-sm mb-4 max-w-2xl">
              <div className="text-[8.5px] tracking-[0.22em] uppercase text-white/45 mb-2">TL;DR — 5-Second Scan</div>
              <ul className="space-y-1.5">
                {article.bullets.map((b, i) => (
                  <li key={i} className="text-[12px] text-white/82 pl-4 relative leading-[1.5]">
                    <span className="absolute left-0 text-[#E8B80C] font-bold">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end">
              <span className="text-[10.5px] text-[#E8B80C] font-semibold tracking-[0.06em] group-hover:translate-x-1 transition-transform duration-200">
                Read Full Story →
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
