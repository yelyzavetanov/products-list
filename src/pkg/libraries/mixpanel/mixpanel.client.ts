import mixpanel from 'mixpanel-browser'

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN

// init
export const initMixpanel = () => {
  if (!MIXPANEL_TOKEN) {
    return
  }

  mixpanel.init(MIXPANEL_TOKEN, {
    autocapture: true,
    debug: false,
    record_sessions_percent: 0,
    api_host: 'https://api-eu.mixpanel.com',
  })
}
