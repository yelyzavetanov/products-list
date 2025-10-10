import mixpanel from 'mixpanel-browser'

import { envClient } from '@/config/env'

let isInitialized = false

export const mixpanelManager = {
  init: () => {
    if (!isInitialized && typeof window !== 'undefined' && envClient.NEXT_PUBLIC_MIXPANEL_TOKEN) {
      mixpanel.init(envClient.NEXT_PUBLIC_MIXPANEL_TOKEN, {
        autocapture: true,
        debug: false,
        record_sessions_percent: 0,
        api_host: envClient.NEXT_PUBLIC_MIXPANEL_API_HOST,
      })
      isInitialized = true
    }
  },

  track: (eventName: string, properties?: Record<string, unknown>) => {
    if (isInitialized) {
      mixpanel.track(eventName, properties)
    }
  },

  identify: (id: string) => {
    if (isInitialized) {
      mixpanel.identify(id)
    }
  },
}
