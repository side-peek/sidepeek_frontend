import React from "react"
import { createBrowserRouter, useRouteError } from "react-router-dom"

import DefaultLayout from "@/routes/layouts/DefaultLayout"

import { determineRedirectLoader } from "./loaders/determineRedirectLoader"

const HomePage = React.lazy(() => import("@/pages/HomePage/HomePage"))
const ErrorPage = React.lazy(() => import("@/pages/ErrorPage/ErrorPage"))
const LoginPage = React.lazy(() => import("@/pages/LoginPage/LoginPage"))
const NicknameSetupPage = React.lazy(
  () => import("@/pages/NicknameSetupPage/NicknameSetupPage"),
)
const ProfileEditPage = React.lazy(
  () => import("@/pages/ProfileEditPage/ProfileEditPage"),
)
const ProfilePage = React.lazy(() => import("@/pages/ProfilePage/ProfilePage"))
const ProjectDetailPage = React.lazy(
  () => import("@/pages/ProjectDetailPage/ProjectDetailPage"),
)
const ProjectEditPage = React.lazy(
  () => import("@/pages/ProjectEditPage/ProjectEditPage"),
)
const ProjectListPage = React.lazy(
  () => import("@/pages/ProjectListPage/ProjectListPage"),
)
const SignUpPage = React.lazy(() => import("@/pages/SignUpPage/SignUpPage"))

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    ErrorBoundary: () => {
      throw useRouteError()
    },
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "/project",
        children: [
          { index: true, element: <ProjectListPage /> },
          { path: ":projectId", element: <ProjectDetailPage /> },
          { path: "edit", element: <ProjectEditPage /> },
        ],
      },
      {
        path: "/profile",
        children: [
          { path: ":userId", element: <ProfilePage /> },
          { path: "edit", element: <ProfileEditPage /> },
        ],
      },
    ],
  },
  {
    path: "/login",
    loader: determineRedirectLoader(false),
    children: [
      { index: true, element: <LoginPage /> },
      { path: "validation", element: <NicknameSetupPage /> },
    ],
  },
  {
    path: "/signup",
    loader: determineRedirectLoader(false),
    element: <SignUpPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])
