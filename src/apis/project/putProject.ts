import { Project, putProjectPayload } from "api-models"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const putProject = async (
  projectId: number,
  body: putProjectPayload,
): Promise<Project> => {
  const { data } = await authInstance.put(
    ENDPOINTS.PUT_PROJECT(projectId),
    body,
  )
  return data
}
