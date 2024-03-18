import { BannerProject } from "api-models"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

/**
 * @brief 배너에 올라갈 프로젝트 목록을 가져옵니다
 */
export const getBannerProjects = async () => {
  const { data } = await baseInstance.get<BannerProject[]>(
    ENDPOINTS.GET_BANNER_PROJECTS,
  )
  return data
}
