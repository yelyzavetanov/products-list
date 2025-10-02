'use client'

import { type FC, type ReactNode, useEffect } from 'react'

import * as Sentry from '@sentry/nextjs'

// interface
interface IProps {
  children: ReactNode
}

// component
const SentryProvider: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  useEffect(() => {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: 1,
      debug: true,
    })
  }, [])

  // return
  return <>{children}</>
}

export default SentryProvider
