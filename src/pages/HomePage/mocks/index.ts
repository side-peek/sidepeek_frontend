import { rest } from "msw"

import { ENDPOINTS } from "@constants/endPoints"

import { mockData } from "./mockData"

const allProjectHandlers = [
  rest.get(ENDPOINTS.GET_ALL_PROJECTS, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData))
  }),
]

export default allProjectHandlers
