'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/constants'
import { Bookmark, Search, X, Bell } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const distanceToBottom = docHeight - (y + winHeight)

      setScrolled(prev => {
        // If we are close to the bottom/footer, force the header to expand (scrolled = false)
        // prev === true means the header is currently collapsed
        // prev === false means the header is currently expanded
        const isNearBottom = prev
          ? distanceToBottom <= 40   // If collapsed, expand when we scroll down to within 40px of bottom
          : distanceToBottom <= 200  // If expanded, stay expanded until we scroll up past 200px from bottom

        if (isNearBottom) {
          return false
        }

        if (prev) {
          // If already collapsed, only expand when scrolling back up near the very top (e.g. scrollY <= 20)
          return y > 20
        } else {
          // If expanded, only collapse when scrolled past the Masthead (e.g. scrollY > 170)
          return y > 170
        }
      })
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  // Close search on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setSearchOpen(false); setSearchQuery('') }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <header className={cn(
      'bg-white border-b border-[#DDD9D0] sticky top-0 z-[200]',
      'transition-all duration-700',
      scrolled
        ? 'shadow-[0_6px_32px_rgba(26,18,8,0.12)]'
        : 'shadow-[0_2px_12px_rgba(26,18,8,0.04)]'
    )}>
      <div className="max-w-[1260px] mx-auto px-4 md:px-6">

        {/* ── MASTHEAD — slides up and fades on scroll ── */}
        <div
          className="flex flex-col items-center border-b-2 border-double border-[#DDD9D0] transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] origin-top"
          style={{
            transform: scrolled ? 'translateY(-8px) scaleY(0.92)' : 'translateY(0) scaleY(1)',
            opacity: scrolled ? 0 : 1,
            maxHeight: scrolled ? '0px' : '200px',
            overflow: 'hidden',
            paddingTop: scrolled ? '0' : '12px',
            paddingBottom: scrolled ? '0' : '0',
            pointerEvents: scrolled ? 'none' : 'auto',
          }}
        >
          <div className="text-[10px] tracking-[0.25em] uppercase text-[#A09888] font-[Noto_Serif_Devanagari] mb-0.5 whitespace-nowrap">
            नेपाली साग — Since 2021
          </div>
          <div className="flex items-center gap-3 mb-1">
            <div className="h-px w-8 bg-[#B5281E] hidden md:block" />
            <h1 className="font-serif text-[42px] md:text-[52px] font-black tracking-[-0.025em] leading-none text-[#1A1208] select-none whitespace-nowrap">
              Nepali<span className="text-[#B5281E]">Saga</span>
            </h1>
            <div className="h-px w-8 bg-[#B5281E] hidden md:block" />
          </div>
          <div className="flex items-center gap-3 w-full pb-2.5">
            <div className="flex-1 h-px bg-[#DDD9D0]" />
            <span className="text-[9px] tracking-[0.28em] uppercase text-[#7A7060] whitespace-nowrap">
              The Chronicle of Nepal's Unfolding Story
            </span>
            <div className="flex-1 h-px bg-[#DDD9D0]" />
          </div>
          <div className="flex justify-between w-full pt-1.5 pb-1 text-[11px] text-[#7A7060]">
            <span className="hidden md:block">Thursday, May 23, 2026 · Baisakh 10, 2083 BS</span>
            <div className="flex gap-2 items-center ml-auto">
              <button className="text-[10.5px] tracking-[0.06em] px-2.5 py-1 rounded-sm border border-[#DDD9D0] text-[#3D3326] hover:bg-[#F2EFE9] hover:border-[#A09888] transition-all">
                Sign In
              </button>
              <button className="text-[10.5px] tracking-[0.06em] px-2.5 py-1 rounded-sm bg-[#B5281E] text-white border border-[#B5281E] hover:bg-[#D94032] transition-all font-semibold">
                Subscribe
              </button>
              <button className="p-1.5 rounded-sm border border-[#DDD9D0] hover:bg-[#F2EFE9] transition-colors">
                <Bookmark className="w-3.5 h-3.5 text-[#7A7060]" />
              </button>
            </div>
          </div>
        </div>

        {/* ── NAV ROW ── */}
        <div className="relative flex items-center border-t border-[#EBE7E0]">

          {/* Search overlay — expands over nav when open */}
          <div className={cn(
            'absolute inset-0 z-10 flex items-center gap-2 bg-white px-2 transition-all duration-300',
            searchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}>
            <Search className="w-4 h-4 text-[#B5281E] shrink-0" />
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search sagas, topics, people…"
              className="flex-1 text-[13px] text-[#1A1208] placeholder-[#A09888] bg-transparent border-none outline-none font-[DM_Sans]"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-[#A09888] hover:text-[#1A1208] transition-colors">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <div className="h-4 w-px bg-[#DDD9D0] mx-1" />
            <button
              onClick={() => { setSearchOpen(false); setSearchQuery('') }}
              className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#7A7060] hover:text-[#B5281E] transition-colors whitespace-nowrap"
            >
              Close
            </button>
          </div>

          {/* Brand slides in from left with spring-like overshoot */}
          <div
            className="flex items-center shrink-0 overflow-hidden transition-all duration-500"
            style={{
              maxWidth: scrolled ? '160px' : '0px',
              opacity: scrolled ? 1 : 0,
              marginRight: scrolled ? '4px' : '0px',
              transform: scrolled ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'max-width 700ms cubic-bezier(0.4,0,0.2,1), opacity 600ms ease, transform 700ms cubic-bezier(0.4,0,0.2,1), margin 700ms ease',
            }}
          >
            <Link
              href="/"
              className="font-serif font-black text-[17px] tracking-[-0.02em] text-[#1A1208] whitespace-nowrap select-none leading-none py-[9px] pr-3 border-r border-[#DDD9D0] hover:text-[#B5281E] transition-colors"
            >
              Nepali<span className="text-[#B5281E]">Saga</span>
            </Link>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex gap-0 overflow-x-auto scrollbar-none min-w-0">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'flex-shrink-0 px-3 md:px-[13px] py-[9px] text-[11.5px] font-medium tracking-[0.06em] uppercase transition-all border-b-2 border-transparent whitespace-nowrap',
                  (item as any).active
                    ? 'text-[#B5281E] border-b-[#B5281E] font-semibold'
                    : 'text-[#3D3326] hover:text-[#B5281E] hover:border-b-[#B5281E]'
                )}
              >
                {item.label}
                {(item as any).hot && (
                  <span className="ml-1 text-[8px] bg-[#B5281E] text-white px-1 py-0.5 rounded-sm font-bold tracking-[0.1em] align-middle">
                    HOT
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Actions — slide in from right when scrolled */}
          <div
            className="flex items-center gap-1.5 shrink-0 overflow-hidden"
            style={{
              maxWidth: scrolled ? '240px' : '0px',
              opacity: scrolled ? 1 : 0,
              transform: scrolled ? 'translateX(0)' : 'translateX(24px)',
              transition: 'max-width 700ms cubic-bezier(0.4,0,0.2,1), opacity 600ms ease 100ms, transform 700ms cubic-bezier(0.4,0,0.2,1)',
              paddingLeft: scrolled ? '8px' : '0px',
            }}
          >
            {/* Search trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-1.5 rounded-sm border border-[#DDD9D0] hover:bg-[#F2EFE9] hover:border-[#B5281E] transition-all group"
              aria-label="Open search"
            >
              <Search className="w-3.5 h-3.5 text-[#7A7060] group-hover:text-[#B5281E] transition-colors" />
            </button>

            <button
              className="p-1.5 rounded-sm border border-[#DDD9D0] hover:bg-[#F2EFE9] transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-3.5 h-3.5 text-[#7A7060]" />
            </button>

            <button className="text-[10px] tracking-[0.06em] px-2.5 py-1.5 rounded-sm border border-[#DDD9D0] text-[#3D3326] hover:bg-[#F2EFE9] hover:border-[#A09888] transition-all font-medium whitespace-nowrap">
              Sign In
            </button>

            <button className="text-[10px] tracking-[0.06em] px-2.5 py-1.5 rounded-sm bg-[#B5281E] text-white hover:bg-[#D94032] transition-all font-bold whitespace-nowrap">
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}
