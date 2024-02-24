import {
  postProjectFilesPayload,
  postProjectFilesResponseType,
} from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const postProjectFiles = async (
  { file }: postProjectFilesPayload,
  config: AxiosRequestConfig = {},
) => {
  await baseInstance.post<postProjectFilesResponseType>(
    ENDPOINTS.UPLOAD_PROJECT_FILES,
    file,
    { ...config },
  )
}
