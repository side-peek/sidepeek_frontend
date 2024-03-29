import { postEmailAuthResponseType } from "api-models"
import { rest } from "msw"

import { ENDPOINTS } from "@constants/endPoints"

export const postEmailAuth = rest.post(ENDPOINTS.EMAIL_AUTH, (_, res, ctx) => {
  const response: postEmailAuthResponseType = {
    id: 1,
    nickname: "admin",
    profileImageUrl: null,
    isSocialLogin: false,
  }
  return res(ctx.status(200), ctx.json(response))
})
