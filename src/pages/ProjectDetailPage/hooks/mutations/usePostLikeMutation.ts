import { postLike } from "@api/like/postLike"
import { Project, postLikePayload } from "api-models"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_POST_LIKE = "POST_LIKE_234893204832"

export const usePostLikeMutation = () => {
  const queryClient = useQueryClient()

  const postLikeMutation = useMutation({
    mutationKey: [QUERY_KEY_POST_LIKE],
    mutationFn: (data: postLikePayload) => postLike(data),
    onMutate: async ({ projectId }) => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })

      const previousLikeState = queryClient.getQueryData<Project>([
        QUERY_KEY_GET_PROJECT_DETAIL,
        projectId,
      ])

      if (previousLikeState) {
        const updatedLikeState = {
          ...previousLikeState,
          likeId: 99999,
          likeCount: previousLikeState.likeCount + 1,
        }
        queryClient.setQueryData(
          [QUERY_KEY_GET_PROJECT_DETAIL, projectId],
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
    // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
    onSettled: (_, __, projectId) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL, projectId],
      })
    },
  })

  return { postLikeMutation }
}
