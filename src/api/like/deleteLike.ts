import { authInstance } from "@api/axiosInstance"

import { ENDPOINTS } from "@constants/endPoints"

export const deleteLike = async () => {
  await authInstance.post(ENDPOINTS.UPLOAD_LIKE)
}
