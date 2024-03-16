import {
  postDoubleCheckEmailPayload,
  postDoubleCheckEmailResponseType,
} from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const postDoubleCheckEmail = async (
  body: postDoubleCheckEmailPayload,
  config: AxiosRequestConfig = {},
) => {
  const { data } = await baseInstance.post<postDoubleCheckEmailResponseType>(
    ENDPOINTS.EMAIL_DOUBLE_CHECK,
    body,
    {
      ...config,
    },
  )

  return data
}
