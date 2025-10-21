import { FC } from 'react'

import { productByIdQueryOptions, productsQueryOptions } from '@/app/entities/api'
import { ProductModule } from '@/app/modules/product'
import { getFeatureValue } from '@/pkg/integrations/growthbook'
import { routing } from '@/pkg/libraries/locale'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

// interface
interface IProps {
  params: Promise<{ product_id: string }>
}

// generate static params
export async function generateStaticParams() {
  const clientQuery = getQueryClient()
  const data = await clientQuery.fetchQuery(productsQueryOptions())

  const params: Array<{ locale: string; product_id: string }> = []

  for (const locale of routing.locales) {
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
  const { product_id } = await props.params

  const clientQuery = getQueryClient()

  const [isWelcomeEnabled, productData] = await Promise.all([
    getFeatureValue<boolean>('welcome-message', false, {}),
    clientQuery.fetchQuery(productByIdQueryOptions({ id: product_id })),
  ])

  // return
  return <ProductModule data={productData} isWelcomeEnabled={isWelcomeEnabled} />
}

export default Page
