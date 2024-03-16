import { postCommentPayload } from "api-models"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { postComment } from "@apis/comment/postComment"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_POST_COMMENT = "POST_COMMENT_2384902384"

export const usePostCommentMutation = () => {
  const queryClient = useQueryClient()

  const sendCommentMutation = useMutation({
    mutationKey: [QUERY_KEY_POST_COMMENT],
    mutationFn: (data: postCommentPayload) => postComment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
    },
  })

  return { sendCommentMutation }
}
