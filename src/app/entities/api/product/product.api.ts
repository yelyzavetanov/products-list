import { notFound } from 'next/navigation'

import * as Sentry from '@sentry/nextjs'
import { QueryFunctionContext } from '@tanstack/react-query'

import { IProduct, IProductByIdQueryParams, IProductRes } from '@/app/entities/models'
import { restApiFetcher } from '@/pkg/libraries/rest-api/fetcher'

// api
export const productsQueryApi = async (opt: QueryFunctionContext) => {
  try {
    const res = await restApiFetcher
      .get<IProductRes>(`products`, {
        signal: opt.signal,
        cache: 'force-cache',
        next: { revalidate: 30 },
      })
      .json()

    if (!res) {
      throw new Error(`Error occurred, products not found`)
    }

    return res.products
  } catch (error) {
    Sentry.withScope((scope) => {
      scope.setTag('api', 'productByIdQueryApi')
      Sentry.captureException(error)
    })

    return notFound()
  }
}

// api
export const productByIdQueryApi = async (opt: QueryFunctionContext, queryParams: IProductByIdQueryParams) => {
  const { id } = queryParams

  try {
    const res = await restApiFetcher
      .get<IProduct>(`products/${id}`, {
        signal: opt.signal,
        cache: 'force-cache',
        next: { revalidate: 30 },
      })
      .json()

    if (!res) {
      throw new Error(`Product not found: id=${id}`)
    }

    return res
  } catch (error) {
    Sentry.withScope((scope) => {
      scope.setTag('api', 'productByIdQueryApi')
      Sentry.captureException(error)
    })

    return notFound()
  }
}
