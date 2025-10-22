'use client'

import { mixpanelManager } from './mixpanel.manager'

// interface
interface IHelloMessageExperimentOptions {
  variation: number
  experimentKey: string
  id: string
}

// utils
export const mixpanelUtils = {
  trackResetSort: () => {
    mixpanelManager.track('Reset Sort')
  },

  trackHelloMessage: (options: IHelloMessageExperimentOptions) => {
    const { variation, experimentKey, id } = options

    mixpanelManager.track('Hello message', {
      variation,
      experimentKey,
      id,
    })
  },
}
