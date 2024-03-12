import { rest } from "msw"

import { mockData, mockDataReleased, mockDataSortView } from "./mockData"

const allProjectHandlers = [
  rest.get(
    "http://3.39.156.144:8080/api/v1/projects?isReleased=true",
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockDataReleased))
    },
  ),
  rest.get(
    "http://3.39.156.144:8080/api/v1/projects?sort=view",
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockDataSortView))
    },
  ),
  rest.get("http://3.39.156.144:8080/api/v1/projects", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData))
  }),
]

export default allProjectHandlers
