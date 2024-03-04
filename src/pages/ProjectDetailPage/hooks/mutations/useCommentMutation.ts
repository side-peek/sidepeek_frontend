import { postCommentType } from "api-models"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { postComment } from "@/api/comment/postComment"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_POST_COMMENT = "POST_COMMENT_2384902384"

const useCommentMutation = (projectId: number) => {
  const queryClient = useQueryClient()

  const sendComment = useMutation({
    mutationKey: [QUERY_KEY_POST_COMMENT, projectId],
    mutationFn: (data: postCommentType) => postComment({ projectId, ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
    },
  })

  return { sendComment }
}

export default useCommentMutation
