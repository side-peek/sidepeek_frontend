import { useCallback, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import ResizeTextarea from "react-textarea-autosize"

import { Box, Button, Checkbox, Flex, HStack, Textarea } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import { useUserInfoData } from "@services/caches/useUserInfoData"

import { scrollBarNone } from "@pages/ProjectDetailPage/constants/scrollBarNone"
import { usePostCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/usePostCommentMutation"
import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

import { CommentFormValues } from "../../../types/commentFormValues"
import { ProjectIdProps, withProjectId } from "../../Hoc/withProjectId"

interface CommentsFormProps extends ProjectIdProps {
  parentId?: number | null
  isReplyComment?: boolean
}

const CommentsForm = ({
  parentId,
  projectId,
  isReplyComment,
}: CommentsFormProps) => {
  const { register, reset, handleSubmit } = useForm<CommentFormValues>()

  const { sendCommentMutation } = usePostCommentMutation()
  const { handleOffReply, handleOffEdit } = useCommentContext()
  const [isAnonymous, setIsAnonymous] = useState(false)

  const user = useUserInfoData()

  const onSubmit: SubmitHandler<CommentFormValues> = useCallback(
    (text) => {
      if (!user || !user.id) {
        return
      }

      const commentRequestValue = {
        ownerId: user.id,
        projectId: Number(projectId),
        isAnonymous: isAnonymous,
        parentId: parentId ? parentId : null,
        content: text.content,
      }
      sendCommentMutation(commentRequestValue)
      handleOffReply()
      handleOffEdit()
      reset()
    },
    [
      parentId,
      projectId,
      reset,
      user,
      sendCommentMutation,
      isAnonymous,
      handleOffReply,
      handleOffEdit,
    ],
  )

  const handleAnonymous = () => {
    setIsAnonymous(!isAnonymous)
  }

  return (
    <Box w="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex w="100%">
          <Flex
            w="100%"
            position="relative">
            <HStack
              w="100%"
              border="1px solid #ECECEC"
              borderTopLeftRadius="0.9rem"
              borderBottomRadius={isReplyComment ? "0.9rem" : 0}>
              <Textarea
                w="95%"
                sx={scrollBarNone()}
                mr="2rem"
                size="xs"
                rows={1}
                minH="1rem"
                maxH="10rem"
                fontSize="lg"
                p={isReplyComment ? "1rem " : "2rem"}
                pr="4rem"
                as={ResizeTextarea}
                placeholder={isReplyComment ? "" : "댓글을 입력하세요"}
                isRequired={false}
                resize="none"
                border="none"
                _hover={{ boxShadow: "none", borderColor: "grey.400" }}
                _focus={{ boxShadow: "none", borderColor: "grey.400" }}
                {...register("content", { required: true })}
              />
              <Stack
                position="absolute"
                right="1rem"
                top="30%"
                direction="row">
                <Checkbox
                  isChecked={isAnonymous}
                  size="lg"
                  onChange={handleAnonymous}
                  color={isAnonymous ? "red.200" : "grey.500"}
                  minWidth="5rem"
                  colorScheme="red">
                  익명
                </Checkbox>
              </Stack>
            </HStack>
          </Flex>

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
      </form>
    </Box>
  )
}
export default withProjectId(CommentsForm)
