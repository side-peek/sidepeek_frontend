import axios from "axios"

import authToken from "@stores/authToken"

import { isAuthError } from "@utils/isAuthError"
import { isAxios401Error } from "@utils/isAxios401Error"

import { LogoutError, PermissionError } from "@constants/customError"

import { postEmailRefresh } from "./auth/postEmailRefresh"

const { VITE_BASE_URL } = import.meta.env

export const baseInstance = axios.create({ baseURL: VITE_BASE_URL })

export const authInstance = axios.create({
  baseURL: VITE_BASE_URL,
})

authInstance.interceptors.request.use(
  async (config) => {
    const accessToken = authToken.getAccessToken()
    const refreshToken = authToken.getRefreshToken()

    config.headers.Authorization = `Bearer ${accessToken}`

    if (!refreshToken) {
      return Promise.reject(new PermissionError())
    }

    if (!accessToken) {
      try {
        const data = await postEmailRefresh({ refreshToken })
        authToken.setAccessToken(data.accessToken)
        authToken.setRefreshToken(data.refreshToken)
        config.headers.Authorization = `Bearer ${data.accessToken}`
      } catch (refreshError) {
        if (isAxios401Error(refreshError)) {
          return Promise.reject(new LogoutError())
        }

        return Promise.reject(refreshError)
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

    if (isAuthError(error)) {
      return Promise.reject(error)
    }

    if (isAxios401Error(error)) {
      if (originalRequest && !originalRequest?._retry) {
        originalRequest._retry = true
      } else {
        return Promise.reject(new PermissionError())
      }

      const refreshToken = authToken.getRefreshToken()

      try {
        const data = await postEmailRefresh({ refreshToken })
        authToken.setAccessToken(data.accessToken)
        authToken.setRefreshToken(data.refreshToken)
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`

        return authInstance(originalRequest)
      } catch (refreshError) {
        if (isAxios401Error(refreshError)) {
          return Promise.reject(new LogoutError())
        }

        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)
