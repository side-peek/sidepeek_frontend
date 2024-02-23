import { getUserSummaryPayload, getUserSummaryResponseType } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const getUserSummary = async (
  { keyword }: getUserSummaryPayload,
  config: AxiosRequestConfig = {},
) => {
  const { data } = await baseInstance.get<getUserSummaryResponseType>(
    `${ENDPOINTS.GET_USER_NICKNAME}${keyword}`,
    {
      ...config,
    },
  )

  return data
}
