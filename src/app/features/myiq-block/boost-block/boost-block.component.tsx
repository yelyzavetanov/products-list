import { FC } from 'react'

import { BasicCardComponent } from '@/app/shared/ui/card/basic-card'

import { BoostCards } from './boost-block.contants'

// interface
interface IProps {}

// component
const BoostBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <section className='flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-6 md:py-8'>
      <h3 className='text-large text-dark-custom text-center font-semibold md:text-4xl'>Boost Your Abilities</h3>

      <p className='pt-1.5 text-center text-base text-[#2C3345] md:pt-2.5 md:text-[18px]'>
        Unlock your potential with our comprehensive training package
      </p>

      <div className='grid grid-rows-4 gap-4 pt-6 max-lg:grid-cols-2 max-lg:grid-rows-2 max-md:grid-cols-1 md:gap-6 md:pt-8 lg:grid-cols-3 lg:grid-rows-1'>
        {BoostCards.map((card, index) => (
          <BasicCardComponent
            key={index}
            title={card.title}
            number={index + 1}
            list={card.list}
            className='border-[#E2E8F0] md:py-6'
          />
        ))}
      </div>
    </section>
  )
}

export default BoostBlockComponent
