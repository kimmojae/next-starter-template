'use client'

import { useBear } from '@/stores/bear'
import { Panda } from 'lucide-react'

export function BearCounter() {
  const { bears, increasePopulation, removeAllBears } = useBear()

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <div className="flex flex-wrap gap-1">
        {Array.from({ length: bears }, (_, i) => (
          <Panda key={i} size={32} />
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={increasePopulation}
          className="bg-foreground text-background rounded-full px-4 py-2 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          + 🐼
        </button>
        <button
          onClick={removeAllBears}
          className="rounded-full border border-black/8 px-4 py-2 transition-colors hover:bg-black/4 dark:border-white/15 dark:hover:bg-[#1a1a1a]"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
