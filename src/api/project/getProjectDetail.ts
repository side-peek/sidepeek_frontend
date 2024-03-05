import { Project, getProjectDetailPayload } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const getProjectDetail = async (
  { projectId }: getProjectDetailPayload,
  config: AxiosRequestConfig = {},
) => {
  const { data } = await baseInstance.get<Project>(
    ENDPOINTS.GET_PROJECT_DETAILS(projectId),
    {
      ...config,
    },
  )
  console.log(data)

  return data
}
