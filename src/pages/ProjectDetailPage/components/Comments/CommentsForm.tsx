import { SubmitHandler, useForm } from "react-hook-form"
import ResizeTextarea from "react-textarea-autosize"

import { Box, Button, Flex, FormControl, Textarea } from "@chakra-ui/react"

import { usePostCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/usePostCommentMutation"

import { CommentFormValues } from "../../types/commentFormValues"
import { ProjectIdProps, withProjectId } from "./Hoc/withProjectId"

interface CommentsFormProps extends ProjectIdProps {}

const CommentsForm = ({ projectId }: CommentsFormProps) => {
  const { register, reset, handleSubmit } = useForm<CommentFormValues>()

  const { sendCommentMutation } = usePostCommentMutation(Number(projectId))

  // TODO: 1. 빈 값일때 처리(Toast로 구현)
  //       2. 일정 높이 이상일때 높이가 늘어나지 않고 스크롤바

  const onSubmit: SubmitHandler<CommentFormValues> = (text) => {
    const commentRequestValue = {
      ownerId: 12,
      isAnonymous: false,
      content: text.content,
    }
    sendCommentMutation.mutate(commentRequestValue)
    reset()
  }

  return (
    <Box w="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex w="100%">
          <FormControl>
            <Textarea
              overflow="hidden"
              _focus={{ boxShadow: "none", borderColor: "grey.400" }}
              rows={1}
              height="100%"
              borderColor="grey.400"
              fontSize="xl"
              p="2.5rem"
              as={ResizeTextarea}
              placeholder={"댓글을 입력하세요"}
              isRequired={false}
              resize="none"
              {...register("content", { required: true })}
            />
          </FormControl>

          <Button
            height="revert"
            p="0"
            w="5rem"
            bgColor="blue.100"
            borderRadius="0"
            borderTopRightRadius="1rem"
            color="white"
            fontSize="xl"
            _hover={{ opacity: "0.5" }}
            type="submit">
            입력
          </Button>
        </Flex>
      </form>
    </Box>
  )
}
export default withProjectId(CommentsForm)
