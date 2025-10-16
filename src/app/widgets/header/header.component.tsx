'use client'

import { useLocale, useTranslations } from 'next-intl'
import { FC, useState } from 'react'

import { Button } from '@heroui/button'
import { Divider } from '@heroui/divider'
import { Image } from '@heroui/image'

import { Link } from '@/pkg/libraries/locale'

// interface
interface IProps {}

// component
const HeaderComponent: FC<Readonly<IProps>> = () => {
  const t = useTranslations()

  const locale = useLocale()

  const [isModalOpen, setIsModalOpen] = useState(false)

  // return
  return (
    <div>
      <header className='bg-background/70 shadow-small fixed z-50 w-full border-b-1 border-[#e5e7eb] backdrop-blur-lg backdrop-saturate-150 md:px-8'>
        <div className='relative mx-auto grid h-16 grid-cols-[1fr_auto] items-center gap-1 max-[1328px]:px-6 max-md:px-4 sm:grid-cols-2 md:max-w-7xl'>
          <Link href={'/my_iq'} locale={locale}>
            <Image
              src={'/icons/header/header-logo.svg'}
              alt='Social icon'
              height={30}
              width={105}
              className='flex-1 rounded-xs'
            />
          </Link>

          <div className='col-span-auto hidden items-center gap-3 lg:flex lg:flex-1 lg:justify-end'>
            <Link href={'/'} locale={locale} className='px-2 text-gray-500'>
              {t('header_link')}
            </Link>

            <Button
              variant='bordered'
              className='border-secondary text-medium text-secondary hover:bg-secondary rounded-md bg-white hover:text-white'
            >
              Log In
            </Button>

            <Button className='bg-secondary text-medium rounded-md text-white'>Start Test</Button>
          </div>

          {isModalOpen ? (
            <div onClick={() => setIsModalOpen(false)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-black transition-transform duration-300 hover:rotate-90'
              >
                <line x1='18' y1='6' x2='6' y2='18' />

                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
          ) : (
            <div
              onClick={() => setIsModalOpen(true)}
              className='relative flex h-4 w-4 cursor-pointer flex-col items-center justify-end gap-1 place-self-end self-center transition-[bg_var(--transition)] lg:hidden'
            >
              <Divider className='h-0.5 bg-black' />

              <Divider className='h-0.5 bg-black' />

              <Divider className='h-0.5 bg-black' />
            </div>
          )}
        </div>
      </header>

      {isModalOpen && (
        <div className='fixed top-0 bottom-0 z-[20] h-auto w-full overflow-y-auto bg-white px-6 pt-16 pb-8 md:right-0 md:w-[384px]'>
          <div className='flex flex-col gap-6 pt-5 pb-6 text-lg text-gray-500'>
            <Link href={'/'} locale={locale}>
              {t('header_link')}
            </Link>

            <Link href={'/my_iq#how-it-works'} locale={locale}>
              How It Works
            </Link>

            <Link href={'/my_iq#boost-block'} locale={locale}>
              Growth Areas
            </Link>

            <Link href={'/my_iq'} locale={locale}>
              Interesting Facts
            </Link>

            <Link href={'/my_iq'} locale={locale}>
              Help & Support
            </Link>
          </div>

          <Divider />

          <div className='mt-6 grid gap-4'>
            <Button
              variant='bordered'
              className='border-secondary text-secondary flex h-16 w-full flex-1 gap-2 bg-white text-lg'
            >
              Log In
            </Button>

            <Button className='bg-secondary flex h-16 w-full flex-1 gap-2 text-lg text-white'>Start Test</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderComponent
