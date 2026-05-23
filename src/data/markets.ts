import type { MarketStock, ForexRate, BullionRate } from '@/types'

export const nepseStocks: MarketStock[] = [
  { symbol: 'NIFRA', name: 'Nepal Infrastructure Bank', ltp: 643.20, change: 23.10, changePct: 3.73, volume: '1.2M', sector: 'Finance', up: true, sparkline: [7, 10, 9, 14, 12, 19] },
  { symbol: 'UPPER', name: 'Upper Tamakoshi Hydro', ltp: 412.80, change: 15.60, changePct: 3.93, volume: '2.8M', sector: 'Hydro', up: true, sparkline: [5, 9, 8, 13, 11, 17] },
  { symbol: 'NHPC', name: 'Nepal Hydro Power Company', ltp: 87.30, change: 3.20, changePct: 3.80, volume: '890K', sector: 'Hydro', up: true, sparkline: [8, 11, 12, 10, 15, 19] },
  { symbol: 'NABIL', name: 'Nabil Bank Limited', ltp: 1124.50, change: -12.40, changePct: -1.09, volume: '340K', sector: 'Banking', up: false, sparkline: [17, 14, 15, 11, 9, 7] },
  { symbol: 'KBL', name: 'Kumari Bank Limited', ltp: 298.60, change: -4.80, changePct: -1.58, volume: '210K', sector: 'Banking', up: false, sparkline: [16, 13, 11, 10, 8, 6] },
  { symbol: 'NLIC', name: 'Nepal Life Insurance', ltp: 1462.00, change: 18.30, changePct: 1.27, volume: '120K', sector: 'Insurance', up: true, sparkline: [6, 8, 10, 13, 15, 18] },
]

export const nepseIndex = {
  value: 2247.38,
  change: 26.84,
  changePct: 1.21,
  base: 2220.54,
  date: 'Thu, May 23 · 3:05 PM NST',
}

export const forexRates: ForexRate[] = [
  { flag: '🇺🇸', pair: 'USD / NPR', currency: 'USD', buy: 133.45, sell: 134.05 },
  { flag: '🇪🇺', pair: 'EUR / NPR', currency: 'EUR', buy: 143.20, sell: 143.90 },
  { flag: '🇬🇧', pair: 'GBP / NPR', currency: 'GBP', buy: 168.55, sell: 169.40 },
  { flag: '🇯🇵', pair: 'JPY / NPR', currency: 'JPY', buy: 0.885, sell: 0.892 },
  { flag: '🇦🇪', pair: 'AED / NPR', currency: 'AED', buy: 36.33, sell: 36.52 },
  { flag: '🇸🇦', pair: 'SAR / NPR', currency: 'SAR', buy: 35.58, sell: 35.76 },
]

export const bullionRates: BullionRate[] = [
  { name: 'Fine Gold', price: 'NPR 1,08,450', unit: 'per tola', changePct: 0.8, up: true, icon: '◈', color: '#A67C00' },
  { name: 'Tejabi Gold', price: 'NPR 1,07,950', unit: 'per tola', changePct: 0.7, up: true, icon: 'Ꚃ', color: '#A67C00' },
  { name: 'Silver', price: 'NPR 1,380', unit: 'per tola', changePct: 1.1, up: true, icon: '⬡', color: '#6B7280' },
]

export const topbarMarkets = [
  { label: 'USD/NPR', value: '133.45' },
  { label: 'Gold', value: '₨1,08,450' },
]
