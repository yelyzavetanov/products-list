import type { Config } from 'tailwindcss'

import { heroui } from '@heroui/react'

// tailwind config
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: { sm: '768px', md: '1024px', lg: '1360px' },
    extend: {
      colors: {
        secondary: '#0d766e',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      layout: {
        fontSize: {
          small: '0.875rem',
        },
      },
    }),
  ],
}

export default config
