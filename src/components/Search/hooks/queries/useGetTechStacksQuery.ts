import { useQuery } from "@tanstack/react-query"

import { getTechStacks } from "@/api/skill/getSearchTechStacks"

import { QUERYKEY } from "@constants/queryKey"

//TODO: debounce 적용하기
export const useGetTechStacksQuery = (value: string) => {
  return useQuery({
    queryKey: [QUERYKEY.TECH_STACKS, value],
    queryFn: () => getTechStacks(value),
    enabled: value.length > 0,
    select: (data) => {
      return data.skills
    },
  })
}
