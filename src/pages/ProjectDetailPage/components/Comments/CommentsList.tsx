import { useNavigate } from "react-router-dom"

import { Stack } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useComment } from "@pages/ProjectDetailPage/hooks/useComment"

import CommentsItem from "./CommentsItem"

interface CommentsListProps {
  comments: Comment[]
}

const CommentsList = ({ comments }: CommentsListProps) => {
  const {
    isEditing,
    isReply,
    editTargetCommentId,
    replyTargetCommentId,
    handleOnReply,
    handleOffReply,
    register,
    handleSubmit,
    handleOnEdit,
    handleOffEdit,
    handleDelete,
    onSubmitEdit,
  } = useComment()

  const navigate = useNavigate()

  const handleNavigateProfile = (userId: number) => {
    navigate(`/profile/${userId}`)
  }
  return (
    <Stack
      w="100%"
      gap="4rem"
      p="2rem">
      {comments.map((comment) => {
        return (
          <CommentsItem
            handleOnEdit={handleOnEdit}
            handleOffEdit={handleOffEdit}
            handleOnReply={handleOnReply}
            handleOffReply={handleOffReply}
            editTargetCommentId={editTargetCommentId}
            replyTargetCommentId={replyTargetCommentId}
            isReply={isReply}
            isEditing={isEditing}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
            onSubmitEdit={onSubmitEdit}
            register={register("content", { required: true })}
            comment={comment}
            key={comment.id}
            handleNavigateProfile={handleNavigateProfile}
          />
        )
      })}
    </Stack>
  )
}

export default CommentsList
