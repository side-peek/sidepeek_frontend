import { postDoubleCheckEmailPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const postDoubleCheckEmail = async (
  body: postDoubleCheckEmailPayload,
  config: AxiosRequestConfig = {},
) => {
  await baseInstance.post(ENDPOINTS.EMAIL_DOUBLE_CHECK, body, { ...config })
}
