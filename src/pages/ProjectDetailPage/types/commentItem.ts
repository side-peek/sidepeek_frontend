import { UseFormRegisterReturn } from "react-hook-form"
import { UseFormHandleSubmit } from "react-hook-form"

import { Comment } from "api-models"

import { EditCommentFormValues } from "@pages/ProjectDetailPage/types/EditCommentFormValues"

export interface CommentsItemProps {
  comment: Comment
  handleOnEdit: ({
    commentId,
    isAnonymous,
    content,
  }: EditCommentFormValues) => void
  handleOffEdit: () => void
  handleOnReply: (commentId: number) => void
  handleOffReply: () => void
  handleDelete: (commentId: number) => void
  handleSubmit: UseFormHandleSubmit<EditCommentFormValues>
  onSubmitEdit: (comment: EditCommentFormValues) => void
  editTargetCommentId: number
  replyTargetCommentId: number
  isReply: boolean
  isEditing: boolean
  handleNavigateProfile: (commentUserId: number) => void
  register: UseFormRegisterReturn
}
