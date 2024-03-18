const { VITE_AUTH_JWT_TOKEN_STORAGE_KEY, VITE_REFRESH_JWT_TOKEN_STORAGE_KEY } =
  import.meta.env

class AuthToken {
  private accessToken: string
  private refreshToken: string
  private ACCESS_KEY: string
  private REFRESH_KEY: string

  constructor() {
    this.accessToken =
      localStorage.getItem(VITE_AUTH_JWT_TOKEN_STORAGE_KEY) ?? ""
    this.refreshToken =
      localStorage.getItem(VITE_REFRESH_JWT_TOKEN_STORAGE_KEY) ?? ""
    this.ACCESS_KEY = VITE_AUTH_JWT_TOKEN_STORAGE_KEY
    this.REFRESH_KEY = VITE_REFRESH_JWT_TOKEN_STORAGE_KEY
  }

  setAccessToken(newToken: string) {
    try {
      const stringifiedData = JSON.stringify(newToken)
      localStorage.setItem(this.ACCESS_KEY, stringifiedData)
      this.accessToken = newToken
    } catch (e) {
      this.accessToken = ""
    }
  }

  setRefreshToken(newToken: string) {
    try {
      const stringifiedData = JSON.stringify(newToken)
      localStorage.setItem(this.REFRESH_KEY, stringifiedData)
      this.refreshToken = newToken
    } catch (e) {
      this.refreshToken = ""
    }
  }

  getAccessToken() {
    try {
      const res = localStorage.getItem(this.ACCESS_KEY)
      if (!res) {
        return this.accessToken
      }
      this.accessToken = JSON.parse(res)
      return this.accessToken
    } catch (e) {
      return this.accessToken
    }
  }

  getRefreshToken() {
    try {
      const res = localStorage.getItem(this.REFRESH_KEY)
      if (!res) {
        return this.refreshToken
      }
      this.refreshToken = JSON.parse(res)
      return this.refreshToken
    } catch (e) {
      return this.refreshToken
    }
  }

  removeAccessToken() {
    localStorage.removeItem(this.ACCESS_KEY)
  }

  removeRefreshToken() {
    localStorage.removeItem(this.REFRESH_KEY)
  }
}

const authToken = new AuthToken()

export default authToken
