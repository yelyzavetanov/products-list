import { FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { orderQueryOptions, productsQueryOptions } from '@/app/entities/api'
import { HomeModule } from '@/app/modules/home'
import { routing } from '@/pkg/libraries/locale'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

// generate static params
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// interface
interface IProps {}

// component
const Page: FC<Readonly<IProps>> = async () => {
  const clientQuery = getQueryClient()

  await Promise.all([clientQuery.prefetchQuery(productsQueryOptions()), clientQuery.prefetchQuery(orderQueryOptions())])

  // return
  return (
    <HydrationBoundary state={dehydrate(clientQuery)}>
      <HomeModule />
    </HydrationBoundary>
  )
}

export default Page
