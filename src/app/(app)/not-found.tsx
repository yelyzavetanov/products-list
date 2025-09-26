import { NextPage } from 'next'

import { ContainerComponent } from '../shared/ui/container'

// component
const NotFound: NextPage = () => {
  // return
  return (
    <ContainerComponent className='justify-center gap-2'>
      <div className='text-primary text-xl font-bold'>404</div>
      <div>not found</div>
    </ContainerComponent>
  )
}

export default NotFound
