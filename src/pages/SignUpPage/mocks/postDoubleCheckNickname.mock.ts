import { postDoubleCheckNicknamePayload } from "api-models"
import { rest } from "msw"

import { ENDPOINTS } from "@constants/endPoints"

export const postDoubleCheckNickname = rest.post(
  ENDPOINTS.NICKNAME_DOUBLE_CHECK,
  async (req, res, ctx) => {
    const payload: postDoubleCheckNicknamePayload = await req.json()
    const isDuplicated = payload.nickname === "admin"

    return res(ctx.delay(1000), ctx.status(200), ctx.json({ isDuplicated }))
  },
)
