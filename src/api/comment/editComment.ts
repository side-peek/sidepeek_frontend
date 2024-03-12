import { editCommentPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const editComment = async (
  { projectId, id, ...body }: editCommentPayload,
  config: AxiosRequestConfig = {},
) => {
  if (!projectId || !id) {
    return
  }
  await authInstance.put(ENDPOINTS.EDIT_COMMENT(projectId, id), body, {
    ...config,
  })
}
