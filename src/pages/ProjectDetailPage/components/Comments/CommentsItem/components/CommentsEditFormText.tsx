import { UseFormRegisterReturn } from "react-hook-form"
import ResizeTextarea from "react-textarea-autosize"

import { Box, HStack, Text, Textarea } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

import BeforeEditingButton from "./BeforeEditingButton"
import OnEditingButton from "./OnEditingButton"

interface CommentsEditFormTextProps {
  comment: Comment
  register: UseFormRegisterReturn
}

const CommentsEditFormText = ({
  comment,
  register,
}: CommentsEditFormTextProps) => {
  const { handleSubmit, onSubmitEdit, editTargetCommentId, isEditing } =
    useCommentContext()
  if (!handleSubmit) {
    return
  }

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
            {comment.isOwner ? (
              editTargetCommentId === comment.id && isEditing ? (
                <OnEditingButton />
              ) : (
                <BeforeEditingButton comment={comment} />
              )
            ) : null}
          </HStack>
        </HStack>
      </form>
    </Box>
  )
}

export default CommentsEditFormText
