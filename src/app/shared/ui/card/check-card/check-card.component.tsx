import { FC } from 'react'

import { Card } from '@heroui/card'
import { Image } from '@heroui/image'

// interface
interface IProps {
  description: string
}

// component
const CheckCardComponent: FC<Readonly<IProps>> = (props) => {
  const { description } = props

  // return
  return (
    <Card className='flex w-[70%] shrink-0 snap-start flex-row justify-between gap-4 overflow-y-auto rounded-lg border-1 border-[#D9E7FF] p-4 antialiased shadow-none sm:w-[40%] md:w-auto md:flex-1 md:py-6'>
      <Image
        src='/icons/filled-check.svg'
        alt='Questions icon'
        height={30}
        width={30}
        className='flex-1 rounded-xs p-1'
      />

      <div className='text-small flex-1'>{description}</div>
    </Card>
  )
}

export default CheckCardComponent
