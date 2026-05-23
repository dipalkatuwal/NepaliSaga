import type { AdItem, Poll, TrendingItem } from '@/types'

export const topBannerAd: AdItem = {
  id: 'banner-top',
  type: 'banner',
  brand: 'NMB Digital Bank',
  headline: "Nepal's Most Awarded Digital Bank 2025 - Zero-Fee Savings + 8.25% FD",
  body: 'Open your account in 3 minutes. No minimum balance. Instant digital onboarding.',
  cta: 'Get Started Free',
  bg: 'linear-gradient(135deg,#0A1628 0%,#1A3050 50%,#0F2040 100%)',
}

export const infeedAds: AdItem[] = [
  {
    id: 'infeed-hbl',
    type: 'infeed',
    brand: 'Himalayan Bank',
    headline: "Earn 8.75% with HBL Smart Savings - Zero Minimum Balance",
    body: "Nepal's most trusted private bank since 1993. Instant digital account opening.",
    cta: 'Open Smart Account',
    bg: '#F8F4EE',
    color: '#1A3A8C',
  },
  {
    id: 'infeed-ncell',
    type: 'infeed',
    brand: 'Ncell',
    headline: "Stay Connected Across Nepal's 7 Provinces",
    body: "Ncell 5G Unlimited - 100GB data + unlimited calls at NPR 999/month. Now covering 85% of Nepal.",
    cta: 'Activate Plan',
    bg: '#F0F8F0',
    color: '#1B7A3E',
  },
  {
    id: 'infeed-ime',
    type: 'infeed',
    brand: 'IME Remit',
    headline: 'Zero Fees on Transfers Above USD 500',
    body: 'Available in Japan, South Korea, UAE, Qatar, Malaysia and 40+ countries. Real-time exchange rates.',
    cta: 'Send Money',
    bg: '#FFF8F0',
    color: '#C05000',
  },
]

export const sidebarAd: AdItem = {
  id: 'sidebar-nmb',
  type: 'rectangle',
  brand: 'NMB Digital Banking',
  headline: 'Open a zero-fee savings account in 3 minutes',
  body: "8.25% FD rates. Nepal's most awarded digital bank 2025.",
  cta: 'Get Started Free',
  bg: 'linear-gradient(135deg,#1A3A8C,#0D2060)',
}

export const trendingItems: TrendingItem[] = [
  { rank: 1, cat: 'Politics', title: 'Federal Budget 2082/83 - Rs. 2.14 Trillion Presented', time: '2 hours ago', reads: '87k', articleId: 0 },
  { rank: 2, cat: 'Economy', title: 'NEPSE Surges to 14-Week High at 2,247', time: '2 hours ago', reads: '52k', articleId: 1 },
  { rank: 3, cat: 'Economy', title: 'Gold All-Time High: NPR 1,08,450 Per Tola', time: '6 hours ago', reads: '48k', articleId: 3 },
  { rank: 4, cat: 'Society', title: 'Remittance Hits Historic USD 10.4 Billion', time: 'Yesterday', reads: '41k', articleId: 6 },
  { rank: 5, cat: 'Education', title: 'SEE Results: 82% Pass, 4,500 Score GPA 4.0', time: '3 hours ago', reads: '43k', articleId: 0 },
  { rank: 6, cat: 'Tech', title: 'Digital ID Goes National - Nagarik App 3M Downloads', time: '4 hours ago', reads: '39k', articleId: 2 },
  { rank: 7, cat: 'Sports', title: 'Nepal Cricket Qualifies for T20 WC 2027', time: 'Yesterday', reads: '36k', articleId: 0 },
]

export const readerPoll: Poll = {
  question: "Is the Federal Budget 2082/83 sufficient to address Nepal's infrastructure needs?",
  votes: 2847,
  options: [
    { label: 'Yes, it addresses key priorities', pct: 42 },
    { label: 'Partially - more needed for roads', pct: 33 },
    { label: 'No, revenue targets are unrealistic', pct: 25 },
  ],
}

export const partnerAds = [
  { icon: '\u{1F3E6}', brand: 'Prabhu Bank FD', desc: '9.0% per annum - Apply online', bg: 'linear-gradient(135deg,#1A3A8C,#0D2060)' },
  { icon: '\u{1F6E1}', brand: 'Life Insurance Nepal', desc: 'From NPR 800/month - Get covered', bg: 'linear-gradient(135deg,#1B7A3E,#0D4A24)' },
  { icon: '\u{1F4B8}', brand: 'eSewa Money Transfer', desc: 'Send to 100+ countries - 0% fee', bg: 'linear-gradient(135deg,#C05000,#8B3800)' },
]
