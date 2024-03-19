import { useEffect } from "react"

import { useToast } from "@chakra-ui/react"
import { isAxiosError } from "axios"

import { useQuery } from "@tanstack/react-query"

import { getProjectDetail } from "@apis/project/getProjectDetail"

import {
  COMMON_MESSAGES,
  GET_PROJECT_MESSAGES,
} from "@pages/ProjectDetailPage/constants/toastMessage"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

import { QUERYKEY } from "@constants/queryKey"

export const useProjectDetailQuery = (projectId: number) => {
  const toast = useToast(toastOptions)
  const { data: projectDetailInfo, error } = useQuery({
    queryKey: [QUERYKEY.PROJECT_DETAIL, projectId],
    queryFn: () => getProjectDetail({ projectId }),
  })

  useEffect(() => {
    if (isAxiosError(error)) {
      let message = ""
      switch (error.response?.status) {
        case 500: {
          message = COMMON_MESSAGES.SERVER
          break
        }
        case 404: {
          message = GET_PROJECT_MESSAGES.ERROR.BAD_REQUEST
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
