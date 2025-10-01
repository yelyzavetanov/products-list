import { stringify } from 'qs-esm'

import { QueryFunctionContext } from '@tanstack/react-query'

import { restApiFetcher } from '@/pkg/libraries/rest-api/fetcher'

import { EPageApi, IPageRes } from './../../models/page.model'

import { IPageQueryParams } from '../../models'

// api
export const pagesQueryApi = async (opt: QueryFunctionContext, queryParams: IPageQueryParams) => {
  const { locale = 'en' } = queryParams

  const query = stringify({ depth: 4, draft: false, locale }, { addQueryPrefix: true })

  const res = await restApiFetcher
    .get<IPageRes>(`${EPageApi.API_PAGES}${query}`, {
      signal: opt.signal,
      cache: 'force-cache',
      next: { revalidate: 30 },
    })
    .json()

  return res?.docs?.at(0) ?? null
}
