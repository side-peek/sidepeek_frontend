import { putProjectPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const putProject = async (
  { projectId, ...body }: putProjectPayload,
  config: AxiosRequestConfig = {},
) => {
  await authInstance.put(ENDPOINTS.PUT_PROJECT(projectId), body, { ...config })
}
