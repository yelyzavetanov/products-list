'use client'

import mixpanel from 'mixpanel-browser'
import { useTranslations } from 'next-intl'
import { FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@heroui/button'
import { Select, SelectItem } from '@heroui/select'

import { IOrderSelect } from '@/app/entities/models'
import { useOrderStore } from '@/app/shared/store'
import { initMixpanel } from '@/pkg/libraries/mixpanel'

// interface
interface IProps {}

// component
const OrderBlockComponent: FC<Readonly<IProps>> = () => {
  const data = ['Direct', 'Reverse']

  const t = useTranslations()

  const selectedOrder = useOrderStore((s) => s.selectedOrder)
  const handleOrderStore = useOrderStore((s) => s.handleOrderStore)

  const { control, handleSubmit, reset } = useForm<IOrderSelect>({
    defaultValues: {
      order: selectedOrder ?? '',
    },
  })

  useEffect(() => {
    initMixpanel()
  }, [])

  // return
  return (
    <form
      onSubmit={handleSubmit((data: IOrderSelect) => handleOrderStore({ selectedOrder: data.order }))}
      className='mb-6 flex justify-center'
    >
      <Controller
        name='order'
        control={control}
        render={({ field }) => (
          <Select
            className='m-2 min-w-md'
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
              {data?.map((order: string) => (
                <SelectItem key={order} textValue={t(`product_list_order_options.${order.toLowerCase()}`)}>
                  {t(`product_list_order_options.${order.toLowerCase()}`)}
                </SelectItem>
              ))}
            </>
          </Select>
        )}
      />

      <Button color='primary' type='submit' className='mt-2'>
        {t('sort_products_button')}
      </Button>

      <Button
        className='m-2'
        color='primary'
        variant='bordered'
        type='button'
        onPress={() => {
          handleOrderStore({ selectedOrder: 'Direct' })
          reset({ order: 'Direct' })
          mixpanel.track?.('Order Reset', { order: 'Direct' })
        }}
      >
        {t('reset_products_sort_button')}
      </Button>
    </form>
  )
}

export default OrderBlockComponent
