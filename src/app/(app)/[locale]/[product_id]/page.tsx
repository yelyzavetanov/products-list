import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { productByIdQueryOptions, productsQueryOptions } from '@/app/entities/api'
import { ProductModule } from '@/app/modules/product'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

// interface
interface IProps {
  params: Promise<{ locale: string; product_id: string }>
}

// generate static params
export async function generateStaticParams() {
  const clientQuery = getQueryClient()
  const data = await clientQuery.fetchQuery(productsQueryOptions())

  const locales = ['en', 'uk']
  const params: Array<{ locale: string; product_id: string }> = []

  for (const locale of locales) {
    for (const product of data) {
      params.push({
        locale,
        product_id: String(product.id),
      })
    }
  }

  return params
}

// component
const Page: FC<Readonly<IProps>> = async (props) => {
  const { locale, product_id } = await props.params

  setRequestLocale(locale)

  const clientQuery = getQueryClient()
  const productData = await clientQuery.fetchQuery(productByIdQueryOptions({ id: product_id }))

  if (!productData.title) {
    notFound()
  }

  // return
  return (
    <HydrationBoundary state={dehydrate(clientQuery)}>
      <ProductModule data={productData} />
    </HydrationBoundary>
  )
}

export default Page
