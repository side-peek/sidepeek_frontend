import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import ResizeTextarea from "react-textarea-autosize"

import { Box, Button, Checkbox, Flex, HStack, Textarea } from "@chakra-ui/react"
import { useUserInfoData } from "@services/caches/useUserInfoData"

import { scrollBarNone } from "@pages/ProjectDetailPage/constants/scrollBarNone"
import { TEXTAREA_STYLE } from "@pages/ProjectDetailPage/constants/textAreaStyle"
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
  const {
    register,
    reset,
    handleSubmit,
    setFocus,
    formState: { isValid, isSubmitting },
  } = useForm<CommentFormValues>()

  const { sendCommentMutation } = usePostCommentMutation()
  const { handleOffReply, handleOffEdit } = useCommentContext()
  const [isAnonymous, setIsAnonymous] = useState(false)

  const user = useUserInfoData()

  const onSubmit: SubmitHandler<CommentFormValues> = (comment) => {
    if (user && user.id) {
      const commentRequestValue = {
        ownerId: user.id,
        projectId: Number(projectId),
        isAnonymous: isAnonymous,
        parentId: parentId ? parentId : null,
        content: comment.content,
      }
      sendCommentMutation(commentRequestValue)
      handleOffReply()
      handleOffEdit()
      reset()
    }
  }

  const handleAnonymous = () => {
    setIsAnonymous(!isAnonymous)
  }

  useEffect(() => {
    if (isReplyComment) {
      setFocus("content")
    }
  }, [isReplyComment, setFocus])

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
                sx={scrollBarNone}
                p={isReplyComment ? "1rem " : "2rem"}
                placeholder={isReplyComment ? "" : "댓글을 입력하세요"}
                mr="5.5rem"
                as={ResizeTextarea}
                border="none"
                disabled={isSubmitting || !user}
                _focus={{ boxShadow: "none" }}
                {...register("content", {
                  required: true,
                  validate: (value) =>
                    value.trim().length > 0 && value.trim().length < 100,
                })}
                {...TEXTAREA_STYLE}
              />
              <Box
                zIndex="checkbox"
                position="absolute"
                cursor="pointer"
                right="1rem"
                top="28%">
                <Checkbox
                  disabled={isSubmitting || !user}
                  isChecked={isAnonymous}
                  size="lg"
                  _hover={user ? { opacity: 0.5 } : {}}
                  onChange={handleAnonymous}
                  color="red.700"
                  colorScheme="red">
                  익명
                </Checkbox>
              </Box>
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
            disabled={isSubmitting || !user}
            cursor={!isSubmitting && isValid ? "pointer" : "not-allowed"}
            type="submit">
            입력
          </Button>
        </Flex>
      </form>
    </Box>
  )
}
export default withProjectId(CommentsForm)
