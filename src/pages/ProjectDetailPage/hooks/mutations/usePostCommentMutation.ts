import { useEffect } from "react"

import { useToast } from "@chakra-ui/react"
import { postCommentPayload } from "api-models"
import { isAxiosError } from "axios"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { postComment } from "@apis/comment/postComment"

import {
  COMMENT_MESSAGES,
  COMMON_MESSAGES,
} from "@pages/ProjectDetailPage/constants/toastMessage"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_POST_COMMENT = "POST_COMMENT_2384902384"

export const usePostCommentMutation = () => {
  const queryClient = useQueryClient()
  const toast = useToast(toastOptions)

  const { mutate: sendCommentMutation, error } = useMutation({
    mutationKey: [QUERY_KEY_POST_COMMENT],
    mutationFn: (data: postCommentPayload) => postComment(data),
    onSuccess: (_, { projectId }) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL, projectId],
      })
      toast({
        status: "success",
        title: COMMENT_MESSAGES.SUCCESS.POST,
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
        case 400: {
          message = COMMENT_MESSAGES.ERROR.UNVALIDATE
          break
        }
        case 403: {
          message = COMMENT_MESSAGES.ERROR.UNAUTHORIZED
          break
        }
        case 404: {
          message = COMMENT_MESSAGES.ERROR.UNDEFINED
          break
        }
        default: {
          message = COMMENT_MESSAGES.ERROR.UNCAUGHT
        }
      }
      toast({
        status: "error",
        title: message,
      })
    }
  }, [error, toast])

  return { sendCommentMutation }
}
