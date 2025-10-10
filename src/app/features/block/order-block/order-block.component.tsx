'use client'

import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@heroui/button'
import { Select, SelectItem } from '@heroui/select'
import { captureException, withScope } from '@sentry/nextjs'
import { useQuery } from '@tanstack/react-query'

import { orderQueryOptions } from '@/app/entities/api'
import { IOrder, IOrderSelect } from '@/app/entities/models'
import { mixpanelUtils } from '@/pkg/integrations/mixpanel'
import { useRouter } from '@/pkg/libraries/locale'

// interface
interface IProps {
  order: string
}

// component
const OrderBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { order } = props

  const { data } = useQuery(orderQueryOptions())
  console.log(data)

  const t = useTranslations()

  const router = useRouter()
  const searchParams = useSearchParams()

  const { control, handleSubmit } = useForm<IOrderSelect>({
    defaultValues: {
      order: order ?? '',
    },
  })

  const handleSubmitOrder = (data: IOrderSelect) => {
    try {
      const params = new URLSearchParams(searchParams)
      params.set('order', data.order)
      router.push(`?${params.toString()}`)
    } catch (err) {
      withScope((scope) => {
        scope.setTag('component', 'OrderBlockComponent')
        scope.setTag('action', 'submitOrder')
        scope.setExtra('order', data.order)
        captureException(err)
      })
    }
  }

  const handleReset = () => {
    const params = new URLSearchParams(searchParams)
    params.set('order', 'Direct')
    router.push(`?${params.toString()}`)
    mixpanelUtils.trackResetSort()
  }

  // return
  return (
    <form onSubmit={handleSubmit(handleSubmitOrder)} className='mb-6 flex justify-center'>
      <Controller
        name='order'
        control={control}
        render={({ field }) => (
          <Select
            className='m-2 min-w-md'
            data-testid='order-select'
            aria-label='Select order'
            placeholder='Select order'
            color='primary'
            variant='bordered'
            selectedKeys={field ? [field.value] : []}
            onSelectionChange={(keys) => {
              const key = Array.from(keys)[0] as string
              field.onChange(key)
            }}
          >
            <>
              {data?.map((order: IOrder) => (
                <SelectItem
                  key={order.option}
                  data-testid={`order-option-${order.option.toLowerCase()}`}
                  textValue={t(`product_list_order_options.${order.option.toLowerCase()}`)}
                >
                  {t(`product_list_order_options.${order.option.toLowerCase()}`)}
                </SelectItem>
              ))}
            </>
          </Select>
        )}
      />

      <Button data-testid='submit-order' color='primary' type='submit' className='mt-2'>
        {t('sort_products_button')}
      </Button>

      <Button
        className='m-2'
        data-testid='reset-order'
        color='primary'
        variant='bordered'
        type='button'
        onPress={handleReset}
      >
        {t('reset_products_sort_button')}
      </Button>
    </form>
  )
}

export default OrderBlockComponent
