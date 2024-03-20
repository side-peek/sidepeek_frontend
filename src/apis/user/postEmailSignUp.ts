import { postEmailSignUpPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const postEmailSignUp = async (
  body: postEmailSignUpPayload,
  config: AxiosRequestConfig = {},
) => {
  await baseInstance.post(ENDPOINTS.EMAIL_SIGNUP, body, { ...config })
}
