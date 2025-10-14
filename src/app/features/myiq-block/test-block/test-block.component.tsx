import { FC } from 'react'

import { CardComponent } from '@/app/shared/ui/card'

import { TestCards } from './test-block.constants'

// interface
interface IProps {}

const TestBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <section className='flex w-full flex-col items-center gap-8 bg-[#F6FBFF] py-6 md:py-8'>
      <h3 className='text-large text-dark-custom text-center font-semibold md:text-4xl'>Available Tests</h3>

      <p className='pt-1.5 text-center text-base text-[#2C3345] md:pt-2.5 md:text-[18px]'>
        Each test reveals a new part of you. Start with intelligence, with more tests coming soon
      </p>

      <div className='grid grid-rows-4 gap-4 pt-6 max-lg:grid-cols-2 max-lg:grid-rows-2 max-md:grid-cols-1 md:gap-6 md:pt-8 lg:grid-cols-4 lg:grid-rows-1'>
        {TestCards.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            icon={card.icon}
            time={card.time}
            questions={card.questions}
            buttonText={card.buttonText}
            buttonDisabled={card.buttonDisabled}
            className='border-[#E2E8F0]'
          />
        ))}
      </div>
    </section>
  )
}

export default TestBlockComponent
