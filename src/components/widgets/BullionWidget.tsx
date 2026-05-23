import { bullionRates } from '@/data/markets'
import { cn } from '@/lib/utils'

export default function BullionWidget() {
  return (
    <div className="bg-white border border-[#DDD9D0] rounded-[4px] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#EBE7E0]">
        <h3 className="font-serif text-[15px] font-bold text-[#1A1208]">Bullion Rates</h3>
        <span className="text-[10px] text-[#7A7060]">FENEGOSIDA Today</span>
      </div>
      <div className="p-4 space-y-3">
        {bullionRates.map((b) => (
          <div key={b.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-[3px] flex items-center justify-center text-sm font-bold"
                style={{ background: b.name === 'Silver' ? '#F3F4F6' : '#FFF8E0', color: b.color }}>
                {b.icon}
              </div>
              <span className="text-[12px] font-medium text-[#1A1208]">{b.name}</span>
            </div>
            <div className="text-right">
              <div className="text-[12px] font-bold tabular-nums" style={{ color: b.color }}>{b.price}</div>
              <div className="text-[10px] text-[#7A7060]">
                {b.unit} &nbsp;
                <span className={cn('font-semibold', b.up ? 'text-[#1B7A3E]' : 'text-[#B5281E]')}>
                  {b.up ? '▲' : '▼'} {b.changePct}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
