import { createBrowserRouter } from "react-router-dom"

import type { QueryClient } from "@tanstack/react-query"

import DefaultLayout from "@/routes/layouts/DefaultLayout"

import ErrorPage from "@pages/ErrorPage/ErrorPage"
import HomePage from "@pages/HomePage/HomePage"
import LoginPage from "@pages/LoginPage/LoginPage"
import NicknameSetupPage from "@pages/NicknameSetupPage/NicknameSetupPage"
import ProfileEditPage from "@pages/ProfileEditPage/ProfileEditPage"
import ProfilePage from "@pages/ProfilePage/ProfilePage"
import ProjectDetailPage from "@pages/ProjectDetailPage/ProjectDetailPage"
import ProjectEditPage from "@pages/ProjectEditPage/ProjectEditPage"
import ProjectListPage from "@pages/ProjectListPage/ProjectListPage"
import SignUpPage from "@pages/SignUpPage/SignUpPage"

import RootLayout from "./layouts/RootLayout"
import { determineRedirectLoader } from "./loaders/determineRedirectLoader"

export const router = (queryClient: QueryClient) => {
  return createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <DefaultLayout />,
          children: [
            {
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
              path: "/project/edit",
              element: <ProjectEditPage />,
            },
            {
              path: "/profile/:userId",
              element: <ProfilePage />,
            },
            { path: "/profile/edit", element: <ProfileEditPage /> },
          ],
        },
        {
          path: "/login",
          loader: determineRedirectLoader(queryClient, false),
          children: [
            {
              index: true,
              element: <LoginPage />,
            },
            {
              path: "/login/validation",
              element: <NicknameSetupPage />,
            },
          ],
        },
        {
          path: "/signup",
          loader: determineRedirectLoader(queryClient, false),
          element: <SignUpPage />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ])
}
