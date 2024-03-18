import { ReactNode, createContext, useContext, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import { editCommentPayload } from "api-models"

import { useDeleteCommentMutation } from "../hooks/mutations/useDeleteCommentMutation"
import { useEditCommentMutation } from "../hooks/mutations/useEditCommentMutation"
import { CommentContextProps } from "../types/commentContextProps"

const CommentContext = createContext<CommentContextProps>({
  isEditing: false,
  isReply: false,
  replyTargetCommentId: -1,
  editTargetCommentId: -1,
  handleOnReply: () => {},
  handleOffReply: () => {},
  handleOnEdit: () => {},
  handleOffEdit: () => {},
  handleDelete: () => {},
  onSubmitEdit: () => {},
  // 좀 문제임
  register: undefined,
  handleSubmit: undefined,
})

interface CommentProviderProps {
  children: ReactNode
}

export const CommentProvider = ({ children }: CommentProviderProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [isReply, setIsReply] = useState(false)
  const [editTargetCommentId, setEditTargetCommentId] = useState(-1)
  const [replyTargetCommentId, setReplyTargetCommentId] = useState(-1)

  const { register, setValue, reset, handleSubmit } =
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
    deleteCommentMutation(commentId)
    handleOffEdit()
    handleOffReply()
  }

  const onSubmitEdit: SubmitHandler<editCommentPayload> = (commentValues) => {
    editCommentMutation(commentValues)
    handleOffEdit()
    handleOffReply()
  }

  return (
    <CommentContext.Provider
      value={{
        isEditing,
        isReply,
        replyTargetCommentId,
        editTargetCommentId,
        handleOnReply,
        handleOffReply,
        handleOnEdit,
        handleOffEdit,
        handleDelete,
        onSubmitEdit,
        register,
        handleSubmit,
      }}>
      {children}
    </CommentContext.Provider>
  )
}

export const useCommentContext = () => {
  return useContext(CommentContext)
}
