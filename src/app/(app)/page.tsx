import { FC } from 'react'

import { HomeModule } from '@/app/modules/home'

// interface
interface IProps {}

// component
const Page: FC<Readonly<IProps>> = () => {
  // return
  return <HomeModule />
}

export default Page
