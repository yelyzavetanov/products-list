import * as Sentry from '@sentry/nextjs'

import { envServer } from '@/config/env'

Sentry.init({
  dsn: envServer.SENTRY_DSN,
  tracesSampleRate: 1,
  enableLogs: false,
  debug: false,
})
