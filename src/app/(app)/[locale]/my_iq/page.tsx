import { FC } from 'react'

import { MyIQModule } from '@/app/modules/myiq'

// interface
interface IProps {}

const Page: FC<Readonly<IProps>> = () => {
  // return
  return <MyIQModule />
}

export default Page
