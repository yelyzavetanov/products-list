import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

import { envServer } from '@/config/env'

const migrationClient = postgres(envServer.DATABASE_URL as string, { max: 1 })

async function main() {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: './migrations',
  })

  migrationClient.end()
}

main()
