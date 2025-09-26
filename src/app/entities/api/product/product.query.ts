import { queryOptions } from '@tanstack/react-query'
import { IProductByIdQueryParams, IProductQueryParams } from '../../models'
import { productByIdQueryApi, productCategoryListApi, productsQueryApi } from './product.api'

// options
export const productsQueryOptions = (queryParams: IProductQueryParams) => {
  const { category = '' } = queryParams

  return queryOptions({
    queryKey: ['products', category],
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

// options
export const productCategoryListOptions = () => {
  return queryOptions({
    queryKey: ['categories'],
    queryFn: (params) => productCategoryListApi(params),
  })
}
