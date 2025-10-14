import { FC } from 'react'

import { BasicCardComponent } from '@/app/shared/ui/card/basic-card'

import { howItWorksCards } from './how-it-works-block.constants'

// interface
interface IProps {}

// component
const HowItWorksComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <section className='pt w-full max-w-7xl px-4 pt-[120px] pb-6 md:pb-10 lg:pt-[174px]'>
      <h3 className='text-large text-dark-custom text-center font-semibold md:text-4xl'>How It Works</h3>

      <div className='flex w-full gap-3 pt-6 max-md:flex-col md:gap-6 md:pt-8'>
        {howItWorksCards.map((card, index) => (
          <BasicCardComponent
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            className='border-[#D9E7FF] md:px-8 md:pt-[42px]'
          />
        ))}
      </div>
    </section>
  )
}

export default HowItWorksComponent
