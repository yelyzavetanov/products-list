import { UseFormSetValue } from 'react-hook-form'

import { captureException, withScope } from '@sentry/nextjs'

import { IOrderSelect } from '@/app/entities/models'
import { mixpanelUtils } from '@/pkg/integrations/mixpanel'

// interface
interface ISubmitOrderParams {
  data: { order: string }
  searchParams: URLSearchParams
  router: any
  orderCounter: number
  handleOrderStore: (state: any) => void
}

// interface
interface IResetOrderParams {
  searchParams: URLSearchParams
  router: any
  setValue: UseFormSetValue<IOrderSelect>
  orderCounter: number
  handleOrderStore: (state: any) => void
}

// handler
export const handleSubmitOrder = (params: ISubmitOrderParams) => {
  const { data, searchParams, router, orderCounter, handleOrderStore } = params

  try {
    const urlParams = new URLSearchParams(searchParams)
    urlParams.set('order', data.order)
    router.push(`?${urlParams.toString()}`)

    handleOrderStore({ orderCounter: orderCounter + 1 })
  } catch (err) {
    withScope((scope) => {
      scope.setTag('component', 'OrderBlockComponent')
      scope.setTag('action', 'submitOrder')
      scope.setExtra('order', data.order)

      captureException(err)
    })
  }
}

// handler
export const handleResetOrder = (params: IResetOrderParams) => {
  const { searchParams, router, setValue, orderCounter, handleOrderStore } = params

  const urlParams = new URLSearchParams(searchParams)
  urlParams.set('order', 'Direct')
  router.push(`?${urlParams.toString()}`)

  setValue('order', 'Direct')

  handleOrderStore({ orderCounter: orderCounter + 1 })

  mixpanelUtils.trackResetSort()
}
