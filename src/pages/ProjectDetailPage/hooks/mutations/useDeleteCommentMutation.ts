import { useEffect } from "react"

import { useToast } from "@chakra-ui/react"
import { isAxiosError } from "axios"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { deleteComment } from "@apis/comment/deleteComment"

import {
  COMMENT_MESSAGES,
  COMMON_MESSAGES,
} from "@pages/ProjectDetailPage/constants/toastMessage"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

import { QUERYKEY } from "@constants/queryKey"

export const useDeleteCommentMutation = (projectId: number) => {
  const queryClient = useQueryClient()
  const toast = useToast(toastOptions)

  const { mutate: deleteCommentMutation, error } = useMutation({
    mutationKey: [QUERYKEY.DELETE_COMMENT],
    mutationFn: (commentId: number) => deleteComment({ commentId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERYKEY.PROJECT_DETAIL, projectId],
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
          message = COMMENT_MESSAGES.ERROR.BAD_REQUEST
          break
        }
        case 403: {
          message = COMMENT_MESSAGES.ERROR.UNAUTHORIZED
          break
        }
        case 404: {
          message = COMMENT_MESSAGES.ERROR.NOT_FOUND
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

  return { deleteCommentMutation }
}
