import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://d5f34f1bcb55073cb7e06b8faa7f18d1@o4510115117400064.ingest.de.sentry.io/4510115117793360',
  tracesSampleRate: 1,
  enableLogs: false,
  debug: false,
})
