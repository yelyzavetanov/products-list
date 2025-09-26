import { productByIdQueryOptions, productsQueryOptions } from '@/app/entities/api'
import { ProductModule } from '@/app/modules/product'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import { FC } from 'react'

// interface
interface IProps {
  params: Promise<{ product_id: string }>
}

// generate static params
export async function generateStaticParams() {
  const clientQuery = getQueryClient()
  const data = await clientQuery.fetchQuery(productsQueryOptions({}))

  return data.map((p: { id: number }) => ({ product_id: String(p.id) }))
}

// component
const Page: FC<Readonly<IProps>> = async (props) => {
  const { product_id } = await props.params

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
