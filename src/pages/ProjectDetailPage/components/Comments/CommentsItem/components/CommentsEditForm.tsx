import { useEffect } from "react"
import ResizeTextarea from "react-textarea-autosize"

import { Box, HStack, Textarea } from "@chakra-ui/react"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

const CommentsEditForm = () => {
  const { handleSubmit, onSubmitEdit, focusOnFiled, register } =
    useCommentContext()

  useEffect(() => {
    console.log("gg")
    focusOnFiled()
  }, [focusOnFiled])

  if (!handleSubmit || !register) {
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
            {...register("content", { required: true })}
          />
        </HStack>
      </form>
    </Box>
  )
}

export default CommentsEditForm
