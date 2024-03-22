import { useQuery } from "@tanstack/react-query"

import { getProjectDetail } from "@apis/project/getProjectDetail"

import { QUERYKEY } from "@constants/queryKey"

import { parseProjectDetail } from "../utils/parseProjectDetail"

export const useGetProjectEdit = (projectId: number) =>
  useQuery({
    queryKey: [QUERYKEY.PROJECT_DETAIL, projectId],
    enabled: !!projectId,
    queryFn: () => {
      const data = getProjectDetail({ projectId: projectId as number })
      return data
    },
    select: (data) => parseProjectDetail(data),
  })
