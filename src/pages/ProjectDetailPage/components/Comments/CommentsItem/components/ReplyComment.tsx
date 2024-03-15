import { UseFormRegisterReturn } from "react-hook-form"

import { Box, Flex } from "@chakra-ui/react"
import { Comment } from "api-models"

import CommentsItem from "../CommentsItem"

interface ReplyCommentProps {
  comment: Comment[]
  register: UseFormRegisterReturn
}

const ReplyComment = ({ comment, register }: ReplyCommentProps) => {
  return comment.map((reply) => {
    return (
      <Flex
        pl="1.3rem"
        gap="2rem"
        w="100%"
        key={reply.id}>
        <Box w="100%">
          <CommentsItem
            comment={reply}
            {...{
              register,
            }}
          />
        </Box>
      </Flex>
    )
  })
}

export default ReplyComment
