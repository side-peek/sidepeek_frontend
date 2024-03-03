import { SubmitHandler, useForm } from "react-hook-form"

import { Button, Flex, FormControl, FormErrorMessage } from "@chakra-ui/react"

import CommonInput from "@components/Input/CommonInput"

interface CommentType {
  ownerId: number
  isAnonymous: boolean
  content: string
}

const ProjectDetailCommentInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentType>({
    defaultValues: {
      content: "",
    },
  })

  const onSubmit: SubmitHandler<CommentType> = (text) => {
    console.log(text)
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
              ...register("content", { required: "댓글을 입력해주세요" }),
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
export default ProjectDetailCommentInput
