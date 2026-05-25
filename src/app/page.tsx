export const dynamic = 'force-static'
import type { Metadata } from 'next'
import Link from 'next/link'
import HeroStory from '@/components/home/HeroStory'
import StoryCard from '@/components/home/StoryCard'
import CompactCard from '@/components/home/CompactCard'
import SectionHeader from '@/components/shared/SectionHeader'
import NEPSEWidget from '@/components/widgets/NEPSEWidget'
import ForexWidget from '@/components/widgets/ForexWidget'
import BullionWidget from '@/components/widgets/BullionWidget'
import WeatherWidget from '@/components/widgets/WeatherWidget'
import TrendingWidget from '@/components/widgets/TrendingWidget'
import PollWidget from '@/components/widgets/PollWidget'
import MarketsTable from '@/components/widgets/MarketsTable'
import { articles, heroArticle, featuredGrid, moreStories } from '@/data/articles'
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
}

const worldDiplomacyStories = [
  { cat: 'UN · Geneva', title: 'Nepal Elected to UN Human Rights Council for 2027–2029 Term', time: '14 hours ago', reads: '9.4k', id: 0 },
  { cat: 'India · Diplomacy', title: 'EAM Jaishankar Arrives in Kathmandu for Two-Day Connectivity Summit', time: '16 hours ago', reads: '12.7k', id: 0 },
  { cat: 'China · Trade', title: 'Trans-Himalayan Multimodal Connectivity: Nepal–China Rail Feasibility Study Published', time: 'Yesterday', reads: '18.2k', id: 0 },
  { cat: 'World Bank', title: 'World Bank Approves USD 300M For Nepal\'s Urban Water & Sanitation Programme', time: 'Yesterday', reads: '7.8k', id: 0 },
]

const healthSocietyStories = [
  { cat: 'Health', title: 'AIIMS Kathmandu to Begin Cardiac Surgery Services in Shrawan 2083', time: '5 hours ago', reads: '15.1k', id: 0 },
  { cat: 'Education', title: 'SEE Class X Results Out: 82% Pass Rate, 4,500 Students Score GPA 4.0', time: '3 hours ago', reads: '42.8k', id: 0 },
  { cat: 'Society', title: 'Domestic Violence Helpline Calls Rise 22% in Q1 2083 — MoWCSC Launches Rapid Response Units', time: '8 hours ago', reads: '11.3k', id: 0 },
  { cat: 'Sports', title: 'Nepal Cricket Team Qualifies for T20 World Cup 2027 After Series Win Against UAE', time: 'Yesterday', reads: '36.4k', id: 5 },
]

const videoStories = [
  { cat: 'Budget 2082/83 · Explained', title: 'Watch: Every Key Number in the Federal Budget — 4-Minute Breakdown', time: '2 hours ago', reads: '22k views', duration: '4:32', bg: 'linear-gradient(135deg,#1A0808,#0A0404)', id: 0 },
  { cat: 'Markets · NEPSE', title: 'NEPSE Live: Why Hydropower Stocks Are Surging Today', time: '3 hours ago', reads: '14k views', duration: '2:58', bg: 'linear-gradient(135deg,#0A1E12,#050F09)', id: 1 },
  { cat: 'Culture · Heritage', title: 'Gunla 2082 — Dawn at Swayambhunath: A Visual Journey', time: '7 hours ago', reads: '8k views', duration: '7:14', bg: 'linear-gradient(135deg,#1E1030,#0E0818)', id: 4 },
  { cat: 'Climate · Koshi', title: 'Aerial Footage: Koshi River Surge — Level 2 Flood Alert', time: '8 hours ago', reads: '19k views', duration: '3:44', bg: 'linear-gradient(135deg,#0D2B1C,#051A10)', id: 5 },
]

