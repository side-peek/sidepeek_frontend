// TODO: 1. 포커스 자동 조정
//       2. 하나만 수정모드 가능하도록 포커스 벗어날시 해제
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useParams } from "react-router-dom"

import { Box, Flex, Text } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useEditCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/useEditCommentMutation"
import dateToTimeago from "@pages/ProjectDetailPage/utils/datetoTimeago"

import { CommentFormValues } from "../../types/commentFormValues"
import CommentsButton from "./CommentsButton"
import CommentsText from "./CommentsText"

interface CommentsContentProps {
  comment: Comment
}

const CommentsContent = ({ comment }: CommentsContentProps) => {
  const { register, handleSubmit, setValue, reset } =
    useForm<CommentFormValues>()
  const [isEditing, setIsEditing] = useState(false)

  const { projectId } = useParams()

  const { editCommentMutation } = useEditCommentMutation(
    Number(projectId),
    Number(comment.id),
  )

  useEffect(() => {
    setValue("content", comment.content)
  }, [isEditing, setValue, comment.content])

  const handleOnEdit = () => {
    setIsEditing(true)
  }

  const handleOffEdit = () => {
    setIsEditing(false)
    reset()
  }

  const onEditSubmit: SubmitHandler<CommentFormValues> = (text) => {
    const commentRequestValue = {
      ownerId: comment.user.id,
      isAnonymous: false,
      content: text.content,
    }
    editCommentMutation.mutate(commentRequestValue)
    setIsEditing(false)
  }

  return (
    <Box w="100%">
      <form onSubmit={handleSubmit(onEditSubmit)}>
        <Flex
          justifyContent="space-between"
          w="100%">
          <Flex
            direction="column"
            gap="1rem"
            flex="9.5">
            <Flex
              gap="1rem"
              align="center">
              {comment.user ? (
                <>
                  <Text
                    fontFamily="SCDream_Bold"
                    fontSize="xl">
                    {comment.user.nickname}
                  </Text>
                </>
              ) : (
                <Text
                  fontFamily="SCDream_Bold"
                  fontSize="xl">
                  익명
                </Text>
              )}
              <Text
                color="grey.500"
                fontSize="md">
                {dateToTimeago(comment.createdAt)}
              </Text>
            </Flex>
            <CommentsText
              register={register("content")}
              isEditing={isEditing}
              content={comment.content}
            />
          </Flex>
          <Flex
            gap="1rem"
            flex="0.5"
            height="fit-content">
            <CommentsButton
              isOwner={comment.isOwner}
              id={comment.id}
              isEditing={isEditing}
              handleOnEdit={handleOnEdit}
              handleOffEdit={handleOffEdit}
            />
          </Flex>
        </Flex>
      </form>
    </Box>
  )
}

export default CommentsContent
