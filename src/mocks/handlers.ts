import { rest } from "msw"

import { searchHandlers } from "@components/Search/mocks"

import allProjectHandlers from "@pages/HomePage/mocks"
import { projectsHandlers, userInfoHandlers } from "@pages/ProfilePage/mocks"
import { projectDetailHandlers } from "@pages/ProjectDetailPage/mocks"
import { postDoubleCheckEmail } from "@pages/SignUpPage/mocks/postDoubleCheckEmail.mock"
import { postDoubleCheckNickname } from "@pages/SignUpPage/mocks/postDoubleCheckNickname.mock"

import { getEmailAuth } from "./auth/getEmailAuth.mock"
import { postEmailLogin } from "./auth/postEmailLogin.mock"
import { postEmailRefresh } from "./auth/postEmailRefresh.mock"

export const handlers = [
  rest.get("/api/v1/skills", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        skills: [
          {
            id: 2,
            name: "spring",
            iconImageUrl: "https://www.iconimageurl.com",
          },
          {
            id: 3,
            name: "swift",
            iconImageUrl: "https://www.iconimageurl.com",
          },
        ],
      }),
    )
  }),
  ...projectDetailHandlers,
  ...searchHandlers,
  ...allProjectHandlers,
  postEmailRefresh,
  postEmailLogin,
  getEmailAuth,
  postDoubleCheckEmail,
  postDoubleCheckNickname,
  ...userInfoHandlers,
  ...projectsHandlers,
]
