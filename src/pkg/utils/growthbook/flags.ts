import { FeatureDefinition, GrowthBook } from '@growthbook/growthbook'

const features: Record<string, FeatureDefinition<any>> = {
  colorfulHeaderText: { defaultValue: false },
}

const gb = new GrowthBook({ features })

export default gb
