import { getAllProjectsResponseType, getAllProjectsType } from "api-models"
import { AxiosRequestConfig } from "axios"

import authToken from "@stores/authToken"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

interface paramsType {
  sort: "createdAt" | "like" | "view"
  isReleased: boolean
  pageSize: number
  lastProjectId?: number
  lastOrderCount?: number
  search?: string
  skill?: string
}

/**
 * @brief 전체 프로젝트 목록을 가져옵니다
 */
export const getAllProjects = async (
  {
    sortOption,
    isReleased,
    lastProjectId,
    lastOrderCount,
    search,
    skill,
  }: getAllProjectsType,
  config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${authToken.getAccessToken()}`,
    },
  },
) => {
  //console.log(lastOrderCount, lastProjectId)
  const params: paramsType = {
    sort: sortOption,
    isReleased,
    pageSize: 24,
  }

  if (skill) {
    params.skill = skill
  }

  if (search) {
    params.search = search
  }

  if (lastProjectId && !lastOrderCount && sortOption === "createdAt") {
    params.lastProjectId = lastProjectId
  }

  if (sortOption !== "createdAt" && lastOrderCount && lastProjectId) {
    params.lastOrderCount = lastOrderCount
    params.lastProjectId = lastProjectId
  }

  if (!isReleased) {
    params.isReleased = isReleased
  }

  //console.log(lastProjectId, lastOrderCount)
  const { data } = await baseInstance.get<getAllProjectsResponseType>(
    ENDPOINTS.GET_ALL_PROJECTS,
    {
      ...config,
      params,
    },
  )
  return data
}
