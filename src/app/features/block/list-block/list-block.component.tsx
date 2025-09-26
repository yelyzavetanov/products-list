'use client'

import { productsQueryOptions } from '@/app/entities/api'
import { useCategoryStore } from '@/app/shared/store'
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card'
import { Image } from '@heroui/image'
import { Skeleton } from '@heroui/skeleton'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { FC } from 'react'

// interface
interface IProps {}

// component
const ListBlockComponent: FC<Readonly<IProps>> = () => {
  const selectedCategory = useCategoryStore((s) => s.selectedCategory)
  const { data, isLoading } = useQuery(productsQueryOptions({ category: selectedCategory }))

  // return
  return (
    <Skeleton isLoaded={!isLoading} className='rounded-xl'>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {data &&
          data.map((product) => (
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
                    <p className='text-tiny font-bold text-black/60 uppercase'>{product.category}</p>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt='Card background'
                    className='rounded-xl object-cover'
                    src={product.thumbnail}
                    width={200}
                  />
                </CardBody>
                <CardFooter className='rounded-large absolute bottom-1 z-10 ml-1 hidden w-[calc(100%_-_8px)] justify-between border-2 border-black/10 bg-white/50 py-1 group-hover:block before:rounded-xl'>
                  <h4 className='text-large text-right font-medium'>{product.title}</h4>
                </CardFooter>
              </Card>
            </Link>
          ))}
      </div>
    </Skeleton>
  )
}

export default ListBlockComponent
