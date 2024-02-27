import {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  createContext,
} from "react"

import { Skill } from "api-models"

type SearchContextValue<T> = {
  inputValue: string
  onInput: ChangeEventHandler<HTMLInputElement>
  searchList: T
  setSearchList: Dispatch<SetStateAction<T>>
}

export const SearchContext = createContext<SearchContextValue<Skill[]> | null>(
  null,
)
