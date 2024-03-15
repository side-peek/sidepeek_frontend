import { editCommentPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const editComment = async (
  data: editCommentPayload,
  config: AxiosRequestConfig = {},
) => {
  await authInstance.put(ENDPOINTS.EDIT_COMMENT(data.commentId), data, {
    ...config,
  })
}
