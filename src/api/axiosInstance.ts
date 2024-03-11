import axios, { AxiosError, isAxiosError } from "axios"

import authToken from "@stores/authToken"

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

    if (!refreshToken) {
      throw new AxiosError("Login Required")
    }

    if (!accessToken) {
      const currentAccessToken = await postEmailRefresh({ refreshToken })
      authToken.setAccessToken(currentAccessToken)
      config.headers.Authorization = `Bearer ${currentAccessToken}`
    }

    config.headers.Authorization = `Bearer ${accessToken}`

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
    if (isAxiosError(error) && error.status === 401) {
      const refreshToken = authToken.getRefreshToken()

      try {
        const currentAccessToken = await postEmailRefresh({ refreshToken })
        authToken.setAccessToken(currentAccessToken)
        originalRequest.headers.Authorization = `Bearer ${currentAccessToken}`

        // 재발급된 엑세스 토큰으로 재요청
        return baseInstance(originalRequest)
      } catch (refreshError) {
        /*FIXME:
        1. 🟨 로그아웃 api 요청
        2. 🟨 react-query의 유저 정보 캐싱 초기화
        3. ✅ accessToken, refreshToken 초기화 */
        authToken.removeAccessToken()
        authToken.removeRefreshToken()
        if (import.meta.env.DEV) {
          console.error()
        }
        throw new Error("권한이 없습니다. 로그인 해주세요.")
      }
    }
    return Promise.reject(error)
  },
)
