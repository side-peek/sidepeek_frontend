import { putUserDetailPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const putUserDetail = async (
  { userId, ...body }: putUserDetailPayload,
  config: AxiosRequestConfig = {},
) => {
  await authInstance.put(ENDPOINTS.PUT_USER_PROFILE(userId), body, {
    ...config,
  })
}
