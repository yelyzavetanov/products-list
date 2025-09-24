'use client'

import { HeroUIProvider } from '@heroui/system'
import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

// component
const UiProvider: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  // return
  return <HeroUIProvider>{children}</HeroUIProvider>
}

export default UiProvider
