import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useToast } from "@chakra-ui/react"
import { isAxiosError } from "axios"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { deleteProject } from "@apis/project/deleteProject"

import {
  COMMON_MESSAGES,
  PROJECT__CONTROL_MESSAGES,
} from "@pages/ProjectDetailPage/constants/toastMessage"

import { QUERYKEY } from "../../../../constants/queryKey"

const QUERY_KEY_POST_LIKE = "DELETE_LIKE_1328940382182"

export const useDeleteProjectMutation = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const queryClient = useQueryClient()

  const { mutate: deleteProjectMutation, error } = useMutation({
    mutationKey: [QUERY_KEY_POST_LIKE],
    mutationFn: (projectId: number) => deleteProject({ projectId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERYKEY.ALL_PROJECTS],
      })

      navigate(-1)
    },
  })

  useEffect(() => {
    if (isAxiosError(error)) {
      let message = ""
      switch (error.response?.status) {
        case 500: {
          message = COMMON_MESSAGES.SERVER
          break
        }
        case 403: {
          message = PROJECT__CONTROL_MESSAGES.ERROR.FORBIDDEN
          break
        }
        case 404: {
          message = PROJECT__CONTROL_MESSAGES.ERROR.NOT_FOUND
          break
        }
        default: {
          message = PROJECT__CONTROL_MESSAGES.ERROR.UNCAUGHT
        }
      }
      toast({
        status: "error",
        title: message,
      })
    }
  }, [error, toast])

  return { deleteProjectMutation }
}
