import { FC } from 'react'

import { CheckCardComponent } from '@/app/shared/ui/card/check-card'

import { ProfitCards } from './profit-block.constants'

// interface
interface IProps {}

// component
const ProfitBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <section className='flex w-full justify-center bg-[#F6FBFF] px-4'>
      <div className='max-w-7xl flex-1 items-center gap-8 py-6 md:py-8'>
        <h3 className='text-large text-dark-custom text-center font-semibold md:text-4xl'>What Will You Get</h3>

        <div className='grid grid-rows-4 gap-4 px-4 pt-6 max-lg:grid-cols-2 max-lg:grid-rows-2 max-md:grid-cols-1 md:gap-6 md:pt-8 lg:grid-cols-5 lg:grid-rows-1'>
          {ProfitCards.map((description, index) => (
            <CheckCardComponent key={index} description={description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfitBlockComponent
