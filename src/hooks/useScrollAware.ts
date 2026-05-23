'use client'
import { useState, useEffect, useRef } from 'react'

interface ScrollState {
  scrolled: boolean
  scrolledFar: boolean
  direction: 'up' | 'down' | 'idle'
}

export function useScrollAware(threshold = 60): ScrollState {
  const [state, setState] = useState<ScrollState>({
    scrolled: false,
    scrolledFar: false,
    direction: 'idle',
  })
  const lastY = useRef(0)

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY
      setState({
        scrolled: y > threshold,
        scrolledFar: y > 300,
        direction: y > lastY.current ? 'down' : y < lastY.current ? 'up' : 'idle',
      })
      lastY.current = y
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return state
}
