import { FC, ReactNode } from 'react'

import { FooterComponent } from '@/app/widgets/footer'
import { HeaderComponent } from '@/app/widgets/header'

// interface
interface IProps {
  children: ReactNode
}

// component
const LayoutModule: FC<Readonly<IProps>> = async (props) => {
  const { children } = props

  // return
  return (
    <>
      <HeaderComponent />

      {children}

      <FooterComponent />
    </>
  )
}

export default LayoutModule
