import {
  postEmailRefreshPayload,
  postEmailRefreshResponseType,
} from "api-models"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const postEmailRefresh = async ({
  refreshToken,
}: postEmailRefreshPayload) => {
  const { data } = await baseInstance.post<postEmailRefreshResponseType>(
    ENDPOINTS.EMAIL_REFRESH,
    { refreshToken },
  )

  return data
}
