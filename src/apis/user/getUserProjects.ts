import { getUserProjectsPayload } from "api-models"

import { authInstance } from "@apis/axiosInstance"

import { ENDPOINTS } from "@constants/endPoints"

interface PaginationQueryStringProps {
  page: number
  size: number
}

export const getUserProjects = async ({
  userId,
  type,
  page,
  size,
}: getUserProjectsPayload & PaginationQueryStringProps) => {
  // TODO: type이 LIKED, COMMENT일 경우 분기처리(authInstance 사용)

  const { data } = await authInstance.get(
    ENDPOINTS.GET_USER_PROJECTS(userId, type, page, size),
  )
  return data
}
