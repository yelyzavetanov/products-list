'use client'

import { createContext, FC, ReactNode, useContext, useEffect } from 'react'

import { GrowthBook } from '@growthbook/growthbook'

// interface
interface IProps {
  children: ReactNode
}

export const GrowthBookContext = createContext<GrowthBook | null>(null)

const growthbook = new GrowthBook({
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    console.log('GrowthBook experiment:', experiment.key, result.variationId)
  },
})

// component
export const GrowthBookProvider: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  useEffect(() => {
    growthbook.setAttributes({
      id: 'user-1',
      country: 'US',
    })

    growthbook.setFeatures({
      'colorful-header-text': {
        defaultValue: false,
        rules: [
          {
            condition: { country: 'US' },
            force: true,
          },
        ],
      },
    })
  }, [])

  // return
  return <GrowthBookContext.Provider value={growthbook}>{children}</GrowthBookContext.Provider>
}

export const useGrowthBook = () => useContext(GrowthBookContext)
export default GrowthBookProvider
