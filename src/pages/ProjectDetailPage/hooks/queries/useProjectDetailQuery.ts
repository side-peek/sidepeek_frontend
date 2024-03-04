import { useQuery } from "@tanstack/react-query"

import { getProjectDetail } from "@/api/project/getProjectDetail"

export const QUERY_KEY_GET_PROJECT_DETAIL = "GET_PROJECT_DETAIL_1389471984712"
const useProjectDetailQuery = (projectId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY_GET_PROJECT_DETAIL, projectId],
    queryFn: () => getProjectDetail({ projectId }),
  })
}

export default useProjectDetailQuery
