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
        <h3 className='text-large text-dark-custom text-center text-base font-semibold md:text-4xl'>
          What Will You Get
        </h3>

        <div className='scrollbar-hide overflow-x-auto pt-5 data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] max-lg:w-[calc(100vw-48px)]'>
          <div className='flex gap-6'>
            {ProfitCards.map((description, index) => (
              <CheckCardComponent key={index} description={description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfitBlockComponent
