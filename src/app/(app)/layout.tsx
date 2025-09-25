import { UiProvider } from '@/pkg/libraries/ui'
import { FC, ReactNode } from 'react'

import '@/config/styles/global.css'
import { RestApiProvider } from '@/pkg/libraries/rest-api'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { LayoutModule } from '../modules/layout'

// interface
interface IProps {
  children: ReactNode
}

// component
const RootLayout: FC<Readonly<IProps>> = async (props) => {
  const { children } = props

  const clientQuery = getQueryClient()

  // return
  return (
    <html>
      <body>
        <UiProvider>
          <RestApiProvider>
            <HydrationBoundary state={dehydrate(clientQuery)}>
              <LayoutModule>{children}</LayoutModule>
            </HydrationBoundary>
          </RestApiProvider>
        </UiProvider>
      </body>
    </html>
  )
}

export default RootLayout
