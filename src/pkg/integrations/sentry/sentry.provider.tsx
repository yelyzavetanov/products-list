'use client'

import { type FC, type ReactNode, useEffect } from 'react'

import * as Sentry from '@sentry/nextjs'

import { envServer } from '@/config/env'

// interface
interface IProps {
  children: ReactNode
}

// component
const SentryProvider: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  useEffect(() => {
    Sentry.init({
      dsn: envServer.SENTRY_DSN,
      tracesSampleRate: 1,
      debug: false,
    })
  }, [])

  // return
  return <>{children}</>
}

export default SentryProvider
