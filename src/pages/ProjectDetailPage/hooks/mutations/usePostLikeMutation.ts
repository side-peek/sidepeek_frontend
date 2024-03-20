import { useEffect } from "react"

import { useToast } from "@chakra-ui/react"
import { postLikePayload } from "api-models"
import { Project } from "api-models"
import { isAxiosError } from "axios"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { postLike } from "@apis/like/postLike"

import {
  COMMON_MESSAGES,
  LIKE_MESSAGES,
} from "@pages/ProjectDetailPage/constants/toastMessage"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

import { QUERYKEY } from "@constants/queryKey"

export const usePostLikeMutation = () => {
  const queryClient = useQueryClient()
  const toast = useToast(toastOptions)

  const { mutate: postLikeMutation, error } = useMutation({
    mutationKey: [QUERYKEY.POST_LIKE],
    mutationFn: (data: postLikePayload) => postLike(data),
    onMutate: async ({ projectId }) => {
      await queryClient.cancelQueries({
        queryKey: [QUERYKEY.PROJECT_DETAIL, projectId],
      })

      const previousLikeState = queryClient.getQueryData<Project>([
        QUERYKEY.PROJECT_DETAIL,
        projectId,
      ])

      if (previousLikeState) {
        const updatedLikeState = {
          ...previousLikeState,
          likeId: 99999999,
          likeCount: previousLikeState.likeCount + 1,
        }
        queryClient.setQueryData(
          [QUERYKEY.PROJECT_DETAIL, projectId],
          updatedLikeState,
        )
      }

      return { previousLikeState }
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(
        [QUERYKEY.PROJECT_DETAIL],
        context?.previousLikeState,
      )
    },
    onSettled: (_, __, { projectId }) => {
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
        case 400:
        case 404: {
          message = LIKE_MESSAGES.ERROR.BAD_REQUEST
          break
        }
        case 409: {
          message = LIKE_MESSAGES.ERROR.CONFLICT
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
