import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// interface
interface IState {
  orderCounter: number
}
interface IStore extends IState {
  handleOrderStore: (value: Partial<IState>) => void
}

// store
export const useOrderStore = create<IStore>()(
  devtools(
    (set) => ({
      orderCounter: 0,
      handleOrderStore: (value: Partial<IState>) => set((state: IState) => ({ ...state, ...value })),
    }),
    { enabled: process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' },
  ),
)
