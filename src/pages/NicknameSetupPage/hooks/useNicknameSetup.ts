import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate, useSearchParams } from "react-router-dom"

import { useToast } from "@chakra-ui/react"
import { getUserDetailResponseType } from "api-models"

import { useQueryClient } from "@tanstack/react-query"

import { authInstance } from "@apis/axiosInstance"

import { LOGIN_MESSAGES } from "@pages/LoginPage/constants/toastMessages"
import { requiredDoubleCheckErrors } from "@pages/SignUpPage/constants/errorOptions"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

import { useDoubleCheckStore } from "@stores/useDoubleCheckStore"

import { ENDPOINTS } from "@constants/endPoints"
import { QUERYKEY } from "@constants/queryKey"

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

  const {
    data: { user: userInfo },
    isError,
  } = useGithubLoginQuery({
    code: searchParams.get("code") ?? "",
  })

  const method = useForm<NicknameFormType>()

  const checkedNickname = useDoubleCheckStore((state) => state.nickname)

  const onLoginSuccess = () => {
    queryClient.setQueryData([QUERYKEY.USER_INFO], userInfo)
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

    if (userInfo.id === null) {
      return
    }

    try {
      const profile = await authInstance.get<getUserDetailResponseType>(
        ENDPOINTS.GET_USER_PROFILE(userInfo.id),
      )
      await authInstance.put(ENDPOINTS.PUT_USER_PROFILE(userInfo.id), {
        ...profile.data,
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
    onLoginSuccess,
    isNicknameSet: userInfo.nickname !== null,
  }
}
