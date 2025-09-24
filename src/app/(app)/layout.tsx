import { UiProvider } from '@/pkg/libraries/ui'
import { FC, ReactNode } from 'react'

import '@/config/styles/global.css'
import { LayoutModule } from '../modules/layout'

// interface
interface IProps {
  children: ReactNode
}

// component
const RootLayout: FC<Readonly<IProps>> = async (props) => {
  const { children } = props

  // return
  return (
    <html>
      <body>
        <UiProvider>
          <LayoutModule>{children}</LayoutModule>
        </UiProvider>
      </body>
    </html>
  )
}

export default RootLayout
