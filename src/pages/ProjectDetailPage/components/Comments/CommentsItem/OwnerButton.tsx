import { MdDelete } from "react-icons/md"
import { TiPencil } from "react-icons/ti"

import { IconButton } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useComment } from "@pages/ProjectDetailPage/hooks/useComment"

import EditingButton from "./EditingButton"

interface OwnerButtonProps {
  comment: Comment
}

const OwnerButton = ({ comment }: OwnerButtonProps) => {
  const {
    handleOffEdit,
    editTargetCommentId,
    isEditing,
    handleOnEdit,
    handleDelete,
  } = useComment()

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
