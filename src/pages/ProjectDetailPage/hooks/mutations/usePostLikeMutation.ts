import { postLike } from "@api/like/postLike"
import { postLikePayload } from "api-models"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_POST_LIKE = "POST_LIKE_234893204832"

export const usePostLikeMutation = () => {
  const queryClient = useQueryClient()

  const postLikeMutation = useMutation({
    mutationKey: [QUERY_KEY_POST_LIKE],
    mutationFn: (data: postLikePayload) => postLike(data),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
      const previousLikeState = queryClient.getQueriesData({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
      console.log(previousLikeState)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
    },
  })

  return { postLikeMutation }
}
