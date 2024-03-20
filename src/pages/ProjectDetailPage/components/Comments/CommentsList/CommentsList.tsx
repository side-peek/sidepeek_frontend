import { Center, Stack, Text } from "@chakra-ui/react"
import { Comment } from "api-models"

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
              {...{
                comment,
              }}
            />
          )
        })
      ) : (
        <Center>
          <Text
            fontSize="2xl"
            color="grey.500">
            댓글을 남겨보세요
          </Text>
        </Center>
      )}
    </Stack>
  )
}

export default CommentsList
