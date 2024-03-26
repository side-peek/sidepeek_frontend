import { Box } from "@chakra-ui/react"
import { Comment } from "api-models"

import CommentsItem from "../CommentsItem"

interface ReplyCommentProps {
  comment: Comment[]
}

const ReplyComment = ({ comment }: ReplyCommentProps) => {
  return comment.map((reply) => (
    <Box
      pl="3rem"
      key={reply.id}>
      <CommentsItem comment={reply} />
    </Box>
  ))
}

export default ReplyComment
