// api
export enum EProductApi {
  API_PRODUCTS = '/api/products',
}

// product
export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  rating: number
  category: string
  thumbnail: string
}

// query params
export interface IProductQueryParams {
  category?: string
}

// query params
export interface IProductByIdQueryParams {
  id: string
}

// products response
export interface IProductRes {
  products: IProduct[]
}

// categories response
export interface ICategoriesRes {
  categories: string[]
}

// category select
export interface ICategorySelect {
  category: string
}
