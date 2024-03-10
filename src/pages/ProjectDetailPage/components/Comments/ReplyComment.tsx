import { UseFormRegisterReturn } from "react-hook-form"
import { UseFormHandleSubmit } from "react-hook-form"

import { Box, Flex } from "@chakra-ui/react"
import { Comment } from "api-models"

import { EditCommentFormValues } from "@pages/ProjectDetailPage/types/EditCommentFormValues"

import CommentsItem from "./CommentsItem"
import { handleOnEditProps } from "./CommentsList"

interface ReplyCommentProps {
  comment: Comment[]
  handleOnEdit: ({ commentId, isAnonymous, content }: handleOnEditProps) => void
  handleOffEdit: () => void
  handleOnReply: (commentId: number) => void
  handleOffReply: () => void
  handleDelete: (commentId: number) => void
  handleSubmit: UseFormHandleSubmit<EditCommentFormValues>
  onSubmitEdit: (comment: EditCommentFormValues) => void
  editTargetCommentId: number
  replyTargetCommentId: number
  isReply: boolean
  isEditing: boolean
  handleNavigateProfile: (commentUserId: number) => void
  register: UseFormRegisterReturn
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
      pl="5rem"
      gap="2rem"
      w="100%"
      key={reply.id}>
      <Box w="100%">
        <CommentsItem
          comment={reply}
          handleOnEdit={handleOnEdit}
          handleOffEdit={handleOffEdit}
          handleOnReply={handleOnReply}
          handleOffReply={handleOffReply}
          editTargetCommentId={editTargetCommentId}
          replyTargetCommentId={replyTargetCommentId}
          isReply={isReply}
          isEditing={isEditing}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          onSubmitEdit={onSubmitEdit}
          register={register}
          handleNavigateProfile={handleNavigateProfile}
        />
      </Box>
    </Flex>
  ))
}

export default ReplyComment
