import { useMutation, useQueryClient } from "@tanstack/react-query"

import { deleteComment } from "@apis/comment/deleteComment"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_DELETE_COMMENT = "DELETE_COMMENT_234893204832"

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient()

  const deleteCommentMutation = useMutation({
    mutationKey: [QUERY_KEY_DELETE_COMMENT],
    mutationFn: (commentId: number) => deleteComment({ commentId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
    },
  })

  return { deleteCommentMutation }
}
