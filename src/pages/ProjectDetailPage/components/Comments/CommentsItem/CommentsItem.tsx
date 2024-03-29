import { useNavigate } from "react-router-dom"

import { HStack, Stack, useMediaQuery } from "@chakra-ui/react"
import { Comment } from "api-models"

import AvatarCard from "@components/AvatarCard/AvatarCard"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

import CommentsForm from "../CommentsForm/CommentsForm"
import CommentsEditForm from "./components/CommentsEditForm"
import CommentsText from "./components/CommentsText"
import CommentTop from "./components/CommentsTop/CommentsTop"
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
  const onEdit = editTargetCommentId === comment.id && isEditing

  return (
    <Stack
      w="100%"
      gap="3rem">
      <HStack
        w="100%"
        gap={isLargerThan768 ? "2rem" : "1.3rem"}
        align="flex-start">
        <AvatarCard
          border="none"
          p="0"
          _hover={comment.user ? { opacity: "0.5" } : {}}
          cursor={comment.user ? "pointer" : "default"}
          onClick={() => {
            if (comment && comment.user) {
              handleNavigateProfile(comment.user.id)
            }
          }}>
          <AvatarCard.Image src={comment.user?.profileImageUrl ?? undefined} />
        </AvatarCard>

        <HStack
          justifyContent="space-between"
          w="100%">
          <Stack
            w="100%"
            gap="1rem"
            align="flex-start">
            <CommentTop comment={comment} />
            {onEdit ? (
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
      </HStack>
      {comment.replies && <ReplyComment comment={comment.replies} />}
    </Stack>
  )
}

export default CommentsItem
