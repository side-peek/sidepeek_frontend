import { MdDelete } from "react-icons/md"
import { TiPencil } from "react-icons/ti"

import { IconButton, useMediaQuery } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

interface BeforeEditingButtonProps {
  comment: Comment
}

const BeforeEditingButton = ({ comment }: BeforeEditingButtonProps) => {
  const { handleOnEdit, handleDelete } = useCommentContext()
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])

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
        onClick={() => handleDelete(comment.id)}
        fontSize={isLargerThan768 ? "2xl" : "lg"}
      />
    </>
  )
}
export default BeforeEditingButton
