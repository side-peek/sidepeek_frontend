import ResizeTextarea from "react-textarea-autosize"

import { Box, HStack, Text, Textarea } from "@chakra-ui/react"

import { CommentsItemProps } from "@pages/ProjectDetailPage/types/commentItem"

import CommentsButton from "./CommentsButton"

interface CommentsEditFormTextProps
  extends Omit<
    CommentsItemProps,
    | "handleOnReply"
    | "handleOffReply"
    | "replyTargetCommentId"
    | "handleNavigateProfile"
    | "isReply"
  > {}

const CommentsEditFormText = ({
  comment,
  handleOnEdit,
  handleOffEdit,
  handleDelete,
  handleSubmit,
  onSubmitEdit,
  editTargetCommentId,
  isEditing,
  register,
}: CommentsEditFormTextProps) => {
  return (
    <Box w="100%">
      <form onSubmit={handleSubmit(onSubmitEdit)}>
        <HStack
          justify="space-between"
          w="100%">
          {editTargetCommentId === comment.id && isEditing ? (
            <Textarea
              rows={1}
              w="100%"
              fontSize="lg"
              p="0.2rem"
              as={ResizeTextarea}
              isRequired={false}
              resize="none"
              {...register}
            />
          ) : (
            <Text
              fontSize="lg"
              p="0.2rem">
              {comment.content}
            </Text>
          )}
          <HStack gap="1rem">
            <CommentsButton
              {...{
                editTargetCommentId,
                comment,
                isEditing,
                handleDelete,
                handleOnEdit,
                handleOffEdit,
              }}
            />
          </HStack>
        </HStack>
      </form>
    </Box>
  )
}

export default CommentsEditFormText
