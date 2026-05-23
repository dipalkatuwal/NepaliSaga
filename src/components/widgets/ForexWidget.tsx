import { forexRates } from '@/data/markets'

export default function ForexWidget() {
  return (
    <div className="bg-white border border-[#DDD9D0] rounded-[4px] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#EBE7E0]">
        <h3 className="font-serif text-[15px] font-bold text-[#1A1208]">Forex Rates</h3>
        <span className="text-[10px] text-[#7A7060]">NRB Today</span>
      </div>
      <div className="divide-y divide-[#EBE7E0]">
        {forexRates.map((r) => (
          <div key={r.pair} className="flex items-center justify-between px-4 py-2.5 hover:bg-[#FAF8F5] transition-colors">
            <div className="flex items-center gap-2">
              <span className="text-base">{r.flag}</span>
              <span className="text-[11.5px] font-semibold text-[#1A1208] tracking-[0.02em]">{r.pair}</span>
            </div>
            <div className="text-right">
              <div className="text-[12px] font-bold text-[#1A1208] tabular-nums">{r.buy.toFixed(r.currency === 'JPY' ? 3 : 2)}</div>
              <div className="text-[10px] text-[#7A7060]">Sell: {r.sell.toFixed(r.currency === 'JPY' ? 3 : 2)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
