import { searchHandlers } from "@components/Search/mocks"

import allProjectHandlers from "@pages/HomePage/mocks"
import { projectsHandlers, userInfoHandlers } from "@pages/ProfilePage/mocks"
import { projectDetailHandlers } from "@pages/ProjectDetailPage/mocks"
import { postDoubleCheckEmail } from "@pages/SignUpPage/mocks/postDoubleCheckEmail.mock"
import { postDoubleCheckNickname } from "@pages/SignUpPage/mocks/postDoubleCheckNickname.mock"
import { postEmailSignUp } from "@pages/SignUpPage/mocks/postEmailSignUp.mock"

import { postEmailAuth } from "./auth/postEmailAuth.mock"
import { postEmailLogin } from "./auth/postEmailLogin.mock"
import { postEmailRefresh } from "./auth/postEmailRefresh.mock"

export const handlers = [
  ...projectDetailHandlers,
  ...searchHandlers,
  ...allProjectHandlers,
  postEmailRefresh,
  postEmailLogin,
  postDoubleCheckEmail,
  postDoubleCheckNickname,
  postEmailAuth,
  ...userInfoHandlers,
  ...projectsHandlers,
  postEmailSignUp,
]
