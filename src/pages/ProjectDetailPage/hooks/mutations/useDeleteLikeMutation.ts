import { deleteLike } from "@api/like/deleteLike"
import { deleteLikePayload } from "api-models"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_POST_LIKE = "DELETE_LIKE_1328940382182"

export const useDeleteLikeMutation = () => {
  const queryClient = useQueryClient()

  const deleteLikeMutation = useMutation({
    mutationKey: [QUERY_KEY_POST_LIKE],
    mutationFn: (data: deleteLikePayload) => deleteLike(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
    },
  })
  return { deleteLikeMutation }
}
