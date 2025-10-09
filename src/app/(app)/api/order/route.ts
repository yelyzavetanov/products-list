import { NextResponse } from 'next/server'

import { SupabaseManager } from '@/pkg/integrations/supabase'

// cache
export const dynamic = 'force-static'
export const revalidate = 30

// endpoint
export async function GET(): Promise<NextResponse> {
  const supabase = SupabaseManager.getClient()

  const { data, error } = await supabase.from('order_options').select('*')

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json(data)

  // try {
  //   const data = await db.select().from(orderOptions)
  //   return NextResponse.json(data)
  // } catch (error) {
  //   return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  // }
}
