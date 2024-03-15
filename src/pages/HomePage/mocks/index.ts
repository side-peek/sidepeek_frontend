import { rest } from "msw"

import {
  mockBanner,
  mockData,
  mockDataReleased,
  mockDataSortView,
} from "./mockData"

export const allProjectHandlers = [
  rest.get(
    "http://3.39.156.144:8080/api/v1/projects",

    (req, res, ctx) => {
      const { isReleased, sort } = req.params

      if (!isReleased) {
        return res(ctx.status(200), ctx.json(mockDataReleased))
      }
      if (sort === "view") {
        return res(ctx.status(200), ctx.json(mockDataSortView))
      }

      return res(ctx.status(200), ctx.json(mockData))
    },
  ),
]

export const bannerProjectHandlers = [
  rest.get("http://3.39.156.144:8080/api/v1/projects/weekly", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockBanner))
  }),
]
