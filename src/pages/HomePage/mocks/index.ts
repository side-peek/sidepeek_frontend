import { rest } from "msw"

import { mockData } from "./mockData"

const allProjectHandlers = [
  rest.get("http://3.39.156.144:8080/api/v1/projects", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData))
  }),
]

export default allProjectHandlers
