import { SubmitHandler, useForm } from "react-hook-form"
import { useParams } from "react-router-dom"

import { Button, Flex, FormControl } from "@chakra-ui/react"

import CommonInput from "@components/Input/CommonInput"

import usePostCommentMutation from "@pages/ProjectDetailPage/hooks/mutations/usePostCommentMutation"

import { FormValues } from "../../types/formValues"

const CommentsInput = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const { projectId } = useParams()

  const { sendCommentMutation } = usePostCommentMutation(Number(projectId))

  // TODO: 빈 값일때 처리(Toast로 구현)
  const onSubmit: SubmitHandler<FormValues> = (text) => {
    const req = {
      ownerId: 12,
      isAnonymous: false,
      content: text.content,
    }
    sendCommentMutation.mutate(req)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        w="100%"
        height="8rem">
        <FormControl isInvalid={!!errors.content}>
          <CommonInput
            inputWidth="100%"
            border="none"
            height="8rem"
            borderBottom="1px"
            borderColor="grey.400"
            fontSize="2rem"
            px="3rem"
            placeholder={"댓글을 입력하세요"}
            isRequired={false}
            register={{
              ...register("content"),
            }}
          />
        </FormControl>

        <Button
          w="20%"
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
export default CommentsInput
