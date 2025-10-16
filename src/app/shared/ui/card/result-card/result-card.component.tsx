import { FC } from 'react'

import { Card } from '@heroui/card'
import { Image } from '@heroui/image'

// interface
interface IProps {
  flag: string
  name: string
  iq: string
  className?: string
}

// component
const ResultCardComponent: FC<Readonly<IProps>> = (props) => {
  const { flag, name, iq, className } = props

  // return
  return (
    <Card
      className={`flex w-full flex-row items-center gap-4 rounded-[18px] px-6 py-[23px] shadow-none max-lg:bg-[#F6FBFF] lg:basis-[48.5%] lg:py-[28px] ${className}`}
    >
      <Image
        src={flag}
        alt='Flag icon'
        height={32}
        width={45}
        className='mt-0 h-5 w-[30px] overflow-hidden rounded lg:h-8 lg:w-[45px]'
      />

      <div className='text-base font-medium md:text-lg'>{name}</div>

      <div className='text-primary ml-auto px-2 py-1 text-center font-semibold md:text-[20px]'>IQ {iq}</div>
    </Card>
  )
}

export default ResultCardComponent
