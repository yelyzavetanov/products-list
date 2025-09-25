import { queryOptions } from '@tanstack/react-query'
import { IProductByIdQueryParams, IProductQueryParams } from '../../models/product.model'
import { productByIdQueryApi, productsQueryApi } from './product.api'

// options
export const productsQueryOptions = (queryParams: IProductQueryParams) => {
  const { category = '' } = queryParams

  return queryOptions({
    queryKey: ['products'],
    queryFn: (params) => productsQueryApi(params, queryParams),
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
