import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { envServer } from '@/config/env'

import * as schema from './schemas/order.schema'

// db client
const client = postgres(envServer.DATABASE_URL!, {
  max: 5,
  ssl: 'require',
})

export const db = drizzle(client, { schema })
