'use client'

import { mixpanelManager } from './mixpanel.manager'

export const mixpanelUtils = {
  trackResetSort: () => {
    mixpanelManager.track('Reset Sort')
  },
}
