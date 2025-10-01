'use client'

import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@heroui/button'
import { Select, SelectItem } from '@heroui/select'

import { IOrderSelect } from '@/app/entities/models'
import { useOrderStore } from '@/app/shared/store'

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
                <SelectItem key={order} textValue={order}>
                  {order}
                </SelectItem>
              ))}
            </>
          </Select>
        )}
      />

      <Button color='primary' type='submit' className='mt-2'>
        Sort
      </Button>

      <Button
        className='m-2'
        color='primary'
        variant='bordered'
        type='button'
        onPress={() => {
          handleOrderStore({ selectedOrder: 'Direct' })
          reset({ order: 'Direct' })
        }}
      >
        {t('reset_products_sort_button')}
      </Button>
    </form>
  )
}

export default OrderBlockComponent
