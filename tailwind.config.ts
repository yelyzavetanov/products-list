import type { Config } from 'tailwindcss'

import { heroui } from '@heroui/react'

// tailwind config
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: { sm: '768px', md: '1024px', lg: '1360px' },
    extend: {
      layout: {
        borderColor: 'white',
      },
      colors: {
        secondary: '#0d766e',
        default: 'transparent',
        gray: '#454f69',
        base: '#2c3345',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      layout: {
        fontSize: {
          large: '28px',
        },
      },
    }),
  ],
}

export default config
