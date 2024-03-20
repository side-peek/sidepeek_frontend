import { deleteCommentPayload } from "api-models"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const deleteComment = async ({ commentId }: deleteCommentPayload) => {
  await authInstance.delete(ENDPOINTS.DELETE_COMMENT(commentId))
}
