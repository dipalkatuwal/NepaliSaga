'use client'
import Link from 'next/link'
import { Home, TrendingUp, Globe, BookOpen, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const mobileNavItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Markets', href: '/markets', icon: TrendingUp },
  { label: 'World', href: '/world', icon: Globe },
  { label: 'Read', href: '/article/nepal-india-power-trade-agreement-renewed-for-decade-crossborder-export-target-raised-to-10000-mw', icon: BookOpen },
  { label: 'More', href: '#', icon: Menu },
]

export default function MobileNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[300] bg-white border-t border-[#DDD9D0] flex md:hidden safe-area-bottom shadow-[0_-4px_16px_rgba(26,18,8,0.06)]"
      aria-label="Mobile navigation"
    >
      {mobileNavItems.map(({ label, href, icon: Icon }) => {
        const active = pathname === href
        return (
          <Link
            key={label}
            href={href}
            className={cn(
              'flex-1 flex flex-col items-center justify-center gap-0.5 py-2 transition-colors',
              active ? 'text-[#B5281E]' : 'text-[#7A7060] hover:text-[#3D3326]'
            )}
            aria-current={active ? 'page' : undefined}
          >
            <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 1.75} />
            <span className="text-[9.5px] font-medium tracking-[0.04em]">{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
