import { queryOptions } from '@tanstack/react-query'

import { orderQueryApi } from './order.api'

// options
export const orderQueryOptions = () => {
  return queryOptions({
    queryKey: ['order'],
    queryFn: (params) => orderQueryApi(params),
  })
}
