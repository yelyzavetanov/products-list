import { FC, ReactNode } from 'react'

// interface
interface IProps {
  children: ReactNode
}

// component
const ContainerComponent: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  // return
  return (
    <>
      <main className='flex min-h-[90vh] flex-col items-center gap-4 p-4'>{children}</main>
    </>
  )
}

export default ContainerComponent
