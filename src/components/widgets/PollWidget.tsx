'use client'
import { useState } from 'react'
import { readerPoll } from '@/data/ads'
import { cn } from '@/lib/utils'

export default function PollWidget() {
  const [voted, setVoted] = useState<number | null>(null)
  const [votes, setVotes] = useState(readerPoll.votes)

  function handleVote(idx: number) {
    if (voted !== null) return
    setVoted(idx)
    setVotes((v) => v + 1)
  }

  return (
    <div className="bg-white border border-[#DDD9D0] rounded-[4px] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#EBE7E0]">
        <h3 className="font-serif text-[15px] font-bold text-[#1A1208]">Reader Poll</h3>
        <span className="text-[10px] text-[#7A7060]">{votes.toLocaleString()} votes</span>
      </div>
      <div className="p-4">
        <p className="text-[12.5px] font-medium text-[#1A1208] leading-[1.5] mb-4">
          {readerPoll.question}
        </p>
        <div className="space-y-2">
          {readerPoll.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleVote(i)}
              disabled={voted !== null}
              className={cn(
                'w-full relative rounded-[2px] overflow-hidden border text-left transition-all duration-200',
                voted !== null ? 'cursor-default' : 'hover:border-[#B5281E] cursor-pointer',
                voted === i ? 'border-[#B5281E]' : 'border-[#DDD9D0]'
              )}
              aria-label={`Vote for: ${opt.label}`}
            >
              <div
                className="absolute inset-0 bg-[#FFEBEB] transition-all duration-500"
                style={{ width: voted !== null ? `${opt.pct}%` : '0%' }}
              />
              <div className="relative flex items-center justify-between px-3 py-2.5">
                <span className="text-[12px] text-[#1A1208] font-medium">{opt.label}</span>
                {voted !== null && (
                  <span className="text-[11px] font-bold text-[#B5281E]">{opt.pct}%</span>
                )}
              </div>
            </button>
          ))}
        </div>
        <p className="text-[10px] text-[#A09888] mt-3">
          {voted !== null ? 'Thanks for voting!' : 'Click to vote'} · {votes.toLocaleString()} readers have voted
        </p>
      </div>
    </div>
  )
}
