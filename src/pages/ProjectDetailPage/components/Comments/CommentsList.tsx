// TODO: 1. 익명일때 프로필페이
import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { Stack } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useDeleteCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/useDeleteCommentMutation"
import { useEditCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/useEditCommentMutation"
import { useComment } from "@pages/ProjectDetailPage/hooks/useComment"
import { EditCommentFormValues } from "@pages/ProjectDetailPage/types/EditCommentFormValues"

import CommentsItem from "./CommentsItem"

interface CommentsListProps {
  comments: Comment[]
}

const CommentsList = ({ comments }: CommentsListProps) => {
  const {
    isEditing,
    setIsEditing,
    isReply,
    editTargetCommentId,
    setEditTargetCommentId,
    replyTargetCommentId,
    handleOnReply,
    handleOffReply,
  } = useComment()

  const navigate = useNavigate()

  const { register, handleSubmit, setValue, reset } =
    useForm<EditCommentFormValues>()

  const handleNavigateProfile = (userId: number) => {
    navigate(`/profile/${userId}`)
  }

  const { editCommentMutation } = useEditCommentMutation()
  const { deleteCommentMutation } = useDeleteCommentMutation()

  const handleOnEdit = ({
    commentId,
    isAnonymous,
    content,
  }: EditCommentFormValues) => {
    setIsEditing(true)
    setEditTargetCommentId(commentId)
    setValue("commentId", commentId)
    setValue("isAnonymous", isAnonymous)
    setValue("content", content)
  }

  const handleOffEdit = () => {
    setIsEditing(false)
    reset()
    setEditTargetCommentId(-1)
  }

  const handleDelete = (commentId: number) => {
    deleteCommentMutation.mutate(commentId)
  }

  // 수정요청
  const onSubmitEdit: SubmitHandler<EditCommentFormValues> = (newComment) => {
    editCommentMutation.mutate(newComment)
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
