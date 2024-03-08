import { postDoubleCheckNicknamePayload } from "api-models"
import { rest } from "msw"

import { ENDPOINTS } from "@constants/endPoints"

export const postDoubleCheckNickname = rest.post(
  ENDPOINTS.NICKNAME_DOUBLE_CHECK,
  async (req, res, ctx) => {
    const payload: postDoubleCheckNicknamePayload = await req.json()
    const isDuplicated = payload.nickname === "sidepeek"
    return res(ctx.status(isDuplicated ? 400 : 200))
  },
)
