import { Metadata } from 'next'
import { Locale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { FC, ReactNode } from 'react'

import { LayoutModule } from '@/app/modules/layout'
import { envClient } from '@/config/env'
import { MixpanelProvider } from '@/pkg/integrations/mixpanel'
import { SentryProvider } from '@/pkg/integrations/sentry'
import { RestApiProvider } from '@/pkg/libraries/rest-api'
import { UiProvider } from '@/pkg/libraries/ui'

import '@/config/styles/global.css'

// interface
interface IProps {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

// metadata
export const generateMetadata = async (_props?: IProps): Promise<Metadata> => {
  const title = 'Products List'
  const description = 'Products List'
  const baseUrl = envClient.NEXT_PUBLIC_CLIENT_WEB_URL

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
  const { children, params } = props

  const { locale } = await params

  setRequestLocale(locale)

  // return
  return (
    <html lang={locale}>
      <body>
        <SentryProvider>
          <MixpanelProvider>
            <NextIntlClientProvider>
              <UiProvider>
                <RestApiProvider>
                  <LayoutModule>{children}</LayoutModule>
                </RestApiProvider>
              </UiProvider>
            </NextIntlClientProvider>
          </MixpanelProvider>
        </SentryProvider>
      </body>
    </html>
  )
}

export default RootLayout
