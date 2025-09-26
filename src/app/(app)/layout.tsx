import { UiProvider } from '@/pkg/libraries/ui'
import { Metadata } from 'next'
import { FC, ReactNode } from 'react'

import { LayoutModule } from '@/app/modules/layout'
import '@/config/styles/global.css'
import { RestApiProvider } from '@/pkg/libraries/rest-api'

// interface
interface IProps {
  children: ReactNode
}

// metadata
export const generateMetadata = async (_props?: IProps): Promise<Metadata> => {
  const title = 'Products List'
  const description = 'Products List'
  const baseUrl = 'http://localhost:3000'

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: description,
    applicationName: title,
    openGraph: {
      title: {
        default: title,
        template: `%s | ${title}`,
      },
      description: description,
      siteName: title,
      type: 'website',
      url: baseUrl,
    },
  }
}

// component
const RootLayout: FC<Readonly<IProps>> = async (props) => {
  const { children } = props

  // return
  return (
    <html>
      <body>
        <UiProvider>
          <RestApiProvider>
            <LayoutModule>{children}</LayoutModule>
          </RestApiProvider>
        </UiProvider>
      </body>
    </html>
  )
}

export default RootLayout
