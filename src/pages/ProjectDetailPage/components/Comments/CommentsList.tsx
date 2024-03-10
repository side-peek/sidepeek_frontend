// TODO: 1. 익명일때 프로필페이지 못넘어 가는거 Modal or Toast 처리 + 로그인한유저만 넘어가도록 수정
import { useState } from "react"
import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { Stack } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useDeleteCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/useDeleteCommentMutation"
import { useEditCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/useEditCommentMutation"
import { EditCommentFormValues } from "@pages/ProjectDetailPage/types/EditCommentFormValues"
import { CommentFormValues } from "@pages/ProjectDetailPage/types/commentFormValues"

import CommentsItem from "./CommentsItem"
import { ProjectIdProps } from "./Hoc/withProjectId"

export interface handleOnEditProps extends EditCommentFormValues {
  commentId: number
}

interface CommentsListProps extends ProjectIdProps {
  comments: Comment[]
}

const CommentsList = ({ comments }: CommentsListProps) => {
  const { register, handleSubmit, setValue, reset } =
    useForm<CommentFormValues>()

  const navigate = useNavigate()

  const handleNavigateProfile = (userId: number) => {
    navigate(`/profile/${userId}`)
  }

  const { editCommentMutation } = useEditCommentMutation()

  const { deleteCommentMutation } = useDeleteCommentMutation()

  const [isEditing, setIsEditing] = useState(false)
  const [isReply, setIsReply] = useState(false)
  const [editTargetCommentId, setEditTargetCommentId] = useState(-1)

  const handleOnEdit = ({
    commentId,
    isAnonymous,
    content,
  }: handleOnEditProps) => {
    setIsEditing(true)
    setEditTargetCommentId(commentId)
    setValue("isAnonymous", isAnonymous)
    setValue("content", content)
  }

  const handleOffEdit = () => {
    setIsEditing(false)
    reset()
    setEditTargetCommentId(-1)
  }

  const handleOnReply = () => {
    setIsReply(true)
  }

  const handleOffReply = () => {
    setIsReply(false)
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
      {comments.map((comment) => (
        <CommentsItem
          handleOnEdit={handleOnEdit}
          handleOffEdit={handleOffEdit}
          handleOnReply={handleOnReply}
          handleOffReply={handleOffReply}
          editTargetCommentId={editTargetCommentId}
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
      ))}
    </Stack>
  )
}

export default CommentsList
