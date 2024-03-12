import { ReactNode, createContext, useContext, useState } from "react"
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { editCommentPayload } from "api-models"

import { useDeleteCommentMutation } from "../hooks/mutations/useDeleteCommentMutation"
import { useEditCommentMutation } from "../hooks/mutations/useEditCommentMutation"

interface CommentContextProps {
  isEditing: boolean
  isReply: boolean
  replyTargetCommentId: number
  editTargetCommentId: number
  handleOnReply: (commentId: number) => void
  handleOffReply: () => void
  handleOnEdit: ({
    commentId,
    isAnonymous,
    content,
  }: editCommentPayload) => void
  handleOffEdit: () => void
  handleDelete: (commentId: number) => void
  onSubmitEdit: SubmitHandler<editCommentPayload>
  register?: UseFormRegister<editCommentPayload>
  handleSubmit?: UseFormHandleSubmit<editCommentPayload>
  handleNavigateProfile: (userId: number) => void
}

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
  handleNavigateProfile: () => {},
  register: undefined,
  handleSubmit: undefined,
})

interface CommentProviderProps {
  children: ReactNode
}

export const CommentProvider = ({ children }: CommentProviderProps) => {
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [isReply, setIsReply] = useState(false)
  const [editTargetCommentId, setEditTargetCommentId] = useState(-1)
  const [replyTargetCommentId, setReplyTargetCommentId] = useState(-1)

  // 이거 여기다 두는게 맞는지 ㅠ
  const handleNavigateProfile = (userId: number) => {
    navigate(`/profile/${userId}`)
  }

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
    deleteCommentMutation.mutate(commentId)
    handleOffEdit()
    handleOffReply()
  }

  const onSubmitEdit: SubmitHandler<editCommentPayload> = (commentValues) => {
    editCommentMutation.mutate(commentValues)
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
        handleNavigateProfile,
        register,
        handleSubmit,
      }}>
      {children}
    </CommentContext.Provider>
  )
}

export const useCommentContext = () => {
  const context = useContext(CommentContext)
  if (!context) {
    throw new Error("useCommentContext must be used within a CommentProvider")
  }
  return context
}
