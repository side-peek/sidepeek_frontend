import { rest } from "msw"

import { mockData } from "./mockData"

const projectHandlers = [
  rest.get("/api/v1/projects", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData))
  }),
]

export default projectHandlers
