import { TiPencil } from "react-icons/ti"
import { VscChromeClose } from "react-icons/vsc"
import { useParams } from "react-router-dom"

import { Button } from "@chakra-ui/react"
import { Comment } from "api-models"

import useDeleteCommentMutation from "../../hooks/mutations/useDeleteCommentMutation"
import CommentsIcon from "./CommentsIcon"

interface CommentsButtonProps {
  comment: Comment
  isEditing: boolean
  handleCancelEdit: () => void
  handleStartEdit: () => void
}
const CommentsButton = ({
  comment,
  isEditing,
  handleCancelEdit,
  handleStartEdit,
}: CommentsButtonProps) => {
  const { projectId } = useParams()

  const { deleteCommentMutation } = useDeleteCommentMutation(Number(projectId))

  const handleDelete = (id: number) => {
    deleteCommentMutation.mutate(id)
  }
  return isEditing ? (
    <>
      <Button
        type="submit"
        background="none"
        p="0"
        fontSize="lg"
        _hover={{ border: "none", opacity: "0.5" }}>
        확인
      </Button>
      <Button
        type="button"
        background="none"
        p="0"
        fontSize="lg"
        _hover={{ border: "none", opacity: "0.5" }}
        onClick={handleCancelEdit}>
        취소
      </Button>
    </>
  ) : (
    comment.isOwner && (
      <>
        <CommentsIcon
          aria-label="edit"
          icon={<TiPencil />}
          onClick={handleStartEdit}
        />
        <CommentsIcon
          aria-label="delete"
          icon={<VscChromeClose />}
          onClick={() => handleDelete(Number(comment.id))}
        />
      </>
    )
  )
}

export default CommentsButton
