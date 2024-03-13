import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import { useToast } from "@chakra-ui/toast"

import {
  differentPasswordError,
  duplicatedErrors,
} from "../constants/errorOptions"
import { SUBMIT_MESSAGE } from "../constants/toastMessages"
import { errorToastOptions } from "../constants/toastOptions"
import { SignUpFormValues } from "../types/SignUpFormValues"
import useDoubleCheckEmailMutation from "./mutaitions/useDoubleCheckEmailMutation"
import useDoubleCheckNicknameMutation from "./mutaitions/useDoubleCheckNicknameMutation"
import { useSignUpMutation } from "./mutaitions/useSignUpMutation"

export const useSignUpForm = () => {
  const toast = useToast(errorToastOptions)

  const [checkedEmail, setCheckedEmail] = useState("")
  const [checkedNickname, setCheckedNickname] = useState("")
  const method = useForm<SignUpFormValues>()

  const emailCheck = useDoubleCheckEmailMutation({
    setError: () => {
      setCheckedEmail(() => "")
      method.setError("email", duplicatedErrors.email)
    },
    trigger: () => method.trigger(),
  })

  const nicknameCheck = useDoubleCheckNicknameMutation({
    setError: () => {
      setCheckedNickname(() => "")
      method.setError("nickname", duplicatedErrors.nickname)
    },
    trigger: () => method.trigger(),
  })

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

  const handleDoubleCheck = async (fieldName: keyof SignUpFormValues) => {
    await method.trigger(fieldName)

    if (method.getFieldState(fieldName, method.formState).invalid) {
      return
    }

    const value = method.getValues()[fieldName]

    if (fieldName === "email") {
      setCheckedEmail(value)
      emailCheck.mutate(value)
    } else {
      setCheckedNickname(value)
      nicknameCheck.mutate(value)
    }
  }

  return { method, emailCheck, nicknameCheck, onSubmit, handleDoubleCheck }
}
