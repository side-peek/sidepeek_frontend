import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import { editCommentPayload } from "api-models"

import { ProjectIdProps } from "../components/Hoc/withProjectId"
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
  focusOnField: () => {},
  register: undefined,
  handleSubmit: undefined,
})

interface CommentProviderProps extends ProjectIdProps {
  children: ReactNode
}

export const CommentProvider = ({
  children,
  projectId,
}: CommentProviderProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [isReply, setIsReply] = useState(false)
  const [editTargetCommentId, setEditTargetCommentId] = useState(-1)
  const [replyTargetCommentId, setReplyTargetCommentId] = useState(-1)

  const { register, setValue, reset, handleSubmit, setFocus } =
    useForm<editCommentPayload>()

  const { editCommentMutation } = useEditCommentMutation(Number(projectId))
  const { deleteCommentMutation } = useDeleteCommentMutation(Number(projectId))

  const handleOnEdit = ({
    commentId,
    isAnonymous,
    content,
  }: editCommentPayload) => {
    setIsEditing(true)
    handleOffReply()
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
    handleOffEdit()
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

  const focusOnField = useCallback(() => {
    setFocus("content")
  }, [setFocus])

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
        focusOnField,
        handleSubmit,
      }}>
      {children}
    </CommentContext.Provider>
  )
}

export const useCommentContext = () => {
  return useContext(CommentContext)
}
