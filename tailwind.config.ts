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
        dividerWeight: '1px',
        disabledOpacity: 0.3,
        fontSize: {
          tiny: '12px',
          small: '14px',
          medium: '16px',
          large: '28px',
        },
        radius: {
          small: '4px',
          medium: '8px',
          large: '16px',
        },
        borderWidth: {
          small: '0.5px',
          medium: '1px',
          large: '2px',
        },
        lineHeight: {
          tiny: '1rem',
          small: '1.25rem',
          medium: '1.5rem',
          large: '1.75rem',
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#1f75db',
            },
            secondary: {
              DEFAULT: '#0d766e',
            },
          },
        },
      },
    }),
  ],
}

export default config
