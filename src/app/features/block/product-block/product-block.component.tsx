'use client'

import { FC } from 'react'

import { Button } from '@heroui/button'
import { Card } from '@heroui/card'
import { Image } from '@heroui/image'

import { IProduct } from '@/app/entities/models'
import { mixpanelUtils } from '@/pkg/integrations/mixpanel'

// interface
interface IProps {
  product: IProduct
  isWelcomeEnabled: boolean
}

// component
const ProductBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { product, isWelcomeEnabled } = props

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
              {isWelcomeEnabled && <div className='text-primary text-sm'>Welcome to product page!</div>}

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

            <Button
              onPress={() => {
                mixpanelUtils.trackHelloMessage({
                  variation: isWelcomeEnabled ? 1 : 0,
                  experimentKey: 'show-hello-message',
                  id: product.id.toString(),
                })
              }}
              variant='bordered'
              className='border-primary border-small'
            >
              Buy
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ProductBlockComponent
