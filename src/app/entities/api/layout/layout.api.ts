import { notFound } from 'next/navigation'
import { stringify } from 'qs-esm'

import { QueryFunctionContext } from '@tanstack/react-query'

import { ELayoutApi, ILayoutQueryParams, IRootLayoutRes } from '@/app/entities/models'
import { restApiFetcher } from '@/pkg/libraries/rest-api/fetcher'

// api
export const layoutQueryApi = async (opt: QueryFunctionContext, queryParams: ILayoutQueryParams) => {
  const { locale = 'en' } = queryParams

  const query = stringify({ depth: 2, draft: false, locale }, { addQueryPrefix: true })

  const res = await restApiFetcher
    .get<IRootLayoutRes>(`${ELayoutApi.API_LAYOUT}${query}`, {
      signal: opt.signal,
      cache: 'force-cache',
      next: { revalidate: 30 },
    })
    .json()

  if (!res) {
    return notFound()
  }

  return res
}
