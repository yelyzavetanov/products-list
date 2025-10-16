import * as Sentry from '@sentry/nextjs'

import { envClient } from '@/config/env'

// init
Sentry.init({
  dsn: envClient.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1,
  enableLogs: false,
  debug: false,
})
