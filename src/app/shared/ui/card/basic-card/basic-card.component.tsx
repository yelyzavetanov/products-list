import { FC } from 'react'

import { Button } from '@heroui/button'
import { Card } from '@heroui/card'
import { Image } from '@heroui/image'

// interface
interface IProps {
  title: string
  icon?: string
  number?: number
  description?: string
  list?: string[]
  time?: string
  questions?: number
  buttonText?: string
  buttonDisabled?: boolean
  className?: string
}

// component
const BasicCardComponent: FC<Readonly<IProps>> = (props) => {
  const { icon, number, title, description, list, time, questions, buttonText, buttonDisabled, className } = props

  // return
  return (
    <Card className={`flex flex-1 flex-col items-start gap-3 border-1 p-4 shadow-none ${className}`}>
      {icon && <Image height={38} width={38} src={icon} alt='Card Icon' className='rounded-xs' />}

      {number && (
        <div className='h-[42px] w-[42px] rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]'>
          <div className='flex h-full w-full items-center justify-center rounded-full bg-white text-[20px] font-semibold text-[#2B2D42]'>
            {number}
          </div>
        </div>
      )}

      <div className='text-start text-lg font-semibold text-[#2C3345]'>{title}</div>

      {list && (
        <div className='text-normal flex flex-col gap-2'>
          {list.map((item, index) => (
            <div className='flex items-stretch gap-1.5' key={index}>
              <Image
                src='/icons/check.svg'
                alt='Check icon'
                height={22}
                width={24}
                className='text-primary flex-1 rounded-xs p-1'
              />
              <p className='text-small flex-1'>{item}</p>
            </div>
          ))}
        </div>
      )}

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

export default BasicCardComponent
