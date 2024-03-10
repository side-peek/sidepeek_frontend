import { editCommentPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const editComment = async (
  data: editCommentPayload,
  config: AxiosRequestConfig = {},
) => {
  if (data.projectId) {
    const newData = {
      ...data,
      parentId: null,
    }

    await authInstance.put(ENDPOINTS.EDIT_COMMENT(data.commentId), newData, {
      ...config,
    })

    return
  }

  await authInstance.put(ENDPOINTS.EDIT_COMMENT(data.commentId), data, {
    ...config,
  })
}
