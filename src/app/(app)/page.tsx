import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { FC } from 'react'
import { HomeModule } from '../modules/home'

// cache
export const dynamic = 'force-static'
export const revalidate = 30

// interface
interface IProps {}

// component
const Page: FC<Readonly<IProps>> = () => {
  const clientQuery = getQueryClient()

  // return
  return (
    <HydrationBoundary state={dehydrate(clientQuery)}>
      <HomeModule />
    </HydrationBoundary>
  )
}

export default Page
