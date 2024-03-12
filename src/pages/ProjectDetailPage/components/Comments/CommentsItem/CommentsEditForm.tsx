import { UseFormRegisterReturn } from "react-hook-form"
import ResizeTextarea from "react-textarea-autosize"

import { Box, HStack, Textarea } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

import OwnerButton from "./components/BeforeEditingButton"

interface CommentsEditFormProps {
  comment: Comment
  register: UseFormRegisterReturn
}

const CommentsEditForm = ({ comment, register }: CommentsEditFormProps) => {
  const { handleSubmit, onSubmitEdit } = useCommentContext()
  if (!handleSubmit) {
    return
  }

  return (
    <Box w="100%">
      <form onSubmit={handleSubmit(onSubmitEdit)}>
        <HStack
          justify="space-between"
          w="100%">
          <HStack
            justify="space-between"
            w="100%">
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
          </HStack>
          <HStack gap="1rem">
            {comment.isOwner && <OwnerButton comment={comment} />}
          </HStack>
        </HStack>
      </form>
    </Box>
  )
}

export default CommentsEditForm
