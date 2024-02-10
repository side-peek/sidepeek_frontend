import { Outlet, createBrowserRouter } from 'react-router-dom'

import App from '@/App'

import ErrorPage from '@pages/ErrorPage/ErrorPage'
import HomePage from '@pages/HomePage/HomePage'
import LoginPage from '@pages/LoginPage/LoginPage'
import ProfilePage from '@pages/ProfilePage/ProfilePage'
import ProjectDetailPage from '@pages/ProjectDetailPage/ProjectDetailPage'
import ProjectEditPage from '@pages/ProjectEditPage/ProjectEditPage'
import ProjectListPage from '@pages/ProjectListPage/ProjectListPage'
import SignUpPage from '@pages/SignUpPage/SignUpPage'

export const router = createBrowserRouter([
  {
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
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
            path: '/project',
            element: <ProjectListPage />,
          },
          {
            path: '/project/:projectId',
            element: <ProjectDetailPage />,
          },
          {
            path: '/project/:projectId/edit',
            element: <ProjectEditPage />,
          },
          {
            path: '/profile/:userId',
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
    ],
  },
])
