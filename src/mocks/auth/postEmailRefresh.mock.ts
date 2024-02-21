import { postEmailRefreshResponseType } from "api-models"
import { rest } from "msw"

import { ENDPOINTS } from "@constants/endPoints"

//FIXME: 예시 함수입니다. 원하시는데로 변경해서 사용해주세요!
export const postEmailRefresh = rest.post(
  ENDPOINTS.EMAIL_REFRESH,
  (_, res, ctx) => {
    const response: postEmailRefreshResponseType = {
      accessToken: "mock-accessToken",
    }
    return res(ctx.status(200), ctx.json(response))
  },
)
