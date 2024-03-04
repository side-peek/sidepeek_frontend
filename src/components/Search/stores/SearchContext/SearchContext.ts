import { createContext } from "react"

type SearchContextValue = {
  isFocused: boolean
}

export const SearchContext = createContext<SearchContextValue | null>(null)
