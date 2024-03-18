import { getAllProjectsResponseType, getAllProjectsType } from "api-models"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

/**
 * @brief 전체 프로젝트 목록을 가져옵니다
 */
export const getAllProjects = async ({
  sortOption,
  isReleased,
  lastProjectId,
  lastProject,
  search,
  skill,
}: getAllProjectsType) => {
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
      params: {
        sort: sortOption,
        isReleased,
        pageSize: 10,
        lastProjectId,
        lastOrderCount,
        search,
        skill: skill?.join(","),
      },
    },
  )
  return data
}
