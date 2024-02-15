import { create } from "zustand"
import { persist } from "zustand/middleware"

import authToken from "./authToken"

const PERSIST_STORAGE_KEY = "useAuthStoreKey"

interface User {}
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
      user: "",

      setLogin: (user, token) => {
        authToken.setToken(token)
        set(() => ({
          isLoggedIn: true,
          user: user,
        }))
      },

      setLogout: () => {},
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
