import { FC } from 'react'

import { BoostBlockComponent } from '@/app/features/myiq-block/boost-block'
import { CommunityBlockComponent } from '@/app/features/myiq-block/community-block'
import { FAQBlockComponent } from '@/app/features/myiq-block/faq-block'
import { HeroBlockComponent } from '@/app/features/myiq-block/hero-block'
import { HowItWorksComponent } from '@/app/features/myiq-block/how-it-works-block'
import { PlansBlockComponent } from '@/app/features/myiq-block/plans-block'
import { ProfitBlockComponent } from '@/app/features/myiq-block/profit-block'
import { ResultsBlockComponent } from '@/app/features/myiq-block/results-block'
import { TestBlockComponent } from '@/app/features/myiq-block/test-block'
import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {}

const MyIQModule: FC<Readonly<IProps>> = () => {
  // return
  return (
    <ContainerComponent className='mx-auto w-full gap-0 pt-1'>
      <HeroBlockComponent />

      <HowItWorksComponent />

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
