import { MdDelete } from "react-icons/md"
import { TiPencil } from "react-icons/ti"

import { IconButton, useDisclosure, useMediaQuery } from "@chakra-ui/react"

import DeleteCheckModal from "@pages/ProjectDetailPage/components/DeleteCheckModal"
import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

interface BeforeEditingButtonProps {
  isAnonymous: boolean
  commentId: number
  content: string
}

const BeforeEditingButton = ({
  isAnonymous,
  commentId,
  content,
}: BeforeEditingButtonProps) => {
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
            commentId: commentId,
            isAnonymous: isAnonymous,
            content: content,
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
          onClick={() => handleDelete(commentId)}
        />
      )}
    </>
  )
}
export default BeforeEditingButton
