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
  category?: string | null
}

// query params
export interface IProductByIdQueryParams {
  id: string
}

// products response
export interface IProductRes {
  products: IProduct[]
}
