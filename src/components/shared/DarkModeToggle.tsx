'use client'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DarkModeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
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
