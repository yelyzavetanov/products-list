'use client'

import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@heroui/button'
import { Select, SelectItem } from '@heroui/select'
import { captureException, withScope } from '@sentry/nextjs'
import { useQuery } from '@tanstack/react-query'

import { orderQueryOptions } from '@/app/entities/api'
import { IOrder, IOrderSelect } from '@/app/entities/models'
import { useOrderStore } from '@/app/shared/store'
import { mixpanelUtils } from '@/pkg/integrations/mixpanel'

// interface
interface IProps {}

// component
const OrderBlockComponent: FC<Readonly<IProps>> = () => {
  const { data } = useQuery(orderQueryOptions())

  const t = useTranslations()

  const selectedOrder = useOrderStore((s) => s.selectedOrder)
  const handleOrderStore = useOrderStore((s) => s.handleOrderStore)

  const { control, handleSubmit, reset } = useForm<IOrderSelect>({
    defaultValues: {
      order: selectedOrder ?? '',
    },
  })

  const handleSubmitOrder = (data: IOrderSelect) => {
    try {
      handleOrderStore({ selectedOrder: data.order })
    } catch (err) {
      withScope((scope) => {
        scope.setTag('component', 'OrderBlockComponent')
        scope.setTag('action', 'submitOrder')
        scope.setExtra('order', data.order)
        captureException(err)
      })
    }
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
        onPress={() => {
          handleOrderStore({ selectedOrder: 'Direct' })
          reset({ order: 'Direct' })
          mixpanelUtils.trackResetSort()
        }}
      >
        {t('reset_products_sort_button')}
      </Button>
    </form>
  )
}

export default OrderBlockComponent
