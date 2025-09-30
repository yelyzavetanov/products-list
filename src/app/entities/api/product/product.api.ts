import { notFound } from 'next/navigation'

import { QueryFunctionContext } from '@tanstack/react-query'

import { IProduct, IProductByIdQueryParams, IProductRes } from '@/app/entities/models'
import { restApiFetcher } from '@/pkg/libraries/rest-api/fetcher'

// api
export const productsQueryApi = async (opt: QueryFunctionContext) => {
  const res = await restApiFetcher
    .get<IProductRes>(`products`, {
      signal: opt.signal,
      cache: 'force-cache',
      next: { revalidate: 30 },
    })
    .json()

  if (!res) {
    return notFound()
  }

  return res.products
}

// api
export const productByIdQueryApi = async (opt: QueryFunctionContext, queryParams: IProductByIdQueryParams) => {
  const { id } = queryParams

  const res = await restApiFetcher
    .get<IProduct>(`products/${id}`, {
      signal: opt.signal,
      cache: 'force-cache',
      next: { revalidate: 30 },
    })
    .json()

  if (!res) {
    return notFound()
  }

  return res
}
