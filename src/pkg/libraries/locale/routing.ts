import { defineRouting } from 'next-intl/routing'

// routing
export const routing = defineRouting({
  locales: ['en', 'uk'],
  localePrefix: 'as-needed',
  localeDetection: false,
  defaultLocale: 'en',
})
