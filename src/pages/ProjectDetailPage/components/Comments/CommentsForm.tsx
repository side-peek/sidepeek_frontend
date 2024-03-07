import { SubmitHandler, useForm } from "react-hook-form"
import ResizeTextarea from "react-textarea-autosize"

import { Button, Flex, FormControl, Textarea } from "@chakra-ui/react"

import { usePostCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/usePostCommentMutation"

import { CommentFormValues } from "../../types/commentFormValues"
import { ProjectIdProps, withProjectId } from "./Hoc/withProjectId"

interface CommentsFormProps extends ProjectIdProps {}

// eslint-disable-next-line react-refresh/only-export-components
const CommentsForm = ({ projectId }: CommentsFormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormValues>()

  const { sendCommentMutation } = usePostCommentMutation(Number(projectId))

  // TODO: 빈 값일때 처리(Toast로 구현)
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        w="100%"
        height="8rem">
        <FormControl
          isInvalid={!!errors.content}
          flex="8.5">
          <Textarea
            rows={1}
            height="8rem"
            borderColor="grey.400"
            fontSize="xl"
            p="2.5rem"
            as={ResizeTextarea}
            placeholder={"댓글을 입력하세요"}
            isRequired={false}
            resize="none"
            {...register("content")}
          />
        </FormControl>

        <Button
          flex="1.5"
          height="100%"
          p="0"
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
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export default withProjectId(CommentsForm)
