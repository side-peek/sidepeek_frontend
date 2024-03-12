import { postProjectFilesResponseType } from "api-models"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const postProjectFiles = async (file: FormData) => {
  const { data } = await baseInstance.post<postProjectFilesResponseType>(
    ENDPOINTS.UPLOAD_PROJECT_FILES,
    file,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  )
  return data
}
