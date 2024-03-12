import { Box, Flex } from "@chakra-ui/react"
import { Comment } from "api-models"

import CommentsItem from "./CommentsItem"

interface ReplyCommentProps {
  comment: Comment[]
}

const ReplyComment = ({ comment }: ReplyCommentProps) => {
  return comment.map((reply) => (
    <Flex
      pl="5rem"
      gap="2rem"
      w="100%"
      key={reply.id}>
      <Box w="100%">
        <CommentsItem comment={reply} />
      </Box>
    </Flex>
  ))
}

export default ReplyComment
