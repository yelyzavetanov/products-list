import { FC } from 'react'

import { dehydrate } from '@tanstack/query-core'
import { HydrationBoundary } from '@tanstack/react-query'

import { productsQueryOptions } from '@/app/entities/api'
import { ListBlockComponent } from '@/app/features/block/list-block'
import { OrderBlockComponent } from '@/app/features/block/order-block'
import { ContainerComponent } from '@/app/shared/ui/container'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

// interface
interface IProps {}

// component
const HomeModule: FC<Readonly<IProps>> = async () => {
  const clientQuery = getQueryClient()

  await clientQuery.prefetchQuery(productsQueryOptions())

  // return
  return (
    <ContainerComponent>
      <HydrationBoundary state={dehydrate(clientQuery)}>
        <OrderBlockComponent />

        <ListBlockComponent />
      </HydrationBoundary>
    </ContainerComponent>
  )
}

export default HomeModule
