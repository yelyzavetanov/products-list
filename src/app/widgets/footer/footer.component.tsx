'use client'

import { useLocale, useTranslations } from 'next-intl'
import { FC } from 'react'

import { Button } from '@heroui/button'
import { Divider } from '@heroui/divider'
import { Image } from '@heroui/image'
import { Link } from '@heroui/link'

import { usePathname, useRouter } from '@/pkg/libraries/locale'

import { aboutUsLinks, legalLinks, payLinks, socialLinks } from './footer.constants'

// interface
interface IProps {}

// component
const FooterComponent: FC<Readonly<IProps>> = () => {
  const t = useTranslations()

  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (nextLocale: string) => {
    router.push(pathname, { locale: nextLocale })
  }

  // return
  return (
    <footer className='mt-5 flex w-full justify-center bg-[#001B36] px-4 py-6 text-white sm:mt-10 md:mt-16 lg:py-12'>
      <div className='max-w-7xl flex-1 items-center gap-8'>
        <div className='flex flex-col justify-between md:flex-row md:gap-5'>
          <div className='flex flex-col justify-start gap-6'>
            <div>
              <Image
                src={'/icons/footer/footer-logo.svg'}
                alt='Social icon'
                height={30}
                width={105}
                className='flex-1 rounded-xs'
              />
            </div>

            <div className='flex gap-4 text-white'>
              {socialLinks.map((item) => (
                <Link href='' key={item}>
                  <Image src={item} alt='Social icon' height={24} width={24} className='flex-1 rounded-xs' />
                </Link>
              ))}
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:gap-5'>
            <div className='text-white max-md:mt-6 md:mr-10 lg:mr-20'>
              <p className='mb-4 text-lg font-semibold'>Customer Support</p>

              <Link className='text-base font-medium text-white' href=''>
                How to Cancel
              </Link>

              <Button
                className='mt-3 flex h-auto max-w-max items-center justify-center gap-3 rounded-full border-2 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-[#001B36]'
                as={Link}
              >
                <Image
                  src='/icons/footer/support.svg'
                  alt='Questions icon'
                  height={30}
                  width={30}
                  className='flex-1 rounded-xs p-1'
                />

                <p>
                  <span className='xs-sm:whitespace-nowrap'>Customer Support</span>
                  <br />
                  24/7/365
                </p>
              </Button>
            </div>

            <div className='mb-6 flex flex-col gap-4 max-md:mt-4 md:flex-row md:gap-20 lg:mb-12'>
              <li className='list-none'>
                <p className='mb-4 text-lg font-semibold text-white'>Legal</p>

                <ul className='flex flex-col gap-2'>
                  {legalLinks.map((item) => (
                    <li key={item}>
                      <Link className='text-base font-medium text-white' target='' href='/privacy'>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className='list-none'>
                <p className='mb-4 text-lg font-semibold text-white'>About Us</p>

                <ul className='flex flex-col gap-2'>
                  {aboutUsLinks.map((item) => (
                    <li key={item}>
                      <Link className='text-base font-medium text-white' target='' href='/privacy'>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </div>
          </div>
        </div>

        <Divider className='bg-gray' />

        <div className='flex w-full flex-col gap-4 pt-6 md:items-end'>
          <div>
            {locale === 'en' && (
              <Button
                variant='bordered'
                onPress={() => switchLocale('uk')}
                className='h-auto border-white px-6 py-1.5 text-white'
              >
                English
              </Button>
            )}

            {locale === 'uk' && (
              <Button
                variant='bordered'
                onPress={() => switchLocale('en')}
                className='h-auto border-white px-6 py-1.5 text-white'
              >
                Українська
              </Button>
            )}
          </div>

          <div className='flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-center'>
            <div>Copyright © 2024-2025 myIQ™. {t('footer_text')}</div>

            <div className='justify-left flex grow-1 gap-1.5 md:justify-end [&_svg]:h-[25px] [&_svg]:w-[38px]'>
              {payLinks.map((item) => (
                <div key={item} className='flex h-8 w-[46px] items-center justify-center rounded-lg bg-white'>
                  <Image src={item} alt='Pay icon' height={25} width={38} className='flex-1 rounded-xs' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
