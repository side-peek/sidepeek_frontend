import axios from "axios"

import { useQuery } from "@tanstack/react-query"

//TODO: debounce 적용하기
export const useSearchQuery = (value: string) => {
  return useQuery({
    queryKey: ["search", value],
    queryFn: async () => {
      const { data } = await axios.get(`/api/v1/skills?keyword=${value}`)
      return data
    },
    enabled: value.length > 0,
    select: (data) => {
      return data.skills
    },
  })
}
