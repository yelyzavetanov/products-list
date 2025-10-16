import { FC } from 'react'

import {
  BoostBlockComponent,
  CommunityBlockComponent,
  FAQBlockComponent,
  HeroBlockComponent,
  HowItWorksBlockComponent,
  PlansBlockComponent,
  ProfitBlockComponent,
  ResultsBlockComponent,
  TestBlockComponent,
} from '@/app/features/myiq/block'
import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {}

const MyIQModule: FC<Readonly<IProps>> = () => {
  // return
  return (
    <ContainerComponent className='mx-auto w-full gap-0 pt-1'>
      <HeroBlockComponent />

      <HowItWorksBlockComponent />

      <TestBlockComponent />

      <BoostBlockComponent />

      <ProfitBlockComponent />

      <CommunityBlockComponent />

      <PlansBlockComponent />

      <FAQBlockComponent />

      <ResultsBlockComponent />
    </ContainerComponent>
  )
}

export default MyIQModule
