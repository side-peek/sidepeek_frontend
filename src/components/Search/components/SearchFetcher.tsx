import { ReactNode, useEffect } from "react"

import { useSearchQuery } from "../hooks/queries/useSearchQuery"
import { useSearchContext } from "../stores/useSearchContext"

const SearchFetcher = ({ children }: { children?: ReactNode }) => {
  const { inputValue, setSearchList } = useSearchContext()
  const { data } = useSearchQuery(inputValue)

  useEffect(() => {
    if (!data) {
      return
    }
    setSearchList(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return children
}

export default SearchFetcher
