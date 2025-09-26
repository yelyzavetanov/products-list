import { FC } from 'react'

import { Card } from '@heroui/card'
import { Image } from '@heroui/image'

import { IProduct } from '@/app/entities/models/product.model'

// interface
interface IProps {
  product: IProduct
}

// component
const ProductBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { product } = props

  // return
  return (
    <div className='mx-auto max-w-4xl'>
      <Card className='p-6'>
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row'>
          <Image
            src={product.thumbnail}
            alt={product.title}
            className='flex-1 rounded-lg object-cover'
            width={400}
            height={400}
          />

          <div className='flex-1 space-y-6'>
            <div>
              <h1 className='mb-2 text-3xl font-bold'>{product.title}</h1>

              <p className='text-lg font-semibold text-gray-600 uppercase'>{product.category}</p>
            </div>

            <div>
              <h2 className='text-primary mb-4 text-2xl font-bold'>${product.price}</h2>

              <div className='mb-4 flex items-center'>
                <span className='mr-2 text-lg font-semibold'>Rating:</span>

                <div className='flex items-center'>
                  <span className='text-xl text-yellow-500'>★</span>

                  <span className='ml-1 text-lg'>{product.rating}</span>
                </div>
              </div>
            </div>

            <p className='leading-relaxed text-gray-600'>{product.description}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ProductBlockComponent
