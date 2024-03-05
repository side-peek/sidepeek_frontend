import { getAllProjectsResponseType } from "api-models"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

/**
 * @brief 전체 프로젝트 목록을 가져옵니다
 */
export const getAllProjects = async (
  userId: number,
  sort: string,
  status: string,
) => {
  const { data } = await baseInstance.get<getAllProjectsResponseType>(
    ENDPOINTS.GET_ALL_PROJECTS(userId, sort, status),
  )

  return data
}
