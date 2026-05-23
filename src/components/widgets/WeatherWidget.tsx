import { weatherData } from '@/data/weather'

export default function WeatherWidget() {
  const main = weatherData[0]
  const rest = weatherData.slice(1)

  return (
    <div className="bg-white border border-[#DDD9D0] rounded-[4px] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#EBE7E0]">
        <h3 className="font-serif text-[15px] font-bold text-[#1A1208]">Nepal Weather</h3>
        <span className="text-[10px] text-[#7A7060]">3:00 PM NST</span>
      </div>
      <div className="p-4">
        {/* Main city */}
        <div className="flex items-start justify-between mb-4 pb-4 border-b border-[#EBE7E0]">
          <div>
            <div className="text-[36px] font-bold text-[#1A1208] leading-none">{main.temp}<sup className="text-[18px]">°</sup></div>
            <div className="text-[12px] font-semibold text-[#3D3326] mt-1">{main.city} Valley</div>
            <div className="text-[11px] text-[#7A7060]">{main.desc}</div>
          </div>
          <div className="text-[40px] leading-none">{main.icon}</div>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: 'Humidity', val: `${main.humidity}%` },
            { label: 'Wind', val: main.wind },
            { label: 'High', val: `${main.high}°` },
            { label: 'Low', val: `${main.low}°` },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[12px] font-bold text-[#1A1208]">{s.val}</div>
              <div className="text-[9px] text-[#7A7060] uppercase tracking-[0.1em]">{s.label}</div>
            </div>
          ))}
        </div>
        {/* Other cities */}
        <div className="space-y-2 border-t border-[#EBE7E0] pt-3">
          {rest.map((c) => (
            <div key={c.city} className="flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5">
                <span>{c.icon}</span>
                <span className="text-[#3D3326] font-medium">{c.city}</span>
              </div>
              <div className="flex items-center gap-2 text-[#7A7060]">
                <span>{c.desc}</span>
                <span className="font-bold text-[#1A1208]">{c.temp}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
