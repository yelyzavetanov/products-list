'use client'

import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@heroui/button'
import { Select, SelectItem } from '@heroui/select'
import { useQuery } from '@tanstack/react-query'

import { orderQueryOptions } from '@/app/entities/api'
import { IOrder, IOrderSelect } from '@/app/entities/models'
import { useOrderStore } from '@/app/shared/store'
import { useRouter } from '@/pkg/libraries/locale'

import { handleResetOrder, handleSubmitOrder } from './order-block.service'

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

  const orderCounter = useOrderStore((s) => s.orderCounter)
  const handleOrderStore = useOrderStore((s) => s.handleOrderStore)

  const router = useRouter()
  const searchParams = useSearchParams()

  const { control, handleSubmit, setValue } = useForm<IOrderSelect>({
    defaultValues: {
      order: order ?? '',
    },
  })

  useEffect(() => {
    const currentOrder = searchParams.get('order') ?? 'Direct'
    setValue('order', currentOrder)
  }, [searchParams, setValue])

  // return
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) =>
          handleSubmitOrder({ data, searchParams, router, orderCounter, handleOrderStore }),
        )}
        className='mb-5 flex justify-center'
      >
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
          onPress={() => handleResetOrder({ searchParams, router, setValue, orderCounter, handleOrderStore })}
        >
          {t('reset_products_sort_button')}
        </Button>
      </form>

      <div className='text-primary mb-5 text-center text-sm'>Sort used {orderCounter} times.</div>
    </div>
  )
}

export default OrderBlockComponent
