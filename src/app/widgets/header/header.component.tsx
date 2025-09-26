'use client'

import Link from 'next/link'
import { FC } from 'react'

import { Navbar } from '@heroui/navbar'

// interface
interface IProps {}

// component
const HeaderComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <header>
      <Navbar>
        <div className='text-gray-600'>Products list project</div>

        <Link href={'/'}>Home</Link>
      </Navbar>
    </header>
  )
}

export default HeaderComponent
