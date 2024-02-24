import { putUserPasswordPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const putUserPassword = async (
  { userId, password }: putUserPasswordPayload,
  config: AxiosRequestConfig = {},
) => {
  await authInstance.put(
    ENDPOINTS.PUT_USER_PASSWORD(userId),
    { password },
    { ...config },
  )
}
