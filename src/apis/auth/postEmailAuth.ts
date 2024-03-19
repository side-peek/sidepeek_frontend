import { postEmailAuthResponseType } from "api-models"

import { ENDPOINTS } from "@constants/endPoints"

import { authInstance } from "../axiosInstance"

export const postEmailAuth = async () => {
  const { data } = await authInstance.post<postEmailAuthResponseType>(
    ENDPOINTS.EMAIL_AUTH,
  )

  return data
}
