import { getAllProjectsResponseType } from "api-models"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

interface getAllProjectsQueryString {
  sort: "createdAt" | "like" | "view"
  isReleased: boolean
  pageSize: number
  lastProjectId: number | null
  lastProjectNum: number | null
}

/**
 * @brief 전체 프로젝트 목록을 가져옵니다
 */
export const getAllProjects = async ({
  sort,
  isReleased,
  pageSize,
  lastProjectId = null,
  lastProjectNum = null,
}: getAllProjectsQueryString) => {
  const { data } = await baseInstance.get<getAllProjectsResponseType>(
    ENDPOINTS.GET_ALL_PROJECTS,
    {
      params: {
        sort,
        isReleased,
        pageSize,
        lastProjectId,
        lastProjectNum,
      },
    },
  )
  return data
}
