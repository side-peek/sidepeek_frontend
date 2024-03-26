import { Center, Stack } from "@chakra-ui/react"
import { Comment } from "api-models"

import EmptyMessage from "../../EmptyMessage/EmptyMessage"
import CommentsItem from "../CommentsItem/CommentsItem"

interface CommentsListProps {
  comments: Comment[]
}

const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <Stack
      w="100%"
      gap="4rem"
      p="2rem">
      {comments.length > 0 ? (
        comments.map((comment) => {
          return (
            <CommentsItem
              key={comment.id}
              comment={comment}
            />
          )
        })
      ) : (
        <Center>
          <EmptyMessage type="COMMENTS" />
        </Center>
      )}
    </Stack>
  )
}

export default CommentsList
