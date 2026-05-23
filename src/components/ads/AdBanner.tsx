import type { AdItem } from '@/types'

interface AdBannerProps {
  ad: AdItem
}

export function TopAdBanner({ ad }: AdBannerProps) {
  return (
    <div className="relative overflow-hidden border-b border-white/5 py-2.5" style={{ background: ad.bg }}>
      <span className="absolute top-1 right-2 text-[8px] tracking-[0.1em] uppercase text-white/20">Advertisement</span>
      <div className="max-w-[980px] mx-auto flex items-center justify-center gap-7 px-4 md:px-6">
        <div className="font-serif text-[20px] font-black text-white tracking-[-0.02em]">
          NMB <span className="text-[#E8B80C]">Bank</span>
        </div>
        <div className="hidden sm:block w-px h-6 bg-white/15" />
        <div className="text-left hidden sm:block">
          <h4 className="text-[13.5px] font-semibold text-white tracking-[-0.01em]">{ad.headline}</h4>
          <p className="text-[11px] text-white/55 mt-0.5">{ad.body}</p>
        </div>
        <button className="bg-[#E8B80C] text-[#1A1208] text-[10.5px] font-bold tracking-[0.1em] uppercase px-4 py-2 rounded-[2px] whitespace-nowrap hover:opacity-90 transition-opacity shrink-0 border-none cursor-pointer">
          {ad.cta}
        </button>
      </div>
    </div>
  )
}

export function InfeedAd({ ad }: AdBannerProps) {
  return (
    <div
      className="rounded-[3px] px-4 py-3 flex flex-wrap items-center gap-3 my-5 border"
      style={{ background: ad.bg, borderColor: `${ad.color}33` }}
    >
      <span className="text-[8.5px] tracking-[0.15em] uppercase font-bold opacity-50" style={{ color: ad.color }}>
        Sponsored
      </span>
      <div className="font-serif text-[15px] font-bold" style={{ color: ad.color }}>{ad.brand}</div>
      <p className="text-[12px] text-[#3D3326] flex-1 min-w-[200px]" dangerouslySetInnerHTML={{ __html: ad.body }} />
      <a
        className="text-[11px] font-bold tracking-[0.05em] px-3 py-1.5 rounded-[2px] text-white cursor-pointer hover:opacity-90 transition-opacity whitespace-nowrap"
        style={{ background: ad.color ?? '#B5281E' }}
      >
        {ad.cta}
      </a>
    </div>
  )
}

export function MarketplaceBanner() {
  return (
    <div className="relative bg-gradient-to-r from-[#1A2840] via-[#243A60] to-[#1A2840] rounded-[4px] px-5 py-4 flex flex-wrap items-center justify-between gap-4 my-5 overflow-hidden">
      <span className="absolute top-1.5 right-3 text-[8px] tracking-[0.1em] uppercase text-white/20">Advertisement</span>
      <div>
        <div className="text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1">NepaliSaga Marketplace</div>
        <h3 className="font-serif text-[17px] font-bold text-white">Daraz Nepal's Mid-Year Sale — Up to 70% Off</h3>
        <p className="text-[11.5px] text-white/60 mt-1">Electronics, fashion, appliances & more. Free delivery across Kathmandu Valley. Ends May 31, 2026.</p>
      </div>
      <button className="bg-[#E8B80C] text-[#1A1208] text-[10.5px] font-bold tracking-[0.1em] uppercase px-4 py-2 rounded-[2px] border-none cursor-pointer hover:opacity-90 whitespace-nowrap shrink-0">
        Shop Now
      </button>
    </div>
  )
}

export function SidebarAd() {
  return (
    <div className="rounded-[4px] overflow-hidden border border-[#DDD9D0] bg-gradient-to-br from-[#1A3A8C] to-[#0D2060] p-5 relative">
      <span className="absolute top-1.5 right-2 text-[8px] tracking-[0.1em] uppercase text-white/20">Ad</span>
      <div className="font-serif text-[16px] font-bold text-white mb-1">NMB Digital Banking</div>
      <p className="text-[11.5px] text-white/60 leading-relaxed mb-4">
        Open a zero-fee savings account in 3 minutes. 8.25% FD rates. Nepal's most awarded digital bank 2025.
      </p>
      <button className="w-full bg-[#E8B80C] text-[#1A1208] text-[10.5px] font-bold tracking-[0.1em] uppercase py-2 rounded-[2px] border-none cursor-pointer hover:opacity-90 transition-opacity">
        Get Started Free
      </button>
    </div>
  )
}
