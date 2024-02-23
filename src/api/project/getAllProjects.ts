import { getAllProjectsResponseType } from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const getAllProjects = async (config: AxiosRequestConfig = {}) => {
  const { data } = await baseInstance.get<getAllProjectsResponseType>(
    ENDPOINTS.GET_ALL_PROJECTS,
    { ...config },
  )

  return data
}
