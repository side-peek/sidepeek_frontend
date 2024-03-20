import { PropsWithChildren } from "react"

import { QueryErrorResetBoundary } from "@tanstack/react-query"

import useLogout from "@hooks/useLogout"

import AuthErrorBoundary from "./AuthErrorBoundary/AuthErrorBoundary"
import UncaughtErrorBoundary from "./UncaughtErrorBoundary/UncaughtErrorBoundary"

const ErrorBoundaries = ({ children }: PropsWithChildren) => {
  const logout = useLogout()
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <UncaughtErrorBoundary reset={reset}>
          <AuthErrorBoundary
            logout={logout}
            reset={reset}>
            {children}
          </AuthErrorBoundary>
        </UncaughtErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default ErrorBoundaries
