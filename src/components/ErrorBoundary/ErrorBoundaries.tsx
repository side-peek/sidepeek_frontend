import { PropsWithChildren } from "react"

import { QueryErrorResetBoundary } from "@tanstack/react-query"

import useLogout from "@hooks/useLogout"

import AuthErrorBoundary from "./AuthErrorBoundary/AuthErrorBoundary"

const ErrorBoundaries = ({ children }: PropsWithChildren) => {
  const logout = useLogout()
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <AuthErrorBoundary
          logout={logout}
          reset={reset}>
          {children}
        </AuthErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default ErrorBoundaries
