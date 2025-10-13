import { FC } from 'react'

import { HeroBlockComponent } from '@/app/features/myiq-block/hero-block'
import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {}

const MyIQModule: FC<Readonly<IProps>> = () => {
  // return
  return (
    <ContainerComponent>
      <HeroBlockComponent />

      <div>how-it-works-block</div>

      <div>tests-block</div>

      <div>boost-block</div>

      <div>profit-block</div>

      <div>community-block</div>

      <div>plans-block</div>

      <div>faq-block</div>

      <div>results-block</div>
    </ContainerComponent>
  )
}

export default MyIQModule
