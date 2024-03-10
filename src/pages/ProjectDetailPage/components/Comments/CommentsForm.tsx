// TODO: 1. 빈 값일때 처리(Toast로 구현)
//       2. 일정 높이 이상일때 높이가 늘어나지 않고 스크롤바
//       3. ownerId는 userInfo에서
//       3. 대댓글일때 parentId를 동적으로 받아야 하는 문제 해결
//       4. isAnonymous 처리
import { SubmitHandler, useForm } from "react-hook-form"
import ResizeTextarea from "react-textarea-autosize"

import { Box, Button, Flex, FormControl, Textarea } from "@chakra-ui/react"
import { useUserInfoData } from "@services/caches/useUserInfoData"

import { usePostCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/usePostCommentMutation"

import { CommentFormValues } from "../../types/commentFormValues"
import { ProjectIdProps, withProjectId } from "./Hoc/withProjectId"

interface CommentsFormProps extends ProjectIdProps {
  parentId?: number | null
}

const CommentsForm = ({ parentId, projectId }: CommentsFormProps) => {
  const { register, reset, handleSubmit } = useForm<CommentFormValues>()
  const user = useUserInfoData()

  const { sendCommentMutation } = usePostCommentMutation()

  const onSubmit: SubmitHandler<CommentFormValues> = (text) => {
    if (user) {
      const commentRequestValue = {
        ownerId: user.id,
        projectId: Number(projectId),
        isAnonymous: false,
        parentId: parentId ? parentId : null,
        content: text.content,
      }
      sendCommentMutation.mutate(commentRequestValue)
      reset()
    }
  }

  return (
    <Box w="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex w="100%">
          <FormControl>
            <Textarea
              size="xs"
              _focus={{ boxShadow: "none", borderColor: "grey.400" }}
              rows={1}
              overflow="hidden"
              minH="unset"
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
