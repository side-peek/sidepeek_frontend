import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import { useToast } from "@chakra-ui/toast"
import { isAxiosError } from "axios"

import { useDoubleCheckStore } from "@stores/useDoubleCheckStore"

import { differentPasswordError } from "../constants/errorOptions"
import { SUBMIT_MESSAGE } from "../constants/toastMessages"
import { toastOptions } from "../constants/toastOptions"
import { SignUpFormValues } from "../types/SignUpFormValues"
import { useSignUpMutation } from "./mutations/useSignUpMutation"

export const useSignUpForm = () => {
  const toast = useToast(toastOptions)
  const method = useForm<SignUpFormValues>()

  const { email: checkedEmail, nickname: checkedNickname } =
    useDoubleCheckStore((state) => state)

  const signUp = useSignUpMutation()

  const onSubmit: SubmitHandler<SignUpFormValues> = ({
    email,
    nickname,
    password,
    confirmPassword,
  }) => {
    if (password !== confirmPassword) {
      return method.setError("confirmPassword", differentPasswordError)
    }

    if (checkedEmail !== email) {
      method.setFocus("email")
      return toast({
        status: "error",
        title: SUBMIT_MESSAGE.ERROR.EMAIL_CHECK,
      })
    }

    if (checkedNickname !== nickname) {
      method.setFocus("nickname")
      return toast({
        status: "error",
        title: SUBMIT_MESSAGE.ERROR.NICKNAME_CHECK,
      })
    }

    signUp.mutate({ email, password, nickname })
  }

  useEffect(() => {
    if (isAxiosError(signUp.error)) {
      let message = ""
      switch (signUp.error.response?.status) {
        case 500: {
          message = SUBMIT_MESSAGE.ERROR.SERVER
          break
        }
        case 404: {
          message = SUBMIT_MESSAGE.ERROR.INVALID
          break
        }
        default: {
          message = SUBMIT_MESSAGE.ERROR.UNCAUGHT
        }
      }
      toast({
        status: "error",
        title: message,
      })
    }
  }, [signUp.error, toast])

  return {
    method,
    onSubmit,
    isLoading: signUp.isPending,
  }
}
