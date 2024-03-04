import { useMutation, useQueryClient } from "@tanstack/react-query"

import { deleteCommentAPI } from "@/api/comment/deleteCommentAPI"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_DELETE_COMMENT = "DELETE_COMMENT_234893204832"

const useDeleteCommentMutation = (projectId: number) => {
  const queryClient = useQueryClient()

  const deleteComment = useMutation({
    mutationKey: [QUERY_KEY_DELETE_COMMENT, projectId],
    mutationFn: (id: number) => deleteCommentAPI({ projectId, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
    },
  })

  return { deleteComment }
}

export default useDeleteCommentMutation
