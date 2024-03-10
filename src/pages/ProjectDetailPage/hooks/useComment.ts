import { useState } from "react"
import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form"

import { useDeleteCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/useDeleteCommentMutation"
import { useEditCommentMutation } from "@pages/ProjectDetailPage/hooks/mutations/useEditCommentMutation"
import { EditCommentFormValues } from "@pages/ProjectDetailPage/types/EditCommentFormValues"

export const useComment = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [isReply, setIsReply] = useState(false)
  const [editTargetCommentId, setEditTargetCommentId] = useState(-1)
  const [replyTargetCommentId, setReplyTargetCommentId] = useState(-1)

  const { register, handleSubmit, setValue, reset } =
    useForm<EditCommentFormValues>()

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

  const onSubmitEdit: SubmitHandler<EditCommentFormValues> = (
    commentValues,
  ) => {
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
  }
}
