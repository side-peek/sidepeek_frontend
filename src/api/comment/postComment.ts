import { postCommentPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const postComment = async (
  { projectId, ...body }: postCommentPayload,
  config: AxiosRequestConfig = {},
) => {
  await authInstance.post(ENDPOINTS.POST_COMMENT(projectId), body, {
    ...config,
  })
}
