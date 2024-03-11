import { Box, Flex } from "@chakra-ui/react"
import { Comment } from "api-models"

import { CommentsItemProps } from "../../../types/commentItem"
import CommentsItem from "./CommentsItem"

interface ReplyCommentProps extends Omit<CommentsItemProps, "comment"> {
  comment: Comment[]
}

const ReplyComment = ({
  comment,
  handleOnEdit,
  handleOffEdit,
  handleOnReply,
  handleOffReply,
  editTargetCommentId,
  replyTargetCommentId,
  isReply,
  isEditing,
  handleNavigateProfile,
  handleDelete,
  handleSubmit,
  onSubmitEdit,
  register,
}: ReplyCommentProps) => {
  return comment.map((reply) => (
    <Flex
      pl="3rem"
      gap="2rem"
      w="100%"
      key={reply.id}>
      <Box w="100%">
        <CommentsItem
          comment={reply}
          {...{
            handleOnEdit,
            handleOffEdit,
            handleOnReply,
            handleOffReply,
            editTargetCommentId,
            replyTargetCommentId,
            isReply,
            isEditing,
            handleDelete,
            handleSubmit,
            onSubmitEdit,
            register,
            handleNavigateProfile,
          }}
        />
      </Box>
    </Flex>
  ))
}

export default ReplyComment
