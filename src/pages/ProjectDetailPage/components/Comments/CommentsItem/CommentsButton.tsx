import { Comment } from "api-models"
import { editCommentPayload } from "api-models"

import OwnerButton from "./OwnerButton"

interface CommentsButtonProps {
  comment: Comment
  isEditing: boolean
  handleOnEdit: ({
    commentId,
    isAnonymous,
    content,
  }: editCommentPayload) => void
  handleOffEdit: () => void
  handleDelete: (id: number) => void
  editTargetCommentId: number
}
const CommentsButton = ({
  comment,
  isEditing,
  handleOnEdit,
  handleOffEdit,
  handleDelete,
  editTargetCommentId,
}: CommentsButtonProps) => {
  return (
    comment.isOwner && (
      <OwnerButton
        handleOnEdit={handleOnEdit}
        comment={comment}
        handleDelete={handleDelete}
        editTargetCommentId={editTargetCommentId}
        isEditing={isEditing}
        handleOffEdit={handleOffEdit}
      />
    )
  )
}

export default CommentsButton
