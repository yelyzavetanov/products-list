import { FC } from 'react'

import { ListBlockComponent, OrderBlockComponent } from '@/app/features/block'
import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {
  order: string
}

// component
const HomeModule: FC<Readonly<IProps>> = async (props) => {
  const { order } = props

  // return
  return (
    <ContainerComponent>
      <OrderBlockComponent order={order} />

      <ListBlockComponent order={order} />
    </ContainerComponent>
  )
}

export default HomeModule
