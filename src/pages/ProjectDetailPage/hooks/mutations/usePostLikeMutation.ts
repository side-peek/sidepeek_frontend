import { useEffect } from "react"

import { useToast } from "@chakra-ui/react"
import { postLikePayload } from "api-models"
import { isAxiosError } from "axios"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { postLike } from "@apis/like/postLike"

import {
  COMMON_MESSAGES,
  LIKE_MESSAGES,
} from "@pages/ProjectDetailPage/constants/toastMessage"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_POST_LIKE = "POST_LIKE_234893204832"

export const usePostLikeMutation = () => {
  const queryClient = useQueryClient()
  const toast = useToast(toastOptions)

  const { mutate: postLikeMutation, error } = useMutation({
    mutationKey: [QUERY_KEY_POST_LIKE],
    mutationFn: (data: postLikePayload) => postLike(data),
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
        case 409: {
          message = LIKE_MESSAGES.ERROR.DUPLICATE
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

  return { postLikeMutation }
}
