// TODO: 익명 처리
import { SubmitHandler, useForm } from "react-hook-form"
import ResizeTextarea from "react-textarea-autosize"

import { Box, Button, Flex, FormControl, Textarea } from "@chakra-ui/react"
import { useUserInfoData } from "@services/caches/useUserInfoData"

import { usePostCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/usePostCommentMutation"

import { CommentFormValues } from "../../../types/commentFormValues"
import { ProjectIdProps, withProjectId } from "../Hoc/withProjectId"

interface CommentsFormProps extends ProjectIdProps {
  parentId?: number | null
}

const CommentsForm = ({ parentId, projectId }: CommentsFormProps) => {
  const { register, reset, handleSubmit } = useForm<CommentFormValues>()
  const user = useUserInfoData()
  const { sendCommentMutation } = usePostCommentMutation()

  const onSubmit: SubmitHandler<CommentFormValues> = (text) => {
    console.log(user)
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
        <FormControl>
          <Flex w="100%">
            <Textarea
              size="xs"
              rows={1}
              minH="2rem"
              maxH="15rem"
              borderTopLeftRadius="0.9rem"
              fontSize="xl"
              p="2.5rem"
              as={ResizeTextarea}
              placeholder={"댓글을 입력하세요"}
              isRequired={false}
              resize="none"
              _hover={{ boxShadow: "none", borderColor: "grey.400" }}
              _focus={{ boxShadow: "none", borderColor: "grey.400" }}
              {...register("content", { required: true })}
            />

            <Button
              p="0"
              h="revert"
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
        </FormControl>
      </form>
    </Box>
  )
}
export default withProjectId(CommentsForm)
