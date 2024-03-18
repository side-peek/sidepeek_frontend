import { editCommentPayload } from "api-models"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { editComment } from "@apis/comment/editComment"

import { QUERY_KEY_GET_PROJECT_DETAIL } from "../queries/useProjectDetailQuery"

const QUERY_KEY_EDIT_COMMENT = "EDIT_COMMENT_234893204832"

export const useEditCommentMutation = () => {
  const queryClient = useQueryClient()

  const editCommentMutation = useMutation({
    mutationKey: [QUERY_KEY_EDIT_COMMENT],
    mutationFn: (data: editCommentPayload) => editComment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
      })
    },
  })

  return { editCommentMutation }
}
