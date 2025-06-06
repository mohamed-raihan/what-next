import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)'],
        roboto: ['var(--font-roboto)'],
        inter: ['var(--font-inter)'],
        rubik: ['var(--font-rubik)'],
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}

export default config 