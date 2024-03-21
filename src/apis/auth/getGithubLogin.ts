import { getGithubLoginPayload, getGithubLoginResponseType } from "api-models"

import authToken from "@stores/authToken"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

export const getGithubLogin = async ({
  code,
  state,
}: getGithubLoginPayload) => {
  const { data } = await baseInstance.get<getGithubLoginResponseType>(
    `${ENDPOINTS.GITHUB_LOGIN}`,
    {
      params: {
        code,
        state,
      },
    },
  )

  authToken.setAccessToken(data.accessToken)
  authToken.setRefreshToken(data.refreshToken)

  return data
}
