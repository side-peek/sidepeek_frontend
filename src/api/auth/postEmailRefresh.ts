import {
  postEmailRefreshPayload,
  postEmailRefreshResponseType,
} from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const postEmailRefresh = async (
  { refreshToken }: postEmailRefreshPayload,
  config: AxiosRequestConfig = {},
) => {
  const {
    data: { accessToken },
  } = await baseInstance.post<postEmailRefreshResponseType>(
    ENDPOINTS.EMAIL_REFRESH,
    {},
    { ...config, headers: { Authorization: `Bearer ${refreshToken}` } },
  )

  return accessToken
}
