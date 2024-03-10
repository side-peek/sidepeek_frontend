// TODO: 1. 포커스 자동 조정(register commentId 사용)
//       2. 글자수 제한
import ResizeTextarea from "react-textarea-autosize"

import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react"

import { CommentsItemProps } from "../../types/commentItem"
import CommentTitle from "./CommentTitle"
import CommentsAvatar from "./CommentsAvatar"
import CommentsButton from "./CommentsButton"
import CommentsForm from "./CommentsForm"
import ReplyComment from "./ReplyComment"

const CommentsItem = ({
  comment,
  handleOnEdit,
  handleOffEdit,
  handleOnReply,
  handleOffReply,
  editTargetCommentId,
  replyTargetCommentId,
  isReply,
  isEditing,
  handleNavigateProfile,
  handleDelete,
  handleSubmit,
  onSubmitEdit,
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
        <CommentsAvatar
          onClick={() => {
            if (comment.user && comment.user.id) {
              handleNavigateProfile(comment.user.id)
            }
          }}
          user={comment.user}
        />

        <Box w="100%">
          <HStack
            justifyContent="space-between"
            w="100%">
            <Stack
              w="100%"
              gap="1rem"
              align="flex-start">
              <CommentTitle
                user={comment.user}
                createdAt={comment.createdAt}
              />
              <Box w="100%">
                <form onSubmit={handleSubmit(onSubmitEdit)}>
                  <HStack
                    justify="space-between"
                    w="100%">
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
                    <HStack gap="1rem">
                      <CommentsButton
                        {...{
                          editTargetCommentId,
                          comment,
                          isEditing,
                          handleDelete,
                          handleOnEdit,
                          handleOffEdit,
                        }}
                      />
                    </HStack>
                  </HStack>
                </form>
              </Box>

              {!comment.parentId &&
                (isReply ? (
                  comment.id === replyTargetCommentId && (
                    <>
                      <CommentsForm parentId={replyTargetCommentId} />
                      <Button
                        p="0"
                        _hover={{ opacity: "0.5" }}
                        onClick={handleOffReply}>
                        취소
                      </Button>
                    </>
                  )
                ) : (
                  <Button
                    onClick={() => handleOnReply(comment.id)}
                    p="0">
                    답글달기
                  </Button>
                ))}
            </Stack>
          </HStack>
        </Box>
      </HStack>
      {comment.replies && (
        <ReplyComment
          comment={comment.replies}
          key={comment.id}
          {...{
            handleOnEdit,
            handleOffEdit,
            handleOnReply,
            handleOffReply,
            editTargetCommentId,
            replyTargetCommentId,
            isReply,
            isEditing,
            handleDelete,
            handleSubmit,
            onSubmitEdit,
            register,
            handleNavigateProfile,
          }}
        />
      )}
    </Stack>
  )
}

export default CommentsItem
