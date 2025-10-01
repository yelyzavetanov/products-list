'use client'

import { useTranslations } from 'next-intl'
import { FC } from 'react'

// interface
interface IProps {}

// component
const FooterComponent: FC<Readonly<IProps>> = () => {
  const t = useTranslations()

  // return
  return <footer className='p-6 text-center text-gray-600'>{t('footer_text')}</footer>
}

export default FooterComponent
