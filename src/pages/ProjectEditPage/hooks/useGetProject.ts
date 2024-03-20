import { useQuery } from "@tanstack/react-query"

import { getProjectDetail } from "@apis/project/getProjectDetail"

import { QUERYKEY } from "@constants/queryKey"

import { parseProjectDetail } from "../utils/parseProjectDetail"

export const useGetProjectEdit = (projectId: number) =>
  useQuery({
    queryKey: [QUERYKEY.PROJECT_DETAIL, projectId],
    enabled: !!projectId,
    queryFn: () => getProjectDetail({ projectId: projectId as number }),
    select: (data) => parseProjectDetail(data),
  })
