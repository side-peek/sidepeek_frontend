import { emailRefreshPayload, emailRefreshResponseType } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const emailRefresh = async (
  { refreshToken }: emailRefreshPayload,
  config: AxiosRequestConfig = {},
) => {
  const {
    data: { accessToken },
  } = await baseInstance.post<emailRefreshResponseType>(
    ENDPOINTS.EMAIL_REFRESH,
    {},
    { ...config, headers: { Authorization: `Bearer ${refreshToken}` } },
  )

  return accessToken
}
