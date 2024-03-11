import { getUserDetailPayload, getUserDetailResponseType } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const getUserDetail = async (
  { userId }: getUserDetailPayload,
  config: AxiosRequestConfig = {},
) => {
  const { data } = await baseInstance.get<getUserDetailResponseType>(
    ENDPOINTS.GET_USER_PROFILE(userId),
    {
      ...config,
    },
  )

  return data
}
