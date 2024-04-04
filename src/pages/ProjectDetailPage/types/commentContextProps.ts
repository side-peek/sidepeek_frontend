import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form"

import { editCommentPayload } from "api-models"

export interface CommentContextProps {
  isEditing: boolean
  isReply: boolean
  replyTargetCommentId: number
  editTargetCommentId: number
  handleOnReply: (commentId: number) => void
  handleOffReply: () => void
  handleOnEdit: ({
    commentId,
    isAnonymous,
    content,
  }: editCommentPayload) => void
  handleOffEdit: () => void
  handleDelete: (commentId: number) => void
  onSubmitEdit: SubmitHandler<editCommentPayload>
  register?: UseFormRegister<editCommentPayload>
  handleSubmit?: UseFormHandleSubmit<editCommentPayload>
  focusOnField: () => void
}
