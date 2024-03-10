import { useState } from "react"

export const useComment = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [isReply, setIsReply] = useState(false)
  const [editTargetCommentId, setEditTargetCommentId] = useState(-1)
  const [replyTargetCommentId, setReplyTargetCommentId] = useState(-1)

  const handleOnReply = (commentId: number) => {
    setIsReply(true)
    setReplyTargetCommentId(commentId)
  }

  const handleOffReply = () => {
    setIsReply(false)
  }

  return {
    isEditing,
    setIsEditing,
    isReply,
    setIsReply,
    replyTargetCommentId,
    editTargetCommentId,
    setEditTargetCommentId,
    handleOnReply,
    handleOffReply,
  }
}
