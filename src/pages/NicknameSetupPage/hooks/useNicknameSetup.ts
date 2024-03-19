import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate, useSearchParams } from "react-router-dom"

import { useToast } from "@chakra-ui/react"
import { userInfoOptions } from "@services/queries/userInfoOptions"
import { getUserDetailResponseType } from "api-models"

import { useQueryClient } from "@tanstack/react-query"

import { authInstance } from "@apis/axiosInstance"

import { LOGIN_MESSAGES } from "@pages/LoginPage/constants/toastMessages"
import { requiredDoubleCheckErrors } from "@pages/SignUpPage/constants/errorOptions"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

import { useDoubleCheckStore } from "@stores/useDoubleCheckStore"

import { ENDPOINTS } from "@constants/endPoints"

import { NICKNAME_SETUP_MESSAGE } from "../constants/toastMessages"
import { useGithubLoginQuery } from "./query/useGithubLoginQuery"

interface NicknameFormType {
  nickname: string
}

export const useNicknameSetup = () => {
  const toast = useToast(toastOptions)
  const navigate = useNavigate()
  const searchParams = useSearchParams()[0]

  const queryClient = useQueryClient()

  const { data: userInfo, isError } = useGithubLoginQuery({
    code: searchParams.get("code") ?? "",
    state: searchParams.get("state") ?? "",
  })

  const method = useForm<NicknameFormType>()

  const checkedNickname = useDoubleCheckStore((state) => state.nickname)

  const onLoginSuccess = async () => {
    await queryClient.fetchQuery(userInfoOptions)
    toast({
      status: "success",
      title: LOGIN_MESSAGES.SUCCESS,
    })
    navigate("/")
  }

  const onSubmit: SubmitHandler<NicknameFormType> = async ({ nickname }) => {
    if (nickname !== checkedNickname) {
      method.setError("nickname", requiredDoubleCheckErrors.nickname)
      return
    }

    if (userInfo.user.id === null) {
      return
    }

    try {
      const profile = await authInstance.get<getUserDetailResponseType>(
        ENDPOINTS.GET_USER_PROFILE(userInfo.user.id),
      )
      await authInstance.put(ENDPOINTS.PUT_USER_PROFILE(userInfo.user.id), {
        ...profile,
        nickname,
      })
      onLoginSuccess()
    } catch (error) {
      toast({
        status: "error",
        title: NICKNAME_SETUP_MESSAGE.ERROR,
      })
      method.setError("nickname", {
        type: "validate",
      })
    }
  }

  return {
    onSubmit,
    method,
    isError,
    isNicknameSet: userInfo.user.nickname !== null,
    onLoginSuccess,
  }
}
