import { NextResponse } from 'next/server'

import { supabase } from '@/pkg/integrations/supabase'

// endpoint
export async function GET(): Promise<NextResponse> {
  const { data, error } = await supabase.from('order_options').select('*')

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json(data)
}
