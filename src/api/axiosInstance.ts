import axios, { isAxiosError } from "axios"

import authToken from "@stores/authToken"

import { LogoutError, PermissionError } from "@constants/customError"

import { postEmailRefresh } from "./auth/postEmailRefresh"

const { VITE_BASE_URL } = import.meta.env

export const baseInstance = axios.create({ baseURL: VITE_BASE_URL })

export const authInstance = axios.create({
  baseURL: VITE_BASE_URL,
})

//TODO: 소셜 로그인 로직 추가 예정
authInstance.interceptors.request.use(
  async (config) => {
    const accessToken = authToken.getAccessToken()
    const refreshToken = authToken.getRefreshToken()

    config.headers.Authorization = `Bearer ${accessToken}`

    if (!refreshToken) {
      const permission = new PermissionError()

      if (import.meta.env.DEV) console.error(permission)

      throw permission
    }

    if (!accessToken) {
      try {
        const data = await postEmailRefresh({ refreshToken })
        authToken.setAccessToken(data.accessToken)
        authToken.setRefreshToken(data.refreshToken)
        config.headers.Authorization = `Bearer ${data.accessToken}`
      } catch (refreshError) {
        if (
          isAxiosError(refreshError) &&
          refreshError.response?.status === 401
        ) {
          const logout = new LogoutError()

          if (import.meta.env.DEV) console.error(logout)

          throw logout
        }

        throw refreshError
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

authInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (isAxiosError(error) && error.response?.status === 401) {
      const refreshToken = authToken.getRefreshToken()

      try {
        const data = await postEmailRefresh({ refreshToken })
        authToken.setAccessToken(data.accessToken)
        authToken.setRefreshToken(data.refreshToken)
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`

        // 재발급된 엑세스 토큰으로 재요청
        return baseInstance(originalRequest)
      } catch (refreshError) {
        /*FIXME:
        1. 🟨 로그아웃 api 요청
        2. 🟨 react-query의 유저 정보 캐싱 초기화
        3. ✅ accessToken, refreshToken 초기화 */
        if (
          isAxiosError(refreshError) &&
          refreshError.response?.status === 401
        ) {
          authToken.removeAccessToken()
          authToken.removeRefreshToken()

          if (import.meta.env.DEV) {
            console.error("로그아웃 처리됩니다.")
          }

          const logout = new LogoutError()

          throw logout
        }

        throw refreshError
      }
    }
    return Promise.reject(error)
  },
)
