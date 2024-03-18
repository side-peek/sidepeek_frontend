import { useEffect } from "react"

import { useToast } from "@chakra-ui/react"
import { editCommentPayload } from "api-models"
import { isAxiosError } from "axios"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { editComment } from "@apis/comment/editComment"

import {
  COMMENT_MESSAGES,
  COMMON_MESSAGES,
} from "@pages/ProjectDetailPage/constants/toastMessage"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_EDIT_COMMENT = "EDIT_COMMENT_234893204832"

export const useEditCommentMutation = () => {
  const queryClient = useQueryClient()
  const toast = useToast(toastOptions)

  const { mutate: editCommentMutation, error } = useMutation({
    mutationKey: [QUERY_KEY_EDIT_COMMENT],
    mutationFn: (data: editCommentPayload) => editComment(data),
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

  return { editCommentMutation }
}
