'use client'

import { type FC, type ReactNode, useEffect } from 'react'

import { mixpanelManager } from './mixpanel.manager'

// interface
interface IProps {
  children: ReactNode
}

// component
const MixpanelProvider: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  useEffect(() => {
    mixpanelManager.init()
  }, [])

  // return
  return <>{children}</>
}

export default MixpanelProvider
