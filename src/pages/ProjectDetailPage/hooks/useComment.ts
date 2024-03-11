import { useState } from "react"
import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { editCommentPayload } from "api-models"

import { useDeleteCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/useDeleteCommentMutation"
import { useEditCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/useEditCommentMutation"

export const useComment = () => {
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [isReply, setIsReply] = useState(false)
  const [editTargetCommentId, setEditTargetCommentId] = useState(-1)
  const [replyTargetCommentId, setReplyTargetCommentId] = useState(-1)

  // 이거 여기다 두는게 맞는지 ㅠ
  const handleNavigateProfile = (userId: number) => {
    navigate(`/profile/${userId}`)
  }

  const { register, handleSubmit, setValue, reset } =
    useForm<editCommentPayload>()

  const { editCommentMutation } = useEditCommentMutation()
  const { deleteCommentMutation } = useDeleteCommentMutation()

  const handleOnEdit = ({
    commentId,
    isAnonymous,
    content,
  }: editCommentPayload) => {
    setIsEditing(true)
    setEditTargetCommentId(commentId)
    setValue("commentId", commentId)
    setValue("isAnonymous", isAnonymous)
    setValue("content", content)
  }

  const handleOffEdit = () => {
    setIsEditing(false)
    setEditTargetCommentId(-1)
    reset()
  }

  const handleOnReply = (commentId: number) => {
    setIsReply(true)
    setReplyTargetCommentId(commentId)
  }

  const handleOffReply = () => {
    setIsReply(false)
  }

  const handleDelete = (commentId: number) => {
    deleteCommentMutation.mutate(commentId)
    handleOffEdit()
    handleOffReply()
  }

  const onSubmitEdit: SubmitHandler<editCommentPayload> = (commentValues) => {
    editCommentMutation.mutate(commentValues)
    handleOffEdit()
    handleOffReply()
  }

  return {
    isEditing,
    isReply,
    replyTargetCommentId,
    editTargetCommentId,
    handleOnReply,
    handleOffReply,
    handleOnEdit,
    handleOffEdit,
    handleDelete,
    handleSubmit,
    onSubmitEdit,
    register,
    handleNavigateProfile,
  }
}
