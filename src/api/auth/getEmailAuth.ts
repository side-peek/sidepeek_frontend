import { getEmailAuthPayload, getEmailAuthResponseType } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const getEmailAuth = async (
  { accessToken }: getEmailAuthPayload,
  config: AxiosRequestConfig = {},
) => {
  //TODO: accessToken을 소셜 로그인과 이메일 로그인으로 분리하기위해 접두어로 'email', 'github' 등을 붙여야해서 slice로 잘라내는 작업 필요
  const { data } = await baseInstance.get<getEmailAuthResponseType>(
    ENDPOINTS.EMAIL_AUTH,
    { ...config, headers: { Authorization: `Bearer ${accessToken}` } },
  )

  return data
}
