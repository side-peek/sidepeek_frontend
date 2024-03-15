import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const postFile = async (file: File) => {
  const response = await authInstance.post(
    ENDPOINTS.UPLOAD_FILE,
    { file },
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  )
  return response?.data
}
