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
        // 바뀐 데이터랑 타입 충돌이 나서 넣어뒀습니다!
        isSocialLogin: false,
      },
    }
    return res(ctx.status(200), ctx.json(response))
  },
)
