import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// interface
interface IState {
  selectedCategory: string | null
}
interface IStore extends IState {
  handleCategoryStore: (value: Partial<IState>) => void
}

// store
export const useCategoryStore = create<IStore>()(
  devtools(
    (set) => ({
      selectedCategory: null,
      handleCategoryStore: (value: Partial<IState>) => set((state: IState) => ({ ...state, ...value })),
    }),
    { enabled: process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' },
  ),
)
