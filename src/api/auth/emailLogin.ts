import { emailLoginPayload, emailLoginResponseType } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const emailLogin = async (
  body: emailLoginPayload,
  config: AxiosRequestConfig = {},
) => {
  const { data } = await baseInstance.post<emailLoginResponseType>(
    ENDPOINTS.EMAIL_LOGIN,
    body,
    { ...config },
  )

  return data
}
