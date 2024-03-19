import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form"

import { CommentFormValues } from "./commentFormValues"

export interface CommentContextProps {
  isReply: boolean
  handleOnReply: (commentId: number) => void
  handleOffReply: () => void
  onSubmit: SubmitHandler<CommentFormValues>
  register?: UseFormRegister<CommentFormValues>
  handleSubmit?: UseFormHandleSubmit<CommentFormValues>
}
