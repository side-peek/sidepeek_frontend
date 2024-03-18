import { getAllProjectsResponseType, getAllProjectsType } from "api-models"
import { AxiosRequestConfig } from "axios"

import authToken from "@stores/authToken"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

/**
 * @brief 전체 프로젝트 목록을 가져옵니다
 */
export const getAllProjects = async (
  { sortOption, isReleased, lastProjectId, lastProject }: getAllProjectsType,
  config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${authToken.getAccessToken()}`,
    },
  },
) => {
  let lastOrderCount
  if (sortOption !== "createdAt") {
    lastOrderCount =
      sortOption === "like"
        ? lastProject?.likeCount
        : sortOption === "view"
          ? lastProject?.viewCount
          : null
  }

  const { data } = await baseInstance.get<getAllProjectsResponseType>(
    ENDPOINTS.GET_ALL_PROJECTS,
    {
      ...config,
      params: {
        sort: sortOption,
        isReleased,
        pageSize: 10,
        lastProjectId,
        lastOrderCount,
      },
    },
  )
  return data
}
