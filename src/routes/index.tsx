import { createBrowserRouter } from "react-router-dom"

import type { QueryClient } from "@tanstack/react-query"

import Prefetcher from "@components/PreFetcher/Prefetcher"

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

import { determineRedirectLoader } from "./loaders/determineRedirectLoader"

export const router = (queryClient: QueryClient) => {
  return createBrowserRouter([
    {
      Component: Prefetcher,
      children: [
        {
          element: <DefaultLayout />,
          errorElement: <ErrorPage />,
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
          loader: determineRedirectLoader(queryClient, false),
          element: <LoginPage />,
        },
        {
          path: "/signup",
          loader: determineRedirectLoader(queryClient, false),
          element: <SignUpPage />,
        },
      ],
    },
  ])
}
