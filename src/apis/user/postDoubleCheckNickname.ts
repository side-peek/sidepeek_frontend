import {
  postDoubleCheckNicknamePayload,
  postDoubleCheckNicknameResponseType,
} from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const postDoubleCheckNickname = async (
  body: postDoubleCheckNicknamePayload,
  config: AxiosRequestConfig = {},
) => {
  const { data } = await baseInstance.post<postDoubleCheckNicknameResponseType>(
    ENDPOINTS.NICKNAME_DOUBLE_CHECK,
    body,
    { ...config },
  )

  return data
}
