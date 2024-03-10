// TODO: 1. 포커스 자동 조정
//       2. 하나만 수정모드 가능하도록 포커스 벗어날시 해제
// 커스텀 훅(상태, )
// 글자수 제한
import { UseFormHandleSubmit, UseFormRegisterReturn } from "react-hook-form"
import ResizeTextarea from "react-textarea-autosize"

import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react"
import { Comment } from "api-models"

import { EditCommentFormValues } from "@pages/ProjectDetailPage/types/editCommentFormValues"
import dateToTimeago from "@pages/ProjectDetailPage/utils/datetoTimeago"

import CommentsAvatar from "./CommentsAvatar"
import CommentsButton from "./CommentsButton"
import CommentsForm from "./CommentsForm"
import { handleOnEditProps } from "./CommentsList"
import ReplyComment from "./ReplyComment"

interface CommentsItemProps {
  comment: Comment
  handleOnEdit: ({ commentId, isAnonymous, content }: handleOnEditProps) => void
  handleOffEdit: () => void
  handleOnReply: () => void
  handleOffReply: () => void
  handleDelete: (commentId: number) => void
  handleSubmit: UseFormHandleSubmit<EditCommentFormValues>
  onSubmitEdit: (comment: EditCommentFormValues) => void
  editTargetCommentId: number
  isReply: boolean
  isEditing: boolean
  handleNavigateProfile: (commentUserId: number) => void
  register: UseFormRegisterReturn
}

const CommentsItem = ({
  comment,
  handleOnEdit,
  handleOffEdit,
  handleOnReply,
  handleOffReply,
  editTargetCommentId,
  isReply,
  isEditing,
  handleNavigateProfile,
  handleDelete,
  // handleSubmit,
  // onSubmitEdit,
  register,
}: CommentsItemProps) => {
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
              {editTargetCommentId === comment.id && isEditing ? (
                <Textarea
                  rows={1}
                  w="100%"
                  fontSize="lg"
                  p="0.2rem"
                  as={ResizeTextarea}
                  isRequired={false}
                  resize="none"
                  {...register}
                />
              ) : (
                <Text
                  fontSize="lg"
                  p="0.2rem">
                  {comment.content}
                </Text>
              )}

              {!comment.parentId &&
                (isReply ? (
                  <>
                    <CommentsForm />
                    <Button onClick={handleOffReply}>취소</Button>
                  </>
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
                editTargetCommentId={editTargetCommentId}
                comment={comment}
                isEditing={isEditing}
                handleDelete={handleDelete}
                handleOnEdit={handleOnEdit}
                handleOffEdit={handleOffEdit}
              />
            </HStack>
          </HStack>
        </Box>
      </HStack>
      {comment.replies && <ReplyComment comment={comment.replies} />}
    </Stack>
  )
}

export default CommentsItem
