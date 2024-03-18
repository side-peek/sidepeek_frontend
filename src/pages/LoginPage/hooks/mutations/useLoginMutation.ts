import { useNavigate } from "react-router-dom"

import { useToast } from "@chakra-ui/react"
import { postEmailLoginPayload } from "api-models"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { postEmailLogin } from "@apis/auth/postEmailLogin"

import { LOGIN_MESSAGES } from "@pages/LoginPage/constants/toastMessages"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

import { QUERYKEY } from "@constants/queryKey"

const useLoginMutation = () => {
  const navigate = useNavigate()
  const toast = useToast(toastOptions)
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (body: postEmailLoginPayload) => postEmailLogin(body),
    onSuccess: (response) => {
      queryClient.setQueryData([QUERYKEY.USER_INFO], response)
      navigate("/")
      toast({
        status: "success",
        title: LOGIN_MESSAGES.SUCCESS,
      })
    },
  })
}

export default useLoginMutation
