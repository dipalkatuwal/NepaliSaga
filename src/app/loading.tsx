export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] animate-pulse">
      {/* Topbar skeleton */}
      <div className="h-8 bg-[#1A1208]" />
      {/* Ticker skeleton */}
      <div className="h-8 bg-[#B5281E]/80" />
      {/* Header skeleton */}
      <div className="h-[120px] bg-white border-b border-[#DDD9D0]" />

      <div className="max-w-[1260px] mx-auto px-4 md:px-6 py-7">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-9">
          {/* Feed skeleton */}
          <div className="space-y-5">
            {/* Hero */}
            <div className="h-[380px] rounded-[5px] bg-[#EBE7E0]" />
            {/* Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-[260px] rounded-[4px] bg-[#EBE7E0]" />
              ))}
            </div>
          </div>
          {/* Sidebar skeleton */}
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-[180px] rounded-[4px] bg-[#EBE7E0]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
