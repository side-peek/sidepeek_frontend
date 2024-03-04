import { editCommentPayload } from "api-models"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { editCommentAPI } from "@/api/comment/editCommentAPI"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_EDIT_COMMENT = "EDIT_COMMENT_234893204832"

const useEditCommentMutation = (projectId: number, id: number) => {
  const queryClient = useQueryClient()

  const editComment = useMutation({
    mutationKey: [QUERY_KEY_EDIT_COMMENT, projectId, id],
    mutationFn: (data: editCommentPayload) =>
      editCommentAPI({ projectId, id, ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
    },
  })

  return { editComment }
}

export default useEditCommentMutation
