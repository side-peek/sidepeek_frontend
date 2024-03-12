import { Stack } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

import CommentsItem from "../CommentsItem/CommentsItem"

interface CommentsListProps {
  comments: Comment[]
}

const CommentsList = ({ comments }: CommentsListProps) => {
  const { register } = useCommentContext()
  if (!register) {
    return
  }

  return (
    <Stack
      w="100%"
      gap="4rem"
      p="2rem">
      {comments.map((comment) => {
        return (
          <CommentsItem
            register={register("content", { required: true })}
            key={comment.id}
            {...{
              comment,
            }}
          />
        )
      })}
    </Stack>
  )
}

export default CommentsList
