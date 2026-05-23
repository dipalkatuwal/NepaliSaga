import type { Metadata } from 'next'
import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
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
import NewsletterWidget from '@/components/widgets/NewsletterWidget'
import MarketsTable from '@/components/widgets/MarketsTable'
import { TopAdBanner, InfeedAd, MarketplaceBanner, SidebarAd } from '@/components/ads/AdBanner'
import { articles, heroArticle, featuredGrid, moreStories } from '@/data/articles'
import { infeedAds, topBannerAd, partnerAds } from '@/data/ads'
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
      <TopBar />
      <Header />

      {/* Top leaderboard ad */}
      <TopAdBanner ad={topBannerAd} />

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

              {/* In-feed ad */}
              <InfeedAd ad={infeedAds[0]} />

              {/* More stories */}
              <SectionHeader title="More Stories" className="mt-2" />
              {moreStories.map((a) => (
                <StoryCard key={a.id} article={a} variant="feature" />
              ))}

              {/* Marketplace banner */}
              <MarketplaceBanner />

              {/* Photo Stories */}
              <SectionHeader title="Photo Stories" accent="gold" meta="This Week" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-7">
                {articles.slice(4, 7).map((a) => (
                  <a href={`/article/${a.slug}`} key={a.id} className="group block relative rounded-[4px] overflow-hidden cursor-pointer aspect-[4/3]">
                    <div className="absolute inset-0" style={{ background: a.bg }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="text-[9px] text-white/60 mb-1 font-semibold tracking-[0.1em] uppercase">📸 {a.section}</div>
                      <div className="text-[12px] font-serif font-bold text-white leading-[1.35] line-clamp-2">{a.title}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* In-feed ad 2 */}
              <InfeedAd ad={infeedAds[1]} />

              {/* Business & Finance */}
              <SectionHeader title="Business & Finance" accent="green" meta="Today's Movers" />
              <MarketsTable />

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

              {/* Air Arabia ad */}
              <div className="rounded-[4px] px-5 py-4 flex flex-wrap items-center justify-between gap-4 mb-7 bg-gradient-to-r from-[#003580] via-[#00509E] to-[#1E6FBF] relative overflow-hidden">
                <span className="absolute top-1.5 right-3 text-[8px] tracking-[0.1em] uppercase text-white/20">Advertisement</span>
                <div className="text-white">
                  <div className="text-[9px] tracking-[0.18em] uppercase text-white/45 mb-1">Fly Smarter</div>
                  <h3 className="font-serif text-[17px] font-bold mb-1">Air Arabia — Kathmandu to Dubai from NPR 18,500</h3>
                  <p className="text-[11.5px] text-white/65">Direct flights · Baggage included · Free date change. Book before June 30, 2026.</p>
                </div>
                <button className="bg-white text-[#003580] text-[10.5px] font-bold tracking-[0.1em] uppercase px-5 py-2 rounded-[2px] border-none cursor-pointer hover:opacity-90 whitespace-nowrap">Book Flight</button>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                <StoryCard article={articles[2]} variant="grid" />
                <StoryCard article={articles[1]} variant="grid" />
              </div>

              {/* IME Remit ad */}
              <InfeedAd ad={infeedAds[2]} />

            </div>

            {/* === SIDEBAR === */}
            <aside className="w-full space-y-5">
              <SidebarAd />
              <NEPSEWidget />
              <ForexWidget />
              <BullionWidget />
              <WeatherWidget />
              <TrendingWidget />
              <PollWidget />
              <NewsletterWidget />

              {/* Partner ads */}
              <div className="bg-white border border-[#DDD9D0] rounded-[4px] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#EBE7E0]">
                  <h3 className="font-serif text-[15px] font-bold text-[#1A1208]">From Our Partners</h3>
                  <span className="text-[9px] tracking-[0.1em] uppercase text-[#A09888]">Sponsored</span>
                </div>
                <div className="p-3 space-y-2.5">
                  {partnerAds.map((ad) => (
                    <div key={ad.brand} className="flex items-center gap-3 p-3 rounded-[3px] bg-[#FAF8F5] cursor-pointer hover:bg-[#F2EFE9] transition-colors">
                      <div className="w-9 h-9 rounded-md flex items-center justify-center text-lg shrink-0" style={{ background: ad.bg }}>
                        {ad.icon}
                      </div>
                      <div>
                        <div className="text-[11.5px] font-semibold text-[#1A1208]">{ad.brand}</div>
                        <div className="text-[10px] text-[#7A7060]">{ad.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </section>
        </div>

        {/* Full-width Ncell 5G ad */}
        <div className="border-t border-[#EBE7E0]">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6 py-6">
            <div className="relative rounded-[4px] overflow-hidden bg-gradient-to-r from-[#1E1E2E] via-[#14143A] to-[#0A0A28] py-3.5 px-6">
              <span className="absolute top-1.5 right-3 text-[8px] tracking-[0.1em] uppercase text-white/20">Advertisement</span>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                <div className="font-serif text-[19px] font-black text-white">Ncell <span className="text-[#4CD964]">5G</span></div>
                <div className="w-px h-6 bg-white/15 hidden md:block" />
                <div className="text-center md:text-left">
                  <div className="text-[13.5px] font-semibold text-white">Nepal's Fastest 5G Network — Now in 25 Districts</div>
                  <div className="text-[11px] text-white/50 mt-0.5">100GB data + unlimited calls + free OTT subscription from NPR 999/month</div>
                </div>
                <button className="bg-[#4CD964] text-[#0A1A0A] text-[10.5px] font-bold tracking-[0.1em] uppercase px-4 py-2 rounded-[2px] border-none cursor-pointer hover:opacity-90 whitespace-nowrap">Switch to 5G</button>
              </div>
            </div>
          </div>
        </div>

        {/* Video & Multimedia */}
        <div className="max-w-[1260px] mx-auto px-4 md:px-6 pb-12">
          <SectionHeader title="Video & Multimedia" accent="red" meta="Watch Now" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {videoStories.map((v, i) => (
              <a key={i} href={`/article/${articles[v.id].slug}`} className="group block rounded-[4px] border border-[#DDD9D0] overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,18,8,.10)] transition-all duration-200 cursor-pointer bg-white">
                <div className="h-[110px] relative flex items-center justify-center" style={{ background: v.bg }}>
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white text-lg group-hover:bg-white/25 transition-colors">
                    ▶
                  </div>
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

      <Footer />
    </>
  )
}
