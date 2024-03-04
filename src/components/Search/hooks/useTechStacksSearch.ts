import { useLayoutEffect, useState } from "react"

import { Skill } from "api-models"

import { useGetTechStacksQuery } from "./queries/useGetTechStacksQuery"

export const useTechStacksSearch = (value: string) => {
  //queryKey가 변경됨에 따라 data가 undefined -> 실제 data로 변경되는 과정에서 생기는
  //화면에 미세한 blinking을 방지하기 위해 data를 searchResult라는 client state로 관리
  const [searchResult, setSearchResult] = useState<Skill[]>([])
  const { data } = useGetTechStacksQuery(value)

  useLayoutEffect(() => {
    if (!data) {
      return
    }
    setSearchResult(data)
  }, [data])

  return searchResult
}
