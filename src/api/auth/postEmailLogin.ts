import { postEmailLoginPayload, postEmailLoginResponseType } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const postEmailLogin = async (
  body: postEmailLoginPayload,
  config: AxiosRequestConfig = {},
) => {
  const { data } = await baseInstance.post<postEmailLoginResponseType>(
    ENDPOINTS.EMAIL_LOGIN,
    body,
    { ...config },
  )

  return data
}
