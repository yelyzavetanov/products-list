'use client'

import { FC, ReactNode } from 'react'

import { HeroUIProvider } from '@heroui/system'

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
