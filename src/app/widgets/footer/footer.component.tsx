import { FC } from 'react'

// interface
interface IProps {}

// component
const FooterComponent: FC<Readonly<IProps>> = () => {
  // return
  return <footer className='p-6 text-center text-gray-600'>This is a simple products list project.</footer>
}

export default FooterComponent
