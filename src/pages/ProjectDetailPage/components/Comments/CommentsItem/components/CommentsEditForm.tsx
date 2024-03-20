import { useEffect } from "react"
import { UseFormRegisterReturn } from "react-hook-form"
import ResizeTextarea from "react-textarea-autosize"

import { Box, HStack, Textarea } from "@chakra-ui/react"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

interface CommentsEditFormProps {
  register: UseFormRegisterReturn
}

const CommentsEditForm = ({ register }: CommentsEditFormProps) => {
  const { handleSubmit, onSubmitEdit, focusOnFiled } = useCommentContext()

  useEffect(() => {
    focusOnFiled()
  }, [focusOnFiled])

  if (!handleSubmit) {
    return
  }

  return (
    <Box w="100%">
      <form onSubmit={handleSubmit(onSubmitEdit)}>
        <HStack
          justify="space-between"
          w="100%">
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
        </HStack>
      </form>
    </Box>
  )
}

export default CommentsEditForm
