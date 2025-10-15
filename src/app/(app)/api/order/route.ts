import { NextResponse } from 'next/server'

import { db, orderOptions } from '@/pkg/integrations/drizzle'

// cache
export const dynamic = 'force-static'
export const revalidate = 30

// endpoint
export async function GET(): Promise<NextResponse> {
  try {
    const data = await db.select().from(orderOptions)
    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }

  // const supabase = SupabaseManager.getClient()

  // const { data, error } = await supabase.from('order_options').select('*')

  // if (error) return NextResponse.json({ error }, { status: 500 })
  // return NextResponse.json(data)
}
