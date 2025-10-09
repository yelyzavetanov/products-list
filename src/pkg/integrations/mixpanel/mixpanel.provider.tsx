'use client'

import { type FC, type ReactNode, useEffect } from 'react'

import { mixpanelManager } from './mixpanel.manager'

interface IProps {
  children: ReactNode
}
const MixpanelProvider: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  useEffect(() => {
    mixpanelManager.init()
  }, [])

  return <>{children}</>
}

export default MixpanelProvider
