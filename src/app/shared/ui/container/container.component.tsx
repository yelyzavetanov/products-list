import { FC, ReactNode } from 'react'

import { cn } from '@heroui/react'

// interface
interface IProps {
  children: ReactNode
  className?: string
}

// component
const ContainerComponent: FC<Readonly<IProps>> = (props) => {
  const { children, className = '' } = props

  // return
  return (
    <>
      <main className={cn([`flex min-h-[90vh] flex-col items-center gap-4 py-4 ` + className])}>{children}</main>
    </>
  )
}

export default ContainerComponent
