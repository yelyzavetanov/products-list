import { FC } from 'react'

import { PlanCardComponent } from '@/app/shared/ui/card/plan-card'

import { planCards } from './plans-block.constants'

// interface
interface IProps {}

// component
const PlansBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <section className='flex w-full max-w-7xl flex-col items-center px-4 py-6 md:py-8'>
      <h3 className='text-large text-dark-custom text-center font-semibold md:text-4xl'>Explore our plans</h3>

      <p className='pt-1.5 text-center text-base text-[#2C3345] md:pt-2.5 md:text-[18px]'>
        Discover our flexible offers and choose the one that best suits your learning and personal development journey
      </p>

      <div className='flex gap-4 pt-5'>
        {planCards.map((card, index) => (
          <PlanCardComponent key={index} title={card.title} price={card.price} period={card.period} list={card.list} />
        ))}
      </div>

      <p className='mt-4 text-center text-[15px] leading-5'>*Visit our pricing page to find out more details.</p>
    </section>
  )
}

export default PlansBlockComponent
