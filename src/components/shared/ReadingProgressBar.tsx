'use client'
import { useReadingProgress } from '@/hooks/useReadingProgress'

export default function ReadingProgressBar() {
  const progress = useReadingProgress()

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-[#B5281E] z-[9999] transition-[width] duration-100 will-change-[width]"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  )
}
