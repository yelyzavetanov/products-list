import { defineConfig, devices } from '@playwright/test'

import { envClient } from '@/config/env'

// playwright config
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: './tests/html-report' }]],
  outputDir: './tests/results/',
  use: {
    baseURL: envClient.NEXT_PUBLIC_CLIENT_WEB_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['iPhone SE'],
      },
    },
  ],
})
