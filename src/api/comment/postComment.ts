import { postCommentPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const postComment = async (
  { ...data }: postCommentPayload,
  config: AxiosRequestConfig = {},
) => {
  await authInstance.post(ENDPOINTS.POST_COMMENT(), data, {
    ...config,
  })
}
