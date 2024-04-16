import { postGithubLoginPayload, postGithubLoginResponseType } from "api-models"

import authToken from "@stores/authToken"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const postGithubLogin = async ({ code }: postGithubLoginPayload) => {
  const { data } = await baseInstance.post<postGithubLoginResponseType>(
    `${ENDPOINTS.GITHUB_LOGIN}?code=${code}`,
  )

  authToken.setAccessToken(data.accessToken)
  authToken.setRefreshToken(data.refreshToken)

  return data
}
