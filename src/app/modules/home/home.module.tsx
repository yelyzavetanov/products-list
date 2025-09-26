import { productCategoryListOptions, productsQueryOptions } from '@/app/entities/api'
import { CategoriesBlockComponent } from '@/app/features/block/categories-block'
import { ListBlockComponent } from '@/app/features/block/list-block'
import { ContainerComponent } from '@/app/shared/ui/container'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { dehydrate } from '@tanstack/query-core'
import { HydrationBoundary } from '@tanstack/react-query'
import { FC } from 'react'

// interface
interface IProps {}

// component
const HomeModule: FC<Readonly<IProps>> = async () => {
  const clientQuery = getQueryClient()

  await clientQuery.prefetchQuery(productCategoryListOptions())
  await clientQuery.prefetchQuery(productsQueryOptions({}))

  // return
  return (
    <ContainerComponent>
      <HydrationBoundary state={dehydrate(clientQuery)}>
        <CategoriesBlockComponent />

        <ListBlockComponent />
      </HydrationBoundary>
    </ContainerComponent>
  )
}

export default HomeModule
