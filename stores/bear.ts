import { create } from 'zustand'
import { combine } from 'zustand/middleware'

// persist: 새로고침해도 상태 유지 (localStorage)
// devtools: Redux DevTools 연동
// immer: 중첩 객체 불변성 자동 처리 (pnpm add immer)
// subscribeWithSelector: 컴포넌트 밖에서 특정 상태 변경 감지

export const useBear = create(
  combine({ bears: 0 }, (set) => ({
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears: number) => set({ bears: newBears }),
  })),
)
