import { queryOptions } from '@tanstack/react-query'

import { IProductByIdQueryParams } from '@/app/entities/models'

import { productByIdQueryApi, productsQueryApi } from './product.api'

// options
export const productsQueryOptions = () => {
  return queryOptions({
    queryKey: ['products'],
    queryFn: (params) => productsQueryApi(params),
  })
}

// options
export const productByIdQueryOptions = (queryParams: IProductByIdQueryParams) => {
  const { id } = queryParams

  return queryOptions({
    queryKey: ['product', id],
    queryFn: (params) => productByIdQueryApi(params, queryParams),
  })
}
