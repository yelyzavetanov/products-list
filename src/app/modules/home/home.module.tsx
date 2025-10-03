import { FC } from 'react'

import { ListBlockComponent, OrderBlockComponent } from '@/app/features/block'
import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {
  pageSlug: string
}

// component
const HomeModule: FC<Readonly<IProps>> = async () => {
  // return
  return (
    <ContainerComponent>
      <OrderBlockComponent />

      <ListBlockComponent />
    </ContainerComponent>
  )
}

export default HomeModule
