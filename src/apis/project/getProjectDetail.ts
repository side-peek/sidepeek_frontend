import { Project, getProjectDetailPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import authToken from "@stores/authToken"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const getProjectDetail = async (
  { projectId }: getProjectDetailPayload,
  config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${authToken.getAccessToken()}`,
    },
  },
) => {
  const { data } = await baseInstance.get<Project>(
    ENDPOINTS.GET_PROJECT_DETAILS(projectId),
    {
      ...config,
    },
  )

  return data
}
