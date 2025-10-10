import { pgSchema, text } from 'drizzle-orm/pg-core'

// schemas
export const business = pgSchema('business')
export const content = pgSchema('content')

// table
export const orderOptions = business.table('order_options', {
  id: text('id').primaryKey(),
  option: text('option'),
})
