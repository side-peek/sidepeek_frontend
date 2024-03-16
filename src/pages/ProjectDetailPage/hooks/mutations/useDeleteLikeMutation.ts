import { deleteLikePayload } from "api-models"
import { Project } from "api-models"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { deleteLike } from "@apis/like/deleteLike"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_POST_LIKE = "DELETE_LIKE_1328940382182"

export const useDeleteLikeMutation = () => {
  const queryClient = useQueryClient()

  const deleteLikeMutation = useMutation({
    mutationKey: [QUERY_KEY_POST_LIKE],
    mutationFn: (data: deleteLikePayload) => deleteLike(data),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
      const previousLikeState = queryClient.getQueryData<Project>([
        QUERY_KEY_GET_PROJECT_DETAIL,
      ])

      if (previousLikeState) {
        const updatedLikeState = {
          ...previousLikeState,
          likeId: null,
          likeCount: previousLikeState.likeCount - 1,
        }
        queryClient.setQueryData(
          [QUERY_KEY_GET_PROJECT_DETAIL],
          updatedLikeState,
        )
      }

      return { previousLikeState }
    },

    onError: (err, _, context) => {
      console.log(err)
      queryClient.setQueryData(
        [QUERY_KEY_GET_PROJECT_DETAIL],
        context?.previousLikeState,
      )
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
    },
  })
  return { deleteLikeMutation }
}
