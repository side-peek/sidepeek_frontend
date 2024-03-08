// TODO: 1. 포커스 자동 조정
//       2. 하나만 수정모드 가능하도록 포커스 벗어날시 해제
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { Box, Flex, Text } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useDeleteCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/useDeleteCommentMutation"
import { useEditCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/useEditCommentMutation"
import dateToTimeago from "@pages/ProjectDetailPage/utils/datetoTimeago"

import { CommentFormValues } from "../../types/commentFormValues"
import CommentsAvatar from "./CommentsAvatar"
import CommentsButton from "./CommentsButton"
import CommentsInputOrText from "./CommentsInputOrText"
import { ProjectIdProps, withProjectId } from "./Hoc/withProjectId"

interface CommentsItemProps extends ProjectIdProps {
  comment: Comment
}

// eslint-disable-next-line react-refresh/only-export-components
const CommentsItem = ({ comment, projectId }: CommentsItemProps) => {
  const { register, handleSubmit, setValue, reset } =
    useForm<CommentFormValues>()
  const [isEditing, setIsEditing] = useState(false)

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
    <Flex
      w="100%"
      gap="2rem">
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
              <CommentsInputOrText
                register={register("content", { required: true })}
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
                commentId={comment.id}
                isEditing={isEditing}
                handleDelete={handleDelete}
                handleOnEdit={handleOnEdit}
                handleOffEdit={handleOffEdit}
              />
            </Flex>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default withProjectId(CommentsItem)

/* <Flex
justifyContent="space-between"
align="center"
key={comment.id}>
<Flex
  gap="2rem"
  w="100%"
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

  <CommentsContent comment={comment} />
</Flex>
</Flex> */
