import { cn } from '@/lib/utils'

type TagVariant = 'red' | 'green' | 'blue' | 'gold' | 'dark'

interface TagProps {
  children: React.ReactNode
  variant?: TagVariant
  className?: string
}

const variants: Record<TagVariant, string> = {
  red: 'bg-[#FFEBEB] text-[#B5281E]',
  green: 'bg-[#E8F5EE] text-[#1B7A3E]',
  blue: 'bg-[#E8EFFF] text-[#1553A0]',
  gold: 'bg-[#FFF3CC] text-[#A67C00]',
  dark: 'bg-[#1A1208] text-white',
}

export default function Tag({ children, variant = 'red', className }: TagProps) {
  return (
    <span className={cn(
      'inline-block text-[9.5px] font-bold tracking-[0.14em] uppercase px-[7px] py-[2px] rounded-[2px]',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}
