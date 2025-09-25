import { FC } from 'react'

// interface
interface IProps {}

// component
const FooterComponent: FC<Readonly<IProps>> = () => {
  // return
  return <footer className='p-6 text-center'>this is a footer</footer>
}

export default FooterComponent
