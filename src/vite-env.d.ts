/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH_JWT_TOKEN_STORAGE_KEY: string
  readonly VITE_REFRESH_JWT_TOKEN_STORAGE_KEY: string
  readonly VITE_BASE_URL: string
}
