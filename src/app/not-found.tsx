'use client'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <main className="min-h-[60vh] bg-[#FAF8F5] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="font-serif text-[120px] font-black text-[#EBE7E0] leading-none mb-2 select-none">404</div>
          <h1 className="font-serif text-[28px] font-bold text-[#1A1208] mb-3">
            This Saga Could Not Be Found
          </h1>
          <p className="text-[14px] text-[#7A7060] leading-relaxed mb-8">
            The story you are looking for may have been moved, retracted, or never written.
            Our journalists are on the ground — head back to the homepage for live coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#B5281E] text-white text-[11px] font-bold tracking-[0.1em] uppercase px-6 py-3 rounded-[2px] hover:bg-[#D94032] transition-colors"
            >
              ← Return to Homepage
            </Link>
            <Link
              href="/markets"
              className="inline-flex items-center justify-center gap-2 border border-[#DDD9D0] text-[#3D3326] text-[11px] font-bold tracking-[0.1em] uppercase px-6 py-3 rounded-[2px] hover:bg-[#F2EFE9] transition-colors"
            >
              Markets →
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
