import { useEffect } from "react"
import ResizeTextarea from "react-textarea-autosize"

import { Box, HStack, Textarea } from "@chakra-ui/react"

import { TEXTAREA_STYLE } from "@pages/ProjectDetailPage/constants/textAreaStyle"
import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

const CommentsEditForm = () => {
  const { handleSubmit, onSubmitEdit, focusOnField, register } =
    useCommentContext()

  useEffect(() => {
    focusOnField()
  }, [focusOnField])

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
            p="0.5rem"
            as={ResizeTextarea}
            {...TEXTAREA_STYLE}
            {...register("content", { required: true })}
          />
        </HStack>
      </form>
    </Box>
  )
}

export default CommentsEditForm
