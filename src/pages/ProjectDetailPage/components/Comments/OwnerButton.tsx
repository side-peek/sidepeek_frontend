import { MdDelete } from "react-icons/md"
import { TiPencil } from "react-icons/ti"

import { IconButton } from "@chakra-ui/react"
import { Comment } from "api-models"

import { EditCommentFormValues } from "@pages/ProjectDetailPage/types/EditCommentFormValues"

import EditingButton from "./EditingButton"

interface OwnerButtonProps {
  handleOnEdit: ({
    commentId,
    isAnonymous,
    content,
  }: EditCommentFormValues) => void
  handleDelete: (id: number) => void
  handleOffEdit: () => void
  editTargetCommentId: number
  isEditing: boolean
  comment: Comment
}
const OwnerButton = ({
  handleOnEdit,
  handleDelete,
  handleOffEdit,
  comment,
  isEditing,
  editTargetCommentId,
}: OwnerButtonProps) => {
  return editTargetCommentId === comment.id && isEditing ? (
    <EditingButton handleOffEdit={handleOffEdit} />
  ) : (
    <>
      <IconButton
        aria-label="edit"
        icon={<TiPencil />}
        onClick={() => {
          handleOnEdit({
            commentId: comment.id,
            isAnonymous: comment.isAnonymous,
            content: comment.content,
          })
        }}
        fontSize="2xl"
      />
      <IconButton
        aria-label="delete"
        icon={<MdDelete />}
        onClick={() => handleDelete(comment.id)}
        fontSize="2xl"
      />
    </>
  )
}
export default OwnerButton
