import { IMeta } from './common.model'

// key
export enum ELayoutKey {
  LAYOUT_QUERY_ROOT_LAYOUT = 'root-layout',
}

// api
export enum ELayoutApi {
  API_LAYOUT = 'rest/globals/layout',
}

// query params
export interface ILayoutQueryParams {
  locale?: string
}

// root layout response
export interface IRootLayoutRes {
  id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  meta: IMeta
}
