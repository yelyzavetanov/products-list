'use client'

import NextError from 'next/error'
import { FC, useEffect } from 'react'

import * as Sentry from '@sentry/nextjs'

// interface
interface IProps {
  error: Error & { digest?: string }
}

// global error
export const GlobalError: FC<Readonly<IProps>> = (props) => {
  const { error } = props

  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  // return
  return (
    <html>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  )
}

export default GlobalError
