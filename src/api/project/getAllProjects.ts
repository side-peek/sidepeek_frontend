import { getAllProjectsResponseType } from "api-models"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

interface getAllProjectsQueryString {
  sort: string
  isReleased: boolean
  offset: number
  limit: number
}

/**
 * @brief 전체 프로젝트 목록을 가져옵니다
 */
export const getAllProjects = async ({
  sort,
  isReleased,
  offset,
  limit,
}: getAllProjectsQueryString) => {
  console.log(offset, limit)
  const { data } = await baseInstance.get<getAllProjectsResponseType>(
    ENDPOINTS.GET_ALL_PROJECTS(sort, isReleased),
  )

  return data
}
