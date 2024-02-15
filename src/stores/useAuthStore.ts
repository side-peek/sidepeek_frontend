import { User } from "api-models"
import { create } from "zustand"
import { persist } from "zustand/middleware"

import { AUTH_USER_INITIAL_USER_DATA } from "@/constants/user"

import authToken from "./authToken"

const PERSIST_STORAGE_KEY = "useAuthStoreKey"

interface AuthUserStore {
  isLoggedIn: boolean
  user: User

  setLogin: (user: User, token: string) => void
  setLogout: () => void
}

const useAuthStore = create<AuthUserStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: AUTH_USER_INITIAL_USER_DATA,

      setLogin: (user, token) => {
        authToken.setToken(token)
        set(() => ({
          isLoggedIn: true,
          user: user,
        }))
      },

      setLogout: () => {
        authToken.removeToken()
        set(() => ({
          isLoggedIn: false,
          user: AUTH_USER_INITIAL_USER_DATA,
        }))
      },
    }),
    {
      name: PERSIST_STORAGE_KEY,
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
      }),
    },
  ),
)

export default useAuthStore
