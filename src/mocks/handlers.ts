import { searchHandlers } from "@components/Search/mocks"

import allProjectHandlers from "@pages/HomePage/mocks"
import { projectsHandlers, userInfoHandlers } from "@pages/ProfilePage/mocks"
import { projectDetailHandlers } from "@pages/ProjectDetailPage/mocks"

import { postEmailAuth } from "./auth/postEmailAuth.mock"
import { postEmailLogin } from "./auth/postEmailLogin.mock"
import { postEmailRefresh } from "./auth/postEmailRefresh.mock"

export const handlers = [
  ...projectDetailHandlers,
  ...searchHandlers,
  ...allProjectHandlers,
  postEmailRefresh,
  postEmailLogin,
  postEmailAuth,
  ...userInfoHandlers,
  ...projectsHandlers,
]
