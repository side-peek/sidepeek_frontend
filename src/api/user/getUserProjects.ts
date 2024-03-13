import { baseInstance } from "@api/axiosInstance"
import { getUserProjectsPayload } from "api-models"

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
  const { data } = await baseInstance.get(
    ENDPOINTS.GET_USER_PROJECTS(userId, type, page, size),
  )

  return data
}
