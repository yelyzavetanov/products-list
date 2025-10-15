import { FC } from 'react'

import { ResultCardComponent } from '@/app/shared/ui/card/result-card'

import { resultCards } from './results-block.constants'

// interface
interface IProps {}

// component
const ResultsBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <section className='flex w-full max-w-7xl flex-col items-center px-4 py-6 md:py-8'>
      <h3 className='text-large text-dark-custom text-center text-base font-semibold md:text-4xl'>Latest results</h3>

      <div className='grid w-full grid-cols-1 gap-x-4 pt-6 lg:grid-cols-2'>
        {resultCards.map((card, index) => (
          <ResultCardComponent
            key={index}
            flag={card.flag}
            name={card.name}
            iq={card.iq}
            className={[2, 3, 6, 7].includes(index) ? 'bg-[#F6FBFF]' : ''}
          />
        ))}
      </div>
    </section>
  )
}

export default ResultsBlockComponent
