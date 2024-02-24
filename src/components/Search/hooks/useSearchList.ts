import { ChangeEventHandler, useState } from "react"

import { useQuery } from "@tanstack/react-query"

type callback<T> = () => Promise<T[]>

export const useSearchList = <T>(initialValue = "", queryFn: callback<T>) => {
  const [keyword, setKeyword] = useState(initialValue)

  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value.trim()

    if (inputValue.length > 0) {
      setKeyword(inputValue)
    }
  }

  const { data, isLoading, isFetching } = useQuery<T[], Error>({
    queryKey: ["search", keyword],
    queryFn,
    initialData: [],
  })

  return { data, isLoading, isFetching, onSearch, keyword }
}