export default function HomePage() {
  return (
    <>
      <main className="bg-[#FAF8F5]">
        <div className="max-w-[1260px] mx-auto px-4 md:px-6">

          {/* === MAIN GRID === */}
          <section className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 md:gap-9 pt-7 pb-4">

            {/* === FEED === */}
            <div className="min-w-0">

              {/* Hero */}
              <HeroStory article={heroArticle} />

              {/* Primary 2×2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {featuredGrid.map((a) => (
                  <StoryCard key={a.id} article={a} variant="grid" />
                ))}
              </div>

              {/* ── NepseSage Ad — after grid, before more stories ── */}
              <a
                href="https://nepsesage.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 bg-[#0A1A10] border border-[#1B3A22] rounded-[4px] px-5 py-4 mb-6 hover:border-[#2D6A3F] transition-all duration-200 relative overflow-hidden"
              >
                <span className="absolute top-2 right-3 text-[8px] tracking-[0.12em] uppercase text-white/20">Sponsored</span>
                {/* Icon */}
                <div className="shrink-0 w-11 h-11 rounded-[3px] bg-[#1B3A22] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#4CD964]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                {/* Copy */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[#4CD964] font-bold text-[13px] tracking-tight">NepseSage</span>
                    <span className="text-[8.5px] tracking-[0.15em] uppercase text-white/25 border border-white/10 px-1.5 py-0.5 rounded-sm">Clinical Analyst</span>
                  </div>
                  <p className="text-[12px] text-white/55 leading-[1.5]">
                    Institutional-quality NEPSE intelligence for retail investors — AI-driven portfolio insights, real-time market data & behavioral analysis.
                  </p>
                </div>
                <div className="shrink-0 text-[10.5px] font-semibold tracking-[0.06em] text-[#4CD964] group-hover:translate-x-1 transition-transform duration-200 whitespace-nowrap">
                  Analyse Free →
                </div>
              </a>

              {/* More stories */}
              <SectionHeader title="More Stories" className="mt-2" />
              {moreStories.map((a) => (
                <StoryCard key={a.id} article={a} variant="feature" />
              ))}

              {/* Photo Stories */}
              <SectionHeader title="Photo Stories" accent="gold" meta="This Week" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-7">
                {articles.slice(4, 7).map((a) => (
                  <Link href={`/article/${a.slug}`} key={a.id} className="group block relative rounded-[4px] overflow-hidden cursor-pointer aspect-[4/3]">
                    <div className="absolute inset-0" style={{ background: a.bg }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="text-[9px] text-white/60 mb-1 font-semibold tracking-[0.1em] uppercase">📸 {a.section}</div>
                      <div className="text-[12px] font-serif font-bold text-white leading-[1.35] line-clamp-2">{a.title}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Business & Finance */}
              <SectionHeader title="Business & Finance" accent="green" meta="Today's Movers" />
              <MarketsTable />

              {/* ── DDC Yak Cheese Ad — between sections, natural break ── */}
              <a
                href="https://ddcnepal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row items-center gap-5 bg-white border border-[#DDD9D0] rounded-[4px] px-5 py-5 mb-7 hover:shadow-[0_4px_20px_rgba(26,18,8,0.08)] hover:border-[#A09888] transition-all duration-200 relative overflow-hidden"
              >
                <span className="absolute top-2 right-3 text-[8px] tracking-[0.12em] uppercase text-[#A09888]">Sponsored</span>
                {/* Visual */}
                <div className="shrink-0 w-16 h-16 sm:w-14 sm:h-14 rounded-[3px] flex items-center justify-center text-3xl" style={{ background: 'linear-gradient(135deg,#F5EDD0,#E8D4A0)' }}>
                  🧀
                </div>
                {/* Copy */}
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="font-serif font-bold text-[14px] text-[#1A1208]">DDC Yak Cheese</span>
                    <span className="text-[8.5px] tracking-[0.15em] uppercase text-[#A09888] border border-[#DDD9D0] px-1.5 py-0.5 rounded-sm">From the Himalayas</span>
                  </div>
                  <p className="text-[12px] text-[#7A7060] leading-[1.5]">
                    Pure, organic yak cheese from Nepal's high-altitude pastures. Handcrafted by Dairy Development Corporation — taste the Himalayan difference.
                  </p>
                </div>
                <div className="shrink-0 text-[10.5px] font-semibold tracking-[0.06em] uppercase text-[#B5281E] border border-[#B5281E] px-3 py-1.5 rounded-sm group-hover:bg-[#B5281E] group-hover:text-white transition-all duration-200 whitespace-nowrap">
                  Learn More →
                </div>
              </a>

              {/* World & Diplomacy */}
              <SectionHeader title="World & Diplomacy" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-7">
                {worldDiplomacyStories.map((s, i) => (
                  <CompactCard
                    key={i}
                    article={articles[s.id]}
                    catOverride={s.cat}
                    timeOverride={s.time}
                    readsOverride={s.reads}
                  />
                ))}
              </div>

              {/* Health & Society */}
              <SectionHeader title="Health & Society" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-7">
                {healthSocietyStories.map((s, i) => (
                  <CompactCard
                    key={i}
                    article={articles[s.id]}
                    catOverride={s.cat}
                    timeOverride={s.time}
                    readsOverride={s.reads}
                  />
                ))}
              </div>

              {/* Tech & Startups */}
              <SectionHeader title="Tech & Startups" accent="green" meta="Innovation" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <StoryCard article={articles[2]} variant="grid" />
                <StoryCard article={articles[1]} variant="grid" />
              </div>

              {/* ── Dipal Katuwal Ad — foot of feed, tech-audience fit ── */}
              <a
                href="https://dipalkatuwal.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#FAF8F5] border border-[#DDD9D0] border-l-4 border-l-[#B5281E] rounded-[4px] px-4 py-4 mb-7 hover:bg-[#F2EFE9] transition-all duration-200 relative"
              >
                <span className="absolute top-2 right-3 text-[8px] tracking-[0.12em] uppercase text-[#A09888]">Sponsored</span>
                {/* Avatar placeholder */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#1A1208] flex items-center justify-center text-white font-serif font-black text-[15px] select-none">
                  D
                </div>
                {/* Copy */}
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] tracking-[0.1em] uppercase text-[#B5281E] font-bold mb-0.5">Built by a Nepali Developer</div>
                  <div className="font-serif font-semibold text-[13.5px] text-[#1A1208] leading-[1.4] group-hover:text-[#B5281E] transition-colors">
                    Dipal Katuwal — Full Stack Developer & AI Engineer from Biratnagar
                  </div>
                  <div className="text-[11px] text-[#7A7060] mt-0.5">MERN · Next.js · TypeScript · AI Integrations · dipalkatuwal.com.np</div>
                </div>
                <div className="shrink-0 text-[10px] font-semibold tracking-[0.06em] text-[#7A7060] group-hover:text-[#B5281E] transition-colors whitespace-nowrap">
                  View Portfolio →
                </div>
              </a>

            </div>

            {/* === SIDEBAR === */}
            <aside className="w-full space-y-5">
              <TrendingWidget />
              <WeatherWidget />
              <ForexWidget />
              <BullionWidget />
              <NEPSEWidget />
              <PollWidget />

              {/* ── Sidebar: NepseSage ── */}
              <a
                href="https://nepsesage.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#0A1A10] border border-[#1B3A22] rounded-[4px] p-4 hover:border-[#2D6A3F] transition-all duration-200 relative overflow-hidden"
              >
                <span className="absolute top-2 right-3 text-[8px] tracking-[0.12em] uppercase text-white/20">Sponsored</span>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-[#4CD964]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  <span className="font-bold text-[13px] text-[#4CD964]">NepseSage</span>
                </div>
                <p className="text-[11.5px] text-white/50 leading-[1.55] mb-3">
                  Clinical-grade NEPSE analytics. AI portfolio insights, live market data & behavioral analysis for every Nepali investor.
                </p>
                <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#4CD964] group-hover:translate-x-1 transition-transform duration-200">
                  Start Analysing Free →
                </div>
              </a>

              {/* ── Sidebar: DDC Yak Cheese ── */}
              <a
                href="https://ddcnepal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-[#DDD9D0] rounded-[4px] p-4 hover:shadow-[0_4px_16px_rgba(26,18,8,0.08)] hover:border-[#A09888] transition-all duration-200 relative"
              >
                <span className="absolute top-2 right-3 text-[8px] tracking-[0.12em] uppercase text-[#A09888]">Sponsored</span>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-[3px] flex items-center justify-center text-xl shrink-0" style={{ background: 'linear-gradient(135deg,#F5EDD0,#E8D4A0)' }}>🧀</div>
                  <div>
                    <div className="font-serif font-bold text-[13px] text-[#1A1208]">DDC Yak Cheese</div>
                    <div className="text-[9.5px] text-[#A09888] tracking-[0.06em]">Dairy Development Corporation</div>
                  </div>
                </div>
                <p className="text-[11.5px] text-[#7A7060] leading-[1.55] mb-3">
                  Organic yak cheese from Nepal's Himalayan highlands. Pure, handcrafted, and certified.
                </p>
                <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#B5281E] group-hover:underline">
                  Discover the Taste →
                </div>
              </a>
            </aside>
          </section>
        </div>

        {/* Video & Multimedia */}
        <div className="max-w-[1260px] mx-auto px-4 md:px-6 pb-12">
          <SectionHeader title="Video & Multimedia" accent="red" meta="Watch Now" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {videoStories.map((v, i) => (
              <a key={i} href={`/article/${articles[v.id].slug}`} className="group block rounded-[4px] border border-[#DDD9D0] overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,18,8,.10)] transition-all duration-200 cursor-pointer bg-white">
                <div className="h-[110px] relative flex items-center justify-center" style={{ background: v.bg }}>
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white text-lg group-hover:bg-white/25 transition-colors">▶</div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[9px] px-1.5 py-0.5 rounded-[2px]">{v.duration}</div>
                </div>
                <div className="p-3">
                  <div className="text-[9.5px] tracking-[0.12em] uppercase text-[#7A7060] mb-1">{v.cat}</div>
                  <div className="text-[12.5px] font-serif font-semibold text-[#1A1208] leading-[1.4] group-hover:text-[#B5281E] transition-colors line-clamp-2">{v.title}</div>
                  <div className="text-[10px] text-[#A09888] mt-1.5">{v.time} · {v.reads}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
