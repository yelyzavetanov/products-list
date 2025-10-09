import { defineConfig } from 'drizzle-kit'

import { envServer } from '@/config/env'

// config
export default defineConfig({
  out: './drizzle',
  schema: './src/pkg/integrations/drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: envServer.SUPABASE_URL!,
  },
})
