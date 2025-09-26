import { productByIdQueryOptions } from '@/app/entities/api'
import { ProductModule } from '@/app/modules/product'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { FC } from 'react'

// cache
// export const dynamic = 'force-static'
// export const revalidate = 0

// interface
interface IProps {
  params: Promise<{ product_id: string }>
}

// generate static params
export function generateStaticParams() {
  return ['1', '2', '3'].map((product_id) => ({ product_id }))
}

// component
const Page: FC<Readonly<IProps>> = async (props) => {
  const { product_id } = await props.params
  const clientQuery = getQueryClient()

  const productData = await clientQuery.fetchQuery(productByIdQueryOptions({ id: product_id }))

  // return
  return (
    <HydrationBoundary state={dehydrate(clientQuery)}>
      <ProductModule data={productData} />
    </HydrationBoundary>
  )
}

export default Page
