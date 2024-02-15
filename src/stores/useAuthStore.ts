import { User } from "api-models"
import { create } from "zustand"

import { AUTH_USER_INITIAL_USER_DATA } from "@/constants/user"

import authToken from "./authToken"

interface AuthUserStore {
  user: User
  setLogin: (user: User, token: string) => void
  setLogout: () => void
  updateUser: (user: User) => void
}

const useAuthStore = create<AuthUserStore>()((set) => ({
  user: AUTH_USER_INITIAL_USER_DATA,

  setLogin: (user, token) => {
    authToken.setToken(token)
    set(() => ({
      user: user,
    }))
  },

  setLogout: () => {
    authToken.removeToken()
    set(() => ({
      user: AUTH_USER_INITIAL_USER_DATA,
    }))
  },

  updateUser: (user: User) => {
    console.log(user)
    set(() => ({
      user: user,
    }))
  },
}))

export default useAuthStore
