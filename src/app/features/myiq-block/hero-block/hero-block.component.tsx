import { FC } from 'react'

import { Button } from '@heroui/button'
import { Image } from '@heroui/image'
import { Link } from '@heroui/link'

import { StarIconComponent } from '@/app/shared/ui/star-icon'

// interface
interface IProps {}

const HeroBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <section className='flex h-full w-full flex-col-reverse items-center gap-5 pt-14'>
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

        <p>Take our IQ test and unlock your path to self-discovery and development</p>

        <div className='mt-2 flex gap-3 max-sm:flex-wrap lg:mt-4 lg:gap-6'>
          <Button className='bg-secondary text-small w-full text-white'>Start IQ Test Now</Button>

          <Button href='' as={Link} className='text-secondary border-secondary w-full border-2 bg-white'>
            How It Works
          </Button>
        </div>

        <div className='mt-[11px] flex items-center md:mt-4'>
          <div className='relative mr-6 flex md:mr-12'>
            <div className='pointer-events-none relative -ml-5 h-10 w-10 overflow-hidden rounded-full border-3 border-white md:-ml-6 md:h-[50px] md:w-[50px] md:border-4'>
              <Image className='h-full w-full' src='/icons/avatars/avatar1' alt='Avatar1' />
            </div>
          </div>

          <div className='flex flex-col text-sm text-[#2B2D42] md:-ml-8 md:text-base md:leading-6'>
            <p>Excellent user reviews</p>

            <div className='flex h-full text-transparent'>
              <StarIconComponent />

              <StarIconComponent />

              <StarIconComponent />

              <StarIconComponent />

              <StarIconComponent />
            </div>
            <p>
              <span className='font-semibold'>12024</span> IQ tests taken today!
            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto flex aspect-[517/296] h-full w-full max-w-[517px] items-center justify-center'>
        <Image className='h-full w-full scale-[1.2]' src='/images/iq_graph.svg' alt='graph' />
      </div>
    </section>
  )
}

export default HeroBlockComponent
