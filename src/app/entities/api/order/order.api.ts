import { notFound } from 'next/navigation'

import { QueryFunctionContext } from '@tanstack/react-query'

import { localApiFetcher } from '@/pkg/libraries/rest-api/local-fetcher'

import { IOrder } from '../../models'

// api
export const orderQueryApi = async (opt: QueryFunctionContext) => {
  const res = await localApiFetcher
    .get<IOrder[]>(`api/order`, {
      signal: opt.signal,
      cache: 'force-cache',
      next: { revalidate: 30 },
    })
    .json()

  if (!res) {
    notFound()
  }

  return res
}
