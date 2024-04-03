import { createBrowserRouter } from "react-router-dom"

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

import { determineRedirectLoader } from "./loaders/determineRedirectLoader"

export const router = createBrowserRouter([
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
      {
        path: "/login",
        loader: determineRedirectLoader(false),
        children: [
          { index: true, element: <LoginPage /> },
          { path: ":validation", element: <NicknameSetupPage /> },
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
    ],
  },
])
