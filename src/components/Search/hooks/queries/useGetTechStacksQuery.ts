import { useQuery } from "@tanstack/react-query"

import { getTechStacks } from "@apis/skill/getSearchTechStacks"

import { QUERYKEY } from "@constants/queryKey"

export const useGetTechStacksQuery = (value: string, showAll: boolean) => {
  return useQuery({
    queryKey: [QUERYKEY.TECH_STACKS, value],
    queryFn: () => getTechStacks(value),
    select: (data) => {
      return data.skills
    },
    enabled: showAll || value.length > 0,
    staleTime: Infinity,
  })
}
