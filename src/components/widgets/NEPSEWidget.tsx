'use client'
import { useState, useEffect, useRef } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { nepseStocks, nepseIndex } from '@/data/markets'
import { cn } from '@/lib/utils'

export default function NEPSEWidget() {
  const [index, setIndex] = useState(nepseIndex.value)
  const baseRef = useRef(nepseIndex.value)

  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 1.6
      baseRef.current = Math.max(2210, Math.min(2290, baseRef.current + delta))
      setIndex(parseFloat(baseRef.current.toFixed(2)))
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  const change = index - nepseIndex.base
  const pct = (change / nepseIndex.base * 100)
  const up = change >= 0

  return (
    <div className="bg-white border border-[#DDD9D0] rounded-[4px] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#EBE7E0]">
        <h3 className="font-serif text-[15px] font-bold text-[#1A1208]">NEPSE Live</h3>
        <div className="flex items-center gap-1.5 text-[10px] text-[#7A7060]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8543A] live-dot inline-block" />
          <span>Live</span>
        </div>
      </div>
      <div className="p-4">
        {/* Index */}
        <div className="mb-3">
          <div className={cn('text-[28px] font-bold tabular-nums', up ? 'text-[#1B7A3E]' : 'text-[#B5281E]')}>
            {index.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className={cn('text-[12px] font-semibold flex items-center gap-1', up ? 'text-[#1B7A3E]' : 'text-[#B5281E]')}>
            {up ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            {up ? '+' : ''}{change.toFixed(2)} ({pct >= 0 ? '+' : ''}{pct.toFixed(2)}%)
          </div>
          <div className="text-[10.5px] text-[#7A7060] mt-0.5">{nepseIndex.date}</div>
        </div>

        {/* Mini stocks */}
        <div className="space-y-2 border-t border-[#EBE7E0] pt-3">
          {nepseStocks.slice(0, 4).map((s) => (
            <div key={s.symbol} className="flex items-center justify-between">
              <div className="text-[11px] font-bold tracking-[0.05em] text-[#1A1208] w-12">{s.symbol}</div>
              <div className={cn('text-[11px] font-semibold tabular-nums flex items-center gap-0.5', s.up ? 'text-[#1B7A3E]' : 'text-[#B5281E]')}>
                {s.ltp.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                <span className="text-[9px]">{s.up ? '▲' : '▼'}</span>
              </div>
              {/* Sparkline */}
              <div className="flex items-end gap-[2px] h-5">
                {s.sparkline.map((h, i) => (
                  <div
                    key={i}
                    className={cn('w-1 rounded-[1px]', s.up ? 'bg-[#1B7A3E]' : 'bg-[#B5281E]')}
                    style={{ height: `${h}px`, opacity: 0.4 + i * 0.1 }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-center">
          <button className="text-[11px] text-[#B5281E] font-semibold tracking-[0.06em] hover:underline">
            View Full Board →
          </button>
        </div>
      </div>
    </div>
  )
}
