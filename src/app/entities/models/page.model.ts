import { IMeta } from './common.model'

// key
export enum EPageKey {
  PAGES_QUERY_HOME_PAGE = 'home-page',
}

// api
export enum EPageApi {
  API_PAGES = 'rest/pages',
}

// query params
export interface IPageQueryParams {
  pageSlug: string
  locale?: string
}

// page
export interface IPage {
  id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  meta: IMeta
}

// page response
export interface IPageRes {
  docs: IPage[]
}
