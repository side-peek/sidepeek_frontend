import { deleteCommentPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const deleteCommentAPI = async (
  { projectId, id }: deleteCommentPayload,
  config: AxiosRequestConfig = {},
) => {
  await authInstance.delete(ENDPOINTS.DELETE_COMMENT(projectId, id), {
    ...config,
  })
}
