import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        kalpurush: ['var(--font-kalpurush)'],
        me_quran: ['var(--font-me_quran)'],
      },
      colors: {
        primary: '#1fa45b',
        background: '#ebeef2',
        'icon-bg': '#e8f0f5',
        'cat-bg': '#f7f8fa',
      },
    },
  },
  plugins: [],
} satisfies Config
