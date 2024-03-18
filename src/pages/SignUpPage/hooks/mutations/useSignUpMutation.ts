import { useNavigate } from "react-router-dom"

import { useToast } from "@chakra-ui/react"
import { postEmailSignUpPayload } from "api-models"

import { useMutation } from "@tanstack/react-query"

import { postEmailSignUp } from "@apis/user/postEmailSignUp"

import { SUBMIT_MESSAGE } from "@pages/SignUpPage/constants/toastMessages"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

export const useSignUpMutation = () => {
  const toast = useToast(toastOptions)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (body: postEmailSignUpPayload) => postEmailSignUp(body),
    onSuccess: () => {
      toast({
        status: "success",
        title: SUBMIT_MESSAGE.SUCCESS,
      })
      navigate("/login", { replace: true })
    },
  })
}
