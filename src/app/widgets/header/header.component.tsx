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

        <div className='flex items-center gap-4'>
          <Link href={'/'} locale={locale}>
            {t('header_link')}
          </Link>

          <Link href={'/my_iq'} locale={locale}>
            My IQ
          </Link>

          {locale === 'en' && (
            <Button color='primary' size='sm' variant='bordered' onPress={() => switchLocale('uk')}>
              EN
            </Button>
          )}

          {locale === 'uk' && (
            <Button color='primary' size='sm' variant='bordered' onPress={() => switchLocale('en')}>
              УКР
            </Button>
          )}
        </div>
      </Navbar>
    </header>
  )
}

export default HeaderComponent
