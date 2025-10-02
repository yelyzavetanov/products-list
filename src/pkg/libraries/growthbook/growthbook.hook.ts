'use client'

import { useGrowthBook } from './growthbook.provider'

export const useFeatureFlag = (key: string, defaultValue: any = false) => {
  const growthbook = useGrowthBook()

  if (!growthbook) {
    return defaultValue
  }

  return growthbook.getFeatureValue(key, defaultValue)
}
