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
    // onMutate: async ({ projectId }) => {
    //   console.log(projectId)
    //   await queryClient.cancelQueries({
    //     queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
    //   })
    //   const previousLikeState = queryClient.getQueriesData({
    //     queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
    //   })
    //   if (previousLikeState) {
    //     const updatedLikeState = previousLikeState.map((likeState, index) => {
    //       if (index === 0) {
    //         return likeState
    //       }
    //       return likeState.map((like) => {
    //         console.log(like)
    //         return {
    //           ...like,
    //           likeId: like.likeId ? null : 3,
    //           likeCount: like.likeCount + 1,
    //         }
    //       })
    //     })
    //     queryClient.setQueryData({
    //       queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
    //       updatedLikeState,
    //     })
    //   }

    //   return { previousLikeState }
    // },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
    },
  })

  return { postLikeMutation }
}
