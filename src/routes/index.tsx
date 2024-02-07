import HomePage from "@pages/HomePage/HomePage"
import ProjectListPage from "@pages/ProjectListPage/ProjectListPage"
import ProjectEditPage from "@pages/ProjectEditPage/ProjectEditPage"
import SignUpPage from "@pages/SignUpPage/SignUpPage"
import ProfilePage from "@pages/ProfilePage/ProfilePage"
import LoginPage from "@pages/LoginPage/LoginPage"
import ProjectDetailPage from "@pages/ProjectDetailPage/ProjectDetailPage"
import { createBrowserRouter, Outlet } from "react-router-dom"
import ErrorPage from "@pages/ErrorPage/ErrorPage"
import App from "App"

export const router = createBrowserRouter([
  {
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            {/* <Header /> */}
            <Outlet />
          </>
        ),
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
            path: "/project/:projectId/edit",
            element: <ProjectEditPage />,
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
