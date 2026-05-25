'use client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/constants'
import { Search, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const mastheadRef = useRef<HTMLDivElement>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  const [isInitialRender, setIsInitialRender] = useState(true)
  const [mastheadHeight, setMastheadHeight] = useState(0)

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsInitialRender(false)
      })
    })
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    const mastheadEl = mastheadRef.current
    if (!mastheadEl) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setMastheadHeight((entry.target as HTMLElement).offsetHeight)
      }
    })
    ro.observe(mastheadEl)
    setMastheadHeight(mastheadEl.offsetHeight)
    return () => ro.disconnect()
  }, [])

  function handleSearchSubmit() {
    const q = searchQuery.trim()
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : '/search')
    setSearchOpen(false)
    setSearchQuery('')
  }

  useEffect(() => {
    const el = headerRef.current
    if (el) el.setAttribute('data-scrolled', 'false')
    window.scrollTo(0, 0)

    let collapsed = false

    const handler = () => {
      const y = window.scrollY
      const el = headerRef.current
      if (!el) return
      const threshold = mastheadHeight > 0 ? mastheadHeight : 20
      if (!collapsed && y > threshold) {
        collapsed = true
        el.setAttribute('data-scrolled', 'true')
      } else if (collapsed && y <= threshold) {
        collapsed = false
        el.setAttribute('data-scrolled', 'false')
      }
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [pathname, mastheadHeight])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setSearchOpen(false); setSearchQuery('') }
      if (e.key === 'Enter' && searchOpen) handleSearchSubmit()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [searchOpen, searchQuery])

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  const navRef = useRef<HTMLElement>(null)
  const activeNavRef = useRef<HTMLAnchorElement>(null)

  // Center the active nav item in the scrollable nav on pathname change
  useEffect(() => {
    const nav = navRef.current
    const active = activeNavRef.current
    if (!nav || !active) return
    const navWidth = nav.offsetWidth
    const itemLeft = active.offsetLeft
    const itemWidth = active.offsetWidth
    nav.scrollTo({ left: itemLeft - navWidth / 2 + itemWidth / 2, behavior: 'smooth' })
  }, [pathname])

  return (
    <header
      ref={headerRef}
      data-scrolled="false"
      style={{ top: mastheadHeight > 0 ? `-${mastheadHeight}px` : 0 }}
      className={cn(
        "bg-white border-b border-[#DDD9D0] sticky z-[200] nepalisaga-header",
        isInitialRender && "ns-no-transition"
      )}
    >
      <div className="max-w-[1260px] mx-auto px-4 md:px-6">

        {/* ── MASTHEAD ── */}
        <div ref={mastheadRef} className="ns-masthead-outer">
          <div className="ns-masthead-inner flex flex-col items-center border-b-2 border-double border-[#DDD9D0]">
            <div className="pt-3 w-full flex flex-col items-center">
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
                  The Chronicle of Nepal&apos;s Unfolding Story
                </span>
                <div className="flex-1 h-px bg-[#DDD9D0]" />
              </div>
              <div className="flex justify-between items-center w-full pt-1.5 pb-1 text-[11px] text-[#7A7060]">
                <span className="hidden md:block">Thursday, May 23, 2026 · Baisakh 10, 2083 BS</span>
                <div className="flex items-center gap-2 ml-auto">
                  {/* Facebook */}
                  <a href="#" aria-label="Facebook" className="text-[#7A7060] hover:text-[#B5281E] transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                  </a>
                  {/* X / Twitter */}
                  <a href="#" aria-label="X" className="text-[#7A7060] hover:text-[#B5281E] transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" aria-label="Instagram" className="text-[#7A7060] hover:text-[#B5281E] transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  {/* YouTube */}
                  <a href="#" aria-label="YouTube" className="text-[#7A7060] hover:text-[#B5281E] transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── NAV ROW ── */}
        <div className="relative flex items-center border-t border-[#EBE7E0]">

          {/* Search overlay */}
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
              onKeyDown={e => e.key === 'Enter' && handleSearchSubmit()}
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
              onClick={handleSearchSubmit}
              className="text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 bg-[#B5281E] text-white rounded-[2px] hover:bg-[#D94032] transition-colors whitespace-nowrap"
            >
              Go
            </button>
            <button
              onClick={() => { setSearchOpen(false); setSearchQuery('') }}
              className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#7A7060] hover:text-[#B5281E] transition-colors whitespace-nowrap"
            >
              Close
            </button>
          </div>

          {/* Brand — slides in from left */}
          <div className="ns-nav-logo shrink-0">
            <Link
              href="/"
              className="font-serif font-black text-[17px] tracking-[-0.02em] text-[#1A1208] whitespace-nowrap select-none leading-none py-[9px] pr-3 border-r border-[#DDD9D0] hover:text-[#B5281E] transition-colors block"
            >
              Nepali<span className="text-[#B5281E]">Saga</span>
            </Link>
          </div>

          {/* Nav links */}
          <nav ref={navRef} className="flex-1 flex gap-0 overflow-x-auto scrollbar-none min-w-0 justify-center">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  ref={isActive ? activeNavRef : undefined}
                  className={cn(
                    'flex-shrink-0 px-3 md:px-[13px] py-[9px] text-[11.5px] font-medium tracking-[0.06em] uppercase transition-all border-b-2 border-transparent whitespace-nowrap',
                    isActive
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
              )
            })}
          </nav>

          {/* Search — always visible */}
          <button
            onClick={() => setSearchOpen(true)}
            className="shrink-0 p-1.5 rounded-sm border border-transparent hover:bg-[#F2EFE9] hover:border-[#B5281E] transition-all group"
            aria-label="Open search"
          >
            <Search className="w-3.5 h-3.5 text-[#7A7060] group-hover:text-[#B5281E] transition-colors" />
          </button>

        </div>
      </div>
    </header>
  )
}
