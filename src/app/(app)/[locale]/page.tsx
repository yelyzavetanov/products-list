import { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { orderQueryOptions, productsQueryOptions } from '@/app/entities/api'
import { EPageKey } from '@/app/entities/models'
import { HomeModule } from '@/app/modules/home'
import { routing } from '@/pkg/libraries/locale'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

// generate static params
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// interface
interface IProps {
  params: Promise<{ locale: Locale }>
}

// component
const Page: FC<Readonly<IProps>> = async (props) => {
  const { locale } = await props.params

  setRequestLocale(locale)

  const clientQuery = getQueryClient()
  await clientQuery.prefetchQuery(productsQueryOptions())
  await clientQuery.prefetchQuery(orderQueryOptions())

  // return
  return (
    <HydrationBoundary state={dehydrate(clientQuery)}>
      <HomeModule pageSlug={EPageKey.PAGES_QUERY_HOME_PAGE} />
    </HydrationBoundary>
  )
}

export default Page
