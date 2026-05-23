// src/types/index.ts

export interface TimelineEvent {
  date: string
  event: string
}

export interface Article {
  id: number
  slug: string
  cat: string
  section: string
  title: string
  byline: string
  author: string
  publishedAt: string
  readTime: string
  reads: string
  bg: string
  icon: string
  bullets: string[]
  body: string[]
  timeline: TimelineEvent[]
  tags: string[]
  featured?: boolean
}

export interface MarketStock {
  symbol: string
  name: string
  ltp: number
  change: number
  changePct: number
  volume: string
  sector: string
  up: boolean
  sparkline: number[]
}

export interface ForexRate {
  flag: string
  pair: string
  currency: string
  buy: number
  sell: number
  change?: number
}

export interface BullionRate {
  name: string
  price: string
  unit: string
  changePct: number
  up: boolean
  icon: string
  color: string
}

export interface WeatherCity {
  city: string
  temp: number
  desc: string
  icon: string
  humidity: number
  wind: string
  high: number
  low: number
}

export interface TrendingItem {
  rank: number
  cat: string
  title: string
  time: string
  reads: string
  articleId: number
}

export interface AdItem {
  id: string
  type: 'banner' | 'infeed' | 'rectangle' | 'marketplace'
  brand: string
  headline: string
  body: string
  cta: string
  bg: string
  color?: string
}

export interface PollOption {
  label: string
  pct: number
}

export interface Poll {
  question: string
  votes: number
  options: PollOption[]
}
