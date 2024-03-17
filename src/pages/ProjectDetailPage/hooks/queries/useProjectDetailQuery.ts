import { useEffect } from "react"

import { useToast } from "@chakra-ui/react"
import { isAxiosError } from "axios"

import { useQuery } from "@tanstack/react-query"

import { getProjectDetail } from "@apis/project/getProjectDetail"

import { GET_PROJECT_MESSAGES } from "@pages/ProjectDetailPage/constants/toastMessage"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

export const QUERY_KEY_GET_PROJECT_DETAIL = "GET_PROJECT_DETAIL_1389471984712"
export const useProjectDetailQuery = (projectId: number) => {
  const toast = useToast(toastOptions)
  const { data: projectDetailInfo, error } = useQuery({
    queryKey: [QUERY_KEY_GET_PROJECT_DETAIL, projectId],
    queryFn: () => getProjectDetail({ projectId }),
  })

  useEffect(() => {
    if (isAxiosError(error)) {
      let message = ""
      switch (error.response?.status) {
        case 500: {
          message = GET_PROJECT_MESSAGES.ERROR.SERVER
          break
        }
        case 404: {
          message = GET_PROJECT_MESSAGES.ERROR.FAIL
          break
        }
        default: {
          message = GET_PROJECT_MESSAGES.ERROR.UNCAUGHT
        }
      }
      toast({
        status: "error",
        title: message,
      })
    }
  }, [error, toast])

  return { projectDetailInfo }
}
