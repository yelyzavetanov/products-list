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
        fontSize: {
          large: '28px',
        },
        disabledOpacity: '0.3',
        radius: {
          small: '2px',
          medium: '4px',
          large: '6px',
        },
        borderWidth: {
          small: '0.5px',
          medium: '1px',
          large: '2px',
        },
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
  plugins: [heroui()],
}

export default config
