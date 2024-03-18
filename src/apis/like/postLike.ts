import { postLikePayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const postLike = async (
  { ...data }: postLikePayload,
  config: AxiosRequestConfig = {},
) => {
  await authInstance.post(ENDPOINTS.POST_LIKE, data, {
    ...config,
  })
}
