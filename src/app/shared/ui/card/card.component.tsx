import { FC } from 'react'

import { Button } from '@heroui/button'
import { Card } from '@heroui/card'
import { Image } from '@heroui/image'

// interface
interface IProps {
  icon: string
  title: string
  description?: string
  time?: string
  questions?: number
  buttonText?: string
  buttonDisabled?: boolean
  className?: string
}

const CardComponent: FC<Readonly<IProps>> = (props) => {
  const { icon, title, description, time, questions, buttonText, buttonDisabled, className } = props

  // return
  return (
    <Card className={`flex flex-1 flex-col items-start gap-3 border-1 p-4 shadow-none ${className}`}>
      <Image height={38} width={38} src={icon} alt='Card Icon' className='rounded-xs' />

      <div className='text-start text-lg font-semibold text-[#2C3345]'>{title}</div>

      {description && <div className='text-sm'>{description}</div>}

      {time && questions && (
        <div className='text-small text-gray flex items-center gap-3'>
          <span className='flex items-center gap-1'>
            <Image src='/icons/time.svg' alt='Time icon' height={16} width={16} className='rounded-xs' />
            {time}
          </span>
          <span className='flex items-center gap-1'>
            <Image src='/icons/questions.svg' alt='Questions icon' height={16} width={16} className='rounded-xs' />
            {questions} questions
          </span>
        </div>
      )}

      {buttonText && (
        <div className='w-full'>
          <Button isDisabled={buttonDisabled} className='bg-secondary text-medium flex w-full flex-1 gap-2 text-white'>
            {buttonText}
            {!buttonDisabled && <Image src='/icons/arrow.svg' alt='Arrow icon' height={14} width={14} />}
          </Button>
        </div>
      )}
    </Card>
  )
}

export default CardComponent
