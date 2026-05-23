import { nepseStocks } from '@/data/markets'
import Tag from '@/components/shared/Tag'
import { cn } from '@/lib/utils'

const sectorTagMap: Record<string, 'green' | 'blue' | 'gold' | 'red'> = {
  Finance: 'green',
  Hydro: 'blue',
  Banking: 'gold',
  Insurance: 'red',
}

export default function MarketsTable() {
  return (
    <div className="bg-white border border-[#DDD9D0] rounded-[4px] overflow-hidden mb-6">
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-[#EBE7E0] bg-[#FAF8F5]">
              {['Symbol', 'Company', 'LTP (NPR)', 'Change', 'Volume', 'Sector'].map((h) => (
                <th key={h} className="text-left px-3 py-2.5 text-[10px] font-bold tracking-[0.1em] uppercase text-[#7A7060] whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EBE7E0]">
            {nepseStocks.map((s) => (
              <tr key={s.symbol} className="hover:bg-[#FAF8F5] transition-colors">
                <td className="px-3 py-2.5 font-bold text-[#1A1208] tracking-[0.06em]">{s.symbol}</td>
                <td className="px-3 py-2.5 text-[#3D3326]">{s.name}</td>
                <td className="px-3 py-2.5 font-bold text-[#1A1208] tabular-nums">
                  {s.ltp.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className={cn('px-3 py-2.5 font-semibold tabular-nums', s.up ? 'text-[#1B7A3E]' : 'text-[#B5281E]')}>
                  {s.up ? '▲ ' : '▼ '}{Math.abs(s.change).toFixed(2)} ({Math.abs(s.changePct).toFixed(2)}%)
                </td>
                <td className="px-3 py-2.5 text-[#7A7060]">{s.volume}</td>
                <td className="px-3 py-2.5">
                  <Tag variant={sectorTagMap[s.sector] ?? 'gold'}>{s.sector}</Tag>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-2.5 border-t border-[#EBE7E0] text-right">
        <button className="text-[11px] text-[#B5281E] font-semibold tracking-[0.05em] hover:underline">
          View Full NEPSE Board →
        </button>
      </div>
    </div>
  )
}
