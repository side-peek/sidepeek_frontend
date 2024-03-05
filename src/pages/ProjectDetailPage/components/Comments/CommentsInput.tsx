import { SubmitHandler, useForm } from "react-hook-form"
import { useParams } from "react-router-dom"

import { Button, Flex, FormControl, FormErrorMessage } from "@chakra-ui/react"

import CommonInput from "@components/Input/CommonInput"

import usePostCommentMutation from "@pages/ProjectDetailPage/hooks/mutations/usePostCommentMutation"

import { FormValues } from "../../types/formValues"

// TODO: 1. type폴더로 분리하기
//       2. onSubmit request 동적으로 수정

const CommentsInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const { projectId } = useParams()

  const { sendCommentMutation } = usePostCommentMutation(Number(projectId))

  const onSubmit: SubmitHandler<FormValues> = (text) => {
    const req = {
      ownerId: 12,
      isAnonymous: false,
      content: text.content,
    }
    sendCommentMutation.mutate(req)
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
          <FormErrorMessage>
            {errors.content && errors.content.message}
          </FormErrorMessage>
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
