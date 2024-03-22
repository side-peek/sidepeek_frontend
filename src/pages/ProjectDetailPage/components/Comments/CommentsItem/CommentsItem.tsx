import { useNavigate } from "react-router-dom"

import { Box, HStack, Stack, useMediaQuery } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

import CommentsForm from "../CommentsForm/CommentsForm"
import CommentTitle from "./components/CommentTitle"
import CommentsAvatar from "./components/CommentsAvatar"
import CommentsEditForm from "./components/CommentsEditForm"
import CommentsText from "./components/CommentsText"
import ReplyButton from "./components/ReplyButton"
import ReplyComment from "./components/ReplyComment"

interface CommentsItemProps {
  comment: Comment
}

const CommentsItem = ({ comment }: CommentsItemProps) => {
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])
  const navigate = useNavigate()

  const handleNavigateProfile = (userId: number) => {
    navigate(`/profile/${userId}`)
  }

  const { editTargetCommentId, isEditing, isReply, replyTargetCommentId } =
    useCommentContext()

  const hasReply = !comment.parentId
  const onReply = isReply && comment.id === replyTargetCommentId

  return (
    <Stack
      w="100%"
      gap="3rem">
      <HStack
        w="100%"
        gap={isLargerThan768 ? "2rem" : "1.3rem"}
        align="flex-start">
        <CommentsAvatar
          user={comment.user}
          src={comment.user?.profileImageUrl ?? undefined}
          onClick={() => {
            if (comment.user.id) {
              handleNavigateProfile(comment.user.id)
            }
          }}
        />
        <Box w="100%">
          <HStack
            justifyContent="space-between"
            w="100%">
            <Stack
              w="100%"
              gap="1rem"
              align="flex-start">
              <CommentTitle comment={comment} />
              {editTargetCommentId === comment.id && isEditing ? (
                <CommentsEditForm />
              ) : (
                <CommentsText text={comment.content} />
              )}
              {hasReply && onReply && (
                <CommentsForm
                  parentId={replyTargetCommentId}
                  isReplyComment
                />
              )}
              {hasReply && (
                <ReplyButton
                  onReply={onReply}
                  commentId={comment.id}
                />
              )}
            </Stack>
          </HStack>
        </Box>
      </HStack>
      {comment.replies && <ReplyComment comment={comment.replies} />}
    </Stack>
  )
}

export default CommentsItem
