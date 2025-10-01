'use client'

import { useLocale, useTranslations } from 'next-intl'
import { FC } from 'react'

import { Button } from '@heroui/button'
import { Navbar } from '@heroui/navbar'

import { Link, usePathname, useRouter } from '@/pkg/libraries/locale'

// interface
interface IProps {}

// component
const HeaderComponent: FC<Readonly<IProps>> = () => {
  const t = useTranslations()

  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (nextLocale: string) => {
    router.push(pathname, { locale: nextLocale })
  }

  // return
  return (
    <header>
      <Navbar>
        <div className='text-gray-600'>{t('header_title')}</div>

        <div>
          <Link href={'/'}>{t('header_link')}</Link>
          {locale === 'en' && (
            <Button color='primary' size='sm' variant='bordered' onPress={() => switchLocale('uk')} className='mx-4'>
              EN
            </Button>
          )}
          {locale === 'uk' && (
            <Button color='primary' size='sm' variant='bordered' onPress={() => switchLocale('en')} className='mx-4'>
              UK
            </Button>
          )}
        </div>
      </Navbar>
    </header>
  )
}

export default HeaderComponent
