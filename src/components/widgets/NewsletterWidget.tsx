'use client'
import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function NewsletterWidget() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="bg-[#1A1208] rounded-[4px] overflow-hidden text-white p-5">
      <div className="flex items-center gap-2 mb-2">
        <Mail className="w-4 h-4 text-[#E8B80C]" />
        <h4 className="font-serif text-[16px] font-bold">The Morning Saga</h4>
      </div>
      <p className="text-[12px] text-white/60 leading-relaxed mb-4">
        Nepal's most important stories, distilled into a 5-minute morning briefing. Delivered at 7 AM NST.
      </p>
      {submitted ? (
        <div className="text-[12px] text-[#4CD964] font-medium">
          ✓ You're subscribed! First briefing tomorrow morning.
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-white/[0.08] border border-white/15 rounded-[2px] px-3 py-2 text-[12px] text-white placeholder-white/30 focus:outline-none focus:border-white/40"
          />
          <button
            onClick={() => email && setSubmitted(true)}
            className="bg-[#B5281E] text-white text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-2 rounded-[2px] hover:bg-[#D94032] transition-colors whitespace-nowrap"
          >
            Join
          </button>
        </div>
      )}
    </div>
  )
}
