import { FC } from 'react'

import { Avatar, AvatarGroup } from '@heroui/avatar'
import { Button } from '@heroui/button'
import { Image } from '@heroui/image'
import { Link } from '@heroui/link'

import { StarIconComponent } from '@/app/shared/ui/star-icon'

// interface
interface IProps {}

const HeroBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <section className='relative z-0 flex h-full w-full flex-col-reverse items-center gap-5 pt-14 lg:flex-row lg:justify-between lg:pt-[84px]'>
      <div className='flex w-full max-w-[630px] flex-col gap-3 lg:gap-4'>
        <h1 className='text-[32px] leading-[40px] font-extrabold lg:text-[48px] lg:leading-[62px]'>
          <span className='inline-block bg-gradient-to-r from-[#2C3345] to-[#424D6A] bg-clip-text text-transparent'>
            Want to Know Your
          </span>

          <br />

          <span className='inline-block bg-gradient-to-r from-[#27415F] via-[#007AFF] to-[#007AFF] bg-clip-text pr-2 text-transparent'>
            Real IQ Score?
          </span>
        </h1>

        <p className='text-base leading-[25px] text-[#2B2D42] lg:max-w-[325px] lg:text-[18px]'>
          Take our IQ test and unlock your path to self-discovery and development
        </p>

        <div className='mt-2 flex gap-3 max-sm:flex-wrap lg:mt-4 lg:gap-6'>
          <Button className='bg-secondary text-medium flex w-full gap-2 text-white md:w-auto md:gap-6 md:px-8'>
            Start IQ Test Now
            <Image src='/icons/arrow.svg' alt='Arrow icon' height={14} width={14} className='hidden md:block' />
          </Button>

          <Button
            href=''
            as={Link}
            className='text-secondary text-medium border-secondary w-full border-2 bg-transparent md:w-auto md:px-8'
          >
            How It Works
          </Button>
        </div>

        <div className='mt-[11px] flex items-center md:mt-4'>
          <AvatarGroup isBordered className='relative mr-6 flex md:mr-12'>
            <Avatar isBordered color='default' size='md' src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
            <Avatar isBordered color='default' size='md' src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
            <Avatar isBordered color='default' size='md' src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
            <Avatar
              classNames={{
                base: 'hidden md:inline-flex',
              }}
              isBordered
              color='default'
              size='md'
              src='https://i.pravatar.cc/150?u=a04258114e29026302d'
            />
          </AvatarGroup>

          <div className='flex flex-col text-sm text-[#2B2D42] md:-ml-8 md:text-base md:leading-6'>
            <div className='flex flex-col md:flex-row md:items-center md:gap-1'>
              <p>Excellent user reviews</p>

              <div className='flex h-full text-transparent'>
                {[...Array(5)].map((_, index) => (
                  <StarIconComponent key={index} />
                ))}
              </div>
            </div>

            <p>
              <span className='font-semibold'>12024</span> IQ tests taken today!
            </p>
          </div>
        </div>
      </div>

      <div className='relative mx-auto flex aspect-[517/296] h-full w-full max-w-[517px] items-center justify-center max-lg:mt-[-28px]'>
        <Image removeWrapper className='h-full w-full scale-[1.2]' src='/images/iq_graph.svg' alt='Graph' />
      </div>

      <div className='absolute top-0 -left-1/2 z-[-1] h-full w-[200vw] bg-gradient-to-b from-white via-[#EBF4FF] to-white'></div>
    </section>
  )
}

export default HeroBlockComponent
