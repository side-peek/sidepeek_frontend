import { MdDelete } from "react-icons/md"
import { TiPencil } from "react-icons/ti"

import { IconButton, useDisclosure, useMediaQuery } from "@chakra-ui/react"
import { Comment } from "api-models"

import DeleteCheckModal from "@pages/ProjectDetailPage/components/DeleteCheckModal"
import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

interface BeforeEditingButtonProps {
  comment: Comment
}

const BeforeEditingButton = ({ comment }: BeforeEditingButtonProps) => {
  const { handleOnEdit, handleDelete } = useCommentContext()
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
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
        fontSize={isLargerThan768 ? "2xl" : "lg"}
      />
      <IconButton
        aria-label="delete"
        icon={<MdDelete />}
        onClick={onOpen}
        fontSize={isLargerThan768 ? "2xl" : "lg"}
      />
      {isOpen && (
        <DeleteCheckModal
          isOpen={isOpen}
          onClose={onClose}
          onClick={() => handleDelete(comment.id)}
        />
      )}
    </>
  )
}
export default BeforeEditingButton
