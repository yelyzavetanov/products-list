import { NextResponse } from 'next/server'

import SupabaseManager from '@/pkg/integrations/supabase/supabase.client'

// endpoint
export async function GET(): Promise<NextResponse> {
  const supabase = SupabaseManager.getClient()

  const { data, error } = await supabase.from('order_options').select('*')

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json(data, { headers: { 'Cache-Control': 'max-age=30' } })
}
