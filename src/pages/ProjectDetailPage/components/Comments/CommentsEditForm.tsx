// TODO: 1. 빈 값일때 처리(Toast로 구현)
//       2. 일정 높이 이상일때 높이가 늘어나지 않고 스크롤바
import { SubmitHandler } from "react-hook-form"
import { UseFormHandleSubmit } from "react-hook-form"
import ResizeTextarea from "react-textarea-autosize"

import { Box, Button, Flex, FormControl, Textarea } from "@chakra-ui/react"

import { usePostCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/usePostCommentMutation"
import { EditCommentFormValues } from "@pages/ProjectDetailPage/types/EditCommentFormValues"

import { CommentFormValues } from "../../types/commentFormValues"
import { ProjectIdProps, withProjectId } from "./Hoc/withProjectId"

interface CommentsEditFormProps extends ProjectIdProps {
  register: UseFormRegisterReturn
  handleSubmit: UseFormHandleSubmit<EditCommentFormValues>
}

const CommentsEditForm = ({
  projectId,
  register,

  handleSubmit,
}: CommentsEditFormProps) => {
  const { sendCommentMutation } = usePostCommentMutation()

  const onSubmit: SubmitHandler<CommentFormValues> = (text) => {
    // TODO: 1. projectId는 url에서
    const commentRequestValue = {
      ownerId: 12,
      projectId: Number(projectId),
      isAnonymous: false,
      parentId: null,
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
            취소
          </Button>

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
export default withProjectId(CommentsEditForm)
