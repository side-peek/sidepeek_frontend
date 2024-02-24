import { postDoubleCheckNicknamePayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const postDoubleCheckNickname = async (
  body: postDoubleCheckNicknamePayload,
  config: AxiosRequestConfig = {},
) => {
  await baseInstance.post(ENDPOINTS.NICKNAME_DOUBLE_CHECK, body, { ...config })
}
