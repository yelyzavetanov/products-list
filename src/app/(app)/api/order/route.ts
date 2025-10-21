import rateLimit from 'next-rate-limit'
import { NextRequest, NextResponse } from 'next/server'

import { db, orderOptions } from '@/pkg/integrations/drizzle'

// cache
export const dynamic = 'force-static'
export const revalidate = 30

// rate limiter
const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
})

// endpoint
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const headers = limiter.checkNext(request, 10)

    const data = await db.select().from(orderOptions)
    const response = NextResponse.json(data)

    headers.forEach((value, key) => response.headers.set(key, value))

    return response
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
