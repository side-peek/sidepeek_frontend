import { rest } from "msw"

import { DUMMY_PROJECT_DETAIL } from "./mockData"

export const projectDetailHandlers = [
  rest.get("/api/v1/projects/:projectId", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(DUMMY_PROJECT_DETAIL))
  }),
]
