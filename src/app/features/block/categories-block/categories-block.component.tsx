'use client'

import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@heroui/button'
import { Select, SelectItem } from '@heroui/select'
import { useQuery } from '@tanstack/react-query'

import { productCategoryListOptions } from '@/app/entities/api'
import { ICategorySelect } from '@/app/entities/models/category.model'
import { useCategoryStore } from '@/app/shared/store'

// interface
interface IProps {}

// component
const CategoriesBlockComponent: FC<Readonly<IProps>> = () => {
  const { data } = useQuery(productCategoryListOptions())

  const selectedCategory = useCategoryStore((s) => s.selectedCategory)
  const handleCategoryStore = useCategoryStore((s) => s.handleCategoryStore)

  const { control, handleSubmit } = useForm<ICategorySelect>({
    defaultValues: {
      category: selectedCategory ?? '',
    },
  })

  // return
  return (
    <form
      onSubmit={handleSubmit((data: ICategorySelect) => handleCategoryStore({ selectedCategory: data.category }))}
      className='mb-6 flex justify-center'
    >
      <Controller
        name='category'
        control={control}
        render={({ field }) => (
          <Select
            className='m-2 min-w-md'
            aria-label='Select category'
            placeholder='Select category'
            color='primary'
            variant='bordered'
            selectedKeys={field ? [field.value] : []}
            onSelectionChange={(keys) => {
              const key = Array.from(keys)[0] as string
              field.onChange(key)
            }}
          >
            <>
              {data?.map((category: string) => (
                <SelectItem key={category} textValue={category}>
                  {category}
                </SelectItem>
              ))}
            </>
          </Select>
        )}
      />

      <Button color='primary' type='submit' className='mt-2'>
        Find
      </Button>

      <Button
        className='m-2'
        color='primary'
        variant='bordered'
        type='button'
        onPress={() => handleCategoryStore({ selectedCategory: null })}
      >
        Reset
      </Button>
    </form>
  )
}

export default CategoriesBlockComponent
