import { defineConfig } from 'drizzle-kit'

import { envServer } from '@/config/env'

// config
export default defineConfig({
  schema: './src/pkg/integrations/drizzle/schemas/order.schema.ts',
  out: './src/pkg/integrations/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: envServer.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
})
