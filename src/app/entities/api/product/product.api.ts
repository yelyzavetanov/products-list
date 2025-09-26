import { QueryFunctionContext } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import {
  ICategoriesRes,
  IProduct,
  IProductByIdQueryParams,
  IProductQueryParams,
  IProductRes,
} from '../../models/product.model'

// api
export const productsQueryApi = async (opt: QueryFunctionContext, queryParams: IProductQueryParams) => {
  const { category = '' } = queryParams

  const res = await fetch(`https://dummyjson.com/products/${category ? `category/${category}` : ''}`, {
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
    cache: 'no-store',
    // next: { revalidate: 30 },
  })

  if (!res) {
    return notFound()
  }

  const data: IProduct = await res.json()

  return data
}

// api
export const productCategoryListApi = async (opt: QueryFunctionContext) => {
  const res = await fetch(`https://dummyjson.com/products/category-list`, {
    signal: opt.signal,
    cache: 'force-cache',
    next: { revalidate: 30 },
  })

  if (!res) {
    return notFound()
  }

  const data: ICategoriesRes = await res.json()

  return data
}
