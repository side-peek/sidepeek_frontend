import { isAxiosError } from "axios"

export const isAxios401Error = (error: unknown) => {
  return isAxiosError(error) && error.response?.status === 401
}
