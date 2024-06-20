import { create } from "zustand"

interface TabPageInfoProps {
  [key: string]: number
  JOINED: number
  LIKED: number
  COMMENTED: number
}

interface PageInfoState {
  tabPageInfo: TabPageInfoProps
  selectPage: (tab: string, page: number) => void
}

const usePageInfoStore = create<PageInfoState>((set) => ({
  tabPageInfo: {
    JOINED: 0,
    LIKED: 0,
    COMMENTED: 0,
  },
  selectPage: (tab, page) =>
    set((state) => ({
      tabPageInfo: {
        ...state.tabPageInfo,
        [tab]: page,
      },
    })),
}))

export default usePageInfoStore
