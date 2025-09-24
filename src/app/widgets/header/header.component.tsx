'use client'

import { Navbar } from '@heroui/navbar'
import Link from 'next/link'
import { FC } from 'react'

// interface
interface IProps {}

// component
const HeaderComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <header>
      <Navbar>
        <div className='text-gray-600'>A simple product list project</div>
        <Link color='primary' href={'/'}>
          Home
        </Link>
      </Navbar>
    </header>
  )
}

export default HeaderComponent
