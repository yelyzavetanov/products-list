import mixpanel from 'mixpanel-browser'

import { envClient } from '@/config/env'

// manager
class MixpanelManager {
  private static instance: MixpanelManager
  private isInitialized = false

  private constructor() {}

  static getInstance() {
    if (!MixpanelManager.instance) {
      MixpanelManager.instance = new MixpanelManager()
    }
    return MixpanelManager.instance
  }

  init() {
    if (!this.isInitialized && typeof window !== 'undefined' && envClient.NEXT_PUBLIC_MIXPANEL_TOKEN) {
      mixpanel.init(envClient.NEXT_PUBLIC_MIXPANEL_TOKEN, {
        autocapture: true,
        debug: false,
        record_sessions_percent: 0,
        api_host: envClient.NEXT_PUBLIC_MIXPANEL_API_HOST,
      })
      this.isInitialized = true
    }
  }

  track(eventName: string, properties?: Record<string, unknown>) {
    if (this.isInitialized) {
      mixpanel.track(eventName, properties)
    }
  }

  identify(id: string) {
    if (this.isInitialized) {
      mixpanel.identify(id)
    }
  }
}

export const mixpanelManager = MixpanelManager.getInstance()
