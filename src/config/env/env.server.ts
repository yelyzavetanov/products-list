import z from 'zod'

import { createEnv } from '@t3-oss/env-nextjs'

// env server
export const envServer = createEnv({
  server: {
    GROWTHBOOK_CLIENT_KEY: z.string().min(1, { message: 'GROWTHBOOK_CLIENT_KEY is required' }),
    GROWTHBOOK_API_HOST: z.string().min(1, { message: 'GROWTHBOOK_API_HOST is required' }),
    GROWTHBOOK_APP_ORIGIN: z.string().min(1, { message: 'GROWTHBOOK_APP_ORIGIN is required' }),
    SUPABASE_URL: z.string().min(1, { message: 'SUPABASE_URL is required' }),
    SUPABASE_ANON_KEY: z.string().min(1, { message: 'SUPABASE_ANON_KEY is required' }),
    SUPABASE_SERVICE_ROLE_KEY: z.string().min(1, { message: 'SUPABASE_SERVICE_ROLE_KEY is required' }),
    SUPABASE_ACCESS_TOKEN: z.string().min(1, { message: 'SUPABASE_ACCESS_TOKEN is required' }),
    DATABASE_URL: z.string().min(1, { message: 'DATABASE_URL is required' }),
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {
    GROWTHBOOK_CLIENT_KEY: process.env.GROWTHBOOK_CLIENT_KEY,
    GROWTHBOOK_API_HOST: process.env.GROWTHBOOK_API_HOST,
    GROWTHBOOK_APP_ORIGIN: process.env.GROWTHBOOK_APP_ORIGIN,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    SUPABASE_ACCESS_TOKEN: process.env.SUPABASE_ACCESS_TOKEN,
    DATABASE_URL: process.env.DATABASE_URL,
  },
})
