import { postEmailSignUpPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const postEmailSignUp = async (
  body: postEmailSignUpPayload,
  config: AxiosRequestConfig = {},
) => {
  //TODO: 에러 코드를 통한 에러 핸들링 필요
  await baseInstance.post(ENDPOINTS.EMAIL_SIGNUP, body, { ...config })
}
