import { HomeModule } from '@/app/modules/home'
import { FC } from 'react'

// interface
interface IProps {}

// component
const Page: FC<Readonly<IProps>> = () => {
  // return
  return <HomeModule />
}

export default Page
