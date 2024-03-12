import { MdDelete } from "react-icons/md"
import { TiPencil } from "react-icons/ti"

import { IconButton } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

interface BeforeEditingButtonProps {
  comment: Comment
}

const BeforeEditingButton = ({ comment }: BeforeEditingButtonProps) => {
  const { handleOnEdit, handleDelete } = useCommentContext()

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
export default BeforeEditingButton
