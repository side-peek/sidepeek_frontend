import { create } from "zustand"

import { SortSelectType } from "@pages/HomePage/types/type"

interface SortSelectZustand {
  prevSortOption: SortSelectType
  setPrevSortOption: (currentSortOption: SortSelectType) => void
}

const SortOption = sessionStorage.getItem("preV") as SortSelectType

const useSortOptionStore = create<SortSelectZustand>((set) => ({
  prevSortOption: SortOption,
  setPrevSortOption: (currentSortOption) =>
    set({ prevSortOption: currentSortOption }),
}))

export default useSortOptionStore
