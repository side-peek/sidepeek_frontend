import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import { useToast } from "@chakra-ui/react"

import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

import { LOGIN_MESSAGES } from "../constants/toastMessages"
import { LoginFormType } from "../types/LoginFormType"
import useLoginMutation from "./mutations/useLoginMutation"

const useLoginForm = () => {
  const toast = useToast(toastOptions)
  const method = useForm<LoginFormType>()
  const { mutate, error, isPending } = useLoginMutation()

  const onSubmit: SubmitHandler<LoginFormType> = (values) => {
    mutate(values)
  }

  useEffect(() => {
    if (error) {
      method.setError("email", {
        type: "validate",
      })
      method.setError("password", {
        type: "validate",
      })
      toast({
        status: "error",
        title: LOGIN_MESSAGES.ERROR,
      })
    }
  }, [error, toast, method])

  return { method, onSubmit, isPending }
}

export default useLoginForm
