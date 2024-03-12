import { postEmailAuthResponseType } from "api-models"
import { rest } from "msw"

import { ENDPOINTS } from "@constants/endPoints"

export const postEmailAuth = rest.post(ENDPOINTS.EMAIL_AUTH, (_, res, ctx) => {
  const response: postEmailAuthResponseType = {
    id: 1,
    nickname: "admin",
    profileImageUrl: null,
  }
  return res(ctx.delay(1000), ctx.status(200), ctx.json(response))
})
