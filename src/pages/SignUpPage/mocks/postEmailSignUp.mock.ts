import { rest } from "msw"

import { ENDPOINTS } from "@constants/endPoints"

export const postEmailSignUp = rest.post(
  ENDPOINTS.EMAIL_SIGNUP,
  async (_, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200))
  },
)
