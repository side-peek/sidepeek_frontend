import { Project, postProjectPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const postProject = async (
  body: postProjectPayload,
  config: AxiosRequestConfig = {},
): Promise<Project> => {
  const { data } = await authInstance.post(ENDPOINTS.UPLOAD_PROJECT, body, {
    ...config,
  })
  return data
}
