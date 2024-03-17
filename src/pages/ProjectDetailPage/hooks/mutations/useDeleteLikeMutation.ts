import { useEffect } from "react"

import { useToast } from "@chakra-ui/react"
import { deleteLikePayload } from "api-models"
import { isAxiosError } from "axios"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { deleteLike } from "@apis/like/deleteLike"

import {
  COMMON_MESSAGES,
  LIKE_MESSAGES,
} from "@pages/ProjectDetailPage/constants/toastMessage"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_POST_LIKE = "DELETE_LIKE_1328940382182"

export const useDeleteLikeMutation = () => {
  const queryClient = useQueryClient()
  const toast = useToast(toastOptions)

  const { mutate: deleteLikeMutation, error } = useMutation({
    mutationKey: [QUERY_KEY_POST_LIKE],
    mutationFn: (data: deleteLikePayload) => deleteLike(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
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
        case 400:
        case 404: {
          message = LIKE_MESSAGES.ERROR.UNVALIDATE
          break
        }
        default: {
          message = LIKE_MESSAGES.ERROR.UNCAUGHT
        }
      }
      toast({
        status: "error",
        title: message,
      })
    }
  }, [error, toast])
  return { deleteLikeMutation }
}
