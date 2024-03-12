import { LogoutError, PermissionError } from "@constants/customError"

export const isAuthError = (error: Error) => {
  return error instanceof LogoutError || error instanceof PermissionError
}
