import { rest } from "msw"

import { DUMMY_PROJECT_DETAIL } from "./mockData"

export const ProjectDetailHandlers = [
  rest.get("/a", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        DUMMY_PROJECT_DETAIL,
      }),
    )
  }),
]
