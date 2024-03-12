import { postEmailLoginResponseType } from "api-models"
import { rest } from "msw"

import { ENDPOINTS } from "@constants/endPoints"

export const postEmailLogin = rest.post(
  ENDPOINTS.EMAIL_LOGIN,
  (_, res, ctx) => {
    const response: postEmailLoginResponseType = {
      accessToken: "mock-accessToken",
      refreshToken: "mock-refreshToken",
      user: {
        id: 0,
        nickname: "admin",
        profileImageUrl: "https://picsum.photos/200/300",
        isSocialLogin: false,
      },
    }
    return res(ctx.status(200), ctx.json(response))
  },
)
