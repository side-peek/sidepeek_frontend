import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

//FIXME: 미완성 api
export const postLike = async () => {
  await authInstance.post(ENDPOINTS.UPLOAD_LIKE)
}
