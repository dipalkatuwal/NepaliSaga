import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FAF8F5',
          2: '#F2EFE9',
          3: '#FFFFFF',
          4: '#FFFDF9',
          dark: '#16120A',
          dark2: '#1E1810',
          dark3: '#26201A',
        },
        ink: {
          DEFAULT: '#1A1208',
          2: '#3D3326',
          3: '#7A7060',
          4: '#A09888',
        },
        red: {
          DEFAULT: '#B5281E',
          2: '#D94032',
          3: '#FF6B5B',
        },
        gold: {
          DEFAULT: '#A67C00',
          2: '#E8B80C',
          3: '#FFF3CC',
        },
        green: {
          DEFAULT: '#1B7A3E',
        },
        blue: {
          DEFAULT: '#1553A0',
        },
        border: {
          DEFAULT: '#DDD9D0',
          2: '#EBE7E0',
          dark: 'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
        baskerville: ['"Libre Baskerville"', 'Georgia', 'serif'],
      },
      boxShadow: {
        editorial: '0 2px 12px rgba(26,18,8,.06)',
        'editorial-lg': '0 8px 32px rgba(26,18,8,.10)',
        'editorial-xl': '0 16px 48px rgba(26,18,8,.14)',
      },
      animation: {
        'pulse-dot': 'pulse-dot 1.4s ease-in-out infinite',
        'ticker': 'ticker 40s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slideUp': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: {
        editorial: {
          css: {
            '--tw-prose-body': '#3D3326',
            '--tw-prose-headings': '#1A1208',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
