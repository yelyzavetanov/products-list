import { FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { orderQueryOptions, productsQueryOptions } from '@/app/entities/api'
import { HomeModule } from '@/app/modules/home'
import { routing } from '@/pkg/libraries/locale'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

// generate static params
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale: locale }))
}

// interface
interface IProps {
  searchParams: Promise<{ [key: string]: string | undefined }>
}

// component
const Page: FC<Readonly<IProps>> = async (props) => {
  const searchParams = await props.searchParams
  const order = searchParams.order ?? ''

  const clientQuery = getQueryClient()

  await Promise.allSettled([
    clientQuery.prefetchQuery(productsQueryOptions()),
    clientQuery.prefetchQuery(orderQueryOptions()),
  ])

  // return
  return (
    <HydrationBoundary state={dehydrate(clientQuery)}>
      <HomeModule order={order} />
    </HydrationBoundary>
  )
}

export default Page
