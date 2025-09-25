import { IProductRes } from '@/app/entities/models/product.model'
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card'
import { Image } from '@heroui/image'
import { Skeleton } from '@heroui/skeleton'
import Link from 'next/link'
import { FC } from 'react'

// interface
interface IProps {
  data: IProductRes
  isLoading?: boolean
}

// component
const ListBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { data, isLoading } = props

  // return
  return (
    <Skeleton isLoaded={!isLoading}>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {data.products &&
          data.products.map((product) => (
            <Link key={product.id} href={`/${product.id}`}>
              <Card
                isPressable
                shadow='sm'
                classNames={{
                  base: 'md:m-2 group',
                  body: 'overflow-visible py-2',
                }}
              >
                <CardBody>
                  <CardHeader className='absolute top-1 z-10 flex-col items-start!'>
                    <p className='text-tiny font-bold text-white/60 uppercase'>{product.category}</p>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt='Card background'
                    className='rounded-xl object-cover'
                    src={product.thumbnail}
                    width={200}
                  />
                </CardBody>
                <CardFooter className='rounded-large absolute bottom-1 z-10 ml-1 hidden w-[calc(100%_-_8px)] justify-between border-2 border-white/10 bg-black/50 py-1 group-hover:block before:rounded-xl'>
                  <h4 className='text-large text-right font-medium text-white'>{product.title}</h4>
                </CardFooter>
              </Card>
            </Link>
          ))}
      </div>
    </Skeleton>
  )
}

export default ListBlockComponent
