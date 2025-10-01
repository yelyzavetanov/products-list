import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

// i18n
const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/pkg/libraries/locale/request.ts',
})

// next config
const nextConfig: NextConfig = {
  output: 'standalone',

  poweredByHeader: false,
  cacheMaxMemorySize: 100 * 1024 * 1024,

  experimental: {
    reactCompiler: true,
    optimizeServerReact: true,
    optimizePackageImports: [
      'zod',
      'luxon',
      'react-hook-form',
      'usehooks-ts',
      '@heroui/react',
      '@heroui/system',
      '@heroui/button',
      '@heroui/card',
      '@heroui/navbar',
      '@heroui/select',
      '@heroui/skeleton',
      'zustand',
      'framer-motion',
    ],
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 2,
    staticGenerationMinPagesPerWorker: 25,
  },
}

export default withNextIntl(nextConfig)
