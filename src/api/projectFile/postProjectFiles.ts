import { postProjectFilesResponseType } from "api-models"

import { PostFormDataType } from "@pages/ProjectEditPage/types/PostFormDataType"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const postProjectFiles = async (file: PostFormDataType) => {
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
