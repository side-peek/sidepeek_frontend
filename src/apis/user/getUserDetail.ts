import { getUserDetailPayload, getUserDetailResponseType } from "api-models"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const getUserDetail = async ({ userId }: getUserDetailPayload) => {
  const { data } = await baseInstance.get<getUserDetailResponseType>(
    ENDPOINTS.GET_USER_PROFILE(userId),
  )

  return data
}
