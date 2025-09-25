import { ProductModule } from '@/app/modules/product'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { FC } from 'react'

// interface
interface IProps {}

// component
const Page: FC<Readonly<IProps>> = () => {
  const clientQuery = getQueryClient()

  // return
  return (
    <HydrationBoundary state={dehydrate(clientQuery)}>
      <ProductModule />
    </HydrationBoundary>
  )
}

export default Page
