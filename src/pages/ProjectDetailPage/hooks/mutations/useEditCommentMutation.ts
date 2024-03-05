import { editCommentPayload } from "api-models"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { editComment } from "@/api/comment/editComment"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_EDIT_COMMENT = "EDIT_COMMENT_234893204832"

const useEditCommentMutation = (projectId: number, id: number) => {
  const queryClient = useQueryClient()

  const editCommentMutation = useMutation({
    mutationKey: [QUERY_KEY_EDIT_COMMENT, projectId, id],
    mutationFn: (data: editCommentPayload) =>
      editComment({ projectId, id, ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
    },
  })

  return { editCommentMutation }
}

export default useEditCommentMutation
