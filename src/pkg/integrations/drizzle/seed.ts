import { db } from './db'
import { orderOptions } from './schemas'

async function seed() {
  await db.insert(orderOptions).values([
    { id: '1', option: 'Direct' },
    { id: '2', option: 'Reverse' },
  ])
  console.log('Seed finished!')
}

seed()
  .catch(console.error)
  .finally(() => process.exit())
