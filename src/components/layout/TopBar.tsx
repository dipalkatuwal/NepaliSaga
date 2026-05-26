'use client'
import { useRouter } from 'next/navigation'
import { Search, Bell, Globe, TrendingUp } from 'lucide-react'


export default function TopBar() {
  const router = useRouter()
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div className="bg-[#1A1208] text-white/70 text-[11px] tracking-[0.05em] border-b border-white/5">
      <div className="max-w-[1260px] mx-auto px-4 md:px-6 py-[5px] flex justify-between items-center gap-4">
        {/* Left */}
        <div className="flex items-center gap-3 md:gap-5 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-[5px] h-[5px] rounded-full bg-[#E8543A] live-dot inline-block" />
            <span className="font-semibold text-white/90 uppercase tracking-[0.14em] text-[10px]">Live</span>
          </div>
          <span className="text-white/30 hidden sm:block">|</span>
          <span className="hidden sm:block text-white/50">{today}</span>
          <span className="hidden md:flex items-center gap-1.5 bg-white/[0.07] border border-white/10 rounded-sm px-2 py-0.5 cursor-default hover:bg-white/10 transition-colors">
            <Globe className="w-3 h-3" />
            <span>English</span>
          </span>
          <span className="hidden md:flex items-center gap-1.5 bg-white/[0.07] border border-white/10 rounded-sm px-2 py-0.5 cursor-default hover:bg-white/10 transition-colors font-[Noto_Serif_Devanagari]">
            नेपाली
          </span>
        </div>
        {/* Right */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden sm:flex items-center gap-3 mr-1">
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 text-[#E8B80C]" />
              <span className="text-white/60">NEPSE</span>
              <span id="tb-nepse" className="text-[#4CD964] font-semibold">2,247.38 ▲1.21%</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-white/60">USD/NPR <span className="text-white/80">133.45</span></span>
            <span className="text-white/20">|</span>
            <span className="text-white/60">Gold <span className="text-[#E8B80C]/90">₨1,08,450</span></span>
          </div>
          <button
            onClick={() => router.push('/search')}
            className="flex items-center gap-1.5 bg-white/[0.07] border border-white/10 rounded-sm px-2 py-1 hover:bg-white/12 transition-colors min-w-[120px] md:min-w-[150px]">
            <Search className="w-3 h-3 text-white/40" />
            <span className="text-white/40">Search sagas…</span>
          </button>
          <button className="p-1.5 rounded-sm bg-white/[0.07] border border-white/10 hover:bg-white/12 transition-colors">
            <Bell className="w-3.5 h-3.5 text-white/50" />
          </button>
        </div>
      </div>
    </div>
  )
}
