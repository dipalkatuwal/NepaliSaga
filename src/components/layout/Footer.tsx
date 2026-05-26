import Link from 'next/link'

const coverageLinks = [
  { label: 'Politics', href: '/politics', icon: '🏛' },
  { label: 'Economy', href: '/economy', icon: '📈' },
  { label: 'Markets', href: '/markets', icon: '💹' },
  { label: 'Climate', href: '/climate', icon: '🌿' },
  { label: 'Technology', href: '/technology', icon: '⚡' },
  { label: 'Culture', href: '/culture', icon: '🎭' },
  { label: 'World', href: '/world', icon: '🌏' },
  { label: 'Opinion', href: '/opinion', icon: '✍️' },
]

const companyLinks = [
  'About NepaliSaga',
  'Editorial Standards',
  'Corrections Policy',
  'Advertising',
  'Careers',
  'Contact Us',
]

const legalLinks = [
  'Privacy Policy',
  'Terms of Service',
  'Cookie Preferences',
  'Accessibility',
  'GDPR',
]

const socials = [
  {
    label: 'Facebook',
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    label: 'X',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    label: 'YouTube',
    path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#DDD9D0]">

      {/* ── RED TOP RULE with ornament ── */}
      <div className="relative h-[3px] bg-[#B5281E]">
        <div className="absolute left-1/2 -translate-x-1/2 -top-[9px] w-[18px] h-[18px] bg-[#B5281E] rotate-45" />
      </div>

      {/* ── MASTHEAD BAND ── */}
      <div className="border-b border-[#DDD9D0] bg-white">
        <div className="max-w-[1260px] mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo block */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-[#B5281E]" />
              <span className="font-serif font-black text-[30px] text-[#1A1208] leading-none tracking-[-0.02em] select-none">
                Nepali<span className="text-[#B5281E]">Saga</span>
              </span>
              <div className="h-px w-6 bg-[#B5281E]" />
            </div>
            <p className="text-[8.5px] tracking-[0.3em] uppercase text-[#A09888]">
              The Chronicle of Nepal&apos;s Unfolding Story
            </p>
          </div>

          {/* Mission statement */}
          <p className="max-w-sm text-center md:text-right text-[12px] text-[#7A7060] leading-[1.7] border-l border-[#DDD9D0] pl-6 hidden md:block">
            Independent. Rigorous. Nepali.<br />
            Telling the stories that shape the nation — with clarity, depth, and editorial integrity since 2021.
          </p>
        </div>
      </div>

      {/* ── COVERAGE RIBBON ── */}
      <div className="border-b border-[#DDD9D0] bg-[#FAF8F5]">
        <div className="max-w-[1260px] mx-auto px-4 md:px-6 py-5">
          <div className="text-[8.5px] tracking-[0.25em] uppercase text-[#A09888] mb-3 font-bold">Our Coverage</div>
          <div className="flex flex-wrap gap-2">
            {coverageLinks.map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-white border border-[#DDD9D0] text-[11.5px] text-[#3D3326] font-medium hover:border-[#B5281E] hover:text-[#B5281E] hover:bg-[#FFF8F7] transition-all duration-150"
              >
                <span className="text-[13px]">{icon}</span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="max-w-[1260px] mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.4fr] gap-10">

          {/* Col 1 — About + socials */}
          <div>
            <h4 className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#1A1208] mb-4 pb-2 border-b border-[#DDD9D0]">
              About NepaliSaga
            </h4>
            <p className="text-[12px] text-[#7A7060] leading-[1.75] mb-5">
              NepaliSaga is an independent digital newsroom covering politics, economy, culture, and climate from Kathmandu. We believe informed citizens build stronger democracies.
            </p>
            {/* Stats row */}
            <div className="flex gap-5 mb-5">
              {[
                { num: '2.4M', label: 'Monthly Readers' },
                { num: '340+', label: 'Stories Published' },
                { num: '4', label: 'Years of Coverage' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-serif font-black text-[20px] text-[#B5281E] leading-none">{num}</div>
                  <div className="text-[9px] text-[#A09888] tracking-[0.06em] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-[3px] bg-white border border-[#DDD9D0] text-[#A09888] hover:text-[#B5281E] hover:border-[#B5281E] hover:bg-[#FFF8F7] transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Company */}
          <div>
            <h4 className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#1A1208] mb-4 pb-2 border-b border-[#DDD9D0]">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="group flex items-center gap-1.5 text-[12px] text-[#7A7060] hover:text-[#B5281E] transition-colors">
                    <span className="w-1 h-1 rounded-full bg-[#DDD9D0] group-hover:bg-[#B5281E] transition-colors shrink-0" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <h4 className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#1A1208] mb-4 pb-2 border-b border-[#DDD9D0]">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="group flex items-center gap-1.5 text-[12px] text-[#7A7060] hover:text-[#B5281E] transition-colors">
                    <span className="w-1 h-1 rounded-full bg-[#DDD9D0] group-hover:bg-[#B5281E] transition-colors shrink-0" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <h4 className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#1A1208] mb-4 pb-2 border-b border-[#DDD9D0]">
              Morning Saga Newsletter
            </h4>
            <p className="text-[12px] text-[#7A7060] leading-[1.65] mb-4">
              Nepal&apos;s most important stories distilled to your inbox every morning at 7 AM NST.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 text-[12px] text-[#1A1208] bg-white border border-[#DDD9D0] rounded-[3px] placeholder-[#A09888] focus:outline-none focus:border-[#B5281E] transition-colors"
              />
              <button className="w-full py-2 text-[10.5px] font-bold tracking-[0.1em] uppercase bg-[#B5281E] text-white rounded-[3px] hover:bg-[#D94032] transition-colors">
                Get the Briefing
              </button>
            </div>
            <p className="text-[10px] text-[#A09888] mt-2">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-[#DDD9D0] bg-white">
        <div className="max-w-[1260px] mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[10.5px] text-[#A09888]">
          <div className="flex items-center gap-3">
            <span className="font-serif font-black text-[15px] text-[#1A1208] select-none">
              Nepali<span className="text-[#B5281E]">Saga</span>
            </span>
            <span className="text-[#DDD9D0]">·</span>
            <span>© 2026 NepaliSaga Media Pvt. Ltd.</span>
            <span className="text-[#DDD9D0]">·</span>
            <span>Kathmandu, Nepal</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Registered with Press Council Nepal</span>
            <span className="text-[#DDD9D0]">·</span>
            <span>Reg. No. PCN-2021-0847</span>
          </div>
        </div>
      </div>

    </footer>
  )
}