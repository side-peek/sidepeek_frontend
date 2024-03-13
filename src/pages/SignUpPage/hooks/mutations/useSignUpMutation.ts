import { useNavigate } from "react-router-dom"

import { postEmailSignUpPayload } from "api-models"

import { useMutation } from "@tanstack/react-query"

import { postEmailSignUp } from "@apis/user/postEmailSignUp"

export const useSignUpMutation = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (body: postEmailSignUpPayload) => postEmailSignUp(body),
    onSuccess: () => navigate("/login", { replace: true }),
  })
}
