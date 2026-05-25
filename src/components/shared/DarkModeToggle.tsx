'use client'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DarkModeToggle({ className }: { className?: string }) {
  // Start as undefined — we don't render the icon until we know the real state.
  // This prevents a server/client mismatch since the server can't read localStorage.
  const [dark, setDark] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    // The inline script in layout.tsx has already applied the class.
    // Just sync React state with whatever is on <html> right now.
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  // Render a placeholder with the same dimensions until we know the mode.
  // This avoids any layout shift while keeping the button always present.
  if (dark === undefined) {
    return (
      <button
        className={cn(
          'p-1.5 rounded-sm border border-[#DDD9D0] dark:border-white/10 transition-colors',
          className
        )}
        aria-label="Toggle dark mode"
        disabled
      >
        <span className="block w-3.5 h-3.5" />
      </button>
    )
  }

  return (
    <button
      onClick={toggle}
      className={cn(
        'p-1.5 rounded-sm border border-[#DDD9D0] hover:bg-[#F2EFE9] dark:border-white/10 dark:hover:bg-white/10 transition-colors',
        className
      )}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? (
        <Sun className="w-3.5 h-3.5 text-[#E8B80C]" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-[#7A7060]" />
      )}
    </button>
  )
}
