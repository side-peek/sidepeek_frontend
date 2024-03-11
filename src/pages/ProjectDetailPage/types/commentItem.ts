import { UseFormRegisterReturn } from "react-hook-form"
import { UseFormHandleSubmit } from "react-hook-form"

import { Comment } from "api-models"
import { editCommentPayload } from "api-models"

export interface CommentsItemProps {
  comment: Comment
  handleOnEdit: ({
    commentId,
    isAnonymous,
    content,
  }: editCommentPayload) => void
  handleOffEdit: () => void
  handleOnReply: (commentId: number) => void
  handleOffReply: () => void
  handleDelete: (commentId: number) => void
  handleSubmit: UseFormHandleSubmit<editCommentPayload>
  onSubmitEdit: (comment: editCommentPayload) => void
  editTargetCommentId: number
  replyTargetCommentId: number
  isReply: boolean
  isEditing: boolean
  handleNavigateProfile: (commentUserId: number) => void
  register: UseFormRegisterReturn
}
