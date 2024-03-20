import { useEffect } from "react"
import { UseFormRegisterReturn } from "react-hook-form"
import ResizeTextarea from "react-textarea-autosize"

import { Box, HStack, Text, Textarea } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

interface CommentsEditFormTextProps {
  comment: Comment
  register: UseFormRegisterReturn
}

const CommentsEditFormText = ({
  comment,
  register,
}: CommentsEditFormTextProps) => {
  const {
    handleSubmit,
    onSubmitEdit,
    editTargetCommentId,
    isEditing,
    focusOnFiled,
  } = useCommentContext()

  useEffect(() => {
    focusOnFiled()
  }, [focusOnFiled])

  if (!handleSubmit) {
    return
  }
  console.log(comment)

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
              p="0.5rem"
              as={ResizeTextarea}
              isRequired={false}
              resize="none"
              maxH="10rem"
              {...register}
            />
          ) : (
            <Text
              whiteSpace="pre-line"
              fontSize="lg"
              p="0.5rem">
              {comment.content}
            </Text>
          )}
        </HStack>
      </form>
    </Box>
  )
}

export default CommentsEditFormText
