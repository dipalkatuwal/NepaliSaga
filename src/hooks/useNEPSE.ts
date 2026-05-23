'use client'
import { useState, useEffect, useRef } from 'react'

interface NEPSEState {
  value: number
  change: number
  pct: number
  up: boolean
}

const BASE = 2220.54
const INITIAL = 2247.38

export function useNEPSE(intervalMs = 3200): NEPSEState {
  const [value, setValue] = useState(INITIAL)
  const ref = useRef(INITIAL)

  useEffect(() => {
    const id = setInterval(() => {
      const delta = (Math.random() - 0.48) * 1.6
      ref.current = Math.max(2210, Math.min(2290, ref.current + delta))
      setValue(parseFloat(ref.current.toFixed(2)))
    }, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  const change = value - BASE
  return {
    value,
    change: parseFloat(change.toFixed(2)),
    pct: parseFloat(((change / BASE) * 100).toFixed(2)),
    up: change >= 0,
  }
}
