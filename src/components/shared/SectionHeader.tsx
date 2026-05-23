import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  meta?: string
  accent?: 'red' | 'gold' | 'green' | 'ink'
  pill?: string
  className?: string
}

export default function SectionHeader({ title, meta, accent = 'ink', pill, className }: SectionHeaderProps) {
  const accentColors = {
    red: 'border-[#B5281E]',
    gold: 'border-[#A67C00]',
    green: 'border-[#1B7A3E]',
    ink: 'border-[#1A1208]',
  }

  return (
    <div className={cn('flex items-center gap-3 mb-5 pb-2.5 border-b-2', accentColors[accent], className)}>
      <h2 className="font-serif text-[18px] font-bold tracking-[-0.01em] text-[#1A1208] whitespace-nowrap flex items-center gap-2">
        {title}
        {pill && (
          <span className="bg-[#B5281E] text-white text-[9px] px-1.5 py-0.5 rounded-full font-sans font-bold tracking-[0.1em] align-middle">
            {pill}
          </span>
        )}
      </h2>
      <div className="flex-1 h-px bg-[#DDD9D0]" />
      {meta && (
        <span className="text-[10.5px] tracking-[0.08em] text-[#7A7060] uppercase whitespace-nowrap">{meta}</span>
      )}
    </div>
  )
}
