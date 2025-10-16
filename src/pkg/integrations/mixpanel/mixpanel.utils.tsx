'use client'

import { mixpanelManager } from './mixpanel.manager'

// utils
export const mixpanelUtils = {
  trackResetSort: () => {
    mixpanelManager.track('Reset Sort')
  },
}
