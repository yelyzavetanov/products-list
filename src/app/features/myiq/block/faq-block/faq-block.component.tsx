'use client'

import { FC } from 'react'

import { Accordion, AccordionItem } from '@heroui/accordion'

import { questions } from './faq-block.constant'

// interface
interface IProps {}

// component
const FAQBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <section className='flex w-full justify-center gap-6 bg-[#F6FBFF] px-4'>
      <div className='flex max-w-7xl flex-1 flex-col items-start justify-between gap-8 px-4 py-6 md:flex-row md:py-8'>
        <h2 className='text-large text-dark-custom text-left font-semibold md:text-4xl'>Frequently Asked Questions</h2>

        <Accordion selectionMode='multiple'>
          {questions.map((item, index) => (
            <AccordionItem
              key={index}
              title={<span className='text-medium font-medium text-[#2B2D42] md:text-lg'>{item.question}</span>}
            >
              <span className='text-medium text-[#2B2D42] transition-transform'>{item.answer}</span>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQBlockComponent
