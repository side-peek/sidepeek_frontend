import { authInstance } from "@api/axiosInstance"
import { deleteLikePayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

export const deleteLike = async (
  { likeId }: deleteLikePayload,
  config: AxiosRequestConfig = {},
) => {
  await authInstance.delete(ENDPOINTS.DELETE_LIKE(likeId)),
    {
      ...config,
    }
}
