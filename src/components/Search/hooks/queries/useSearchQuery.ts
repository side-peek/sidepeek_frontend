import { useQuery } from "@tanstack/react-query"

import { getSearchTechStacks } from "@/api/skill/getSearchTechStacks"

//TODO: debounce 적용하기
export const useSearchQuery = (value: string) => {
  return useQuery({
    queryKey: ["search", value],
    queryFn: async () => await getSearchTechStacks(value),
    enabled: value.length > 0,
    select: (data) => {
      return data.skills
    },
  })
}
