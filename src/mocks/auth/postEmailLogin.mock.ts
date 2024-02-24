import { postEmailLoginResponseType } from "api-models"
import { rest } from "msw"

import { ENDPOINTS } from "@constants/endPoints"

//FIXME: 예시 함수입니다. 원하시는데로 변경해서 사용해주세요!
export const postEmailLogin = rest.post(
  ENDPOINTS.EMAIL_LOGIN,
  (_, res, ctx) => {
    const response: postEmailLoginResponseType = {
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
