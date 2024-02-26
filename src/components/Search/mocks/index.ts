import { rest } from "msw"

import { DUMMY_SKILLS } from "./mockData"

export const searchHandlers = [
  rest.get("/api/v1/skills", (req, res, ctx) => {
    const keyword = req.url.searchParams.get("keyword")
    if (!keyword) {
      return res(ctx.status(200), ctx.json(DUMMY_SKILLS))
    }
    if (keyword.length >= 21) {
      return res(
        ctx.status(400),
        ctx.json({
          message: "최대 20자의 키워드로 검색할 수 있습니다",
        }),
      )
    }
    return res(ctx.status(200), ctx.json(DUMMY_SKILLS))
  }),
]
