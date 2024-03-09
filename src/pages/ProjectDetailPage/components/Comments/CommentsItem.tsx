// TODO: 1. 포커스 자동 조정
//       2. 하나만 수정모드 가능하도록 포커스 벗어날시 해제
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useDeleteCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/useDeleteCommentMutation"
import { useEditCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/useEditCommentMutation"
import dateToTimeago from "@pages/ProjectDetailPage/utils/datetoTimeago"

import { CommentFormValues } from "../../types/commentFormValues"
import CommentsAvatar from "./CommentsAvatar"
import CommentsButton from "./CommentsButton"
import CommentsForm from "./CommentsForm"
import CommentsInputOrText from "./CommentsInputOrText"
import { ProjectIdProps, withProjectId } from "./Hoc/withProjectId"
import ReplyComment from "./ReplyComment"

interface CommentsItemProps extends ProjectIdProps {
  comment: Comment
}
// 커스텀 훅(상태, )
// 글자수 제한

const CommentsItem = ({ comment, projectId }: CommentsItemProps) => {
  const { register, handleSubmit, setValue, reset } =
    useForm<CommentFormValues>()
  const [isEditing, setIsEditing] = useState(false)
  const [isReply, setIsReply] = useState(false)
  const navigate = useNavigate()

  const handleNavigateProfile = (userId: number) => {
    navigate(`/profile/${userId}`)
  }

  const { editCommentMutation } = useEditCommentMutation(
    Number(projectId),
    Number(comment.id),
  )

  const { deleteCommentMutation } = useDeleteCommentMutation(Number(projectId))

  const handleDelete = (id: number) => {
    deleteCommentMutation.mutate(id)
  }

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

  const handleOnReply = () => {
    setIsReply(true)
  }

  // const handleOffReply = () => {
  //   setIsReply(false)
  // }

  const onSubmit: SubmitHandler<CommentFormValues> = (text) => {
    const commentRequestValue = {
      // TODO: userInfo 요청에서 가져오는 id값
      ownerId: 99,
      isAnonymous: false,
      content: text.content,
    }
    editCommentMutation.mutate(commentRequestValue)
    handleOffEdit()
  }

  return (
    <Stack
      w="100%"
      gap="3rem">
      <HStack
        w="100%"
        gap="2rem"
        align="flex-start">
        {comment.user ? (
          <CommentsAvatar
            onClick={() => {
              handleNavigateProfile(comment.user.id)
            }}
            src={comment.user.profileImageUrl}
          />
        ) : (
          <CommentsAvatar src="" />
        )}

        <Box w="100%">
          <form onSubmit={handleSubmit(onSubmit)}>
            <HStack
              justifyContent="space-between"
              w="100%">
              <Stack
                w="100%"
                gap="1rem"
                align="flex-start">
                <HStack
                  gap="1rem"
                  align="center">
                  {comment.user ? (
                    <Text
                      fontFamily="SCDream_Bold"
                      fontSize="xl">
                      {comment.user.nickname}
                    </Text>
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
                </HStack>
                <CommentsInputOrText
                  register={register("content")}
                  isEditing={isEditing}
                  content={comment.content}
                />
                {!comment.parentId &&
                  (isReply ? (
                    <CommentsForm />
                  ) : (
                    <Button
                      onClick={handleOnReply}
                      p="0">
                      답글달기
                    </Button>
                  ))}
              </Stack>
              <HStack gap="1rem">
                <CommentsButton
                  isOwner={comment.isOwner}
                  commentId={comment.id}
                  isEditing={isEditing}
                  handleDelete={handleDelete}
                  handleOnEdit={handleOnEdit}
                  handleOffEdit={handleOffEdit}
                />
              </HStack>
            </HStack>
          </form>
        </Box>
      </HStack>
      {comment.replies && <ReplyComment comment={comment.replies} />}
    </Stack>
  )
}

export default withProjectId(CommentsItem)
