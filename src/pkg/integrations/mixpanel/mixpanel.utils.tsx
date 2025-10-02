'use client'

import mixpanel from 'mixpanel-browser'

export const mixpanelUtils = {
  trackResetSort: () => {
    if (mixpanel.track) {
      mixpanel.track('Reset Sort')
    }
  },
}
