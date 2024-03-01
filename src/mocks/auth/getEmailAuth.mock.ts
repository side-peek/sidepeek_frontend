import { getEmailAuthResponseType } from "api-models"
import { rest } from "msw"

import { ENDPOINTS } from "@constants/endPoints"

export const getEmailAuth = rest.get(ENDPOINTS.EMAIL_AUTH, (_, res, ctx) => {
  const response: getEmailAuthResponseType = {
    id: 1,
    nickname: "admin",
    profileImageUrl: null,
  }
  return res(ctx.delay(1000), ctx.status(200), ctx.json(response))
})
