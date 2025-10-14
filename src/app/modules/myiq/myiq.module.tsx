import { FC } from 'react'

import { BoostBlockComponent } from '@/app/features/myiq-block/boost-block'
import { HeroBlockComponent } from '@/app/features/myiq-block/hero-block'
import { HowItWorksComponent } from '@/app/features/myiq-block/how-it-works-block'
import { TestBlockComponent } from '@/app/features/myiq-block/test-block'
import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {}

const MyIQModule: FC<Readonly<IProps>> = () => {
  // return
  return (
    <ContainerComponent className='mx-auto w-full pt-1'>
      <HeroBlockComponent />

      <HowItWorksComponent />

      <TestBlockComponent />

      <BoostBlockComponent />

      <div>profit-block</div>

      <div>community-block</div>

      <div>plans-block</div>

      <div>faq-block</div>

      <div>results-block</div>
    </ContainerComponent>
  )
}

export default MyIQModule
