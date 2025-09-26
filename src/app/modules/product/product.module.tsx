import { IProduct } from '@/app/entities/models'
import { ProductBlockComponent } from '@/app/features/block/product-block'
import { ContainerComponent } from '@/app/shared/ui/container'
import { FC } from 'react'

// interface
interface IProps {
  data: IProduct
}

// component
const ProductModule: FC<Readonly<IProps>> = (props) => {
  const { data } = props

  // return
  return (
    <ContainerComponent className='justify-center'>
      <ProductBlockComponent product={data} />
    </ContainerComponent>
  )
}

export default ProductModule
