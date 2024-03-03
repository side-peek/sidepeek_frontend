import { Suspense } from "react"
import { Outlet, createBrowserRouter } from "react-router-dom"

import { QueryErrorResetBoundary } from "@tanstack/react-query"

import AuthErrorBoundary from "@components/ErrorBoundary/AuthErrorBoundary/AuthErrorBoundary"

import ErrorPage from "@pages/ErrorPage/ErrorPage"
import HomePage from "@pages/HomePage/HomePage"
import LoginPage from "@pages/LoginPage/LoginPage"
import ProfilePage from "@pages/ProfilePage/ProfilePage"
import ProjectDetailPage from "@pages/ProjectDetailPage/ProjectDetailPage"
import ProjectEditPage from "@pages/ProjectEditPage/ProjectEditPage"
import ProjectListPage from "@pages/ProjectListPage/ProjectListPage"
import SignUpPage from "@pages/SignUpPage/SignUpPage"
import TestPage from "@pages/TestPage/TestPage"

import DefaultLayout from "@styles/layouts/DefaultLayout"

export const router = createBrowserRouter([
  {
    element: (
      <QueryErrorResetBoundary>
        {(value) => (
          <AuthErrorBoundary {...value}>
            <Suspense>
              <Outlet />
            </Suspense>
          </AuthErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          {
            path: "/",
            index: true,
            element: <HomePage />,
          },
          {
            path: "/project",
            element: <ProjectListPage />,
          },
          {
            path: "/project/:projectId",
            element: <ProjectDetailPage />,
          },
          {
            path: "/project/:projectId/edit",
            element: <ProjectEditPage />,
          },

          {
            path: "/test",
            element: <TestPage />,
          },
          {
            path: "/profile/:userId",
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
])
