import { notFound } from 'next/navigation'

import { QueryFunctionContext } from '@tanstack/react-query'

import { IProduct, IProductByIdQueryParams, IProductRes } from '@/app/entities/models'

// api
export const productsQueryApi = async (opt: QueryFunctionContext) => {
  const res = await fetch(`https://dummyjson.com/products`, {
    signal: opt.signal,
    cache: 'force-cache',
    next: { revalidate: 30 },
  })

  if (!res) {
    return notFound()
  }

  const data: IProductRes = await res.json()

  return data.products
}

// api
export const productByIdQueryApi = async (opt: QueryFunctionContext, queryParams: IProductByIdQueryParams) => {
  const { id } = queryParams

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    signal: opt.signal,
    cache: 'force-cache',
    next: { revalidate: 30 },
  })

  if (!res) {
    return notFound()
  }

  const data: IProduct = await res.json()

  return data
}
