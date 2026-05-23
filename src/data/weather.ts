import type { WeatherCity } from '@/types'

export const weatherData: WeatherCity[] = [
  { city: 'Kathmandu', temp: 22, desc: 'Partly Cloudy', icon: '⛅', humidity: 72, wind: '12 km/h', high: 28, low: 17 },
  { city: 'Pokhara', temp: 26, desc: 'Sunny', icon: '☀️', humidity: 58, wind: '8 km/h', high: 31, low: 19 },
  { city: 'Chitwan', temp: 34, desc: 'Hot & Humid', icon: '🌡️', humidity: 81, wind: '6 km/h', high: 38, low: 27 },
  { city: 'Dharan', temp: 29, desc: 'Hazy', icon: '🌫️', humidity: 75, wind: '10 km/h', high: 33, low: 22 },
  { city: 'Mustang', temp: 8, desc: 'Clear & Cold', icon: '🏔️', humidity: 22, wind: '24 km/h', high: 14, low: 2 },
]
