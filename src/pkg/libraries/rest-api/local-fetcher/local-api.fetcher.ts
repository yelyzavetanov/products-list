import ky, { KyInstance } from 'ky'

import { envClient } from '@/config/env'

// fetcher
export const localApiFetcher: KyInstance = ky.create({
  prefixUrl: `${envClient.NEXT_PUBLIC_CLIENT_WEB_URL}`,

  credentials: 'include',
  throwHttpErrors: false,
})
