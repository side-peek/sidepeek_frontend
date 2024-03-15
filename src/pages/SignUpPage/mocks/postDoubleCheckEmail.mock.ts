import { postDoubleCheckEmailPayload } from "api-models"
import { rest } from "msw"

import { ENDPOINTS } from "@constants/endPoints"

export const postDoubleCheckEmail = rest.post(
  ENDPOINTS.EMAIL_DOUBLE_CHECK,
  async (req, res, ctx) => {
    const payload: postDoubleCheckEmailPayload = await req.json()
    const isDuplicated = payload.email === "admin@admin.com"

    return res(ctx.delay(1000), ctx.status(200), ctx.json({ isDuplicated }))
  },
)
