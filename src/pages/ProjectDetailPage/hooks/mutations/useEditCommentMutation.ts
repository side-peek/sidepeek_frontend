import { useEffect } from "react"

import { useToast } from "@chakra-ui/react"
import { Project, editCommentPayload } from "api-models"
import { isAxiosError } from "axios"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { editComment } from "@apis/comment/editComment"

import {
  COMMENT_MESSAGES,
  COMMON_MESSAGES,
} from "@pages/ProjectDetailPage/constants/toastMessage"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

import { QUERYKEY } from "@constants/queryKey"

export const useEditCommentMutation = (projectId: number) => {
  const queryClient = useQueryClient()
  const toast = useToast(toastOptions)

  const { mutate: editCommentMutation, error } = useMutation({
    mutationKey: [QUERYKEY.EDIT_COMMENT],
    mutationFn: (data: editCommentPayload) => editComment(data),

    onMutate: async (data: editCommentPayload) => {
      const { commentId, content: newContent } = data
      await queryClient.cancelQueries({
        queryKey: [QUERYKEY.PROJECT_DETAIL, projectId],
      })

      const previousState = queryClient.getQueryData<Project>([
        QUERYKEY.PROJECT_DETAIL,
        projectId,
      ])

      if (previousState) {
        const updatedComment = previousState.comments.map((comment) =>
          comment.id === commentId
            ? { ...comment, content: newContent }
            : comment,
        )
        const updatedState = {
          ...previousState,
          comments: updatedComment,
        }
        queryClient.setQueryData(
          [QUERYKEY.PROJECT_DETAIL, projectId],
          updatedState,
        )
      }

      return { previousState }
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        [QUERYKEY.PROJECT_DETAIL, projectId],
        context?.previousState,
      )
    },
    onSettled: () => {
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

  return { editCommentMutation }
}
