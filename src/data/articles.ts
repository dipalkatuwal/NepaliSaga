import { Article } from '@/types'
import { slugify } from '@/lib/utils'

const rawArticles = [
  {
    id: 0,
    cat: 'Politics · Energy',
    section: 'Politics',
    title: 'Nepal–India Power Trade Agreement Renewed for Decade — Cross-Border Export Target Raised to 10,000 MW',
    byline: 'Suresh Dhakal · Political Desk · May 23, 2026',
    author: 'Suresh Dhakal',
    publishedAt: 'May 23, 2026',
    readTime: '6 min read',
    reads: '33.2k',
    bg: 'linear-gradient(135deg,#1A0A30,#0A051A)',
    icon: '⚡',
    bullets: [
      'Nepal–India bilateral power trade framework extended for ten years with new export ceiling of 10,000 MW',
      'India will purchase an additional 2,500 MW of dry-season hydropower beginning in fiscal year 2083/84',
      'Nepal Electricity Authority commits to completing 900 MW Upper Karnali and 600 MW Arun IV by 2030 under framework',
    ],
    body: [
      'Nepal and India formally extended the bilateral power trade framework for another ten years on Thursday, setting an ambitious target to export 10,000 MW of electricity to India by 2034 — double the current upper bound under the expiring agreement.',
      'The ceremony, held at Rastriya Sabha Griha in Kathmandu and attended by the Energy Ministers of both countries, follows 18 months of negotiations that were complicated by disputes over wheeling charges through Indian territory for onward sale to Bangladesh.',
      'The new framework resolves that dispute by establishing a fixed 4% wheeling charge applicable to all cross-border transfers, and introduces a transparent quarterly tariff-setting mechanism linked to the Indian Grid Controller\'s published rates.',
      'Nepal Electricity Authority Managing Director confirmed that capacity committed to India under the new agreement would come primarily from run-of-river projects, with storage projects like Upper Seti reserved to meet Nepal\'s own growing domestic peak demand.',
      'Analysts at the Investment Board Nepal cautioned that the 10,000 MW target requires approximately USD 18 billion in new hydropower investment between now and 2034, and that current financing pipelines cover barely 40% of that requirement.',
    ],
    timeline: [
      { date: 'Mar 2014', event: 'First bilateral power trade agreement signed; initial ceiling of 1,000 MW' },
      { date: 'Nov 2021', event: 'Framework extended to 2023; ceiling raised to 5,000 MW' },
      { date: 'Jan 2025', event: 'Negotiations begin on new decade-long framework' },
      { date: 'May 23, 2026', event: 'New agreement signed; 10,000 MW target set for 2034' },
    ],
    tags: ['Politics', 'Energy', 'India', 'Diplomacy'],
    featured: true,
  },
  {
    id: 1,
    cat: 'Economy · Markets',
    section: 'Economy',
    title: 'NEPSE Surges Past 2,250 as Foreign Portfolio Flows Accelerate Into Hydropower Sector',
    byline: 'Anish Sharma · NepaliSaga Business Desk · May 23, 2026',
    author: 'Anish Sharma',
    publishedAt: 'May 23, 2026',
    readTime: '4 min read',
    reads: '52.4k',
    bg: 'linear-gradient(135deg,#1B3A2D,#0A1E16)',
    icon: '📈',
    bullets: [
      'Index gains 1.2% in Thursday session; 14-week high at 2,247.38',
      'NHPC and Upper Tamakoshi lead sectoral rally with 3–4% daily gains',
      'Net FPI inflow hits NPR 4.2B in the past fortnight',
    ],
    body: [
      'Nepal\'s benchmark equity index closed at a 14-week high on Thursday, extending a hydropower-led rally as foreign portfolio investors accelerated their accumulation of listed utility stocks ahead of what analysts expect to be a landmark electricity export season.',
      'The NEPSE index gained 26.84 points, or 1.21%, to close at 2,247.38, its highest reading since February 14. The session\'s gainers were overwhelmingly concentrated in the hydropower and infrastructure banking sectors.',
      'Nepal Hydro Power Company (NHPC) and Upper Tamakoshi Hydro were the most active large-cap names, gaining 3.8% and 3.9% respectively on combined turnover of NPR 1.1 billion — roughly 40% of the day\'s total market volume.',
      'Foreign Portfolio Investor (FPI) net buying reached NPR 4.2 billion in the past fortnight, according to CDS & Clearing data, the highest two-week inflow since the framework for FPI participation in NEPSE was liberalised in 2082.',
    ],
    timeline: [
      { date: 'Feb 2026', event: 'NEPSE at 2,100; FPI framework liberalised' },
      { date: 'Mar 2026', event: 'First wave of FPI inflows — NPR 2.8B in a month' },
      { date: 'May 1, 2026', event: 'Index crosses 2,200 for first time since 2023' },
      { date: 'May 23, 2026', event: '14-week high at 2,247.38; FPI fortnight inflow at NPR 4.2B' },
    ],
    tags: ['Economy', 'Markets', 'NEPSE', 'Hydropower'],
  },
  {
    id: 2,
    cat: 'Technology · Digital Nepal',
    section: 'Technology',
    title: 'Nepal\'s New Digital ID System Goes Live in Seven Provinces — Nagarik App Crosses 3M Downloads',
    byline: 'Prakash Lamichhane · NepaliSaga Tech Desk · May 23, 2026',
    author: 'Prakash Lamichhane',
    publishedAt: 'May 23, 2026',
    readTime: '5 min read',
    reads: '38.7k',
    bg: 'linear-gradient(135deg,#1A2840,#0A1628)',
    icon: '🌐',
    bullets: [
      'National Digital ID integrates health records, tax identity, and social welfare entitlements in one platform',
      'Biometric enrollment booths now operational at all 753 local governments across Nepal',
      'Privacy advocates flag absence of independent data protection oversight authority',
    ],
    body: [
      'Nepal\'s most ambitious e-governance project went fully live Thursday, as the National Digital Identity platform — branded under the Nagarik app — extended its reach to all seven provinces following an 18-month phased rollout.',
      'The system links a citizen\'s biometric identity to a unified wallet of government services: health records from the national insurance scheme, income tax records from the Inland Revenue Department, and social protection transfers managed by the Ministry of Finance.',
      'Uptake has been swift: the Nagarik app crossed 3 million downloads in its first week of national availability, representing roughly 10% of Nepal\'s adult population. The government\'s target is 8 million enrolled citizens by the end of fiscal year 2082/83.',
      'Digital rights organisation Access Now Nepal published a report noting that the enabling legislation contains no provision for an independent supervisory body, unlike comparable frameworks in India, Estonia, and South Korea. The government promised a data protection bill in the upcoming parliamentary session.',
    ],
    timeline: [
      { date: 'Nov 2024', event: 'Cabinet approves National Digital Identity framework' },
      { date: 'Jun 2025', event: 'Pilot launch in Bagmati Province; 180,000 citizens enrolled' },
      { date: 'Jan 2026', event: 'Rollout expands to Province No. 1 and Madhesh' },
      { date: 'May 23, 2026', event: 'National launch; app crosses 3M downloads in week one' },
    ],
    tags: ['Technology', 'Digital', 'Governance'],
  },
  {
    id: 3,
    cat: 'Economy · Commodities',
    section: 'Economy',
    title: 'Gold Hits Record NPR 1,08,450 Per Tola Amid Global Safe-Haven Demand Surge',
    byline: 'Ramesh Paudel · NepaliSaga Business Desk · May 23, 2026',
    author: 'Ramesh Paudel',
    publishedAt: 'May 23, 2026',
    readTime: '4 min read',
    reads: '29.1k',
    bg: 'linear-gradient(135deg,#2D1B00,#1A0F00)',
    icon: '◈',
    bullets: [
      'Fine gold reaches all-time high of NPR 1,08,450 per tola — third consecutive week of gains',
      'Silver follows at NPR 1,380 per tola, a three-year high driven by industrial demand',
      'Kathmandu jewellers report 30% decline in purchase volumes as buyers wait for a correction',
    ],
    body: [
      'Gold\'s relentless climb continued Thursday, touching a new all-time high in Nepali rupee terms as global safe-haven demand filtered through international bullion markets into domestic retail pricing.',
      'The Federation of Nepal Gold and Silver Dealers Association set the fine gold rate at NPR 1,08,450 per tola at Thursday\'s fixing, a gain of NPR 850 from Wednesday\'s close. Year-to-date, gold has risen 6.4% in rupee terms, outperforming both NEPSE and fixed deposits.',
      'The silver market has been animated by a separate dynamic: industrial demand from solar panel manufacturing has tightened global supply, pushing Nepali silver rates to NPR 1,380 per tola, their highest since 2023.',
      'Retailers along New Road and Indrachowk report that walk-in customers are looking rather than purchasing, with volumes down roughly 30% compared to the same period last year.',
    ],
    timeline: [
      { date: 'Jan 2026', event: 'Gold at NPR 1,01,800 — investors begin shifting into bullion' },
      { date: 'Mar 2026', event: 'Middle East tensions drive global gold past USD 2,800/oz' },
      { date: 'Apr 2026', event: 'NRB tightens gold import quotas' },
      { date: 'May 23, 2026', event: 'All-time high of NPR 1,08,450 set; jewellers report sharp slowdown' },
    ],
    tags: ['Economy', 'Gold', 'Commodities'],
  },
  {
    id: 4,
    cat: 'Culture · Living Heritage',
    section: 'Culture',
    title: 'Gunla Season Begins: Ancient Newari Buddhist Ceremonies Draw Record International Visitors',
    byline: 'Sita Maharjan · NepaliSaga Culture Desk · May 23, 2026',
    author: 'Sita Maharjan',
    publishedAt: 'May 23, 2026',
    readTime: '5 min read',
    reads: '24.3k',
    bg: 'linear-gradient(135deg,#1E1030,#0E0818)',
    icon: '🕌',
    bullets: [
      'The 30-day sacred month of Gunla opens with the dawn circumambulation of Swayambhunath',
      'UNESCO observers present as Nepal files living heritage practices under expanded World Heritage bid',
      'Patan and Bhaktapur announce vehicle-free heritage corridors throughout the month of Gunla',
    ],
    body: [
      'Gunla — the sacred lunar month observed by the Newar Buddhist community of Kathmandu Valley — opened at dawn Thursday to the sound of dhimay drums and the sight of thousands of devotees beginning the traditional circumambulation of Swayambhunath stupa.',
      'This year\'s Gunla is watched with unusual attention from beyond the valley. A delegation from UNESCO\'s Culture Sector is conducting field documentation as Nepal advances its case for inscribing the Gunla observance under an expanded Living Cultural Landscape nomination to the World Heritage List.',
      'The municipalities of Lalitpur (Patan) and Bhaktapur have declared vehicle-free heritage corridors in their historic cores for the entire 30-day period.',
      'Tourism Board Nepal estimates that the Gunla season will draw over 40,000 international visitors to the valley this year, up from 28,000 in 2025.',
    ],
    timeline: [
      { date: 'Aug 2024', event: 'Nepal formally submits Gunla Living Heritage nomination to UNESCO' },
      { date: 'Dec 2025', event: 'UNESCO technical mission visits Kathmandu' },
      { date: 'May 2026', event: 'Supplementary cultural mapping report submitted' },
      { date: 'May 23, 2026', event: 'Gunla 2082 begins; UNESCO observers witness ceremonies' },
    ],
    tags: ['Culture', 'Heritage', 'UNESCO', 'Tourism'],
  },
  {
    id: 5,
    cat: 'Climate · Disaster',
    section: 'Climate',
    title: 'Koshi River Basin on Emergency Protocol as Pre-Monsoon Glacial Melt Accelerates — Three Districts on Alert',
    byline: 'Bipana Rai · NepaliSaga Climate Desk · May 23, 2026',
    author: 'Bipana Rai',
    publishedAt: 'May 23, 2026',
    readTime: '5 min read',
    reads: '18.9k',
    bg: 'linear-gradient(135deg,#0D2B1C,#051A10)',
    icon: '🌊',
    bullets: [
      'Koshi River Basin Authority raises flood warning to Level 2 alert',
      'Automated sensors at Chatara barrage record flow 34% above seasonal baseline',
      'Sunsari, Saptari, and Siraha districts placed on pre-monsoon emergency footing',
    ],
    body: [
      'Koshi River Basin Authority raised its flood warning to Level 2 alert following an unusually sharp spike in upstream melt discharge Thursday, as automated sensors at the Chatara barrage recorded flow volumes 34% above the seasonal baseline.',
      'The proximate cause, according to glaciologists at the Department of Hydrology and Meteorology, is a combination of early-arriving warm air masses from the Bay of Bengal and a snowpack across the upper Arun and Tamor catchments that is 22% higher than average after an abnormally wet winter.',
      'Three Terai districts — Sunsari, Saptari, and Siraha — have been placed on pre-monsoon emergency footing, with district coordination committees activating evacuation plans for low-lying settlements within 500 metres of the main channel.',
      'The Koshi is historically one of Nepal\'s most dangerous rivers, responsible for some of the most destructive floods in the country\'s recorded history, including the 2008 embankment breach that displaced over 50,000 people in Saptari alone.',
    ],
    timeline: [
      { date: 'Mar 2026', event: 'DHM reports above-average winter snowpack in Koshi headwaters' },
      { date: 'May 10, 2026', event: 'Preliminary Level 1 alert issued for Sunsari district' },
      { date: 'May 20, 2026', event: 'Chatara gauge readings begin trending 20% above baseline' },
      { date: 'May 23, 2026', event: 'Level 2 emergency alert; three districts on standby' },
    ],
    tags: ['Climate', 'Disaster', 'Floods', 'Koshi'],
  },
  {
    id: 6,
    cat: 'Economy · Remittance',
    section: 'Economy',
    title: 'Remittance Reaches USD 10.4 Billion in FY 2081/82 — Highest in Nepal\'s Recorded History',
    byline: 'Nirmala Tamang · NepaliSaga Business Desk · May 23, 2026',
    author: 'Nirmala Tamang',
    publishedAt: 'May 23, 2026',
    readTime: '6 min read',
    reads: '21.5k',
    bg: 'linear-gradient(135deg,#1A1A3A,#0A0A22)',
    icon: '✈',
    bullets: [
      'Malaysia and Gulf states remain top remittance corridors; Japan emerging as fastest-growing source',
      'Inflows now equal 26% of GDP, raising structural dependency concerns among economists',
      'NRB launches new digital remittance incentive scheme to channel funds into productive investment',
    ],
    body: [
      'Nepal\'s remittance receipts crossed the historic USD 10 billion threshold for the first time in FY 2081/82, according to Nepal Rastra Bank\'s balance of payments data, a milestone that underscores both the scale of Nepali labour migration and the structural reliance of the national economy on earnings from abroad.',
      'The Gulf Cooperation Council states — Saudi Arabia, UAE, Qatar, Kuwait, and Bahrain — collectively account for roughly 45% of total remittances, while Malaysia remains the second-largest single-country source. Japan, where Nepali migration has grown sharply following bilateral labour agreements signed in 2022, has emerged as the fastest-growing corridor, with transfers up 38% year-on-year.',
      'At 26% of GDP, Nepal\'s remittance dependence is among the highest in the world, surpassing Tajikistan and Kyrgyzstan on some measures. Economists at the NRB\'s Research Department have flagged the structural vulnerability this creates.',
      'The central bank has responded with a new Digital Remittance Incentive Scheme, offering a 0.25% cash-back bonus on transfers received through regulated digital channels, designed to improve tracking and channel more funds into formal savings and productive investment.',
    ],
    timeline: [
      { date: 'FY 2077/78', event: 'Remittance drops to USD 7.5B post-COVID; labour migration resumes' },
      { date: 'FY 2079/80', event: 'Recovery to USD 9.1B; Japan corridor grows 60% in two years' },
      { date: 'FY 2080/81', event: 'USD 9.8B — NRB forecasts imminent crossing of USD 10B threshold' },
      { date: 'FY 2081/82', event: 'Historic USD 10.4B; 26% of GDP — highest ever recorded' },
    ],
    tags: ['Economy', 'Remittance', 'Labour'],
  },
]

export const articles: Article[] = rawArticles.map((a) => ({
  ...a,
  slug: slugify(a.title),
}))

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getArticleById(id: number): Article | undefined {
  return articles.find((a) => a.id === id)
}

export const heroArticle = articles[0]
export const featuredGrid = articles.slice(1, 5)
export const moreStories = articles.slice(5)
