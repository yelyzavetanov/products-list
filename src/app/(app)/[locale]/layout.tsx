import { Metadata } from 'next'
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { FC, ReactNode } from 'react'

import { LayoutModule } from '@/app/modules/layout'
import { GrowthBookProvider } from '@/pkg/integrations/growthbook'
import { MixpanelProvider } from '@/pkg/integrations/mixpanel'
import { SentryProvider } from '@/pkg/integrations/sentry'
import { routing } from '@/pkg/libraries/locale'
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
  const { children, params } = props

  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  // return
  return (
    <html lang={locale}>
      <body>
        <SentryProvider>
          <GrowthBookProvider>
            <MixpanelProvider>
              <NextIntlClientProvider>
                <UiProvider>
                  <RestApiProvider>
                    <LayoutModule>{children}</LayoutModule>
                  </RestApiProvider>
                </UiProvider>
              </NextIntlClientProvider>
            </MixpanelProvider>
          </GrowthBookProvider>
        </SentryProvider>
      </body>
    </html>
  )
}

export default RootLayout
