import { TiPencil } from "react-icons/ti"
import { VscChromeClose } from "react-icons/vsc"
import { useParams } from "react-router-dom"

import { Button, IconButton } from "@chakra-ui/react"

import { useDeleteCommentMutation } from "../../hooks/mutations/useDeleteCommentMutation"

interface CommentsButtonProps {
  isOwner: boolean
  id: number
  isEditing: boolean
  handleCancelEdit: () => void
  handleStartEdit: () => void
}
const CommentsButton = ({
  isOwner,
  id,
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
    isOwner && (
      <>
        <IconButton
          aria-label="edit"
          icon={<TiPencil />}
          onClick={handleStartEdit}
          fontSize="2xl"
        />
        <IconButton
          aria-label="delete"
          icon={<VscChromeClose />}
          onClick={() => handleDelete(id)}
          fontSize="2xl"
        />
      </>
    )
  )
}

export default CommentsButton
