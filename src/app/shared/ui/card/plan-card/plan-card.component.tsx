import { FC } from 'react'

import { Button } from '@heroui/button'
import { Card, CardHeader } from '@heroui/card'
import { Divider } from '@heroui/divider'
import { Image } from '@heroui/image'

// interface
interface IProps {
  title: string
  price: string
  period: string
  list: string[]
}

// component
const PlanCardComponent: FC<Readonly<IProps>> = (props) => {
  const { title, price, period, list } = props

  // return
  return (
    <Card className='shadow-medium rounded-large box-border flex h-auto max-w-[362px] flex-1 flex-col border border-gray-100 p-3 outline-transparent transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
      <CardHeader className='pb-6'>
        <h2 className='text-lg font-medium'>{title}</h2>
      </CardHeader>

      <Divider />

      <p className='flex items-baseline gap-1 p-3 pb-8'>
        <span className='text-4xl leading-7 font-semibold'>{price}</span>

        <span className='text-default-400 text-small font-normal'>/{period}</span>
      </p>

      <div className='text-normal flex flex-1 flex-col gap-2'>
        {list.map((item, index) => (
          <div className='flex items-stretch gap-1.5' key={index}>
            <Image
              src='/icons/check.svg'
              alt='Check icon'
              height={22}
              width={24}
              className='text-primary flex-1 rounded-xs p-1'
            />

            <p className='text-small flex-1'>{item}</p>
          </div>
        ))}
      </div>

      <div className='p-3'>
        <Button className='bg-secondary text-medium flex w-full flex-1 gap-2 text-white'>Get started</Button>
      </div>
    </Card>
  )
}

export default PlanCardComponent
