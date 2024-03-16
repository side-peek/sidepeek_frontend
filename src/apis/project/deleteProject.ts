import { deleteProjectPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const deleteProject = async (
  { projectId }: deleteProjectPayload,
  config: AxiosRequestConfig = {},
) => {
  await authInstance.delete(ENDPOINTS.DELETE_PROJECT(projectId), { ...config })
}
