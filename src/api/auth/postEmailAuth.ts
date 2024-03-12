import { postEmailAuthResponseType } from "api-models"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const postEmailAuth = async () => {
  //TODO: accessToken을 소셜 로그인과 이메일 로그인으로 분리하기위해 접두어로 'email', 'github' 등을 붙여야해서 slice로 잘라내는 작업 필요
  const { data } = await authInstance.post<postEmailAuthResponseType>(
    ENDPOINTS.EMAIL_AUTH,
  )

  return data
}
