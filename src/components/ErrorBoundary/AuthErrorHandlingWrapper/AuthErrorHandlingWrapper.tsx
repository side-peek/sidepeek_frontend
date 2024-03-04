import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import { QueryErrorResetBoundary } from "@tanstack/react-query"

import AuthErrorBoundary from "../AuthErrorBoundary/AuthErrorBoundary"

const AuthErrorHandlingWrapper = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <AuthErrorBoundary reset={reset}>
          <Suspense>
            <Outlet />
          </Suspense>
        </AuthErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default AuthErrorHandlingWrapper
