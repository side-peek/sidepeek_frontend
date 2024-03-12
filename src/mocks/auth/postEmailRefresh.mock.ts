import { postEmailRefreshResponseType } from "api-models"
import { rest } from "msw"

import { ENDPOINTS } from "@constants/endPoints"

export const postEmailRefresh = rest.post(
  ENDPOINTS.EMAIL_REFRESH,
  (_, res, ctx) => {
    const response: postEmailRefreshResponseType = {
      accessToken: "mock-accessToken",
      refreshToken: "mock-refreshToken",
      user: {
        id: 0,
        nickname: "admin",
        profileImageUrl: null,
      },
    }
    return res(ctx.status(200), ctx.json(response))
  },
)
