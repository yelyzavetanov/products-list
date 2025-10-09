import { FC } from 'react'

import { IProduct } from '@/app/entities/models'
import { ProductBlockComponent } from '@/app/features/block'
import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {
  data: IProduct
  isWelcomeEnabled: boolean
}

// component
const ProductModule: FC<Readonly<IProps>> = (props) => {
  const { data, isWelcomeEnabled } = props

  // return
  return (
    <ContainerComponent className='justify-center'>
      <ProductBlockComponent product={data} isWelcomeEnabled={isWelcomeEnabled} />
    </ContainerComponent>
  )
}

export default ProductModule
