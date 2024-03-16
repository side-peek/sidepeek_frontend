import { Project, getProjectDetailPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const getProjectDetail = async (
  { projectId }: getProjectDetailPayload,
  config: AxiosRequestConfig = {},
) => {
  const { data } = await authInstance.get<Project>(
    ENDPOINTS.GET_PROJECT_DETAILS(projectId),
    {
      ...config,
    },
  )

  return data
}
