import { postCommentPayload } from "api-models"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { postComment } from "@/api/comment/postComment"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_POST_COMMENT = "POST_COMMENT_2384902384"

export const usePostCommentMutation = (projectId: number) => {
  const queryClient = useQueryClient()

  const sendCommentMutation = useMutation({
    mutationKey: [QUERY_KEY_POST_COMMENT, projectId],
    mutationFn: (data: postCommentPayload) =>
      postComment({ projectId, ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
    },
  })

  return { sendCommentMutation }
}
