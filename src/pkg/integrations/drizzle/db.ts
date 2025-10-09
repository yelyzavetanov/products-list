import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { envServer } from '@/config/env'

import * as schema from './schema'

const connectionString = envServer.SUPABASE_URL!

// db client
const client = postgres(connectionString, {
  ssl: 'require',
})

export const db = drizzle(client, { schema })
