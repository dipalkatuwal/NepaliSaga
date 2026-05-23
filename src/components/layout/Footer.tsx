import Link from 'next/link'
import { Newspaper } from 'lucide-react'

const footerLinks = {
  'Coverage': ['Politics', 'Economy', 'Markets', 'Climate', 'Technology', 'Society', 'Culture', 'Sports'],
  'Company': ['About NepaliSaga', 'Editorial Standards', 'Corrections Policy', 'Advertising', 'Careers', 'Contact Us'],
  'Subscribe': ['Morning Saga Newsletter', 'Evening Digest', 'Markets Briefing', 'Weekend Edition', 'Push Notifications'],
  'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Preferences', 'Accessibility', 'GDPR'],
}

export default function Footer() {
  return (
    <footer className="bg-[#1A1208] text-white/60 mt-0">
      {/* Newsletter strip */}
      <div className="border-b border-white/8">
        <div className="max-w-[1260px] mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Newspaper className="w-4 h-4 text-[#E8B80C]" />
              <span className="text-white font-serif font-bold text-lg">The Morning Saga</span>
            </div>
            <p className="text-white/50 text-sm">Nepal's most important stories — distilled to your inbox at 7 AM NST</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-64 bg-white/[0.07] border border-white/10 rounded-sm px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30"
            />
            <button className="bg-[#B5281E] text-white text-xs font-bold tracking-[0.1em] uppercase px-4 py-2 rounded-sm hover:bg-[#D94032] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-[1260px] mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white/90 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 pb-2 border-b border-white/10">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-white/50 hover:text-white/90 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row gap-3 items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <span className="font-serif font-black text-white text-xl">
              Nepali<span className="text-[#B5281E]">Saga</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-white/40">The Chronicle of Nepal's Unfolding Story</span>
          </div>
          <div className="text-white/30 text-center">
            © 2026 NepaliSaga Media Pvt. Ltd. · Kathmandu, Nepal · All editorial content is original and independently reported.
          </div>
        </div>
      </div>
    </footer>
  )
}
