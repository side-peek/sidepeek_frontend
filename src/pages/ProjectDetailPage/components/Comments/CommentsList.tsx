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
            register={register("content", { required: true })}
            key={comment.id}
            {...{
              handleOnEdit,
              handleOffEdit,
              handleOnReply,
              handleOffReply,
              editTargetCommentId,
              replyTargetCommentId,
              isReply,
              comment,
              isEditing,
              handleDelete,
              handleSubmit,
              onSubmitEdit,
              handleNavigateProfile,
            }}
          />
        )
      })}
    </Stack>
  )
}

export default CommentsList
