// TODO: 1. 포커스 자동 조정(register commentId 사용)
//       2. 글자수 제한
import { Box, Button, HStack, Stack } from "@chakra-ui/react"

import { CommentsItemProps } from "../../../types/commentItem"
import CommentsForm from "../CommentsForm/CommentsForm"
import CommentTitle from "./CommentTitle"
import CommentsAvatar from "./CommentsAvatar"
import CommentsEditFormText from "./CommentsEditFormText"
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
              <CommentsEditFormText
                {...{
                  handleSubmit,
                  onSubmitEdit,
                  editTargetCommentId,
                  comment,
                  isEditing,
                  register,
                  handleDelete,
                  handleOnEdit,
                  handleOffEdit,
                }}
              />
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
